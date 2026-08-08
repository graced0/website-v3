import type { VercelRequest, VercelResponse } from '@vercel/node';

interface SpotifyTrackResponse {
  isPlaying: boolean;
  title: string;
  artist: string;
  songUrl: string;
}

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID ?? '';
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET ?? '';
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN ?? '';

const BASIC_AUTH = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');

async function getAccessToken(): Promise {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${BASIC_AUTH}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: REFRESH_TOKEN,
    }),
  });

  const data = await response.json();
  return data.access_token;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  try {
    const accessToken = await getAccessToken();

    // 1. Fetch currently playing
    const nowPlaying = await fetch(
      'https://api.spotify.com/v1/me/player/currently-playing',
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );

    if (nowPlaying.status === 200) {
      const data = await nowPlaying.json();
      if (data.item) {
        return res.status(200).json({
          isPlaying: data.is_playing,
          title: data.item.name,
          artist: data.item.artists.map((a: { name: string }) => a.name).join(', '),
          songUrl: data.item.external_urls.spotify,
        });
      }
    }

    // 2. Fallback to recently played
    const recent = await fetch(
      'https://api.spotify.com/v1/me/player/recently-played?limit=1',
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );

    if (recent.status === 200) {
      const data = await recent.json();
      const track = data.items[0]?.track;
      if (track) {
        return res.status(200).json({
          isPlaying: false,
          title: track.name,
          artist: track.artists.map((a: { name: string }) => a.name).join(', '),
          songUrl: track.external_urls.spotify,
        });
      }
    }

    return res.status(200).json({
      isPlaying: false,
      title: 'Nothing playing',
      artist: 'Offline',
      songUrl: '',
    });
  } catch (err) {
    return res.status(500).json({
      isPlaying: false,
      title: 'Error fetching track',
      artist: 'Offline',
      songUrl: '',
    });
  }
}
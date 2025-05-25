import chefwormGif from '../../public/chefworm.gif';
import websitePhoto from '../../public/websiteportfolio.jpeg';


function Software({ nightMode }: { nightMode: boolean }) {
    return (
        <div
            className="SoftwareContainer"
            id="software"
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                textAlign: 'center',
                paddingBottom: '6vh',
                position: 'relative',
            }}
        >
            {/* Center this wrapper */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                width: '100%',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    width: '65%',
                    margin: '1rem auto',
                }}>
                    <div style={{ marginRight: '2rem' }}>
                        <img
                            src={chefwormGif}
                            alt="GIF of Chef Worm project"
                            style={{ width: '300px', borderRadius: '1rem' }}
                        />
                    </div>
                    <div style={{ textAlign: 'left', marginLeft: '1rem' }}>
                        <h2 style={{ fontFamily: 'Lexend', color: nightMode ? '#fff' : '#111' }}>Chef Worm</h2>
                        <p style={{ fontFamily: 'Space Grotesk', color: 'inherit', fontSize: '1.15rem' }}>
                            Developed in Lua for PICO-8. <br /><br />
                            <a href="https://gracedo.itch.io/chef-worm" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ whiteSpace: 'nowrap' }}>https://gracedo.itch.io/chef-worm</a>
                        </p>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    width: '65%',
                    margin: '1rem auto',
                }}>
                    <div style={{ textAlign: 'right', marginRight: '1rem' }}>
                        <h2 style={{ fontFamily: 'Lexend', color: nightMode ? '#fff' : '#111' }}>Website Portfolio</h2>
                        <p style={{ fontFamily: 'Space Grotesk', color: 'inherit', fontSize: '1.15rem' }}>
                            Developed in TypeScript and HTML/CSS,<br />
                            using React, Vite, Bootstrap, and jQuery.<br /><br />
                            <a href="https://gracedo.vercel.app" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ whiteSpace: 'nowrap' }}>https://gracedo.vercel.app</a>
                        </p>
                    </div>
                    <div style={{ marginLeft: '2rem' }}>
                        <img
                            src={websitePhoto}
                            alt="Photo of Me"
                            style={{ width: '300px', borderRadius: '1rem' }}
                        />
                    </div>
                </div>
            </div>
            {/* Footer stays absolutely at the bottom */}
            <h4 className="Footer d-none d-sm-block" style={{
                position: 'absolute',
                bottom: '3vh',
                fontSize: '1.25rem',
                fontFamily: 'Space Grotesk',
                color: '#65578A',
                fontWeight: 300,
            }}>
                <a className="nav-link" href="https://github.com/graced0/website-v3" style={{ fontWeight: '400', fontSize: '1rem' }}>Made by Grace Do.</a>
            </h4>
        </div>
    );
}
export default Software;
import { useEffect } from 'react';

function Art() {
    /*
    TODO:
    Create carousel of visual art. https://stackoverflow.com/questions/23276481/bootstrap-api-carousel-continuous
    Find a way to properly display other media formats of art: poetry, video, sound
    */

    useEffect(() => {
        const script = document.createElement("script");
        script.type = "module";
        script.src = "https://w.behold.so/widget.js";
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script); // Clean up the script on component unmount
        };
    }, []);

    return (
        <div className="ArtContainer" id="art" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            textAlign: 'center',
            position: 'relative',
            padding: '2rem',
        }}>
            <h2 style={{
                fontFamily: 'Lexend, Space Grotesk, Arial, sans-serif',
                fontWeight: 600,
                fontSize: '3rem',
                color: '#555',
                marginBottom: '1rem',
            }}>
            </h2>
            <div data-behold-id="RVf2meM92MKBD1DuIyoi" style={{
                width: '100%',
                height: '100%',
                overflow: 'hidden',
            }}></div>
        </div>
    );
}

export default Art;
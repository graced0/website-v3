import chefwormGif from '../../public/chefworm.gif';
import websitePhoto from '../../public/websiteportfolio.jpeg';


function Software({ nightMode }: { nightMode: boolean }) {
    return (
        <div className="SoftwareContainer" id="software" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: '100vh',
            textAlign: 'center',
            paddingTop: '4rem',
            position: 'relative',
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                width: '65%',
                margin: '1rem auto',
            }}>
                <div style={{marginRight: '2rem'}}>
                    <img 
                        src={chefwormGif}
                        alt="GIF of Chef Worm project" 
                        style={{ width: '300px', borderRadius: '1rem'}} 
                    />
                </div>
                <div style={{ /* flex: 1 removed */ textAlign: 'left', marginLeft: '1rem' }}>
                    <h2 style={{ fontFamily: 'Lexend', color: nightMode ? '#fff' : '#111' }}>Chef Worm</h2>
                    <p style={{ fontFamily: 'Space Grotesk', color: 'inherit', fontSize: '1.15rem' }}>
                        Developed in Lua for PICO-8. <br /><br />
                        <a href="https://gracedo.itch.io/chef-worm" target="_blank" rel="noopener noreferrer" className="nav-link">https://gracedo.itch.io/chef-worm</a>
                    </p>
                </div>
            </div>
            {/* Project 2 */}
             <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
                width: '65%',
                margin: '1rem auto',
            }}>
                <div style={{ /* flex: 1 removed */ textAlign: 'right', marginRight: '1rem' }}>
                    <h2 style={{ fontFamily: 'Lexend', color: nightMode ? '#fff' : '#111' }}>Website Portfolio</h2>
                    <p style={{ fontFamily: 'Space Grotesk', color: 'inherit', fontSize: '1.15rem' }}>
                        Developed in TypeScript and HTML/CSS,<br />
                        using React, Vite, Bootstrap, and jQuery.<br /><br />
                        <a href="https://gracedo.vercel.app" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ whiteSpace: 'nowrap' }}>https://gracedo.vercel.app</a>
                    </p>
                </div>
                <div style={{marginLeft: '2rem'}}>
                    <img 
                        src={websitePhoto}
                        alt="Photo of Me" 
                        style={{ width: '300px', borderRadius: '1rem'}} 
                    />
                </div>
            </div>
            <h4 className="Footer d-none d-sm-block" style={{ 
                position: 'absolute', 
                bottom: '5vh', 
                fontSize: '1.25rem',
                fontFamily: 'Space Grotesk',
                color: '#65578A',
                fontWeight: 300, 
            }}>
                <a className="nav-link" href="https://github.com/graced0/website-v3" style={{fontWeight: '400', fontSize:'1rem'}}>Developed by Grace Do 😻.</a>
            </h4>
            {/* <h4 className="Footer d-block d-sm-none" style={{ 
                position: 'absolute', 
                bottom: '5vh', 
                fontSize: '1.1rem',
                fontFamily: 'Space Grotesk',
                color: '#65578A',
                fontWeight: 300, 
            }}>
                <a className="nav-link" href="https://github.com/graced0/website-v3" style={{fontWeight: '400', fontSize:'0.75rem'}}>Developed by Grace Do 😻.</a>
            </h4> */}
        </div>
    );
}
export default Software;
import { useEffect } from 'react';
function Hero() {
    useEffect(() => {
        setTimeout(() => {
            $('.HeroBlurb').hide().fadeIn(1500);
            $('.SocialLinks').hide().fadeIn(1500);
            $('.HeroTitle').hide().slideDown(2000);
            setTimeout(() => {
                $('.Arrow').animate({
                    bottom: '9vh',
                    easing: 'swing'
                });
                $('.Arrow').animate({
                    bottom: '10vh',
                    easing: 'swing'
                });
                $('.Arrow').animate({
                    bottom: '9vh',
                    easing: 'swing'
                });
                $('.Arrow').animate({
                    bottom: '10vh',
                    easing: 'swing'
                });
            }, 3000);
          }, 50);
        }, []);
    return (
        <div className="HeroContainer" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            textAlign: 'center',
            paddingBottom: '15vh',
            position: 'relative',
            background: 'linear-gradient(to bottom, #B1DDAD, white)',
            boxSizing: 'border-box',
            border: '1.5vw solid white',
            borderRadius: '4vw'
        }}>
            <h1 className="HeroTitle d-none d-sm-block" style={{
                fontFamily: 'Lexend',
                fontWeight: 600,
                fontSize: '6rem',
                color: '#4E3C73',
                marginBottom: '1rem'
            }}>Grace Do</h1>
            <h1 className="HeroTitle d-block d-sm-none" style={{
                fontFamily: 'Lexend',
                fontWeight: 600,
                fontSize: '4rem',
                color: '#4E3C73',
                marginBottom: '1rem'
            }}>Grace Do</h1>
            <h4 className="HeroBlurb d-none d-sm-block" style={{
                fontFamily: 'Space Grotesk',
                color: '#65578A',
                fontWeight: 300,
                fontSize: '1.25rem',
                lineHeight: '1.5',
            }}>I’m a student at the University of Virginia, interested in:<br />
                <a className="nav-link" href="#art" style={{display: 'inline-flex', fontWeight: '500'}}><i>Art</i></a>
                &nbsp;and&nbsp;
                <a className="nav-link" href="#software" style={{display: 'inline-flex', fontWeight: '500'}}><i>Software Development</i></a> 
            </h4>
            <h4 className="HeroBlurb d-block d-sm-none" style={{
                fontFamily: 'Space Grotesk',
                color: '#65578A',
                fontWeight: 300,
                fontSize: '1.1rem',
                lineHeight: '1.5',
                paddingLeft: '5vw',
                paddingRight: '5vw'
            }}>I’m a student at the University of Virginia, interested in:<br />
                <a className="nav-link" href="#art" style={{display: 'inline-flex', fontWeight: '500'}}><i>Art</i></a>
                &nbsp;and&nbsp;
                <a className="nav-link" href="#software" style={{display: 'inline-flex', fontWeight: '500'}}><i>Software Development</i></a> 
            </h4>
            <hr className="d-none d-sm-block"style={{
                margin: '1rem',
                color: '#65578A',
                width: '3%',
                borderTop: '0.1rem solid #65578A'
            }} />
            <hr className="d-block d-sm-none"style={{
                margin: '0.5rem',
                color: '#65578A',
                width: '3%',
                borderTop: '0.1rem solid #65578A'
            }} />
            <div className="SocialLinks d-none d-sm-block">
                <ul style={{
                    display: 'flex',
                    listStyleType: 'none',
                    padding: '1rem',
                    marginBottom: '1rem'
                }}>
                    <li style={{ margin: '0 1rem' }}>
                        <a href="https://www.linkedin.com/in/gracendo/" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" fill="#65578A" className="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                            </svg>
                        </a>
                    </li>
                    <li style={{ margin: '0 1rem' }}>
                        <a href="https://github.com/graced0" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" fill="#65578A" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                            </svg>
                        </a>
                        
                    </li>
                    <li style={{ margin: '0 1rem' }}>
                        <a href="https://open.spotify.com/user/gndo2002?si=a14cd0db73e44e37" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" fill="#65578A" className="bi bi-spotify" viewBox="0 0 16 16">
                                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288"/>
                            </svg>
                        </a>
                    </li>
                </ul>
                <a href="https://drive.google.com/file/d/17g5xl65FdJjj12w7ItHPulBDVk0w1ZNy" target="_blank" rel="noopener noreferrer" style={{color: '#65578A'}}>
                    <h4 style={{fontFamily: 'Space Grotesk', fontSize: '1.3rem'}}>RESUME</h4>
                </a>
            </div>
            <div className="SocialLinks d-block d-sm-none">
                <ul style={{
                    display: 'flex',
                    listStyleType: 'none',
                    padding: '1rem',
                    marginBottom: '0.5rem'
                }}>
                    <li style={{ margin: '0 1rem' }}>
                        <a href="https://www.linkedin.com/in/gracendo/" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="#65578A" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                            </svg>
                        </a>
                    </li>
                    <li style={{ margin: '0 1rem' }}>
                        <a href="https://github.com/graced0" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="#65578A" className="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                            </svg>
                        </a>
                    </li>
                    <li style={{ margin: '0 1rem' }}>
                        <a href="https://open.spotify.com/user/gndo2002?si=a14cd0db73e44e37" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="#65578A" className="bi bi-spotify" viewBox="0 0 16 16">
                                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288"/>
                            </svg>
                        </a>
                    </li>
                </ul>
                <a href="https://drive.google.com/file/d/17g5xl65FdJjj12w7ItHPulBDVk0w1ZNy" target="_blank" rel="noopener noreferrer" style={{color: '#65578A'}}>
                    <h4 style={{fontFamily: 'Space Grotesk', fontSize: '1.15rem'}}>RESUME</h4>
                </a>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2.5rem" fill="#65578A" className="Arrow bi bi-arrow-down d-none d-lg-block" viewBox="0 0 16 16" style={{ position: 'absolute', bottom: '10vh' }}>
                <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
            </svg>
            <p style={{ position: 'absolute', bottom: '40px', color:'#50486B'}}>Coming Soon</p>
        </div>
    );
}

export default Hero;

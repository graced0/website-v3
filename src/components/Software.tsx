function Software() {
    return (
        <div className="SoftwareContainer" id="software" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            textAlign: 'center',
            paddingBottom: '15vh',
            position: 'relative',
        }}>
            <h4 className="Footer d-none d-sm-block" style={{ 
            position: 'absolute', 
            bottom: '5vh', 
            fontSize: '1.25rem',
            fontFamily: 'Space Grotesk',
            color: '#65578A',
            fontWeight: 300, 
        }}><a className="nav-link" href="https://github.com/graced0/website-v3" style={{fontWeight: '400', fontSize:'1.15rem'}}>Developed with 😻 by Grace Do.</a>
        </h4>
        <h4 className="Footer d-block d-sm-none" style={{ 
            position: 'absolute', 
            bottom: '5vh', 
            fontSize: '1.1rem',
            fontFamily: 'Space Grotesk',
            color: '#65578A',
            fontWeight: 300, 
        }}><a className="nav-link" href="https://github.com/graced0/website-v3" style={{fontWeight: '400', fontSize:'1rem'}}>Developed with 😻 by Grace Do.</a>
        </h4>
        </div>
    )

}
export default Software;
function Art() {
    /*
    TODO:
    Create carousel of visual art. https://stackoverflow.com/questions/23276481/bootstrap-api-carousel-continuous
    Find a way to properly display other media formats of art: poetry, video, sound
    */
    return (
        <div className="ArtContainer" id="art" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            textAlign: 'center',
            position: 'relative',
        }}>
            <h2 style={{
                fontFamily: 'Lexend, Space Grotesk, Arial, sans-serif',
                fontWeight: 600,
                fontSize: '2.5rem',
                color: '#888'
            }}>
                ART HERE SOON... STAY TUNED!
            </h2>
        </div>
    )

}
export default Art;
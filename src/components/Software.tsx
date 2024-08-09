import { useEffect } from 'react';
function Software() {
     /*
    TODO:
    Design simple repeatable layout for software projects on display, photo + description?
    */
    useEffect(() => {
        $(function(){
            $('.bxslider').bxSlider({
              mode: 'fade',
              captions: true,
              slideWidth: 600
            });
        });
    }, [])
    return (
        <div className="SoftwareContainer" id="software" style={{
            //height: '100vh'
        }}>
            
            <ul className="slider">
                <li><img src="http://placehold.it/170x200&text=Slide 1" /></li>
                <li><img src="http://placehold.it/170x200&text=Slide 2" /></li>
                <li><img src="http://placehold.it/170x200&text=Slide 3" /></li>
                <li><img src="http://placehold.it/170x200&text=Slide 4" /></li>
                <li><img src="http://placehold.it/170x200&text=Slide 5" /></li>
                <li><img src="http://placehold.it/170x200&text=Slide 6" /></li>
                <li><img src="http://placehold.it/170x200&text=Slide 7" /></li>
                <li><img src="http://placehold.it/170x200&text=Slide 8" /></li>
            </ul>
        </div>
    )

}
export default Software;
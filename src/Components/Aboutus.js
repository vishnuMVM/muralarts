import "./Aboutus.css"
import ceoimg from "./abt-own-img.jpg"

export default function About (){
    return(
        <div className="abt-main-cont">
            <div className="abt-text-cont">
            As art pieces, murals can make a bold statement, portray a beautiful
            scene, pay homage to a historical event or era and even add a splash
            of color to a child's room. While there is no shortage of images to
            capture in a mural, there are three general types of this kind of
            art: Photography murals, painted scenery or image murals, and
            abstract murals.
            </div>

            <div className="img-cont">
                <img src={ceoimg} alt="CEO-img"/>
            </div>
        </div>
    )
}

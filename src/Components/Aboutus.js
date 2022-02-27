import "./Aboutus.css"
import ceoimg from "./abt-own-img.jpg"

export default function About (){
    return(
        <div>
        <div className="abt-main-cont">
            <div className="abt-text-cont order-2 order-md-1">
                <h5>
                    <span>MAHIMA mural arts </span>have been providing services for last 20 years, 
                    it is famous for <span>MURAL CEMENT WALL ARTS </span>.
                    Mahima mural arts services are even utilised by few film makers as a third party initiative,
                    Company also provides various other services like
                </h5> 
                    <br/>

                <h3>CONSTRUCTION WORKS</h3>
                <div className="abt-text-cont-img-cont">
                    <img src="https://4.imimg.com/data4/IT/UH/MY-16048636/building-construction-work-500x500.jpg" alt="construction-img"/>
                </div>
                    <br/>
                <h5>
                    which includes design and demolition of all type of constructions like residential, 
                    non-residential, infrastructure and industrial.
                </h5><br/>

                
                <h3>WOOD WORKING</h3>
                <div className="abt-text-cont-img-cont">
                    <img src="https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_portfolio_medium/images/59d1d3e34195ac5d00076c4e/1507378437385-9d179ac8e65c9545787aefe2ecc5befe.jpeg" alt="Wood-works-img"/>
                </div>
                    <br/>
                <h5>
                Carpentry is a skilled trade and a craft in which the primary work
                performed is the cutting, shaping and installation of building materials 
                during the construction of buildings, ships, timber bridges, concrete formwork, etc. 
                </h5><br/>

                <h3>SCULPTUR WORKING</h3>
                <div className="abt-text-cont-img-cont">
                    <img src="https://i.pinimg.com/564x/59/4f/0e/594f0e43f447c0895e1977fb92bac652.jpg" alt="construction-img"/>
                </div>
                    <br/>
                <h5>Sculpture in stone survives far better than works of art in perishable materials, 
                    and often represents the majority of the surviving works (other than pottery) from ancient cultures, though conversely traditions of sculpture in wood may have vanished almost entirely. 
                    However, most ancient sculpture was brightly painted, and this has been lost.
                </h5><br/>

            </div>

            <div className="seconddiv order-1 order-md-2">
                <div className="img-cont">
                    <img src={ceoimg} alt="CEO-img"/>
                </div>

                <div className="d-none d-md-block">
                <h5>
                    "Art is something that
                    makes you breathe with a different kind of happiness"
                </h5>
                <p>-Anni Albers</p>

                <h5>
                    "Every child is an artist<br/>
                    The problem is how to remain an artist once we grow up"
                </h5>
                <p>-Pablo Picasso</p>

                <h5>
                    "There are two distinct languages.<br/>
                    There is the verbal, which separates prople...
                    and there is the visual that is understood by everybody"
                </h5>
                <p>-Yaacov Agam</p>

                <h5>
                    "The artist sees what others only catch a glimpse of"
                </h5>
                <p>-Leonardo da vinci</p>
                <h5>
                    "Creativity takes courage"
                </h5>
                <p>-Henry Matisse</p>
                </div>

            </div>
        </div>

            <div>
                
            </div>

        </div>
    )
}

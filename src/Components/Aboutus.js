import "./Aboutus.css"
import ceoimg from "./abt-own-img.jpg"

export default function About (){
    return(
        <div>
        <div className="abt-main-cont">
            <div className="abt-text-cont">
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
                    <img src="https://i.ytimg.com/vi/pp5PvJ_ln-0/hqdefault.jpg" alt="construction-img"/>
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

            <div className="img-cont">
                <img src={ceoimg} alt="CEO-img"/>
            </div>
        </div>

            <div>
                
            </div>

        </div>
    )
}

import "./Contactus.css";
import ownimg from "./cont-own-img.jpg";
import sivaji from "./sivaji.jpg"


export default function Contactus (){
    return(
        <div className="contact-main-div">
            <div className="contact-container">
            <h1>Contact us</h1>
            <br/>
            <h4><span>Mahima mural arts</span>
                <br/><br/>
                D.No 16-11-511/c/27
                <br/><br/>
                Shalivahana nagar,Moosarambagh, Malakpet
                <br/><br/>
                Hyderabad<br/><br/>
                Telangana 500036
            </h4>
            
            <img src="https://5.imimg.com/data5/OX/GW/IU/SELLER-81538327/img-20191005-091635440-500x500.jpg" alt=""/>
            <br/>
            
            </div>


            
                
            <h1 className="mng-heading">Management</h1>
                <div className="mng-sub-cont">
                
                    <div className="mng-ind-cont">
                        
                            <img className="mng-img" src={ownimg} alt="CEO"/>

                        <div>
                            <div className="designation">
                                <h2>V PARTHA BHUPAL REDDY</h2>
                                <h5>FOUNDER & CEO</h5>
                            </div>
                            <div className="personinfo">
                                <p> V partha bhupal reddy is the founder
                                    and CEO of mahima muralarts and the person behind the vision.
                                    He has 20 years of experience in mural arts,construction works, 
                                    house designs, wood work and sculpturing works.
                                </p>
                            </div>
                            <div className="numbers">
                                <a href="tel:+918341058143">
                                    <p><i class="fa fa-phone" style={{color:"black"}}> 8341058143</i></p>
                                </a>
                                <a href="whatsapp://send?&phone=+919885115422">
                                    <p><i class="fa fa-whatsapp" style={{color:"black"}}> 9885115422</i></p>
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className="mng-ind-cont">
                        <img className="mng-img" src={sivaji} alt="managing_director"/>
                    <div>
                        <div className="designation">
                            <h2>R SIVAJI CHAKRAVARTHY</h2>
                            <h5>MANAGING DIRECTOR</h5>
                        </div>
                        <div className="personinfo">
                            <p>R sivaji chakravarthy, is the Managing Director of Mahima mural arts
                                and the key person in leading company operations from Hyderabad.
                                He is one of the CEO of FFTI sports wear textile company also. 
                            </p>
                        </div>
                        <div className="numbers">
                            <a href="tel:+917032014474">
                                <p><i class="fa fa-phone" style={{color:"black"}}> 7032014474</i></p>
                            </a>
                            <a href="whatsapp://send?&phone=+919666614474">
                                <p><i class="fa fa-whatsapp" style={{color:"black"}}> 9666614474</i></p>
                            </a>
                        </div>
                    </div>

                </div>
                    
                    

                </div>

            
            
        </div>
    )
}
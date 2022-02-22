import React from 'react';
import './Contact.css';
import contactImg from "./img/about-9.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faClock,faPhone } from "@fortawesome/free-solid-svg-icons";
function Contact() {
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">For consulting</h1><br/>
                            {/* <p className="hire__text white">available from monday to sat </p> */}
                           {/* <p className="hire__text white"><strong>+8436 14 245</strong> or email <strong>admin@example.com</strong></p> */}
                        </div>
                        {/* <div className="input__box">
                           <input type="text" className="contact name" placeholder="Your name *" />
                           <input type="text" className="contact email" placeholder="Your Email *" />
                           <input type="text" className="contact subject" placeholder="Write a Subject" />
                           <textarea name="message" id="message" placeholder="Write Your message"></textarea>
                           <button className="btn contact pointer" type="submit">Submit</button>
                        </div> */}
                        <div>
                        {/* <FontAwesomeIcon icon="coffee" symbol /> */}
                        <div>
                        <h1 className='op'><FontAwesomeIcon icon={faClock}/>    operating hours </h1>
                            <h1 icon='fa-solid fa-truck-front'>9 am to 7pm</h1>
                            <h1>Monday to Sunday</h1><br/>
                            </div>
                        
                           <div> <h1 className='ct' ><FontAwesomeIcon icon={faPhone}/> Contact No </h1>
                            <h1>(02582)223481</h1>
                            <h1>9860477383</h1><br/>
                            </div>
                           <div>
                               <h1 className='add'><FontAwesomeIcon icon={faHome}/> Address </h1>
                               <h1> shani mandir ,</h1>
                               
                               <h1> Bhuswal, Maharastra ,India</h1><br/>
                               
                           </div>
                            
                            
                            
                        </div>
                    </div>
                </div>
                <div className="col__2">
                    <img src={contactImg} alt="" className="contact__img" />
                </div>
            </div>
        </div>
    )
}

export default Contact

import NavbarPage from "../Components/Nabvar";
import '..//Styles/Contac.css'
import FooterPage from "./Footer";

const ContactPage = () => {
    return ( 
        <div>
            <div>
                <NavbarPage/>
            </div>
            <div>
                <h1 className="text-css-general">Ready to connect with me?</h1>
                <div className="box-contact">
                    <form>
                        <h4 className="text-box-css">Let’s Connect!</h4>
                        <input className="Firstname-css" type="text" placeholder="First Name"/>
                        <input className="Lastname-css" type="text" placeholder="Last Name"/>
                        <div>
                            <input className="Email-css" type="text" placeholder="Email address"/>
                        </div>
                        <div>
                            <input className="Text-css" type="area" placeholder="Enter Text Here"/>
                        </div>
                        <button className="button-css">Get in Touch</button>
                    </form>
                </div>
            </div>
            <FooterPage/>
        </div>
     );
}
 
export default ContactPage;
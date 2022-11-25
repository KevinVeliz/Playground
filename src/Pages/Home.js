import NavbarPage from "../Components/Nabvar";
import '../Styles/Home.css'
import FooterPage from "./Footer";
const HomePage = () => {
    return (
        <div>
            <div>
                <NavbarPage />
            </div>
            <div>
                <h1 className="text-home"> Welcome to my PlayGround</h1>
                <div className="box-home">
                    <p className="text-home-p">
                    Hi Everyone!, my name is Juan Sebastian Sotomayor 
                    and this is my playground, check some of my projects. If you like what you see don’t hesitate to contact me, I’ll be glad to help you
                    </p>
                </div>
            </div>
            <FooterPage/>
        </div>
    );
}

export default HomePage;
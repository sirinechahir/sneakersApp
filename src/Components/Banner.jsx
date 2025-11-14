import logo from "../assets/logo.png";
import "../styles/Banner.css";
import Menu from "./Menu";

function Banner(){
    return (
        <header className="banner">
            <img src={logo} className="banner-logo" alt="Logo Sneakers"/>

            <div className="banner-content">
                <Menu />

                <h1>SNEAKER.SC x STORE</h1>

                <p>À chaque pas, ton histoire. </p>
            </div>
        </header>
    );
}
export default Banner;


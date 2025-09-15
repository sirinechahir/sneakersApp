import logo from "../assets/logosneaker.jpg";
import "../styles/Banner.css";

function Banner(){
    return (
        <header className="banner">
            <img src={logo} className="banner-logo" alt="Logo Sneakers"/>

            <div className="banner-content">

                <h>Sneakers Store</h>

                <p>Trouvez les sneakers de vos rêves</p>
            </div>
        </header>
    );
}
export default Banner;
import logo from "../assets/logosneaker.png";
import "../styles/Banner.css";

function Banner(){
    return (
        <header className="banner">
            <img src={logo} className="banner-logo" alt="Logo Sneakers"/>

            <div className="banner-content">

                <h1>STORE × SNEAKER SIRINE</h1>

                <p>Chaque paire raconte une histoire. La tienne commence ici.</p>
            </div>
        </header>
    );
}
export default Banner;
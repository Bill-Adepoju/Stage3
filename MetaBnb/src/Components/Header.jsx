import homeicon from "../images/Home.png"
import logo from "../images/logo.png"

export default function Header(){

    return(
        <section className="Header-section">
            <div className="header-images">
                <img src={homeicon} alt="home" />
                <img src={logo} alt="logo" />
            </div>

            <div className="header-nav">
                <ul className="header-nav-elements">
                    <li>Home</li>
                    <li>Place to stay</li>
                    <li>NFTs</li>
                    <li>Communities</li>
                </ul>
            </div>

            <div className="connect-wallet">
                <button className="connect-button">Connect wallet</button>
            </div>
        </section>
    )
    
}
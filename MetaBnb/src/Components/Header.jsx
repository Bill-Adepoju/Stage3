import homeicon from "../images/Home.png"
import logo from "../images/logo.png"
import {useState} from 'react';
import ConnectWallet from "./ConnectWallet"

export default function Header(){

    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
        setIsShown(current => !current);
      };

    return(
        <section className="Header-section">
            <div className="header-images">
                <img src={homeicon} alt="home" />
                <img src={logo} alt="logo" />
            </div>

            <div className="header-nav">
                <ul className="header-nav-elements">
                    <li>Home</li>
                    <li>
                        <a className="header-links" href="/placetostay">Place to stay</a>
                    </li>
                    <li>NFTs</li>
                    <li>Communities</li>
                </ul>
            </div>

            <div className="connect-wallet">
                <button onClick={handleClick} className="connect-button">Connect wallet</button>
            </div>

            { isShown && <ConnectWallet/>}
        </section>
    )
    
}
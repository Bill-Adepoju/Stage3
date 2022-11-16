import metamask from "../images/metam.png"
import walletconnect from "../images/walletconnect.png"
import xclose from "../images/xclose.png"
import accordion from "../images/accordion.png"
import { useState} from "react"

export default function ConnectWallet(){

    const [isShown, setIsShown] = useState(true);

    const handleClick = event => {
        // toggle visibility
        setIsShown(current => !current);
    };

    return(
        <section className="connect-wallet-section" style={{display: isShown ? 'block' : 'none'}}>
            <div className="conect-header">
                <h1>Connect Wallet</h1>
                <img src={xclose} alt="close" onClick={handleClick} className="x-button"/>
            </div>
            <p className="connect-paragraph">Choose your preferred wallet</p>

            <div className="wallets-option">
                <button className="metamask-button connect-wallet-button">
                    <img src={metamask} alt="metamask image" className="wallet-logo"/>
                    <img src={accordion} alt="arrow" />
                </button>

                <button className="walletconnect-button connect-wallet-button">
                    <img src={walletconnect} alt="wallet connect" className="wallet-logo"/>
                    <img src={accordion} alt="arrow" />
                </button>
            </div>
        </section>
    )
}
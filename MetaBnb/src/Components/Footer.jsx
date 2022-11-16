import Metabnb from "../images/Metabnbfoot.svg"
import facebook from "../images/fbicon.png"
import instagram from "../images/instaicon.png"
import twitter from "../images/twittericon.png"
import copyright from "../images/copyright.png"

export default function Footer(){
    return(
        <section className="footer-wrap">
            <div className="footer-rows">
                <div className="meta">
                    <img src={Metabnb}  alt="Metabnb logo" className="meta-img-footer" />
                        <div className="social-logos">
                            <img src={facebook} alt="facebook icon" />
                            <img src={instagram} alt="instagram icon" />
                            <img src={twitter} alt="twitter icon" />
                        </div>
                </div>

                <div className="footer-links">
                    <div className="community">
                        <h6 className="footer-headers">Community</h6>
                        <p className="footer-element">NFT</p>
                        <p className="footer-element">Tokens</p>
                        <p className="footer-element">Landlords</p>
                        <p className="footer-element">Discord</p>
                    </div>

                    <div className="places">
                        <h6 className="footer-headers">Places</h6>
                        <p className="footer-element">Castle</p>
                        <p className="footer-element">Farms</p>
                        <p className="footer-element">Beach</p>
                        <p className="footer-element">Learn more</p>
                    </div>

                    <div className="about">
                        <h6 className="footer-headers">About us</h6>
                        <p className="footer-element">Roadmap</p>
                        <p className="footer-element">Creators</p>
                        <p className="footer-element">Career</p>
                        <p className="footer-element">Contact us</p>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <img src={copyright} alt="copyright 2022" />
            </div>

        </section>
    )
}
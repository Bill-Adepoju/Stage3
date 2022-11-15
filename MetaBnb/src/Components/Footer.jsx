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
                    <img src={Metabnb} alt="Metabnb logo" />
                        <div className="social-logos">
                            <img src={facebook} alt="facebook icon" />
                            <img src={instagram} alt="instagram icon" />
                            <img src={twitter} alt="twitter icon" />
                        </div>
                </div>


                <div className="community">
                    <h6>Community</h6>
                    <p>NFT</p>
                    <p>Tokens</p>
                    <p>Landlords</p>
                    <p>Discord</p>
                </div>

                <div className="places">
                    <h6>Places</h6>
                    <p>Castle</p>
                    <p>Farms</p>
                    <p>Beach</p>
                    <p>Learn more</p>
                </div>

                <div className="about">
                    <h6>About us</h6>
                    <p>Roadmap</p>
                    <p>Creators</p>
                    <p>Career</p>
                    <p>Contact us</p>
                </div>
            </div>
            <div className="copyright">
                <img src={copyright} alt="copyright 2022" />
            </div>

        </section>
    )
}
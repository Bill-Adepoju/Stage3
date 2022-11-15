import Metabnb from "../images/Metabnbfoot.svg"
import facebook from "../images/fbicon.png"
import instagram from "../images/instaicon.png"
import twitter from "../images/twittericon.png"
import copyright from "../images/copyright.png"

export default function Footer(){
    return(
        <section className="footer-wrap">
            <div className="meta">
                <img src={Metabnb} alt="Metabnb logo" />
            </div>
        </section>
    )
}
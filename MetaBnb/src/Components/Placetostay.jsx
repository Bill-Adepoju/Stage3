import Header from "./Header"
import setting from "../images/setting.svg"


export default function Placetostay(){
    return(
        <section>
            <Header />
            <div className="place-category">
                <ul className="category-list">
                    <li>Resturant</li>
                    <li>Cottage</li>
                    <li>Castle</li>
                    <li>fantast city</li>
                    <li>beach</li>
                    <li>Carbins</li>
                    <li>Off-grid</li>
                    <li>Farm</li>
                </ul>
                <div className="location-setting">
                    <p>Location</p>
                    <img src={setting} alt="set" />
                </div>
            </div>
        </section>
    )
}
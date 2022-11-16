import Header from "./Header"
import setting from "../images/setting.svg"
import Data2 from "./Data2"
import Cardtostay from "./Cardtostay"
import Footer from "./Footer"

export default function Placetostay(){

    const cardData = Data2.map(function(info){
        return <Cardtostay
          key={info.id}
          {...info}
        />
      })


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
            <section className="cardlist places-cards">
                {cardData}
            </section>
            <Footer />
        </section>
    )
}
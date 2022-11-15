import {React, useState} from "react"
import heroImg from "../images/hero-img.png"

export default function Hero(){

    const [search, setSearch] = useState("")

    function handleChange(event) {
        setSearch(event.target.value)
        
    }

    return(
        <section className="hero-section">
            <div className="word-side">
                <h1 className="hero-header"> Rent a <span className="purple">Place</span> away from <span className="purple">Home</span> in the <span className="purple">Metaverse</span></h1>
                <p className="hero-paragraph">we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                <div className="hero-searchbar">
                    <form>
                        <input
                            className="searchbar"
                            type="text"
                            placeholder="Search for Location"
                            onChange={handleChange}
                            name = "search"
                            value={search}
                        />
                        <button className="search-button"> Search</button>
                    </form>
                </div>
            </div>
            <div className="hero-img-side">
                <img src={heroImg} alt="image" />
            </div>
        </section>
    )
}
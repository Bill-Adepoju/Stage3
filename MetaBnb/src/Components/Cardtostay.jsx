import heart from "../images/heart.png"

export default function Cardtostay(props){
    return(
        <section className="card">
            <img src={heart} alt="fav" className="heart-badge" />
            <div className="card-img">
                <img src={`images/${props.coverImg}`} alt="image" className="cardImage"/>
            </div>
            <div className="card-details1">
                <p className="card-name">{props.name}</p>
                <p className="price">{props.price} per night</p>
            </div>
            <div className="card-details2">
                <p className="location">{props.location}km away</p>
                <p className="availability">available for {props.availability} stay</p>
            </div>
            <img src={`images/${props.star}`} alt="stars" />
        </section>
    )
}
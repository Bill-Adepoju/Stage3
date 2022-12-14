import NftImage from "../images/Nftimage.png"

export default function Nfts(){
    return(
        <section className="Nft">
            <div className="Nft-word">
                <h2 className="Nft-header">Metabnb NFTs</h2>
                <p className="nft-paragraph">Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                <button className="nft-button">Learn more</button>
            </div>
            <div  className="nft-image-side">
                <img className="nft-image" src={NftImage} alt="image" />
            </div>
        </section>
    )
}
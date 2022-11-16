import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Midlogo from "./Components/Midlogo"
import Places from "./Components/Places"
import Nfts from "./Components/Nfts"
import Footer from "./Components/Footer"
import Card from "./Components/Card"
import Data from "./Components/Data"


function App() {

  const cardData = Data.map(function(info){
    return <Card
      key={info.id}
      {...info}
    />
  })
  

  return (
    <div className="App">
      <Header />
      <Hero />
      <Midlogo />
      <Places />
      <section className="cardlist">
        {cardData}
      </section>
      
      <Nfts />
      <Footer />
      
    </div>
  )
}

export default App

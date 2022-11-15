import MBlogo from "../images/MBlogo.svg"
import Metamasklogo from "../images/Metamasklogo.svg"
import Opensealogo from "../images/Opensealogo.svg"

export default function Midlogo(){
    return(
        <section className="mid-logos">
            <img src={MBlogo} alt="MB logo" />
            <img src={Metamasklogo} alt="Metamask logo" />
            <img src={Opensealogo} alt="openSea logo" />
        </section>
    )
}
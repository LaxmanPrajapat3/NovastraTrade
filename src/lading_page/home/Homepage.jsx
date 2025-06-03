import Hero from "./Hero"
import NavBar from "../NavBar";
import Awards from "./Awards";
import Education from "./Education";
import Pricing from "./Pricing";
import Stats from "./Stats";
import OpenAccount from "./OpenAccount";
import Footer from "../Footer";

export default function HomePage(){
return (<>
<NavBar/>
<Hero/>
<Awards/>
<Stats/>
<Pricing/>
<Education/>
<OpenAccount/>
<Footer/>

</>)
}
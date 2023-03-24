import Page1 from "../../components/home-page/page-1";
import img from "../../assets/images/image-2.png"
import Page2 from "../../components/home-page/page-2";
import Page3 from "../../components/home-page/page-3";
import Page4 from "../../components/home-page/page-4";
import Page5 from "../../components/home-page/page-5";
import Page6 from "../../components/home-page/page-6";
import Page7 from "../../components/home-page/page-7";
import Footer from "../../components/footer/footer";

const Home=()=>{
    return(
        <div className="">
            <Page1/>
            <div className="mt-[11.8rem]"><img src={img}/></div>
            <Page2/>
            <Page3/>
            <Page4/>
            <Page5/>
            <Page6/>
            <Page7/>
            <Footer/>
        </div>
    )
}

export default Home
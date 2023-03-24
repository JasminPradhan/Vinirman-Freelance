import mark from "../../assets/images/rect-logo.png"
import app from "../../assets/images/app-store.png"
import play from "../../assets/images/play-store.png"

const Footer=()=>{
    return(
        <div className="bg-[red]">
        <div className="bg-[#212B36] h-[18rem] text-[white] flex justify-around items-center">
                <div className="left-sec w-[30.5625rem] h-[10.5rem] flex flex-col space-y-4">
                    <div className="w-8 ml-5">
                        <img src={mark} alt="" />
                    </div>
                    <div className="w-[14rem]">
                        <ul className="flex justify-evenly">
                            <li>Download Now</li>
                            <li>License</li>
                        </ul>
                    </div>
                    <div className="w-[30.5625rem]">
                        <ul className="flex justify-evenly  ">
                            <li>About</li>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Careers</li>
                            <li>Help</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
                <div className="right-sec flex flex-col space-y-4 ">
                    <div className="text-3xl">Get the App</div>
                    <img src={app} alt="" />
                    <img src={play} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Footer
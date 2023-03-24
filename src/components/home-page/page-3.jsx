import icon from "../../assets/images/icon-1.png"
import img1 from "../../assets/images/image-4.png"
import { CButton } from "../button/custom-button"

const Page3=()=>{
    return(
        <div className="flex flex-col items-center mt-40 font-[outfit thin]">
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-5xl">Why Us?</h1>
                <p className="text-[#9096A0] mt-5">Vinirman constructions ventures private limited provides numerous benefits for both contractors and custom-ers:</p>
            </div>
            <div>
                <CButton left="left" right="right" dim="h-10 w-32"/>
            </div>
            <div className="container flex flex-col px-32 mt-12 relative">
                <img src={img1} className="h-40 w-32 absolute -top-[4.5rem] left-[2.7rem] z-[-1]"/>
                <img/>
                <div className="row flex rounded-t-xl ">
                    <div className=" column rounded-tl-xl w-[37rem] h-[18.3125rem] bg-[white] flex flex-col justify-center pl-8 border">
                        <img src={icon} className="h-10 w-10"/>
                        <h1 className="font-semibold">Increased Visibility</h1>
                        <p>By joining our platform, contractors gain increased visibility and exposure to potential customers who are actively seeking construction services.</p>
                    </div>
                    <div className="column rounded-tr-xl w-[37rem] h-[18.3125rem] bg-[white] flex flex-col justify-center pl-8 border">
                        <img src={icon} className="h-10 w-10"/>
                        <h1 className="font-semibold">Increased Visibility</h1>
                        <p>By joining our platform, contractors gain increased visibility and exposure to potential customers who are actively seeking construction services.</p>
                    </div>
                </div>
                <div className="row flex rounded-b-xl ">
                    <div className="column rounded-bl-xl w-[37rem] h-[18.3125rem] bg-[white] flex flex-col justify-center pl-8 border
                    ">
                        <img src={icon} className="h-10 w-10"/>
                        <h1 className="font-semibold">Increased Visibility</h1>
                        <p>By joining our platform, contractors gain increased visibility and exposure to potential customers who are actively seeking construction services.</p>
                    </div>
                    <div className="column rounded-br-xl w-[37rem] h-[18.3125rem] flex flex-col justify-center pl-8 border
                    ">
                        <img src={icon} className="h-10 w-10"/>
                        <h1 className="font-semibold">Increased Visibility</h1>
                        <p>By joining our platform, contractors gain increased visibility and exposure to potential customers who are actively seeking construction services.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page3
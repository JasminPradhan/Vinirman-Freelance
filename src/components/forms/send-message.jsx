import FormInput from "../form-component/form-input";
import Button from "../button/button.jsx"
import "../../styles/utils.scss"
import bgimg from "../../assets/images/bg-img7.png"

const MessageBox=()=>{
    return(
        <div className="relative mr-40">
            <div className="absolute z-[-1] top-[-5.8rem] right-[-8.44rem] left-[5.75rem] sm:right-[-8rem]">
                <img src={bgimg} alt="" className="" />
            </div>
            <div className="border relative flex flex-col justify-center items-center rounded-xl bg-[white] h-[38.56rem] lg:w-[25rem] md:w-[24rem]">
                <div className="heading  mx-5 -mt-[0.2rem]">Send us a Message</div>
                <div>
                <FormInput
                label={"Full Name*"}
                />
                <FormInput
                label={"Full Name*"}
                />
                <FormInput
                label={"Full Name*"}
                />
                <FormInput
                label={"Full Name*"}
                />
                </div>
                <div className="w-[22rem] h-16 z-1 absolute top-[34rem]"><Button dim='w-[21.875rem] h-[3.25rem]' color='#236DF6' action={"Send Message"}/></div>
            </div>
        </div>
    )
}

export default MessageBox
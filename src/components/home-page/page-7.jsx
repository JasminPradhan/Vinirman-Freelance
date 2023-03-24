import MessageBox from "../forms/send-message"
import "../../styles/utils.scss"
import icon from "../../assets/images/rect-icon.png"

const contactDetails=[
    {
        icon:icon,
        title:"Our Location",
        info:"99 S.t Jomblo Park Pekanbaru, 28292. Indonesia"
    },
    {
        icon:icon,
        title:"Phone Number",
        info:"(+62)81 414 257 9980"
    },
    {
        icon:icon,
        title:"Email Address",
        info:"info@yourdomain.com"
    },
]


const Page7=()=>{
    return(
        <div className="mt-[20rem] lg:px-16 sm:px-8 flex lg:justify-around items-center sm:justify-between">
            <div className="w-[35.625rem]">
                <h1 className="heading ">Get in Touch with Us</h1>
                <div className="pt-8 text-[#9096A0]">Thank you for considering our construction aggregation and manufacturing services. If you have any ques-tions or would like to discuss a potential project, please do not hesitate to contact us.
Here is our contact information:</div>
                {
                    contactDetails.map((items,index)=>{
                        return(
                            <div key={index} className="flex justify between items-center w-[27.125rem] py-12">
                            <img src={items.icon} className="" />
                            <div>
                                <h1 className="text-2xl font-semibold lg:text-xl">{items.title}</h1>
                                <div className="text-[#9096A0]">{items.info}</div>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
            <div>
                <MessageBox/>
            </div>
        </div>
    )
}

export default Page7
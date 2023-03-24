import img from "../../assets/images/image-1.png"
import "../../styles/utils.scss"
import Button from "../button/button.jsx"

const Page1=()=>{
    return(
        <div className="flex justify-evenly items-center ">
            <div className="flex-col ml-32 mt-[5rem] w-[36.25rem]">
                <h4 className="font-semibold text-[#236DF6] leading-5">Welcome</h4>
                <h1 className="heading">Innovating the future of construction with excellence</h1>
                <p className="text-[#9096A0]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, error iusto officiis odit, tempora ipsa laboriosam, accusantium explicabo exercitationem odio amet dolore reprehenderit eligendi cupiditate tenetur sapiente in aliquam illo.</p>
                <div className="mt-12">
                <Button action={"Contact Us ->"} color="#FF6641" dim="h-12 w-44 font-[outfit thin] top-[33rem]"/>
                </div>
                
            </div>
            <div className="mr-20 w-86 h-108 mt-[5rem]">
                <img className="w-86 h-108" src={img}/>
            </div>
        </div>
    )
}

export default Page1
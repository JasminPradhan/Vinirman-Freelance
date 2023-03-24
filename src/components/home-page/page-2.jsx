import img from "../../assets/images/image-3.png"
import Button from "../button/button"

const Page2=()=>{
    return(
        <div className="px-32 pt-32 ">
            <div className="flex flex-col justify-center text-center items-center">
                <h1 className="font-bold text-5xl">Who are we?</h1>
                <p className="text-[#9096A0]">Vinirman Constructions Ventures Private Limited is a company that connects customers with reliable and high-quality contractors while also providing innovative manufacturing solutions for the construction industry. Our team is composed of experienced professionals who are passionate about innovation and sustainability, constantly developing and improving our solutions to meet the evolving needs of the industry. We take pride in our commitment to transparency, fairness, and excellence, and strive to build long-lasting relationships with our clients. Thank you for choosing us, and we look forward to helping you achieve your construction goals.
                </p>
                <Button action="learn more -+" color="bg-[#FF6641]" dim="h-11 w-40 mt-64"/>
            </div>
            <div>
                <img src={img} alt="" className="w-[74rem] h-[20.75rem] mt-24"/>
            </div>
        </div>
    )
}

export default Page2
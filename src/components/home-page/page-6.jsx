import Carousel2 from "../carousel/carousel-2"
import "../../styles/utils.scss"


const Page6=()=>{
    return(
        <div className="flex flex-col mt-[15rem]">
            <div className="flex flex-col  justify-center items-center pb-16 text-center">
                <h1 className="heading pb-4">Reviews from Our Clients</h1>
                <div className="text-[#9096A0]  px-72">As a construction aggregator and manufacturing company, we value feedback from our clients and custom-ers. 
Here are some reviews of our company:</div>
            </div>
            <div>
                <Carousel2/>
            </div>
        </div>
    )
}
export default Page6
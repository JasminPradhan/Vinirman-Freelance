import Carousel1 from "../carousel/carousel-1"
import "../../styles/utils.scss"

const Page5=()=>{
    return(
        <div className="flex flex-col pt-32 relative">
            <div className="flex flex-col justify-center items-center text-center pb-16">
                <h1 className="heading pb-4">Some of Our Projects</h1>
                <div className="px-72 text-[#9096A0]">As a construction aggregator and manufacturing company, we have completed several projects in various industries.
Here are some examples of our projects:</div>
            </div>
            <div>
                <Carousel1/>
            </div>
        </div>
    )
}

export default Page5
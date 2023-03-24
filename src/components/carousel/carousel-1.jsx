import { useEffect } from 'react'
import img1 from '../../assets/images/image-7.png'
import img2 from '../../assets/images/image-8.png'


const carData1 = [
    {
        type:"right",
        image: img2,
        title: "Commercial Building",
        text: "We connected the owner with top contractors and managed the commercial building project in a major city for timely, cost-effective completion.",
    },
    {
        type:"left",
        image: img1,
        title: "Commercial Building",
        text: "We connected the owner with top contractors and managed the commercial building project in a major city for timely, cost-effective completion.",
    },
    {
        type:"right",
        image: img2,
        title: "Commercial Building",
        text: "We connected the owner with top contractors and managed the commercial building project in a major city for timely, cost-effective completion.",
    },
    {
        type:"left",
        image: img1,
        title: "Commercial Building",
        text: "We connected the owner with top contractors and managed the commercial building project in a major city for timely, cost-effective completion.",
    },
    {
        type:"right",
        image: img2,
        title: "Commercial Building",
        text: "We connected the owner with top contractors and managed the commercial building project in a major city for timely, cost-effective completion.",
    },
    {
        type:"left",
        image: img1,
        title: "Commercial Building",
        text: "We connected the owner with top contractors and managed the commercial building project in a major city for timely, cost-effective completion.",
    },
    {
        type:"right",
        image: img2,
        title: "Commercial Building",
        text: "We connected the owner with top contractors and managed the commercial building project in a major city for timely, cost-effective completion.",
    },
    {
        type:"left",
        image: img1,
        title: "Commercial Building",
        text: "We connected the owner with top contractors and managed the commercial building project in a major city for timely, cost-effective completion.",
    },
    {
        type:"right",
        image: img2,
        title: "Commercial Building",
        text: "We connected the owner with top contractors and managed the commercial building project in a major city for timely, cost-effective completion.",
    },
    {
        type:"left",
        image: img1,
        title: "Commercial Building",
        text: "We connected the owner with top contractors and managed the commercial building project in a major city for timely, cost-effective completion.",
    },
    {
        type:"right",
        image: img2,
        title: "Commercial Building",
        text: "We connected the owner with top contractors and managed the commercial building project in a major city for timely, cost-effective completion.",
    },
]

const Carousel1=()=>{

    const scrolLeft=()=>{
        document.querySelector(".carousel1").scrollLeft -= 400;
    }
    const scrolRight=()=>{
        document.querySelector(".carousel1").scrollLeft += 400;
    }
    return(
    <div className='lg:w-[72rem] xl:mx-36 relative h-[28.25rem] lg:mx-12 md:w-[50rem] lg:mx-[4rem] sm:mx-[3rem]'>
        <div className='flex overflow-x-hidden carousel1 scroll-smooth lg:w-[72rem] md:w-[63rem] sm:w-[57rem]'>
        {carData1.map((item,index)=>{
            return(<div key={index} className={`h-[28.25rem] mx-2 border bg-[white] rounded-xl ${item.type==="left"?'rounded-tr-[128px]':'rounded-tl-[128px]'}`}>
                <img src={item.image} className={`w-[23rem] rounded-sm ${item.type==="left"?'md:rounded-tr-[128px] sm:rounded-tr-[115px]':'md:rounded-tl-[128px] sm:rounded-tl-[115px]'}`}/>
                <h1 className='py-8 font-semibold text-xl px-8'>{item.title}</h1>
                <div className='lg:w-[23rem] px-8 md:w-[20rem] sm:w-[18rem]'>{item.text}</div>
            </div>)
        })}
            <div className="flex font-[outfit] absolute top-[30rem] lg:left-96 md:left-[20rem] sm:left-[16rem] space-x-4">
                <button 
                className={` bg-[#236DF6] w-[11rem] h-[4rem] text-white  hover:text-[#236DF6] rounded-bl-full border 
                border-[#236DF6] hover:bg-white hover:border-[#236DF6] `}
                onClick={scrolLeft}>{"<-"}</button>
                <button
                className={`bg-[white] rounded-br-full border border-[#236DF6] w-[11rem] h-[4rem] text-[#236DF6]  hover:text-[white] hover:bg-[#236DF6] hover:outline outline-1`}
                onClick={scrolRight}>{"->"}</button>
            </div>
        </div>
    </div>
    )
}

export default Carousel1
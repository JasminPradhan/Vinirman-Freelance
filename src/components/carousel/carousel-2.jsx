import StarRating from "../rating/star";

const userReview = [
    {
        name: "Janardan Saha",
        review: "We were extremely satisfied with the manufacturing services provided by this company. Their use of CAD software and automation technologies allowed them to produce high-quality products with great precision and consistency. Their commitment to sustainability and innovation is also very impressive.",
        value:4
    },
    {
        name: "Janardan Saha",
        review: "We were extremely satisfied with the manufacturing services provided by this company. Their use of CAD software and automation technologies allowed them to produce high-quality products with great precision and consistency. Their commitment to sustainability and innovation is also very impressive.",
        value:5
    },
    {
        name: "Janardan Saha",
        review: "We were extremely satisfied with the manufacturing services provided by this company. Their use of CAD software and automation technologies allowed them to produce high-quality products with great precision and consistency. Their commitment to sustainability and innovation is also very impressive.",
        value:3
    },
    {
        name: "Janardan Saha",
        review: "We connected the owner with top contractors and managed the commercial building project in a major city for timely, cost-effective completion.",
        value:4
    },
    {
        name: "Janardan Saha",
        review: "Loved the service given by the organisation. Extremely co-operative.",
        value:5
    },
]

const Carousel2=()=>{

    const scrolLeft=()=>{
        document.querySelector(".jas").scrollLeft -= 500;
    }
    const scrolRight=()=>{
        document.querySelector(".jas").scrollLeft += 500;
    }
    return(
    <div className='w-full relative'>
        <div className='flex overflow-x-hidden jas scroll-smooth'>
        {userReview.map((item,index)=>{
            return(<div key={index} className={` h-[12.56rem] w-[54.5rem] mx-2 border bg-[white] rounded-xl`}>
                <div className='w-[50rem] px-12 h-[9rem] text-center pt-4'>{item.review}</div>

                <div className="flex justify-between items-center px-12 border h-[3.5rem] rounded-b-xl">
                    <h1 className='font-semibold text-xl'>{item.name}</h1>
                    <div>
                        <StarRating value={item.value}/>
                    </div>
                </div>
            </div>)
        })}
        </div>
        <div className="flex font-[outfit] absolute top-[14.5rem] xl:left-[33rem] lg:left-[28rem] sm:left-[20rem] md:left-[22rem] space-x-4">
            <div>
                <button 
                className={` bg-[#236DF6] w-[11rem] h-[4rem]
                
                text-white  hover:text-[#236DF6] rounded-bl-full border 
                border-[#236DF6] hover:bg-white hover:border-[#236DF6] `}
                onClick={scrolLeft}>{"<-"}</button>
            </div>
            <div>
                <button
                className={`bg-[white] rounded-br-full border border-[#236DF6] w-[11rem] h-[4rem] text-[#236DF6]  hover:text-[white] hover:bg-[#236DF6] hover:outline outline-1`}
                onClick={scrolRight}>{"->"}</button>
            </div>
        </div>
    </div>
    )
}

export default Carousel2
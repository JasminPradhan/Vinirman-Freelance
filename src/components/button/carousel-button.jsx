

export const CarButton=({left,right,dim,...otherprops})=>{

    return(
        <div className="flex font-[outfit]">
            <div>
                <button 
                className={` bg-[#236DF6] w-[11rem] h-[4rem]
                
                text-white  hover:text-[#236DF6] rounded-bl-full border 
                border-[#236DF6] hover:bg-white hover:border-[#236DF6] `}>{"<-"}</button>
            </div>
            <div>
                <button
                className={`bg-[white] rounded-br-full border border-[#236DF6] w-[11rem] h-[4rem] text-[#236DF6]  hover:text-[white] hover:bg-[#236DF6] hover:outline outline-1`}>{"->"}</button>
            </div>
        </div>
    )
}
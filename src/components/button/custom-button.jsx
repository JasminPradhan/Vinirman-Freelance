
export const CButton=({left,right,dim,...otherprops})=>{

    return(
        <div className="flex font-[outfit]">
            <div>
                <button 
                className={` bg-[#236DF6] ${dim} text-white  hover:text-[#236DF6] rounded-l-full border 
                border-[#236DF6] hover:bg-white hover:border-[#236DF6] `}>{left}</button>
            </div>
            <div>
                <button
                className={`bg-[white] rounded-r-full border border-[#236DF6] ${dim} text-[#236DF6]  hover:text-[white] hover:bg-[#236DF6] hover:outline outline-1`}>{right}</button>
            </div>
        </div>
    )
}
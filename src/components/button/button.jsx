
const Button=({action,color,dim, ...otherprops})=>{

    return(
        <button 
        className={`font-[outfit] absolute bg-[${color}] rounded-full ${dim} text-white`}
>{action}</button>
    )
}
export default Button
import { useState } from "react";
import { BsStarFill } from "react-icons/bs";

const StarRating = (value) => {
    const val=JSON.stringify(value.value)
    const rating=JSON.parse(val)
    console.log(rating)
    return (
        <div className="star-rating text-yellow">
        {[...Array(5)].map((star, index) => {
            return (
            <button
                type="button"
                key={index}
                className={`${index<rating?"text-[#FFA645]":"text-[gray]"} w-5 h-5`}
            >
                <BsStarFill/>
            </button>
            );
        })}
        </div>
    );
};

export default StarRating

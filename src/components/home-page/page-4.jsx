import React, { useState } from "react";
import img from "../../assets/images/image-6.png"
import { Tabs } from "../tab/tabs";
import "../../styles/utils.scss"

const Page4 = () => {

    return (
    <div className="flex flex-col justify-between items-center lg:px-16 sm:px-8 pt-24">
        <div className="flex flex-col items-center pb-16 text-center">
            <h1 className="heading pb-4">Our Services</h1>
            <p className=" text-[#9096A0]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At officiis
                voluptatem dolorem accusamus
            </p>
        </div>
        <div className="flex justify-between space-x-8 ">
            <div>
                <Tabs/>
            </div>
            <div className="h-fit">
                <img className="h-[50rem] w-[35.656]
                lg:h-[43.5rem]
                " src={img}/>
            </div>
        </div>

    </div>
    );
};

export default Page4;

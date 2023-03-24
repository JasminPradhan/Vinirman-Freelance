import { useState } from "react";
import icon from "../../assets/images/icon-2.png"

const tabsData = [
    {
    label: "For Customers",
    content:[
        {
            icon:icon,
            title:"Access to larger customer base",
            text:"Our construction aggregator platform allows contractors to connect with a larger customer base, increasing their visibility and exposure to potential customers."
        },
        {
            icon:icon,
            title:"header",
            text:"Our construction aggregator platform allows contractors to connect with a larger customer base, increasing their visibility and exposure to potential customers."
        },
        {
            icon:icon,
            title:"header",
            text:"Our construction aggregator platform allows contractors to connect with a larger customer base, increasing their visibility and exposure to potential customers."
        },
        {
            icon:icon,
            title:"header",
            text:"Our construction aggregator platform allows contractors to connect with a larger customer base, increasing their visibility and exposure to potential customers."
        }
    ]
    },
    {
    label: "For Contractors",
    content:[
        {
            icon:icon,
            title:"header",
            text:"Hello Our construction aggregator platform allows contractors to connect with a larger customer base, increasing their visibility and exposure to potential customers."
        },
        {
            icon:icon,
            title:"header",
            text:"Hello Our construction aggregator platform allows contractors to connect with a larger customer base, increasing their visibility and exposure to potential customers."
        },
        {
            icon:icon,
            title:"header",
            text:"Hello Our construction aggregator platform allows contractors to connect with a larger customer base, increasing their visibility and exposure to potential customers."
        },
        {
            icon:icon,
            title:"header",
            text:"Hello Our construction aggregator platform allows contractors to connect with a larger customer base, increasing their visibility and exposure to potential customers."
        }
    ]
}
];


export function Tabs() {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const items=tabsData?.[activeTabIndex]?.content;

    return (
        <div className="lg:w-[38.5rem] sm:w-[30rem]">
        <div className="flex lg:justify-between sm:justify-around font-[outfit]">
            {tabsData.map((tab, idx) => {
            return (
                <button
                key={idx}
                className={`flex justify-center py-3.5 w-[18.875rem] transition-colors duration-1000 lg:w-[17rem]
                rounded-t-2xl border border-b-0 text-[#236DF6] ${
                    idx === activeTabIndex
                    ? "bg-[white]"
                    : "bg-[#CEDEFD] hover:border-gray-200"
                }`}
                // Change the active tab on click.
                onClick={() => setActiveTabIndex(idx)}>
                {tab.label}
                </button>
            );
            })}
        </div>

        <div className="lg:w-[38.5rem] bg-[white] h-[44.5rem] lg:w-[35rem] lg:h-[40rem] sm:w-[30rem] border border-t-0">
            <div className="w-[20rem] flex flex-col 
            ">{items.map((item,index)=>{
                return(
                <div className="flex justify-around lg:w-[32.75rem] ml-8 lg:pt-16 pt-20 md:w-[30rem] sm:pt-12 sm:w-[25rem]" key={index}>
                    <img className="h-10" src={item.icon} alt="/"/>
                    <div className="flex flex-col pl-8">
                        <h4 className="font-bold text-2xl">{item.title}</h4>
                        <div className="text-[#9096A0] text-sm">{item.text}</div>
                    </div>
                </div>)
            })}</div>
        </div>
        </div>
    );
    }

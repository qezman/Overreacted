import React, {useState, useEffect} from "react";

const data = [
    {id: 1, title: 'the wet codbase', date: 'Sunday 4th, 2022 11 min read', info: 'Come waste your time with me'},
    {id: 2, title: 'goodbye, clean code', date: 'Friday 22nd, 2019 5 min read', info: 'Let clean code guide you. Then let it go.'},
    {id: 3, title: 'my decade in review', date: 'Saturday 11th, 2021 5 min read', info: 'A personal reflection.'},
    {id: 4, title: 'what are the react team principles', date: 'Thursday 4th, 2017 5 min read', info: 'UI Before API.'},
]

const Overreacted = () => {
    const [isActive, setIsActive] = useState(true);

    const handleClick = () => {
        console.log("worked")
        setIsActive(!isActive);
    }
    return (
        <>
            {/* <section className="font-link px-50 bg-gray-200"> */}
                <section className={`${isActive ? "bg-gray-100" : "bg-[#282c35]"}  font-link px-50`}>

                <div className="flex items-center">
                <h1 className={`${isActive ? "text-black" : "text-white"} text-3xl tracking-wider font-bold`}>Overreacted</h1>
                <button className={`${isActive && "transition duration-1000 ease-in"} bg-red-600 ml-6 px-2 py-1 text-white text-xs rounded`} onClick={handleClick}>Toggle</button>
            </div>

                {data.map((datum)=>{
                    const {id, title, date, info} = datum;
                    return (
                        <>
                            <div className="mt-20">
                                <h1 className={`${isActive ? "text-red-500" : "text-[#ffa7c4]"} capitalize  text-2xl font-bold tracking-wide`}>{title}</h1>
                                
                                <p className={`${isActive ? "text-black" : "text-white"} text-xs mt-1 italic`}>{date}</p>
                                <p className={`${isActive ? "text-black" : "text-white"} text-xs mt-2`}>{info}</p>
                </div>
                        </>
                    )
                })}
                </section>

            
                

            {/* </section> */}
        </>
    )
}
export default Overreacted;
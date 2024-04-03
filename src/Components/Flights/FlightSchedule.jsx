import { useState } from "react";
import { world } from "../../assets/icons";
import Panel from "../Panel";

export default function FlightSchedule() {
    const btnArr = ["non-stop", "one stop", "more stop"];
    const [toggleBtn, setToggleBtn] = useState(0);

    const handleToggle = (index) => {
        setToggleBtn((prevBtn) => (prevBtn === index ? null : index));
    }
    return (
        <div className="w-[40%] text-white bg-[--bg-primary] rounded-2xl uppercase relative">
            <div className="p-6">
                <div className="flex justify-between items-end mb-10">
                    <span className="text-xs">from<h2 className="text-lg ml-1">jfk</h2></span>
                    <span className="text-xs font-light">non-stop</span>
                    <span className="text-xs">to<h2 className="text-lg">bom</h2></span>
                </div>
                <img src={world} alt="world-map" width="auto" />
            </div>
            <div className="bg-[--bg-secondary] p-6 absolute bottom-0 w-full rounded-b-2xl">
                <ul className="flex justify-between">
                    {
                        btnArr.map((btn, index) => (
                            <li key={index}>
                                <button onClick={() => handleToggle(index)} className={`uppercase rounded-full text-xs px-6 py-3 ${toggleBtn === index && 'bg-[--color-secondary]'}`}>{btn}</button>
                            </li>
                        ))
                    }
                </ul>
                <div className="mt-4">
                    <h2 className="text-xs mb-3">price</h2>
                    <Panel />
                </div>
            </div>
        </div>
    )
}
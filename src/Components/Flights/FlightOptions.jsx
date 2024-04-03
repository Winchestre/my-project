import { useState } from 'react'
import { profile, chair, location, calender, arrowRL } from '../../assets/icons'

export default function FlightOptions() {
    const btnArr = ["one way", "round trip", "multi trip"];
    const [isOpen, setIsOpen] = useState(0);

    const handleToggle = (index) => {
        setIsOpen((prevMenu) => (prevMenu === index ? null : index));
    }
    return (
        <div className="bg-white rounded-[30px] uppercase text-xs">
            <div className="flex items-center p-6 gap-6">
                <div className="flex flex-col gap-6 w-[55%]">
                    <div className="flex justify-between items-center rounded-[30px] bg-[--bg-light] h-[50px] px-6">
                        <span className="flex gap-2"><img src={location} width="15px" height="15px" /><h2>New York (jfk)</h2></span>
                        <button className="bg-[--bg-primary] rounded-full p-3"><img src={arrowRL} width="15px" height="15px" /></button>
                        <span className="flex gap-2"><img src={location} width="15px" height="15px" /><h2>Mumbai (bom)</h2></span>
                    </div>
                    <ul className="flex justify-between rounded-[30px] bg-[--bg-light] h-[50px] px-1 items-center">
                        {
                            btnArr.map((label, index) => (
                                <li key={index}>
                                    <button onClick={()=>handleToggle(index)} className={`rounded-[30px] ${isOpen === index && 'bg-[--bg-secondary]'} ${isOpen === index && 'text-white'} px-[50px] py-[15px] uppercase`}>{label}</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="flex flex-col gap-6 w-[45%]">
                    <div className="flex justify-between">
                        <div className="rounded-[30px] bg-[--bg-light] w-[48%] h-[50px] px-12 gap-3 flex items-center">
                            <img src={calender} width="15px" height="15px" /><h2>29 july 2019</h2>
                        </div>
                        <div className="rounded-[30px] bg-[--bg-light] w-[48%] flex items-center h-[50px] px-12 gap-3">
                            <img src={profile} width="15px" height="15px" /><h2>2 travellers</h2>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="rounded-[30px] bg-[--bg-light] w-[48%] h-[50px] px-12 gap-3 flex items-center">
                            <img src={chair} width="15px" height="15px" /><h2>first class</h2>
                        </div>
                        <button className="rounded-[30px] bg-[--color-secondary] w-[48%] h-[50px] px-3 uppercase text-white">search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
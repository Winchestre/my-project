 import { arrowDown } from "../../assets/icons";

export default function FlightsHeader({ length }) {
    return (
        <div className="flex justify-between my-6 uppercase">
            <h2>Result ({length})</h2>
            <div className="flex gap-3">
                <button className="px-8 py-2 bg-white uppercase rounded-[30px] text-xs">filter</button>
                <button className="px-8 py-2 bg-white uppercase rounded-[30px] text-xs">ticket of class<img src={arrowDown} width="20px" height="20px" className="inline-block ml-3 pb-1" /></button>
            </div>
        </div>
    )
}
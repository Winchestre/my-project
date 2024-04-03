import Button from "../Button"

export default function FlightList({ flight }) {
    return (
        <li className="uppercase bg-white rounded-2xl w-full px-4 py-6 border-b border-dashed border-neutral-400 flex justify-between items-center">
            <img src={flight.airline.logo} alt="" width='70px' height='70px' />
            <div className="flex flex-col gap-2">
                <h2 className="text-lg">{flight.takeoff.airport}</h2>
                <h3 className="text-xs">{flight.takeoff.time}</h3>
            </div>
            <div className="text-center">
                <h3 className="text-[10px]">{flight.airline.name}</h3>
                <h4 className="text-[--color-secondary] text-xs font-semibold">{flight.duration}</h4>
                <span className="text-xs">non-stop</span>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-lg">{flight.destination.airport}</h2>
                <h3 className="text-xs text-right">{flight.destination.time}</h3>
            </div>
            <div className="flex flex-col gap-2">
                <span className="font-semibold text-right">${flight.airline.price}</span>
                <button className="uppercase bg-[--color-secondary] text-[10px] px-6 py-3 rounded-full text-white">Book now</button>
            </div>
        </li>
    )
}
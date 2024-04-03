import FlightList from "../../Components/Flights/FlightList";
import FlightOptions from "../../Components/Flights/FlightOptions";
import FlightSchedule from "../../Components/Flights/FlightSchedule";
import FlightsHeader from "../../Components/Flights/FlightsHeader";
import { flightsArray } from "../../data";

export default function Flights() {
    return (
        <>
            <FlightOptions />
            <FlightsHeader length={flightsArray.length} />
            <div className="flex gap-4">
                <ul className="w-2/3">
                    {
                        flightsArray.map((flight, index) => (
                            <FlightList flight={flight} key={index} />
                        )
                    )}
                </ul>
                <FlightSchedule />
            </div>
        </>
        
    )
}
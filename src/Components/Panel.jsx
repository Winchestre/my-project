import { useState } from "react"

export default function Panel() {
    const btnArr = [500, 1000];

    const [toolTipVisible, setToolTipVisible] = useState(false);

    const toggleTooltip = (index) => {
        setToolTipVisible((prevItem) => (prevItem === index ? !toolTipVisible : index));
        console.log(`${index} hovered!`)
    }
    return (
        <div className="w-full mt-10 relative">
            <hr
                style={{
                    width: "auto",
                    height: "1px",
                }}
            />
            <div className="flex items-center justify-between absolute top-[-8px] w-2/3">
                <div className="rounded-full p-2 bg-[--color-secondary] ml-4" key={0} onMouseEnter={() => toggleTooltip(0)} onMouseLeave={() => toggleTooltip(0)}>
                    {
                        toolTipVisible && (
                            <button key={0} className="py-3 px-6 bg-red-500 text-white rounded-full absolute top-4" >${btnArr[0]}</button>
                        )

                    }
                </div>
                <div className="rounded-full p-2 bg-[--color-secondary]" key={1} onMouseEnter={() => toggleTooltip(1)} onMouseLeave={() => toggleTooltip(1)}>
                    {
                        toolTipVisible && (
                            <button key={1} className="py-3 px-6 bg-red-500 text-white rounded-full absolute top-4" >${btnArr[1]}</button>
                        )

                    }
                </div>
            </div>
        </div>
    )
}
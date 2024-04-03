export default function Header() {
    return (
        <div className="bg-white p-6 rounded-3xl h-[200px]">
            <div className="flex justify-between">
                <div className="location px-6 py-3 w-2/3 bg-neutral-200 rounded-md flex gap-3 items-center justify-between">
                    <span className="uppercase">New york (jfk)</span>
                    <span>icon</span>
                    <span className="uppercase">Mumbai (bom)</span>
                </div>
                <div className="flex gap-3 w-[calc(100% - 2 / 3)]">
                    <span className="bg-neutral-200 px-6 py-3 rounded-md">29 July 2019</span>
                    <span className="bg-neutral-200 px-6 py-3 rounded-md">2 Travellers</span>
                </div>
            </div>  
        </div>
    )
}
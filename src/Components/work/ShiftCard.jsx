export default function ShiftCard() {
    return (
        // main container
        <section className="bg-neutral-800 rounded-xl border border-neutral-600 p-5 sm:p-6">
            {/* first container <top> */}
            <div className="flex gap-2 justify-between items-center">

                <div className="flex gap-3 sm:gap-5 items-center ">
                    {/* date container */}
                    <div className="bg-neutral-900 border border-neutral-600 rounded-xl px-5 py-2.5 flex flex-col items-center">
                        <h2 className="font-medium text-sm text-neutral-500">OCT</h2>
                        <p className="text-2xl font-semibold">23</p>
                    </div>
                    {/* shift info container */}
                    <div className="min-w-0">
                        <h2 className="font-medium text-2xl">Friday Shift</h2>
                        <p className="text-sm text-neutral-500">Airline Laundry</p>
                    </div>
                </div>
                {/* status tag <complete> <reserve> */}
                <div className="self-center rounded-lg bg-green-700 px-3 py-1 shrink-0">
                    <p className="whitespace-nowrap text-green-300 font-semibold text-sm">Completed</p>
                </div>
            </div>
            {/* middle container */}
            <br />
            <div>
                <div></div>
                <div></div>
            </div>
            {/* bottom container */}
            <div>
                <div></div>
            </div>
        </section>
    )
}
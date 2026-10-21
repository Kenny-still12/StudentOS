export default function ShiftForm() {

    return (
        <form
            className="rounded-xl border border-neutral-600 bg-neutral-800 p-6 sm:p-5"
            action="">

            <h2 className="text-lg font-semibold mb-5">Add Shift</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                <div
                    className="flex flex-col gap-2"
                >
                    <label htmlFor="">Shift Date</label>
                    <input
                        type="date"
                        name=""
                        id=""
                        className="rounded-xl border-2 border-neutral-900 py-1 px-2.5"
                    />
                </div>
                <div
                    className="flex flex-col gap-2"
                >
                    <label htmlFor="">Start Time</label>
                    <input
                        type="time"
                        className="rounded-xl border-2 border-neutral-900 py-1 px-2.5"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="">End Time</label>
                    <input type="time"
                        className="rounded-xl border-2 border-neutral-900 py-1 px-2.5"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="">Break</label>
                    <input
                        type="number"
                        className="rounded-xl border-2 border-neutral-900 py-1 px-2.5"
                    />
                </div>
            </div>
        </form>
    )
}
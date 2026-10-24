export default function ShiftForm() {

    return (
        <form
            className="rounded-xl border border-neutral-600 bg-neutral-800 p-5 sm:p-6"
            action="">

            <h2 className="text-lg font-semibold mb-5">Add Shift</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                <div
                    className="flex flex-col gap-2"
                >
                    <label
                        htmlFor="shiftDate"
                        className="text-sm font-medium text-neutral-200"
                    >Shift Date</label>
                    <input
                        type="date"
                        name="shiftDate"
                        id="shiftDate"
                        className="w-full rounded-xl border-2 border-neutral-600 bg-neutral-900 text-white outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 py-2 px-3"
                    />
                </div>
                <div
                    className="flex flex-col gap-2"
                >
                    <label
                        htmlFor="shiftStartHour"
                        className="text-sm font-medium text-neutral-200"
                    >Start Time</label>
                    <input
                        type="time"
                        name="shiftStartHour"
                        id="shiftStartHour"
                        className="w-full rounded-xl border-2 border-neutral-600 bg-neutral-900 text-white outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 py-2 px-3"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="shiftEndTime"
                        className="text-sm font-medium text-neutral-200"
                    >End Time</label>
                    <input
                        type="time"
                        name="shiftEndTime"
                        id="shiftEndTime"
                        className="w-full rounded-xl border-2 border-neutral-600 bg-neutral-900 text-white outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 py-2 px-3"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="shiftBreak"
                        className="text-sm font-medium text-neutral-200"
                    >Break</label>
                    <input
                        type="number"
                        name="shiftBreak"
                        id="shiftBreak"
                        className="w-full rounded-xl border-2 border-neutral-600 bg-neutral-900 text-white outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 py-2 px-3"
                    />
                </div>
            </div>

            <div className="mt-6 flex justify-end" >
                <button
                    type="submit"
                    className="rounded-xl py-2 px-5 bg-green-600 font-medium text-white transition-colors hover:bg-green-500"
                >Add</button>
            </div>

        </form>
    )
}
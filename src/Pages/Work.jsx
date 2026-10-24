import ShiftCard from "../Components/work/ShiftCard"
import ShiftForm from "../Components/work/ShiftForm"

export default function Work() {

    // hardcoded data for the static UI purpose, subject to deletion 
    const shiftData = [
        {
            id: 1,
            date: "2026-10-21",
            startTime: "08:00",
            endTime: "16:00",
            breakMinutes: 30,
            Status: "completed"
        },
        {
            id: 2,
            date: "2026-10-22",
            startTime: "09:00",
            endTime: "15:00",
            breakMinutes: 30,
            Status: "completed"
        },
    ]

    const monthConvert = {
        1: "JAN",
        2: "FEB",
        3: "MAR",
        4: "APR",
        5: "MAY",
        6: "JUN",
        7: "JLY",
        8: "AUG",
        9: "SEP",
        10: "OCT",
        11: "NOV",
        12: "DEC",
    }

    function renderCard() {
        return shiftData.map((shift) => (
            <ShiftCard key={shift.id} shift={shift} />
        ))
    }


    return (
        <div className="flex flex-col gap-2">
            <ShiftForm />
            {renderCard()}
        </div>
    )
}
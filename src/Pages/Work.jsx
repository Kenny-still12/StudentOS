import ShiftCard from "../Components/work/ShiftCard"
import ShiftForm from "../Components/work/ShiftForm"

export default function Work() {

    // hardcoded data for the static UI purpose, subject to deletion 
    const shiftData = [
        {
            id: 1,
            date: "2026-12-21",
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
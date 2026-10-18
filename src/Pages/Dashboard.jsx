export default function Dashboard() {
    return (
        <section className="space-y-6">
            <div>
                <h1 className="font-bold text-2xl mb-2">Dashboard</h1>

                <p className="text-neutral-500 mb-4">
                    Your Student life, organised.
                </p>
                <div className="flex gap-6 flex-wrap">
                    {/* Dashboard cards will go here */}
                    <div className="bg-neutral-800 p-2 rounded-md flex flex-col items-start gap-4">
                        {/* Work */}
                        <h1 className="text-xl">Work</h1>
                        <p className="text-2xl">12h</p>
                        <p className="text-sm">Work hours</p>
                    </div>

                    <div className="bg-neutral-800 p-2 rounded-md flex flex-col  gap-4">
                        {/* Money */}
                        <h1 className="text-xl">Money</h1>
                        <p className="text-2xl">$ 1200</p>
                        <p>Balance</p>
                    </div>

                    <div className="bg-neutral-800 p-2 rounded-md flex flex-col gap-4" >
                        {/* Study */}
                        <h1 className="text-xl">Study</h1>
                        <h2 className="">Recent Activities</h2>
                        <p>0 / 12h</p>
                    </div>

                    <div className="bg-neutral-800 p-2 rounded-md flex flex-col gap-4">
                        {/* Money Conversion */}
                        <h1 className="text-xl">Money Conversion</h1>
                        <p className="text-2xl">$1 = 0.45php</p>
                    </div>
                </div>
            </div>
        </section>
    )
} 
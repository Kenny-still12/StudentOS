export default function Dashboard() {
    return (
        <section className="space-y-6">
            <div>
                <h1 className="font-bold text-2xl mb-2">Dashboard</h1>

                <p className="text-neutral-500 mb-4">
                    Your Student life, organised.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                    {/* Dashboard cards will go here */}
                    <div className="bg-neutral-800 p-5 rounded-xl flex flex-col gap-3">
                        {/* Work */}
                        <h2 className="text-xl">Work</h2>
                        <p className="text-2xl">12h</p>
                        <p className="text-sm">Work hours</p>
                    </div>

                    <div className="bg-neutral-800 p-5 rounded-xl flex flex-col gap-3">
                        {/* Money */}
                        <h2 className="text-xl">Money</h2>
                        <p className="text-2xl">$ 1200</p>
                        <p>Balance</p>
                    </div>

                    <div className="bg-neutral-800 p-5 rounded-xl flex flex-col gap-3" >
                        {/* Study */}
                        <h2 className="text-xl">Study</h2>
                        <h2 className="">Recent Activities</h2>
                        <p>0 / 12h</p>
                    </div>

                    <div className="bg-neutral-800 p-5 rounded-xl flex flex-col gap-3">
                        {/* Money Conversion */}
                        <h2 className="text-xl">Exchange Rate</h2>
                        <p className="text-2xl">$1 = 0.45php</p>
                    </div>
                </div>
            </div>
        </section>
    )
} 
import { Menu, Search, Bell, User } from "lucide-react"

export default function Header() {
    return (
        <div className=" w-full flex gap-2 items-center justify-between p-2">
            <div className="flex gap-4">
                <Menu />
                <p>Dashboard</p>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center relative">
                    <Search
                        className="absolute w-5 left-0.5"
                    />
                    <form action="">
                        <input
                            className="bg-neutral-500 rounded-md px-10 py-1"
                            placeholder="search..."
                            type="text" />
                    </form>
                </div>
                <button className="rounded-md bg-sky-500 px-2 py-1 text-md">+add</button>
                <Bell />
                <div className="flex items-center gap-2">
                    <p>user</p>
                    <User />
                </div>
            </div>
        </div>
    )
}
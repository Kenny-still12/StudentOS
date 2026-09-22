import { Menu, Search, Bell, User } from "lucide-react"


export default function Header({ onMenuClick }) {


    return (
        <header className=" w-full flex gap-2 items-center justify-between p-2">
            <div className="flex items-center gap-4">
                <button
                    type="button"
                    onClick={onMenuClick}
                >
                    <Menu />
                </button>
                <h1>Dashboard</h1>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center relative">
                    <Search
                        className="absolute w-5 left-3"
                    />
                    <label htmlFor="global-search" className="sr-only">
                        Search Student-OS
                    </label>
                    <input
                        id="global-search"
                        className="bg-neutral-500 rounded-md py-1 pl-10 pr-3 sm:w-64"
                        placeholder="search..."
                        type="search" />
                </div>
                <button className="rounded-md bg-sky-500 px-3 py-1 text-sm hover:bg-sky-600">+ Add</button>
                <button
                    type="button"
                    className="rounded-md p-1 hover:bg-neutral-700"
                >
                    <Bell />
                </button>
                <div className="flex items-center gap-2">
                    <p>user</p>
                    <User />
                </div>
            </div>
        </header>
    )
}
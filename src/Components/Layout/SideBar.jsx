import Logo from "../Logo";

export default function Sidebar() {
    return (
        <div className="min-h-screen w-64 bg-neutral-800 px-6 py-2 flex flex-col justify-between">
            <Logo />
            <nav className="">
                <ul className="flex flex-col gap-4 text-2xl">
                    <li><a href="">Dashboard</a></li>
                    <li><a href="">work</a></li>
                    <li><a href="">Money</a></li>
                    <li><a href="">Study</a></li>
                </ul>
            </nav>
            <div>
                setting
            </div>
        </div>
    )
}
import Logo from "../Logo";

export default function Sidebar({ isOpen }) {

    return (
        <aside className={`min-h-screen overflow-hidden shrink-0 bg-neutral-800 py-2 flex flex-col justify-between transition-[width,padding] duration-300 ease-in-out 
        ${isOpen
                ? "w-64 px-6"
                : "w-0 px-0"}`} >
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
        </aside >
    )
}
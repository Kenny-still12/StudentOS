import Sidebar from "./SideBar";
import Header from "./Header"
export default function AppLayout({ children }) {
    return (
        <div className="flex">
            <Sidebar />
            <div className="w-full">
                <Header />
                <main>
                    {children}
                </main>
            </div>
        </div>
    )
}
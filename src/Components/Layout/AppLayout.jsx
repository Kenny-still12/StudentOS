import SideBar from "./SideBar";
import Header from "./Header"
export default function AppLayout({ children }) {
    return (
        <div className="flex">
            <SideBar />
            <div>
                <Header />
                <main>
                    {children}
                </main>
            </div>
        </div>
    )
}
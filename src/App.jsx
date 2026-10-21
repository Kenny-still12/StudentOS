import AppLayout from "./Components/Layout/AppLayout"
import Dashboard from "./Pages/Dashboard"
import Work from "./Pages/Work"

export default function App() {
  return (
    <>

      {/* Component within AppLayout will be changed manually changed until further development */}
      <AppLayout>
        <Work />
      </AppLayout>
    </>
  )
}
import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes/routes"
import CustomCursor from "./Custom/CustomCursor";
function App() {

  return (
    <>
    <CustomCursor/>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    </>
  )
}

export default App

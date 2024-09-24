
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddUser from "./Components/AddUser"
import Templete from "./Components/Templete"
import DashBoard from "./Components/DashBoard"
import EditUser from "./Components/EditUser"


const App = () => {
  return (
    <div className="main-container">
      
      <BrowserRouter>
        <Templete  />
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/edituser/:id" element={<EditUser />} />
          <Route path="/edituser" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
       
      
    
    </div>
  )
}

export default App

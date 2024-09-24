
import { NavLink } from "react-router-dom"
import "./Templete.css"

const Templete = () => {
  return (
      <div className="sidebar-Container">
          <ul>
              <NavLink className="sidebar-logo d-flex gap-1" href="">
                  <div><i className="bi bi-amd"></i></div>
                  <div>CRUD OPERATIONS</div>
              </NavLink>
              <hr className="sidebar-divider" style={{ color: "black", border: "2px solid red" }} />
              <li className="sidebar-item">
                  <NavLink to={'/'} className="nav-link" >
                      <i className="bi bi-speedometer"></i>
                      <span>Dashboard</span>
                  </NavLink>
              </li>
              <hr className="sidebar-divider" style={{ color: "black", border: "2px solid red" }} />
              <li className="sidebar-item">
                  <NavLink  to={'/adduser'} className="nav-link" >
                      <i className="bi bi-person-plus"></i>
                      <span>Add User</span>
                  </NavLink>
              </li>
              <hr className="sidebar-divider" style={{ color: "black", border: "2px solid red" }} />
              <li className="sidebar-item">
                  <NavLink to={'/edituser'} className="nav-link" >
                      <i className="bi bi-arrow-right-square"></i>
                      <span>Edit User</span>
                  </NavLink>
              </li>
              <hr className="sidebar-divider" style={{ color: "black", border: "2px solid red" }} />
              <li className="sidebar-item" >
                  <NavLink className="nav-link">
                      <i className="bi bi-gear"></i>
                      <span>Settings</span>
                  </NavLink>
              </li>
              <hr className="sidebar-divider" style={{ color: "black", border: "2px solid red" }} />
              <li className="sidebar-item" >
                  <NavLink className="nav-link" >
                      <i className="bi bi-arrow-counterclockwise"></i>
                      <span>Logout</span>
                  </NavLink>
              </li>
              <hr className="sidebar-divider" style={{ color: "black", border: "2px solid red" }} />
          </ul>

      </div>
  )
}

export default Templete

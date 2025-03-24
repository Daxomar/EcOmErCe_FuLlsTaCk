import { useState} from "react";
import { router, BrowserRouter, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import SideBarData from "./SideBarData"

const SideBar = ({isOpen, toggleSidebar, profileImage, userEmail}) => {
 

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Profile Image */}
      <div className="sidebar-profile">
        <img src={profileImage} alt="Profile" className="sidebar-profile-img" />
        <p className="sidebar-profile-name">{userEmail.split("@").map((part, index) => index === 0 ? part.substring(0, 4) + "*****" : "@" + part ).join("")}</p> {/* Placeholder for Name */}
      </div>

      

  

        <nav className="sidebar-nav">
              <ul>
		{SideBarData.map((item)=>{
         	return(
		      <li>
             <Link to={item.path} className="sidebar-link">
			      {<div> {item.icon}</div>}
				  <span>{item.title}</span>
			 </Link>
              </li>
              )
               })}
              </ul>
        </nav>
    </aside>
  );
};

export default SideBar;

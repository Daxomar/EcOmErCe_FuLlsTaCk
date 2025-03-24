import Header from "./Header";
import SideBar from './SideBar'

const Toplayout = ({isOpen, toggleSidebar, profileImage, setProfileImage, userEmail})=>{
    return (
       <div style={{position:"fixed",width:"100%",marginBottom:"0"}}>
          <Header />
          {/* <SideBar  
        isOpen ={isOpen}
        toggleSidebar={toggleSidebar}
        profileImage={profileImage}
        setProfileImage ={setProfileImage}
        userEmail={userEmail}
        /> */}
       </div>
    );
  }
  
  export default Toplayout ;
import Togglebutton from "./Togglebutton";
import tool from './admintool.module.css'
import Avataruser from "./Avataruser";
import Darktoggle from "./Darktoggle";
import Notification from "./Notification";

const Admintools = () => {
    return ( 
        <div  className={tool.tool}>
            <div className={tool.container}>
                {/* <div className={tool.notif}>
                    <i className='fa fa-bell'></i>
                    <div className={tool.bell}>8</div>
                </div> */}
                <Notification />
                <Avataruser />
                {/* <Togglebutton /> */}
                <Darktoggle />
            </div>
        </div>
     );
}
 
export default Admintools;
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
const Notification = () => {
    return ( 
        <div>
            <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
            >
                <Badge badgeContent={17} color="error">
                    <NotificationsIcon />
                </Badge>
            </IconButton>
        </div>
        
     );
}
 
export default Notification;
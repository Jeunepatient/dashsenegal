import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import { Link, withRouter } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Leftcontext } from '../Context/Leftcontext';
import { useContext } from 'react';
import Avataruser from './Avataruser';
import Darktoggle from './Darktoggle';
import { makeStyles } from '@material-ui/core'
import { useHistory } from "react-router-dom/";
import Darkmode from './Darkmode';
import { AuthContext } from '../authentification/AuthContext';
import { UserContext } from './User/UserContext';
import { Stack } from '@mui/material';
const useStyles = makeStyles({
  toolbar: {
    boxShadow: ' 5px 9px 21px 0 rgb(46, 61, 73,  20%)'
  }
})

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  border: '1px solid ',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
// const MenuStyled = styled(Menu)(({theme})=> ({
  
//   '& .MuiPaper-root': {
   
//     '& .MuiMenuItem-root': {
//       '& .MuiSvgIcon-root': {
//         fontSize: 18,
//         color: theme.palette.text.secondary,
//         marginRight: theme.spacing(1.8),
//       },
     
//     },
//   },
// }))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Restopright() {
  const {datarow} = useContext(UserContext)
  const {login, dispatch} = useContext(AuthContext)
  const gotologin = useHistory()
  const [anchorEl, setAnchorEl] = React.useState();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState(null);
  const { islight, light, dark } = useContext(Leftcontext)
  const theme = islight ? light : dark
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const classes = useStyles()

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleredirect = ()=> {
    dispatch({type : 'SIGN_IN'})
    gotologin.push('/')
}

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    // <Menu
    //   anchorEl={anchorEl}
    //   anchorOrigin={{
    //     vertical: 'top',
    //     horizontal: 'right',
    //   }}
    //   id={menuId}
    //   keepMounted
    //   transformOrigin={{
    //     vertical: 'top',
    //     horizontal: 'right',
    //   }}
    //   open={isMenuOpen}
    //   onClose={handleMenuClose}
    // >
    //   <MenuItem onClick={handleMenuClose}>
    //     Profile
    //   </MenuItem>
    //   <MenuItem onClick={handleMenuClose}>
    //     account
    //     </MenuItem>
    //     <MenuItem onClick={handleMenuClose}>
    //       Logout
    //     </MenuItem>
    // </Menu>
    <Menu
    anchorEl={anchorEl}
    id={menuId}
    open={isMenuOpen}
    onClose={handleMenuClose}
    onClick={handleMenuClose}
    PaperProps={{
      elevation: 0,
      sx: {
        overflow: 'visible',
        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
        boxShadow:' rgb(145, 158, 171, 24%) 0px 0px 2px 0px, rgb(145, 158 ,171, 24%) 0px 20px 40p',
        mt: 0,
        backgroundColor : '#fff',
        
        '& .MuiAvatar-root': {
          width: 32,
          height: 32,
          ml: -0.5,
          mr:0.6,
        },
        '&:before': {
          content: '""',
          display: 'block',
          position: 'absolute',
          top: 0,
          right: 14,
          width: 10,
          height: 10,
          bgcolor: '#fff',
          transform: 'translateY(-50%) rotate(45deg)',
          zIndex: 0,
        },
      },
    }}
    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    
  >


    <MenuItem>
    <Stack direction="row" spacing={2}>
    <Avataruser />
    {datarow.map(user => {
      return user.isloggedin && (<Typography> {`${user.firstName} ${user.lastname}`} </Typography>)
    })}
    </Stack>
      
    </MenuItem>
  
    <Divider />
    <MenuItem>
      <ListItemIcon>
        <PersonAdd fontSize="small" />
      </ListItemIcon>
    <Link to='/user'>  Add another account</Link>
    </MenuItem>
    <MenuItem>
      <ListItemIcon>
        <Settings fontSize="small" />
      </ListItemIcon>
      <Link to='/user'>Settings</Link>
    </MenuItem>
    <MenuItem onClick={handleredirect}>
      <ListItemIcon>
        <Logout fontSize="small" />
      </ListItemIcon>
      Logout
    </MenuItem>
  </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Darktoggle />
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Avataruser />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box  sx={{ flexGrow: 1 , position: 'fixed', top : '0', right : '0',left: '17%', zIndex : "10"}}>
      <AppBar position="static" className={classes.toolbar} sx={{ backgroundColor: theme.chart, color: theme.color }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, display: { xl: 'none', md: 'none', xs: 'block', sm: 'block' } }}
          >
            <MenuIcon />
          </IconButton>
          <Search sx={{ borderColor: theme.ui }} >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avataruser />
            </IconButton>

            <IconButton size="large" aria-label="light or dark" color="inherit">
              <Darktoggle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

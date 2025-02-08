import React,{ useState,useContext } from 'react';

//Material Ui
import { styled,useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import { deepOrange } from '@mui/material/colors';

//Context for views
import { ViewsContext } from '../../../context/ViewsContext';

//Navegacion
import { useNavigate } from 'react-router-dom';

//Redux 
import { useDispatch,useSelector } from 'react-redux';

//Action
import { logout } from '../../../store/action/loginAction'; 

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      },
    ],
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function NavbarHomeComponent({ children }) {

  const theme = useTheme();
  const infoUser = useSelector((state) => state.login);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Manejo de las vistas
  const { setViews } = useContext(ViewsContext);

  //Icon avatar
  const [anchorEl, setAnchorEl] = useState(null);

  //Navbar
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //Cierra la sesión
  const logouts = () => {
    setAnchorEl(null);
    dispatch(logout());
    navigate("/login");
  }

  //Enviar al perfil
  const handleProfile = () => {
    setAnchorEl(null);
    setViews({ profile:true });
  }

  //Maneja que componentes se muestran
  const handleClick = ({ target }) => {
    let viewsChange;

    switch (target.innerText) {
      case "Lista de tareas":
        viewsChange = { task:true };
        break;
      case "Lista de items":
        viewsChange = { item:true };
        break;
      case "Estatus de tareas":
        viewsChange = { statusTask:true };
        break;
      case "Estatus de items":
        viewsChange = { statusItem:true };
        break;
      case "Roles":
        viewsChange = { role:true };
        break;
      case "Estatus de usuarios":
        viewsChange = { statusUser:true };
        break;
      default:
        break;
    }

    setViews(viewsChange);
  }

  return (
    <>
    <Box sx={{ display:"flex" }}>
      <AppBar position="fixed" open={open} sx={{display:"flex"}}>
        <Toolbar>
          <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={[
                {
                  mr: 2,
                },
                open && { display: 'none' },
                ]}
            >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            {infoUser.data.user}
          </Typography>
           <Box>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
              <Avatar
              sx={{ bgcolor: deepOrange[500] }}
              alt="Remy Sharp"
              src="/broken-image.jpg"
              />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleProfile}>Perfil</MenuItem>
                <MenuItem onClick={logouts}>Cerrar sesión</MenuItem>
                {/* <MenuItem onClick={handleClose}>Configuraciones</MenuItem> */}
              </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Lista de tareas','Lista de items','Estatus de tareas','Estatus de items', 'Roles', 'Estatus de usuarios'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Main sx={{ marginTop:8 }} open={open}>
        {children}
      </Main>
    </Box>
    </>
  )
}

export default NavbarHomeComponent
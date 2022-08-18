
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import useWindowDimensions from '../../utils/useWindowDimensionsHook';
import '../../assets/css/layout/authview.css'
import loginBg from '../../assets/image/PLUM STREET.png'
import authBg from '../../assets/image/auth/leftbg2.png'
import { useSelector } from 'react-redux';
import { getAuth } from '../../store/slices/authSlice';
import AdminMenus from './AdminMenus';
import TopBar from './TopBar';
import { AppBar, CssBaseline, Toolbar, Typography } from '@mui/material';


const drawerWidth = '20%';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  // marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

type layoutContext = {
  token: string,
  user: object
}
const context: layoutContext = {
  token: '',
  user: {}
}

export const myContext = createContext(context)
export default function AuthView() {
  const auth = useSelector(getAuth)
  const [open, setOpen] = useState(true);
  const { height, width } = useWindowDimensions();
  useEffect(() => {
    if (width <= 768) {
        setOpen(false)
    } else {
      setOpen(true)
    }
   }, [width])
   let renderView
   if (auth.token) {
    renderView = (
      <Box sx={{ display: 'flex', height: '100vh'}}>
      <CssBaseline />
    <TopBar />
        <Drawer
      sx={{
        width: open ? drawerWidth : '0',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width:  open ? drawerWidth : '0', 
          height: '100%',
          backgroundImage: `url('${authBg}')`,
          backgroundSize:  '100% 100%',
    

        },
       
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
     {/* list items */}
     { auth.user ? <AdminMenus /> : <></>}
    </Drawer>
        <Main style={{
          marginTop: '50px'
        }}>
          <Outlet />
        </Main>
      </Box>
    
    )
   } else {
    renderView = (
      <Box sx={{ display: 'flex', height: '100vh'}}>
      <CssBaseline />
    
     
      <Drawer
      sx={{
        width:  open ? drawerWidth : '0',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width:  open ? drawerWidth : '0', 
          backgroundImage: `url('${loginBg}')`,
          backgroundSize: '100% 100%',

        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
  
    </Drawer>
        <Main >
          <Outlet />
        </Main>
      </Box>
     
    )
   }
  return (
    <myContext.Provider value={auth}>

      {renderView}
    
    </myContext.Provider>
  );
}



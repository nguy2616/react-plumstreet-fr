
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
  marginLeft: `-${drawerWidth}px`,
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
   let renderDrawer
   if (auth.token) {
    renderDrawer = (
      <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth, 
          backgroundImage: `url('${authBg}')`,
          backgroundSize:  '100% 100%',
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
     {/* list items */}
    </Drawer>
    )
   } else {
    renderDrawer = (
      <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth, 
          backgroundImage: `url('${loginBg}')`,
          backgroundSize: '100% 100%',
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
  
    </Drawer>
    )
   }
  return (
    <myContext.Provider value={auth}>
    <Box sx={{ display: 'flex' }}>
  
    {renderDrawer}
      <Main >
        <Outlet />
      </Main>
    </Box>
    </myContext.Provider>
  );
}
function createContex(context: layoutContext) {
  throw new Error('Function not implemented.');
}


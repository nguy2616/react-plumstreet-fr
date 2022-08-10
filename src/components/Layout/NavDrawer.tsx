import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../../assets/css/layout/navdrawer.css'

import { myContext } from './Layout'
interface Props {
    window?: () => Window;
}
function NavDrawer(props: Props) {
    const context = useContext(myContext)
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerTogger = () => {
        setMobileOpen(!mobileOpen);
    }
    const menus = ['events', 'foodtrucks', 'clients']
    let drawer
    if (context.token) {
        drawer =(
            <div>
                <Toolbar />
                <Divider />
                <List>
                    {menus.map((menu, index) => (
                        <ListItem key={index} >
                            <ListItemButton>
                                <NavLink to={menu}>
                                <ListItemText primary={menu} className="item"/>
                                </NavLink>
                               
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </div>
        )
    } else {
        drawer = (
            <></>
        )
    }
   
    return (
        <>
      {drawer}
        </>
    )
}
export default NavDrawer

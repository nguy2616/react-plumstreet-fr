import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { Link } from "react-router-dom"

function AdminMenus() {
    const menus = [
        { name: 'Events', path: 'events'},
        { name: 'Foodtrucks', path: 'foodtrucks'},
        { name: 'Clients', path: 'clients'}
    ]
    const renderRow = menus.map(menu => {
        return (
            <ListItem disablePadding key={menu.name}>
                <Link to={menu.path} style={{textDecoration: 'none'}}>
            <ListItemButton >
              <ListItemIcon style={{
                  color: 'white',
              }}>
              icon
              </ListItemIcon>
           <ListItemText  style={{
                  color: 'white',
              }}>
            {menu.name}
           </ListItemText>
            </ListItemButton>
            </Link>
          </ListItem>
        )
       
    })
    return (
        <div style={{
            height: '100vh',
            margin: '20%',
            width: '25%'
        }}>
              <List >
        {renderRow}
      </List>
        </div>
      
    )
}
export default AdminMenus
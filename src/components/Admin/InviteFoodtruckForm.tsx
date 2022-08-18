import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from "@mui/material";
import { useEffect, useReducer, useState } from "react";
import { useCreateCompanyMutation, useDeleteCompanyMutation } from "../../store/slices/companySlice";

type State = {
    companyName: string,
    email: string,
    fullName: string
}
type Action = {
    type: string,
    payload: any
}
const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'setCompanyName':
            return {...state, companyName: action.payload}
        case 'setEmail':
            return {...state, email: action.payload}
        case 'setFullName':
            return {...state, fullName: action.payload}
        case 'clearAll':
            return {...state, companyName: action.payload, email: action.payload, fullName: action.payload}
        default: 
            throw new Error()
    }
   
}
function InviteFoodtruckForm() {
    const [open, setOpen] = useState(false);
    const [state, dispatch] = useReducer(reducer, {
        companyName: '',
        email: '',
        fullName: ''
    })

    const [addCompany] = useCreateCompanyMutation()


    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
        dispatch({type: 'clearAll', payload: ''})
        setOpen(false)
    }
    const handleSubmit = async () => {
        try {
            await addCompany({name: state.companyName })
            .then(() => {
                dispatch({type: 'clearAll', payload: ''})
                setOpen(false)
            })
        } catch (error) {
            console.log(error)
        }
    };

    return (
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Invite Foodtruck
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle style={{ textAlign: 'center'}}>Subscribe</DialogTitle>
          <DialogContent>
        
            <form >
            <TextField
              margin="dense"
              id="companyName"
              label="NOM DE LA SOCIETE"
              type="text"
              value={state.companyName}
              onChange={(e) => dispatch({ type: 'setCompanyName', payload: e.target.value})}
              fullWidth
              variant="standard"
            />
              <TextField
              margin="dense"
              id="fullName"
              label="PRENOM, NOM"
              value={state.fullName}
              onChange={(e) => dispatch({ type: 'setFullName', payload: e.target.value})}
              type="text"
              fullWidth
              variant="standard"
            />
              <TextField
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              value={state.email}
              onChange={(e) => dispatch({ type: 'setEmail', payload: e.target.value})}
              fullWidth
              variant="standard"
            />
            </form>
          
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>CANCEL</Button>
            <Button onClick={handleSubmit}>SUBMIT</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}
export default InviteFoodtruckForm
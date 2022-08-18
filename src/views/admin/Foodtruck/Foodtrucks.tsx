import { useSelector } from "react-redux"
import {  } from "../../../store/slices/postSlice"
import { selectAllCompanies, useDeleteCompanyMutation, useGetCompaniesQuery } from "../../../store/slices/companySlice"
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material"
import { userInterface } from "../../../interfaces/userInterface"
import { cuisineTypeInterface } from "../../../interfaces/cuisineTypeInterface"
import React, { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, useState } from "react"
import './foodtrucks.css'
import { useNavigate } from "react-router-dom"
import InviteFoodtruckForm from "../../../components/Admin/InviteFoodtruckForm"
function Foodtrucks() {
  const {
    isLoading,
    isSuccess, 
    isError,
    error
  } = useGetCompaniesQuery('')
  const navigate = useNavigate()
  const companies = useSelector(selectAllCompanies)

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const [deleteCompany] = useDeleteCompanyMutation()
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.stopPropagation()
    deleteCompany(id)

  }
  return(
    <Box>
      <div style={{ display: 'flex', justifyContent: 'right'}}>
      <InviteFoodtruckForm />
      </div>
 
    <TableContainer >
                {/* tableLayout: 'fixed' make all colum width equal */}
      <Table sx={{ tableLayout: 'fixed' }} size="small" >

        <TableHead className="tableHeader">
        <TableRow>
          <TableCell>FOODTRUCKS</TableCell>
          <TableCell>CONTACT PRINCIPAL</TableCell>
          <TableCell>TYPE DE CUISINE</TableCell>
          <TableCell>DELETE</TableCell>
        </TableRow>
        </TableHead>

        <TableBody className="tableBody">
          {companies.map((company) => (
            <TableRow key={company.id} onClick={() =>  navigate(`${company.id}`)}>
              <TableCell>{company.name}</TableCell>
              <TableCell>{company.contacts.map((contact: userInterface) => {
                if (contact.isPrimary) {
                  return (
                    <div key={contact.id}><h4>{contact.fullName}</h4><span>{contact.email}</span></div>
                  )
                }
              })}</TableCell>
              <TableCell>{company.cuisine_types.map((cs: cuisineTypeInterface) => (
                <span className="cuisineType" key={cs.id}>{cs.name}</span>
              ))}</TableCell>
               <TableCell><Button onClickCapture={(e) => handleDelete(e, company.id)}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={companies.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
       
        />
    </Box>
  )

}
export default Foodtrucks
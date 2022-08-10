import { useSelector } from "react-redux"
import {  } from "../../../store/slices/postSlice"
import { selectAllCompanies, useGetCompaniesQuery } from "../../../store/slices/companySlice"
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

function Foodtrucks() {
//   const [postName, setPostName] = useState('')
//   const {
//     isLoading,
//     isSuccess, 
//     isError,
//     error
//   } = useGetPostsQuery('')
//   const posts = useSelector(selectAllPosts)

//    // deletePost
//    const [deleteId, setDeleteId] = useState(0)
//    const [deletePost] = useDeletePostMutation()
//    const clickDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
//      try {
//        event.preventDefault()
//        const button: HTMLButtonElement = event.currentTarget;
//        setDeleteId(Number(button.value))
      
//      } catch (error) {
//        console.log(error)
//      }
//    }
//    useEffect(() => {
//     if (deleteId !== 0) {
//       deletePost(deleteId).unwrap()
//       .then(() =>
//       setDeleteId(0)
//       )   
//     }
//    }, [deleteId])
//    // updatepost
//    const [updateId, setUpdateId] = useState(0)
//    const [updatePost] = useUpdatePostMutation()
//    const clickUpdate = async (event: React.MouseEvent<HTMLButtonElement>) => {
//     try {
//       event.preventDefault()
//       const button: HTMLButtonElement = event.currentTarget;
//       setUpdateId(Number(button.value))
//     } catch (error) {
//       console.log(error)
//     }
//    }
//    useEffect(() => {
//     if (updateId !== 0) {
//       updatePost({id: updateId, name: postName}).unwrap()
//       .then(() => {
//         setUpdateId(0)
//         setPostName('')
//       })
//     }
//    }, [updateId])
//   let content;
//   if (isLoading) {
//     content = <p>Loading API</p>
//   } else if (isSuccess) {
//     content = posts.map(post => {
//       return <li key={post.id}>{post.id} - {post.name} | <button type="button" value={Number(post.id)} onClick={clickDelete}>Delete</button>
//       <form>
//     <input type="text" value={postName} onChange={(e) => setPostName(e.target.value)}/>
//     <button type="button" value={post.id} onClick={clickUpdate}>update Post</button>
//   </form>
//       </li>
//     })
//   }
//   else if (isError) {
//     console.log(error)
//     content = <p>Error</p>
//   }
//   // add post
//   const [createPost] = useCreatePostMutation()
//   const addPost = async () => {
//     try {
//       await createPost({ name: postName}).unwrap()
//       .then(() => {
//         setPostName('')
//       })
  
//     } catch (error) {
//       console.log(error)
//     }
//   }
 
// return(
//  <section>
//   {content}
//   <form>
//     <input type="text" value={postName} onChange={(e) => setPostName(e.target.value)}/>
//     <button type="button" onClick={addPost}>Add Post</button>
//   </form>
//  </section>
// )
  const {
    isLoading,
    isSuccess, 
    isError,
    error
  } = useGetCompaniesQuery('')
  const companies = useSelector(selectAllCompanies)
  console.log(companies)
  return(
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" >
        <TableHead>
        <TableRow>
          <TableCell>FOODTRUCKS</TableCell>
          <TableCell>CONTACT PRINCIPAL</TableCell>
          <TableCell>TYPE DE CUISINE</TableCell>
        </TableRow>
        </TableHead>

        <TableBody>
          {companies.map((company) => (
            <TableRow key={company.id}>
              <TableCell>{company.name}</TableCell>
              <TableCell>{company.contacts[0].email}</TableCell>
              <TableCell>{company.cuisine_types[0].name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )

}
export default Foodtrucks
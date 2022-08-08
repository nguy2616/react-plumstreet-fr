import { useSelector } from "react-redux"
import { selectAllPosts, useGetPostsQuery } from "../../../store/slices/postSlice"

function Foodtrucks() {
  const {
    isLoading,
    isSuccess, 
    isError,
    error
  } = useGetPostsQuery('')
  const posts = useSelector(selectAllPosts)
  let content;
  if (isLoading) {
    content = <p>Loading API</p>
  } else if (isSuccess) {
    content = posts.map(post => {
      return <li key={post.id}>{post.name}</li>
    })
  }
  else if (isError) {
    console.log(error)
    content = <p>Error</p>
  }
return(
 <section>
  {content}
 </section>
)
}
export default Foodtrucks
import { useSelector } from "react-redux"
import { selectUserById } from "./usersSlice"
import { selectPostsByUser } from "../posts/postsSlice"
import { Link, useParams } from "react-router-dom"

const UserPage = () => {
    const { userId } = useParams()
    const user = useSelector(state => selectUserById(state, Number(userId)))

    
    // const postsForUser = useSelector(state => {
    //     const allPosts = selectAllPosts(state)
    //     return allPosts.filter(post => post.userId === Number(userId))
    // })
    // When we dispatch that increased count in the header, then the useSelector runs again
    // And it forces the component to rerender if a new reference value is returned.
    // We are returning a new value every time with filter. So, that's why we are rendering the UserPage.
    // Fix: Creating a memoized selector
    const postsForUser = useSelector(state => selectPostsByUser(state, Number(userId)))

    const postTitles = postsForUser.map(post => (
        <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
        </li>
    ))

    return (
        <section>
            <h2>{user?.name}</h2>

            <ol>{postTitles}</ol>
        </section>
    )
}

export default UserPage
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
    // getting all the posts in the state
    // const posts = useSelector(state => state.posts)
    // if the shape of the state ever changes, we just need to change it in the slice and not in every Component.
    const posts = useSelector(selectAllPosts)

    // In this localeCompare, we'll return a negative one, or a positive one, or a zero based on if on is greater than the other.
    // So it converts that date string and lets our sort function handle the a,b compare function. So we are sorting all of 
    // the posts by the date string. slice will return a shalow copy of the array. So we are creating a new array and that's where
    // we store our sorted array.
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    // mapping over the post and creating article for each post
    const renderedPosts = orderedPosts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <p className="postCredit">
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
    ))

    return (
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}

export default PostsList;
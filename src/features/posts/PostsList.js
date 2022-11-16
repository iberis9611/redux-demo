import { useSelector } from "react-redux";
import { selectPostIds, getPostsStatus, getPostsError } from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
    const orderedPostIds = useSelector(selectPostIds);
    const postsStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);
    
    let content;
    if (postsStatus === 'loading') {
        content = <p>"Loading..."</p>;
    } else if (postsStatus === 'succeeded') {
        // The sortComparer function is already inside the createEntityAdapter. It's inside the post slice. We no longer need to sort here.
        content = orderedPostIds.map(postId => <PostsExcerpt key={postId} postId={postId} />)
    } else if (postsStatus === 'failed') {
        content = <p>{error}</p>;
    }

    return (
        <section>
            {content}
        </section>
    )
}

export default PostsList
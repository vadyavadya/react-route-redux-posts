import { Link, useSearchParams } from "react-router-dom";
import BlogFilter from "./BlogFilter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../store/postsSlice";


const BlogPage = () => {
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])

    const queryParams = searchParams.get('search') || '';
    const latestParams = searchParams.has('latest') ? 80 : 0;

    const filterPosts = posts.posts.filter(item => item.title.includes(queryParams) && item.id > latestParams);

    return (
        <div>
            <h1>Our news</h1>
            <Link className="button" to='/posts/new'>Add post</Link> для реализации "аутентификации" как будто афторезированый пользователь
            <hr />

            <BlogFilter searchParams={queryParams} latestParams={searchParams.has('latest')} setSearchParams={setSearchParams} />

            {posts.error && <h2>{posts.error}</h2>}

            {posts.status === 'loading' && <h2>Loading ..</h2>}

            <div className="posts__total">Постов: {filterPosts.length}</div>

            <ul>
                {filterPosts.map((post) => {
                    return (
                        <li key={post.id}>
                            <Link to={`/posts/${post.id}`}>
                                <h3>{post.id}.  {post.title}</h3>
                                <p>{
                                    post.body.split(` `).slice(0, 6).join(' ')
                                }...</p>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export { BlogPage }
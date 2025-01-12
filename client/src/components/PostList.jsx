import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import PostListItem from "./PostListItem";
import axios from 'axios';

const fetchPosts = async (pageParam) =>{
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
        params:{page:pageParam}
    });
    return res.data;
};
const PostList = () =>{

   const {data,error,fetchNextPage,isFetching,isFetchingNextPage,status} = useInfiniteQuery({
    queryKey:['posts'],
    queryFn:({pageParam = 1}) => fetchPosts(pageParam),
    initialPageParam:1,
    getNextPageParam:(lastPage, pages) => lastPage.hasMore ? pages.length + 1 : undefined
   })


   

    if(isFetching) return "Loading...";

    if(error) return "Error occured";

    return(
        <div className="flex flex-col gap-12 mb-8">
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
        </div>
    )
}

export default PostList;
import { useAuth, useUser } from "@clerk/clerk-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

const PostMenuActions = ({ post }) => {
  const { user } = useUser();
  const { getToken } = useAuth();

  const {
    isPending,
    error,
    data: savedPosts,
  } = useQuery({
    queryKey: ["savedPosts"],
    queryFn: async () => {
      const token = await getToken();
      return axios.get(`${import.meta.env.VITE_API_URL}/users/saved`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });


  const isSaved = savedPosts?.data?.some((p) => p === post._id) || false;
  return (
    <div className="">
      <h1 className="mt-8 mb-4 text-sm font-medium">Actions</h1>
      {isPending ? (
        "Loading..."
      ) : error ? (
        "Saved posts fetching failed!"
      ) : (
        <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="20px"
            height="20px"
          >
            <path
              d="M12 4C10.3 4 9 5.3 9 7v34l15-9 15 9V7c0-1.7-1.3-3-3-3H12z"
              stroke="black"
              strokeWidth="2"
              fill={isSaved ? "black" : "none"}
            />
          </svg>
          <span>Save this Post</span>
        </div>
      )}
      {user && post.user.username === user.username && (
        <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="20px"
            height="20px"
          >
            <path
              d="M24 2L29.39 16.26L44 18.18L33 29.24L35.82 44L24 37L12.18 44L15 29.24L4 18.18L18.61 16.26L24 2Z"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
          <span>Delete this Post</span>
        </div>
      )}
    </div>
  );
};

export default PostMenuActions;

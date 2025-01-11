import { useAuth, useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IKContext, IKUpload } from "imagekitio-react";

const authenticator = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/posts/upload-auth`
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};
const Write = () => {
  const { isLoaded, isSignedIn } = useUser();
  const { getToken } = useAuth();
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [cover, setCover] = useState("");
  const [progress, setProgress] = useState(0);

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();

      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: (res) => {
      toast.success("Post has been created!");
      navigate(`/${res.data.slug}`);
    },
  });
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  if (isLoaded && !isSignedIn) {
    return <div>You should login!</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      title: formData.get("title"),
      category: formData.get("category"),
      desc: formData.get("desc"),
      content: value,
    };
    mutation.mutate(data);
  };

  const onError = (err) => {
    console.log(err);
    toast.error("Image upload failed!");
  };
  const onSuccess = (res) => {
    setCover(res);
  };
  const onUploadProgress = (progress) => {
    setProgress(Math.round((progress.loaded / progress.total) * 100));
  };
  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-cl font-light">Create a New Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 mb-6">
        {/* <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
          Add a cover image
        </button> */}
        <IKContext
          publicKey={import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY}
          urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
          authenticator={authenticator}
        >
          <IKUpload
            // fileName="test-upload.png"
            useUniqueFileName
            onError={onError}
            onSuccess={onSuccess}
            onUploadProgress={onUploadProgress}
          />
        </IKContext>
        <input
          type="text"
          placeholder="My Story"
          className="text-4xl font-semibold bg-transparent outline-none"
          name="title"
        />
        <div className="flex items-center gap-4">
          <label htmlFor="Choose a Category:" className="text-sm"></label>
          <select
            name="category"
            id=""
            className="p-2 rounded-xl bg-white shadow-md"
          >
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea
          className="p-4 rounded-xl bg-white shadow-md"
          name="desc"
          placeholder="A Short Description"
        />
        <div className="flex">
          <div className="flex flex-col gap-2 mr-2">
            <div className="cursor-pointer">Picture</div>
            <div className="cursor-pointer">Video</div>
          </div>
          <ReactQuill
            theme="snow"
            className="flex-1 rounded-xl bg-white shadow-md"
            value={value}
            onChange={setValue}
          />
        </div>
        <button
          disabled={mutation.isPending || (0 < progress && progress < 100)}
          className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36 disabled:bg-blue-400 disabled:cursor-not-allowed"
        >
          {mutation.isPending ? "Loading" : "Send"}
        </button>
        {"Progress:" + progress}
        {mutation.isError && <span>{mutation.error.message}</span>}
      </form>
    </div>
  );
};

export default Write;

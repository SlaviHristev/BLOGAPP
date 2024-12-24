import { Link } from "react-router-dom";
import Image from "../components/Image";

const SinglePost = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
            adipisci ratione dicta officiis!
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">John Doe</Link>
            <span>on</span>
            <Link className="text-blue-800">Web Design</Link>
            <span>3 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi unde
            delectus cumque dicta, necessitatibus quam doloremque excepturi
            numquam repellat dolore?
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg" />
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default SinglePost;

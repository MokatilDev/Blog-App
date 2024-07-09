import filePenLine from "../assets/icons/file-pen-line.svg";
import book from "../assets/icons/book.svg";

function Home() {
  return (
    <div className=" mx-auto container flex-col justify-center items-center flex w-full mt-10">
      <div className=" text-center">
        <h1 className=" text-4xl font-medium">
          Welcome to <span className=" underline font-bold">ByteBlogger</span>{" "}
        </h1>
        <p className="mt-2 text-lg text-second">
          Your platform for sharing your thoughts with the world
        </p>
      </div>

      <div className=" container grid grid-cols-2  flex-wrap mt-10 gap-10">
        <div className="bg-mainButton px-5 py-5 border border-main cursor-pointer">
          <div className=" flex gap-2 items-center">
            <img src={filePenLine} alt="Start Writings" className="w-6" />
            <h1 className="font-medium text-lg">Start Writings</h1>
          </div>
          <p className=" text-second mt-2 max-w-xl w-full">
            Create your blog and start sharing your ideas with our community.
          </p>
        </div>

        <div className="bg-mainButton px-5 py-5 border border-main cursor-pointer">
          <div className=" flex gap-2 items-center">
            <img src={book} alt="Start Writings" className="w-6" />
            <h1 className="font-medium text-lg">Manage Your Blogs</h1>
          </div>
          <p className=" text-second mt-2 max-w-xl w-full">
            Easily view, edit, and organize all your blog posts in one place.
          </p>
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-semibold mt-5 text-center">
          Featured Posts
        </h1>

        <div className=" mt-5 gap-4 grid grid-cols-3">
          <div className="bg-mainButton px-5 py-5 border border-main cursor-pointer">
            <h1 className=" font-semibold mb-3">10 Tips for Better Coding</h1>
            <p className=" text-second">
              Improve your coding skills with these essential tips...
            </p>
            <p className=" underline text-blue-300 mt-2">Read more</p>
          </div>

          <div className="bg-mainButton px-5 py-5 border border-main cursor-pointer">
            <h1 className=" font-semibold mb-3">The Future of AI</h1>
            <p className=" text-second">
              Exploring the potential impacts of artificial intelligence...
            </p>
            <p className=" underline text-blue-300 mt-2">Read more</p>
          </div>

          <div className="bg-mainButton px-5 py-5 border border-main cursor-pointer">
            <h1 className=" font-semibold mb-3">Web Development Trends 2024</h1>
            <p className=" text-second">
              Stay ahead with the latest web development trends...
            </p>
            <p className=" underline text-blue-300 mt-2">Read more</p>
          </div>
        </div>
      </div>

      <div>
        <h1 className=" text-2xl font-semibold text-center mt-5">
          Why Choose <span className="underline">ByteBlogger?</span>
        </h1>
        <p className="text-center max-w-3xl mt-2 text-base text-second">
          ByteBlogger provides a simple, intuitive platform for bloggers of all
          levels. Whether you're a seasoned writer or just starting out, our
          tools make it easy to create, publish, and share your unique voice
          with the world. Join our community of passionate bloggers today!
        </p>
      </div>
    </div>
  );
}

export default Home;

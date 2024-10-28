import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark }) => {
  const { title, cover_img, author_img, author_name, hashtag, reading_time, posted_date } = blog;
  return (
    <div className="mb-16">
      <img src={cover_img} alt={title} className="rounded-lg w-full" />
      {/* Author details and time start*/}
      <div className="my-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-20 h-20 rounded-full overflow-hidden ">
            <img src={author_img} alt={author_name} className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-2xl font-semibold mb-1">{author_name}</p>
            <p className="text-gray-500 text-lg font-medium">{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-xl text-gray-500">{reading_time} read</p>
          {/* Bookmarks start  */}
          <CiBookmark
            className="text-2xl cursor-pointer"
            onClick={() => handleAddToBookmark(blog)}
          />
          {/* Bookmarks End  */}

          {/* <FaBookmark className="text-2xl" /> */}
        </div>
      </div>
      {/* Author details and time end */}
      {/* Title Start */}
      <h1 className="text-4xl font-bold leading-10">{title}</h1>
      {/* Title End */}
      {/* Hashtag start */}
      <div className="flex gap-3 py-3">
        {hashtag.map((tag, i) => {
          return (
            <p key={i} className="text-xl text-gray-500">
              {tag}
            </p>
          );
        })}
      </div>
      {/* Hashtag end */}
      {/* Mark as read start */}
      <a
        href="#"
        className="text-blue-600 font-medium text-xl py-2"
        style={{ textDecoration: "underline" }}
      >
        Mask as read
      </a>
      <div className="border-b-2 py-8"></div>
      {/* Mark as read end */}
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
};

export default Blog;

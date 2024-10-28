import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import { PropTypes } from "prop-types";

const Blogs = ({ handleAddToBookmark }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  console.log(blogs);
  return (
    <div className="md:w-2/3">
      <h1 className="text-3xl">Blogs: {blogs.length}</h1>
      {blogs.map((blog) => (
        <Blog blog={blog} key={blog.id} handleAddToBookmark={handleAddToBookmark} />
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleAddToBookmark: PropTypes.func.isRequired,
};

export default Blogs;

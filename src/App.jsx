import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [spentTime, setSpentTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleMarkAsRead = (time, id) => {
    const newSpentTime = spentTime + parseInt(time);
    setSpentTime(newSpentTime);

    const remainingBlogs = bookmarks.filter((blog) => blog.id !== id);
    setBookmarks(remainingBlogs);
  };

  return (
    <>
      <div className="container mx-auto">
        <Header />
        <main className="md:flex gap-9">
          <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead} />
          <Bookmarks bookmarks={bookmarks} spentTime={spentTime} />
        </main>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };
  console.log(bookmarks);

  return (
    <>
      <div className="container mx-auto">
        <Header />
        <main className="md:flex">
          <Blogs handleAddToBookmark={handleAddToBookmark} />
          <Bookmarks bookmarks={bookmarks} />
        </main>
      </div>
    </>
  );
}

export default App;

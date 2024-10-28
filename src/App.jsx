import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Header />
        <main className="md:flex">
          <Blogs />
          <Bookmarks />
        </main>
      </div>
    </>
  );
}

export default App;

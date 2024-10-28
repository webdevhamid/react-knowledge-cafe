const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="md:w-1/3">
      <h1 className="text-2xl">Bookmarked Blogs: {bookmarks.length}</h1>
    </div>
  );
};

export default Bookmarks;

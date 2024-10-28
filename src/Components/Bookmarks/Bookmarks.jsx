import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, spentTime }) => {
  return (
    <>
      <div className="md:w-1/3">
        <h1 className="text-2xl text-purple-600 p-5 bg-purple-100 border-2 rounded-xl mb-5 border-purple-600">
          Spent time on read:{" "}
          {spentTime >= 60
            ? `${Math.floor(spentTime / 60)} Hours and ${Math.trunc(spentTime % 60)} Min`
            : `${spentTime} Min`}
        </h1>
        <div className="bg-gray-100 p-5 rounded-xl max-h-screen">
          <h1 className="text-2xl">Bookmarked Blogs: {bookmarks.length}</h1>
          {bookmarks.map((bookmark, i) => (
            <Bookmark key={i} bookmark={bookmark} />
          ))}
        </div>
      </div>
    </>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
};

export default Bookmarks;

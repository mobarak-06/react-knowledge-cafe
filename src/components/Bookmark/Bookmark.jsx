import PropTypes from "prop-types";
import BoiMark from "../BoiMark/BoiMark";
const Bookmark = ({ bookmark, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-gray-100 rounded-lg ml-5">
        <div className="text-[#6047EC] p-6 m-6 bg-amber-50 rounded-2xl">
            <h3 className="text-2xl font-semibold">Spent time on read :  {readingTime}</h3>
        </div>
      <h2 className="text-3xl font-medium ml-4">
        Bookmarked Blogs : {bookmark.length}
      </h2>
      {bookmark.map((item, idx) => (
        <BoiMark key={idx} boiMark={item}></BoiMark>
      ))}
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.array.isRequired,
  readingTime: PropTypes.number
};

export default Bookmark;

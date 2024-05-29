import PropTypes from "prop-types";
import { IoBookmarksSharp } from "react-icons/io5";
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
//   console.log(blog);
  const {
    id,
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  return (
    <div className="mb-16">
      <img className="w-full mb-8 rounded-2xl" src={cover} alt="" />
      <div className="flex justify-between">
        <div className="flex gap-6 mb-4">
          <img
            className="w-14 h-14 rounded-full border-2"
            src={author_img}
            alt={`cover picture of the title ${title}`}
          />
          <div>
            <h3 className="text-2xl"> {author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button onClick={ () => handleAddToBookmark(blog)} className="ml-2">
            <IoBookmarksSharp />
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title} </h2>
      <div className="mt-5">
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">{hash}</a>
          </span>
        ))}
      </div>
      <button onClick={()=> handleMarkAsRead (id, reading_time)} className="text-[#6047EC] font-semibold text-xl mt-5" >Mark as read</button>


    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func
};
export default Blog;

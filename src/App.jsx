import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmark from "./components/Bookmark/Bookmark";
import Header from "./components/Header";

function App() {
  const [bookmark, setBookmark] = useState([]);
  const [readingTime, setReadingTiming] = useState(0);

  const handleAddToBookmark = (blog) => {
    const newBookmark = [...bookmark, blog];
    setBookmark(newBookmark);
  };

  const handleMarkAsRead = (id, time) => {
    const newTime = readingTime + time;
    setReadingTiming(newTime);
    // remove the read blog from bookMark
    const remainingBookmark = bookmark.filter(item => item.id !== id)
    setBookmark(remainingBookmark)
    // console.log('remove bookMark', id);
  };

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto mt-5">
        <Blogs
          handleMarkAsRead={handleMarkAsRead}
          handleAddToBookmark={handleAddToBookmark}
        ></Blogs>
        <Bookmark bookmark={bookmark} readingTime={readingTime}></Bookmark>
      </div>
    </>
  );
}

export default App;

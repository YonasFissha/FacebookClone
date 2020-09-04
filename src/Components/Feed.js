import React, { useState } from "react";
import "../Style/Feed.css";
import StoryReel from "./StoryReel";
import Post from "./Post";
import MessageSender from "./MessageSender";
const Feed = () => {
  const [posts, setPosts] = useState([
    {
      profilePic:
        "https://pbs.twimg.com/profile_images/915110228684832768/_hIIvrOQ_400x400.jpg",
      message: "Rolando is the best!! he is on fire today",
      timestamp: "12/12/12",
      username: "Yonas Fissha",
      image:
        "https://www.juvefc.com/wp-content/uploads/2019/03/ronaldo-2-940x626.jpg",
    },
    {
      profilePic:
        "https://pbs.twimg.com/profile_images/915110228684832768/_hIIvrOQ_400x400.jpg",
      message: "Rolando is the best!! he is on fire today",
      timestamp: "12/12/12",
      username: "Yonas Fissha",
      image:
        "https://www.juvefc.com/wp-content/uploads/2019/03/ronaldo-2-940x626.jpg",
    },
  ]);
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post) => (
        <Post
          profilePic={post.profilePic}
          message={post.message}
          timeStamp={post.timestamp}
          username={post.username}
          image={post.image}
        />
      ))}
    </div>
  );
};

export default Feed;

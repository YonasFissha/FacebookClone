import React from "react";
import "../Style/StoryReel.css";
import Story from "./Story";
const StoryReel = () => {
  return (
    <div className="storyReal">
      <Story
        className="storyReal__story"
        image="https://www.juvefc.com/wp-content/uploads/2019/03/ronaldo-2-940x626.jpg"
        profileSrc="https://www.juvefc.com/wp-content/uploads/2019/03/ronaldo-2-940x626.jpg"
        title="Ronaldo"
      />
      <Story
        className="storyReal__story"
        image="https://www.theeconomyjournal.eu/images/showid2/2900931?w=1200&zc=4"
        profileSrc="https://www.theeconomyjournal.eu/images/showid2/2900931?w=1200&zc=4"
        title="Bale"
      />
      <Story
        className="storyReal__story"
        image="https://pbs.twimg.com/profile_images/915110228684832768/_hIIvrOQ_400x400.jpg"
        profileSrc="https://pbs.twimg.com/profile_images/915110228684832768/_hIIvrOQ_400x400.jpg"
        title="Yonas "
      />
      <Story
        className="storyReal__story"
        image="https://www.juvefc.com/wp-content/uploads/2019/03/ronaldo-2-940x626.jpg"
        profileSrc="https://www.juvefc.com/wp-content/uploads/2019/03/ronaldo-2-940x626.jpg"
        title="Ronaldo"
      />
      <Story
        className="storyReal__story"
        image="https://www.theeconomyjournal.eu/images/showid2/2900931?w=1200&zc=4"
        profileSrc="https://www.theeconomyjournal.eu/images/showid2/2900931?w=1200&zc=4"
        title="Bale"
      />
      <Story
        className="storyReal__story"
        image="https://pbs.twimg.com/profile_images/915110228684832768/_hIIvrOQ_400x400.jpg"
        profileSrc="https://pbs.twimg.com/profile_images/915110228684832768/_hIIvrOQ_400x400.jpg"
        title="Yonas "
      />
    </div>
  );
};

export default StoryReel;

import React from "react";
import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";

const Timeline = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20">
      <div className="w-full md:w-7/12">
        <h1>Timeline</h1>
        {timeline.map((item) => (
          <TimelineItem {...item} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;

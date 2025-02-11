// import "./styles.css";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React, { useEffect, useState } from "react";
import { getTimelineData } from "../config/firebaseService";
const WorkIcon = () => <></>;

export default function Timeline() {
  const [timelineData, setTimelineData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTimelineData();
      setTimelineData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="App" style={{ backgroundColor: "grey" }}>
      <h1>React Vertical Timeline</h1>
      <VerticalTimeline>
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            key={item.id || `${item.title}-${index}`}
            className={`vertical-timeline-element--${item.type}`}
            contentStyle={{
              background: item.iconColor,
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: `15px solid ${item.iconColor}`,
            }}
            iconStyle={{
              background: item.iconColor,
              color: "#fff",
            }}
            icon={<WorkIcon />}
            position={index % 2 === 0 ? "left" : "right"}
          >
            <h3 className="vertical-timeline-element-title" style={{ fontSize: "2em" }}>
              {item.title}
            </h3>
            <p>{item.date}</p>
            <h4 className="vertical-timeline-element-skill">
              {Array.isArray(item.skill) ? item.skill.join(", ") : item.skill}
            </h4>
            <ul className="text-start">
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <img
                  src="https://picsum.photos/id/237/300"
                  alt="Example"
                  style={{ width: "45%", borderRadius: "5px" }}
                />
                <img
                  src="https://picsum.photos/id/237/300"
                  alt="Example"
                  style={{ width: "45%", borderRadius: "5px" }}
                />
              </div>
              {item.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<WorkIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

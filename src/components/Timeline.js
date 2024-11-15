// import "./styles.css";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { timelineData } from "./const/data";

const WorkIcon = () => <></>;

export default function Timeline() {
  return (
    <div className="App">
      <h1>React Vertical Timeline</h1>
      <VerticalTimeline>
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${item.type}`}
            date={item.date}
            contentStyle={{
              background: item.iconColor,
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: `7px solid ${item.iconColor}`,
            }}
            iconStyle={{
              background: item.iconColor,
              color: "#fff",
            }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
            <p>{item.description}</p>
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

// import "./styles.css";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { timelineData } from "./const/data";

const WorkIcon = () => <></>;

export default function Timeline() {
  return (
    <div className="App" style={{backgroundColor:'grey'}}>
      <h1>React Vertical Timeline</h1>
      <VerticalTimeline>
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
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
            
          >
            <h3 className="vertical-timeline-element-title" style={{fontSize:'2em'}}>{item.title}</h3>
            <p>{item.date}</p>
            <h4 className="vertical-timeline-element-skill">{item.skill}</h4>
            <ul className="text-start"> 
              <img
          src="https://picsum.photos/id/237/300"
          alt="Example"
          style={{ width: "40%", marginTop: "10px",marginRight:"20px", borderRadius: "5px" }}
        />
        <img
          src="https://picsum.photos/id/237/300"
          alt="Example"
          style={{ width: "40%", marginTop: "10px", borderRadius: "5px" }}
        />

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

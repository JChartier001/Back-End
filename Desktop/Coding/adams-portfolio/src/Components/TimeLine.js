import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


function Timeline () {
    return (
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="August 2019"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>

    <h3 className="vertical-timeline-element-title">Build Week</h3>
    <h4 className="vertical-timeline-element-subtitle">2nd Build</h4>
    <p>
      Losem Lodem Losem
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="August 2019"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>

    <h3 className="vertical-timeline-element-title">Prpject 2</h3>
    <h4 className="vertical-timeline-element-subtitle">Pr0ject 2</h4>
    <p>
     Losem Lodem Losem
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="August 2019"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}>

    <h3 className="vertical-timeline-element-title"></h3>
    <h4 className="vertical-timeline-element-subtitle">Project 1</h4>
    <p>
      Lodem Lodem Lodem
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="July 2019"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>

    <h3 className="vertical-timeline-element-title">Build Week</h3>
    <h4 className="vertical-timeline-element-subtitle">1st Project</h4>
    <p>
      Implemented HTML, CSS, FlexBox, and Vanilla JavaScript.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="May 28th, 2019"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}>
        
    <h3 className="vertical-timeline-element-title">Lambda School</h3>
    <h4 className="vertical-timeline-element-subtitle">Full Stack Web Developer </h4>
    <p>
      Started my coding journey at Lambda School to become a Web Developer.
    </p>
  </VerticalTimelineElement>

</VerticalTimeline>
    )
}

export default Timeline;

//  <VerticalTimelineElement
//     // iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
//     // icon={<StarIcon />}
//   />
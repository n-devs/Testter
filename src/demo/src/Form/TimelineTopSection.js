import React, { Component } from 'react';

import Cover from '../Items/Cover';

import '../css/Form/TimelineTopSection.css';

export default class TimelineTopSection extends Component {
    render() {
        return (
            <div id="timeline_top_section" className="_5h60" >
                <div className="timeLineTopSectionBase _6-d" >
                    <div id="pagelet_above_header_timeline" className="_5h60" style={{ top: "0px" }} >
                        <div id="discovery_intent_banner"></div>
                    </div>
                    <div id="above_header_timeline_placeholder" style={{ height: "0px" }} ></div>
                    <div className="timeLineSection timeLineTopSection" >
                        <div id="proFileCover" className="drop_elem" >
                            <Cover />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
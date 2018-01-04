import React from 'react';
import { Container, Col } from 'reactstrap';

import TimelineTopSection from '../Form/TimelineTopSection';

import '../css/Page/Profile.css';

class Profile extends React.Component {
    render() {
        return (
            <div className="sidebarMode">
                <div className="fbx timelineLayout webkit">
                    <div id="globalContainer" className="uiContextualLayerParent" >
                        <div id="content" className="fb_content clearfix " style={{ minHeight: "100px" }}>
                            <div className="mainContainer" >
                                <div id="contentCol" className="clearfix hasRightCol" >
                                    <div id="contentArea" >
                                        <div className="_5h60" id="pagelet_timeline_main_column" >
                                            <TimelineTopSection />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default Profile;
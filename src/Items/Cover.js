import React, { Component } from 'react';

import ProfileCoverPhotoSelector from '../Items/ProfileCoverPhotoSelector';

// import ImageA from '../images/';
// import LOOn0JtHNzb from '../images/';

export default class Cover extends Component {
    render() {
        return (
            <div id="u_jsonp_9_6" className="cover">
                <div id="u_jsonp_9_5" className="coverImage">
                    <a href="" id="coverImageContainer" className="coverWrap" title="รูปภาพหน้าปก">
                        <img className="coverPhotoImg photo img" src='{ImageA}' style={{ top: "0px", width: "100%" }} alt="ภาพหน้าปก, ไม่มีข้อความกำกับภาพอัตโนมัติ" />
                        <div className="instructionWrap">
                            <div className="instructions">ลากเพื่อปรับตำแหน่งหน้าปก</div>
                        </div>
                        <div className="coverBorder"></div>
                        <div className="profilePicNotch">
                            <div className="notchInner"></div>
                        </div>
                        <img class="coverChangeThrobber img" src='{LOOn0JtHNzb}' alt="" width="16" height="16"/>
                    </a>
                    <ProfileCoverPhotoSelector/>
                </div>
            </div>
        )
    }
}


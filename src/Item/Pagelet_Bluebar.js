import React, { Component } from 'react';

import '../css/Item/Pagelet_Bluebar/_4KNY.css';
import '../css/Item/Pagelet_Bluebar/SEARCH.css';
import '../css/Item/Pagelet_Bluebar/_50TM.css';
import '../css/Item/Pagelet_Bluebar/_CY60.css';
import '../css/Item/Pagelet_Bluebar/_4KNY0.css';
import '../css/Item/Pagelet_Bluebar/_4KNY1.css';

export class _4KNY extends Component {
    render() {
        return (
            <div className="_4kny">
                <h1 className="_19ea">
                    <a className="_19eb" href="">
                        <span className="_2md">Facebook</span>
                    </a>
                </h1>
            </div>
        )
    }
};

export class SEARCH extends Component {
    render() {
        return (
            <form action="" >
                <button value="1" className="_42ft _4jy0 _4w98 _4jy3 _517h _51sy" type="submit">
                    <i className="_585_"></i>
                </button>
                <div className="uiTypeahead _5860" id="u_l_1">
                    <div className="wrap">
                        <input type="hidden" className="hiddenInput" />
                        <div className="innerWrap">
                            <div className="_5861 navigationFocus textInput _5eaz" id="u_l_2">
                                <input type="text" className="_5eay" />
                                <input type="text" className="_1frb" name="q" value="" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
};


export class _50TM extends Component {
    render() {
        return (
            <div className="_4kny _50tm">
                <div className="_585-" >
                    <SEARCH />
                </div>
            </div>
        )
    }
};


export class _4KNY0 extends Component {
    render() {
        return (
            <div class="_4kny" >
                <div class="_1k67 _cy7" >
                    <div class="_1k67 _cy7" data-click="profile_icon">
                        <a class="_2s25 _606w" accesskey="2" href="" title="โปรไฟล์">
                            <span class="_1qv9">
                                <img class="_2qgu _7ql _1m6h img" src="" alt="" id="profile_pic_header_100006651617512" />
                                <span class="_1vp5">Jo</span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
};

export class _4KNY1 extends Component {
    render() {
        return (
            <div class="_4kny _2s24">
                <div class="_3qcu _cy7" data-click="home_icon" id="u_0_b">
                    <a class="_2s25" href="" accesskey="1">หน้าหลัก</a>
                </div>
            </div>
        )
    }
};


export class _CY60 extends Component {
    render() {
        return (
            <div class="_cy6" >
                <_4KNY0 />
                <_4KNY1 />
            </div>
        )
    }
};

export class U_0_A extends Component {
    render() {
        return (
            <div aria-label="Facebook" class="_2t-f" role="navigation" id="u_0_a">
                <_CY60 />
            </div>
        )
    }
}

import React, { Component } from 'react';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';


import U_0_J from './Form/U_0_J';
import Pagelet_Bluebar from './Form/Pagelet_Bluebar';

import './css/Online.css';
// import 'bootstrap/dist/css/bootstrap.css';




class Online extends Component {
    render() {
        return (
            <div className="hasLeftCol _2yq home composerExpanded _5vb_ fbx _-kb _2ltu _605a _lfs _61s0 i_13n9iyod3h chrome webkit win x1 Locale_th_TH cores-gte4 hasAXNavMenubar">
                <div className="_li" id="u_0_i">
                    <U_0_J />
                    <Pagelet_Bluebar />
                </div>
            </div>
        );

    }
}

export default Online;

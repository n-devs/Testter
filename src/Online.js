import React, { Component } from 'react';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';


import U_0_N from './Form/U_0_N';

import 'bootstrap/dist/css/bootstrap.css';




class Online extends Component {
    render() {
        return (
            <html lang="en" id="root" className="sidebarMode">
                <head>
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta name="theme-color" content="#000000" />
                    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
                    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
                    <title>React App</title>
                </head>
                <body className="hasLeftCol _2yq home composerExpanded _5vb_ fbx _-kb _2ltu _605a _lfs _61s0 i_13n9iyod3h chrome webkit win x1 Locale_th_TH cores-gte4 hasAXNavMenubar">
                    <div className="_li" id="u_0_m">
                        <U_0_N />
                    </div>
                </body>

            </html>

        );

    }
}

export default Online;

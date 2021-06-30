import React from "react";

// Common layout for pages
const Layout = ({ titleheader = "Title", titleDescription = "Description", className, children}) => (
    <div>
        <div className="container">
            <div className="jumbotron mt-5">
                <h2>{titleheader}</h2>
                <p className="lead">{titleDescription}</p>
            </div>
        </div>
        <div className={className}>{children}</div>
    </div>
);

export default Layout;

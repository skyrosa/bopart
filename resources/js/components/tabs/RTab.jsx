import React from "react";
import { Tab } from "react-tabs";

const RTab = ({ children, ...otherProps }) => {
    return (
        <Tab {...otherProps}>
            <div className="flex items-center p-2 bg-colorRed">{children}</div>
        </Tab>
    );
};
RTab.tabsRole = "Tab";
export default RTab;

import React from "react";
import { Tabs } from "react-tabs";

const RTabs = ({ children, ...otherProps }) => {
    return (
        <Tabs {...otherProps}>
            {children}
        </Tabs>
    );
};

RTabs.tabsRole = "Tabs";
export default RTabs;

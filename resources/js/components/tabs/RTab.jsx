import React from "react";
import { Tab } from "react-tabs";

const RTab = ({ children, ...otherProps }) => {
    return (
        <Tab {...otherProps}>
            <button className="flex items-center bg-colorYellow text-colorWhite hover:bg-colorDarkYellow font-bold py-2 px-4 rounded">{children}</button>
        </Tab>
    );
};
RTab.tabsRole = "Tab";
export default RTab;

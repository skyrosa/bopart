import React from "react";
import { Tab } from "react-tabs";

const RTab = ({ children, ...otherProps }) => {
    return (
        <Tab {...otherProps} className='flex items-center text-colorWhite font-bold py-2 px-4 rounded bg-colorYellow cursor-pointer '>
            {children}
        </Tab>
    );
};
RTab.tabsRole = "Tab";
export default RTab;

import React from 'react'
import { TabList } from "react-tabs";

const RTabList = ({ children, ...otherProps }) => {
  return (
    <TabList {...otherProps} className='flex mb-4 w-ful justify-evenly'>
        {children}
    </TabList>
  )
}

RTabList.tabsRole = "TabList";
export default RTabList

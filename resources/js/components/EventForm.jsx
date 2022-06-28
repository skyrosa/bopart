import React from "react";
import { createRoot } from "react-dom/client";
import { TabPanel } from "react-tabs";
import RTabs from "./tabs/RTabs";
import RTab from "./tabs/RTab";
import RTabList from "./tabs/RTabList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocationDot, faClock } from "@fortawesome/free-solid-svg-icons";


const EventForm = () => {
    return (
        <RTabs>
            <RTabList>
                <RTab>
                    <FontAwesomeIcon icon={faCalendar} className='text-3xl mr-2' />
                    <h1 className="text-3xl font-bold">Información</h1>
                </RTab>
                <RTab>
                    <FontAwesomeIcon icon={faClock} className='text-3xl mr-2' />
                    <h1 className="text-3xl font-bold">Horarios</h1>
                </RTab>
                <RTab>
                    <FontAwesomeIcon icon={faLocationDot} className='text-3xl mr-2' />
                    <h1 className="text-3xl font-bold">Ubicación</h1>
                </RTab>
            </RTabList>

            <TabPanel>
                <h2 className='text-3xl font-bold'>Introduce informacion del evento</h2>
            </TabPanel>
            <TabPanel>
                <h2 className='text-3xl font-bold'>Introduce los horarios del evento</h2>
            </TabPanel>
            <TabPanel>
                <h2 className='text-3xl font-bold'>Introduce ubicacion del evento</h2>
            </TabPanel>
        </RTabs>
    );
};

export default EventForm;

if (document.getElementById("event-form")) {
    const root = createRoot(document.getElementById("event-form"));
    root.render(<EventForm />);
}

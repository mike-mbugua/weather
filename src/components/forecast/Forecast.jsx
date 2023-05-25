import React from "react";
import "./forecast.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
function Forecast({ data }) {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <div className="forecast-container">
      <label className="title">Daily</label>
      <Accordion>
        {data.list.slice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <div className="Forecast-head">
                    <img
                      src={`icons/${item.weather[0].icon}.png`}
                      alt=""
                      className="icon-small"
                    />
                    <label className="day">{forecastDays[index]}</label>
                  </div>

                  <div className="lower-body">
                    <label className="description">
                      {item.weather[0].description}
                    </label>
                    <label className="temp">
                      Minimum temp {Math.round(item.main.temp_min)}°C
                    </label>
                    <label className="temp">
                      Maximum temp {Math.round(item.main.temp_max)}°C
                    </label>
                  </div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel></AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default Forecast;

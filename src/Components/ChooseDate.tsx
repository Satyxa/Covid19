import DatePicker from "react-datepicker";
import * as React from "react";
import '../App.css'
import {DEFAULT_END_DATE, DEFAULT_START_DATE} from "../Utils/Constants";
import {ChooseDateProps} from "../types";


export const ChooseDate = React.memo(({startDate, setStartDate, endDate, setEndDate}: ChooseDateProps) => {
    return <div>
        <div className="date__box">
            <div className="date__wrapper">
                <DatePicker maxDate={DEFAULT_END_DATE} minDate={DEFAULT_START_DATE} className="choose__period" selected={startDate} onChange={(date: any) => setStartDate(date)}/>
                <DatePicker maxDate={DEFAULT_END_DATE} minDate={DEFAULT_START_DATE} className="choose__period" selected={endDate} onChange={(date: any) => setEndDate(date)}/>
                <button onClick={() => {
                    setStartDate(DEFAULT_START_DATE)
                    setEndDate(DEFAULT_END_DATE)}}
                        className={startDate !== DEFAULT_START_DATE || endDate !== DEFAULT_END_DATE
                            ? "reset-to-default-date"
                            : "none"}>
                    Показать все данные</button>
            </div>
        </div>
    </div>
})
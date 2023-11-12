import * as React from "react";
import '../App.css'
import {FilterByQuantityProps} from "../types";

export const FilterByQuantity = React.memo(({valueFrom, valueTo, setValueFrom, setValueTo,
                                                localValueFrom, localValueTo, setLocalValueTo, setLocalValueFrom, setCurrentPage}: FilterByQuantityProps) => {

    return <div>
        <input
            type="text"
            placeholder='Значение От'
            value={localValueFrom}
            className={localValueFrom != valueFrom ? 'valueFrom error-border' : 'valueFrom'}
            onChange={(e) => {
                const value = e.currentTarget.value
                setLocalValueFrom(value)
                if(!isNaN(Number(value))) {
                    setValueFrom(Number(value))
                    setCurrentPage(1)
                }
            }}/>

        <input
            type="text"
            placeholder='Значение До'
            value={localValueTo}
            className={localValueTo != valueTo ? 'valueTo error-border' : 'valueTo'}
            onChange={(e) => {
                const value = e.currentTarget.value
                setLocalValueTo(value)
                if(!isNaN(Number(value))) {
                    setValueTo(Number(value))
                    setCurrentPage(1)
                }
            }}/>
    </div>
})
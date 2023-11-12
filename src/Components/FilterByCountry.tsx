import * as React from "react";
import '../App.css'
import {FilterByCountryProps} from "../types";

export const FilterByCountry = React.memo(({country, setCountry, setCurrentPage}: FilterByCountryProps) => {
    return <div>
        <div className="search_country">
            <input
                type="text"
                placeholder='Поиск Страны...'
                value={country}
                onChange={(e) => {
                    debugger
                    setCurrentPage(1)
                    setCountry(e.currentTarget.value)
                }}
                className='input_search'/>
        </div>
    </div>
})
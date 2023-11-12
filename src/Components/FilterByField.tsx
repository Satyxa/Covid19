import * as React from "react";
import '../App.css'
import {FilterByFieldProps} from "../types";
import {
    ALL_CASES, ALL_DEATHS,
    CASES,
    CASES_PER_1000,
    CASES_PER_DAY,
    COUNTRY,
    DEATHS,
    DEATHS_PER_1000, DEATHS_PER_DAY,
    FILTER_BY_FIELD
} from "../Utils/Constants";

export const FilterByField = React.memo(({setSortBy, sortBy}: FilterByFieldProps) => {
    return <div>
        <div className="filter">
            <select className='select__field' value={sortBy} onChange={e => setSortBy(e.currentTarget.value)}>
                <option value={FILTER_BY_FIELD}>Фильтровать по полю...</option>
                <option value={CASES}>Случаи за выбранный период</option>
                <option value={DEATHS}>Смерти за выбранный период</option>
                <option value={ALL_CASES}>Случаи за всё время</option>
                <option value={ALL_DEATHS}>Смерти за всё время</option>
                <option value={CASES_PER_1000}>Случаи на 1000 жителей</option>
                <option value={DEATHS_PER_1000}>Смерти на 1000 жителей</option>
                <option value={CASES_PER_DAY}>Максимальное кол-во случаев в день</option>
                <option value={DEATHS_PER_DAY}>Максимальное кол-во смертей в день</option>
            </select>
        </div>
    </div>
})
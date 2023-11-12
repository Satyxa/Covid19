import * as React from "react";
import {GeneralInfoByEvenCountryType, TableProps} from "../types";
import '../App.css'
import {
    ALL_CASES_ASC,
    ALL_CASES_DESC,
    ALL_DEATHS_ASC,
    ALL_DEATHS_DESC,
    AVERAGE_CASES_PER_DAY_ASC,
    AVERAGE_CASES_PER_DAY_DESC,
    AVERAGE_DEATHS_PER_DAY_ASC,
    AVERAGE_DEATHS_PER_DAY_DESC,
    CASES_ASC,
    CASES_DESC,
    CASES_PER_1000_PEOPLE_ASC,
    CASES_PER_1000_PEOPLE_DESC,
    COUNTRY_ASC,
    COUNTRY_DESC,
    DEATHS_ASC,
    DEATHS_DESC,
    DEATHS_PER_1000_PEOPLE_ASC,
    DEATHS_PER_1000_PEOPLE_DESC,
    MAX_CASES_PER_DAY_ASC,
    MAX_CASES_PER_DAY_DESC,
    MAX_DEATHS_PER_DAY_ASC,
    MAX_DEATHS_PER_DAY_DESC
} from "../Utils/Constants";
import {getCasesBy1000People, getDeathsBy1000People} from "../Utils/Getters";

export default React.memo(({dataWithPopulation, currentPage,
pageSize, setTableFilter, tableFilter}: TableProps) => {
    return <div>
        <thead>
        <tr>
            <th className={tableFilter === COUNTRY_DESC || tableFilter === COUNTRY_ASC ? 'th__active' : 'table-element-odd'}
                onClick={() => tableFilter === COUNTRY_ASC
                ? setTableFilter(COUNTRY_DESC)
                : setTableFilter(COUNTRY_ASC)}>
                Страна
                { tableFilter === COUNTRY_DESC ? '↓' : '↑'}
            </th>
            <th className={tableFilter === CASES_DESC || tableFilter === CASES_ASC ? 'th__active' : 'table-element-even'}
                onClick={() => tableFilter === CASES_ASC
                ? setTableFilter(CASES_DESC)
                : setTableFilter(CASES_ASC)}>
                Количество случаев
                { tableFilter === CASES_DESC ? '↓' : '↑'}
            </th>
            <th className={tableFilter === DEATHS_DESC || tableFilter === DEATHS_ASC ? 'th__active' : 'table-element-odd'}
                onClick={() => tableFilter === DEATHS_ASC
                ? setTableFilter(DEATHS_DESC)
                : setTableFilter(DEATHS_ASC)}>
                Количество смертей
                { tableFilter === DEATHS_DESC ? '↓' : '↑'}
            </th>
            <th className={tableFilter === ALL_CASES_DESC || tableFilter === ALL_CASES_ASC ? 'th__active' : 'table-element-even'}
                onClick={() => tableFilter === ALL_CASES_ASC
                ? setTableFilter(ALL_CASES_DESC)
                : setTableFilter(ALL_CASES_ASC)}>
                Количество случаев всего
                { tableFilter === ALL_CASES_DESC ? '↓' : '↑'}
            </th>
            <th className={tableFilter === ALL_DEATHS_DESC || tableFilter === ALL_DEATHS_ASC ? 'th__active' : 'table-element-odd'}
                onClick={() => tableFilter === ALL_DEATHS_ASC
                ? setTableFilter(ALL_DEATHS_DESC)
                : setTableFilter(ALL_DEATHS_ASC)}>
                Количество смертей всего
                { tableFilter === ALL_DEATHS_DESC ? '↓' : '↑'}
            </th>
            <th className={tableFilter === CASES_PER_1000_PEOPLE_DESC || tableFilter === CASES_PER_1000_PEOPLE_ASC ? 'th__active' : 'table-element-even'}
                onClick={() => tableFilter === CASES_PER_1000_PEOPLE_ASC
                ? setTableFilter(CASES_PER_1000_PEOPLE_DESC)
                : setTableFilter(CASES_PER_1000_PEOPLE_ASC)}>
                Количество случаев на 1000 жителей
                { tableFilter === CASES_PER_1000_PEOPLE_DESC ? '↓' : '↑'}
            </th>
            <th className={tableFilter === DEATHS_PER_1000_PEOPLE_DESC || tableFilter === DEATHS_PER_1000_PEOPLE_ASC ? 'th__active' : 'table-element-odd'}
                onClick={() => tableFilter === DEATHS_PER_1000_PEOPLE_ASC
                ? setTableFilter(DEATHS_PER_1000_PEOPLE_DESC)
                : setTableFilter(DEATHS_PER_1000_PEOPLE_ASC)}>
                Количество смертей на 1000 жителей
                { tableFilter === DEATHS_PER_1000_PEOPLE_DESC ? '↓' : '↑'}
            </th>
            <th className={tableFilter === AVERAGE_CASES_PER_DAY_DESC || tableFilter === AVERAGE_CASES_PER_DAY_ASC ? 'th__active' : 'table-element-even'}
                onClick={() => tableFilter === AVERAGE_CASES_PER_DAY_ASC
                    ? setTableFilter(AVERAGE_CASES_PER_DAY_DESC)
                    : setTableFilter(AVERAGE_CASES_PER_DAY_ASC)}>
                Среднее колличество случаев в день
                { tableFilter === AVERAGE_CASES_PER_DAY_DESC ? '↓' : '↑'}
            </th>
            <th className={tableFilter === AVERAGE_DEATHS_PER_DAY_DESC || tableFilter === AVERAGE_DEATHS_PER_DAY_ASC ? 'th__active' : 'table-element-odd'}
                onClick={() => tableFilter === AVERAGE_DEATHS_PER_DAY_ASC
                    ? setTableFilter(AVERAGE_DEATHS_PER_DAY_DESC)
                    : setTableFilter(AVERAGE_DEATHS_PER_DAY_ASC)}>
                Среднее колличество смертей в день
                { tableFilter === AVERAGE_DEATHS_PER_DAY_DESC ? '↓' : '↑'}
            </th>
            <th className={tableFilter === MAX_CASES_PER_DAY_DESC || tableFilter === MAX_CASES_PER_DAY_ASC ? 'th__active' : 'table-element-odd'}
                onClick={() => tableFilter === MAX_CASES_PER_DAY_ASC
                    ? setTableFilter(MAX_CASES_PER_DAY_DESC)
                    : setTableFilter(MAX_CASES_PER_DAY_ASC)}>
                Максимальное колличество случаев за день
                { tableFilter === MAX_CASES_PER_DAY_DESC ? '↓' : '↑'}
            </th>
            <th className={tableFilter === MAX_DEATHS_PER_DAY_DESC || tableFilter === MAX_DEATHS_PER_DAY_ASC ? 'th__active' : 'table-element-odd'}
                onClick={() => tableFilter === MAX_DEATHS_PER_DAY_ASC
                    ? setTableFilter(MAX_DEATHS_PER_DAY_DESC)
                    : setTableFilter(MAX_DEATHS_PER_DAY_ASC)}>
                Максимальное колличество смертей за день
                { tableFilter === MAX_DEATHS_PER_DAY_DESC ? '↓' : '↑'}
            </th>
        </tr>
        </thead>
        <tbody>
        {dataWithPopulation.map((el: GeneralInfoByEvenCountryType, i: number) => {

                const casesBy1000People = Number(getCasesBy1000People(el)).toFixed(3)
                const deathsBy1000People = Number(getDeathsBy1000People(el)).toFixed(3)
                const country = el.country.split('_').join(' ')

                const viewsElements = currentPage * pageSize
                const dataArray = [country, el.allCasesByPeriod,
                    el.allDeathsByPeriod, el.allCases, el.allDeaths, casesBy1000People,
                    deathsBy1000People, el.averageCasesPerDay, el.averageDeathsPerDay,
                    el.maxCasesPerDay, el.maxDeathsPerDay]

                if (i < viewsElements && i >= (viewsElements - pageSize)){
                    return (<tr>{dataArray.map(prop => <td className={i % 2 === 0 ? 'td_blue_color' : 'td_light-blue'}>{prop}</td>)}</tr>)}
            })}
        </tbody>
    </div>
})
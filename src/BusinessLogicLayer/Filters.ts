import {GeneralInfoByEvenCountryType} from "../types";
import {getCasesBy1000People, getDeathsBy1000People, sortByQuantity} from "../Utils/Getters";
import {
    ALL_CASES, ALL_DEATHS, AVERAGE_CASES_PER_DAY, AVERAGE_DEATHS_PER_DAY,
    CASES,
    CASES_PER_1000, CASES_PER_DAY,
    DEATHS,
    DEATHS_PER_1000, DEATHS_PER_DAY,
} from "../Utils/Constants";

export const getFilteredByQuantity = (filteredData: GeneralInfoByEvenCountryType[], sortBy: string, valueFrom: any, valueTo: any) => {
    let filteredDataByQuantity: GeneralInfoByEvenCountryType[];

    if (sortBy === CASES) filteredDataByQuantity = filteredData
        .filter(country => sortByQuantity(valueFrom, valueTo, country.allCasesByPeriod))
    else if (sortBy === DEATHS) filteredDataByQuantity = filteredData
        .filter(country => sortByQuantity(valueFrom, valueTo, country.allDeathsByPeriod))

    else if (sortBy === ALL_CASES) filteredDataByQuantity = filteredData
        .filter(country => sortByQuantity(valueFrom, valueTo, country.allCases))
    else if (sortBy === ALL_DEATHS) filteredDataByQuantity = filteredData
        .filter(country => sortByQuantity(valueFrom, valueTo, country.allDeaths))

    else if (sortBy === CASES_PER_1000) filteredDataByQuantity = filteredData
        .filter(country => sortByQuantity(valueFrom, valueTo, getCasesBy1000People(country)))
    else if (sortBy === DEATHS_PER_1000) filteredDataByQuantity = filteredData
        .filter(country => sortByQuantity(valueFrom, valueTo, getDeathsBy1000People(country)))

    else if (sortBy === AVERAGE_CASES_PER_DAY) filteredDataByQuantity = filteredData
        .filter(country => sortByQuantity(valueFrom, valueTo, country.averageCasesPerDay))
    else if (sortBy === AVERAGE_DEATHS_PER_DAY) filteredDataByQuantity = filteredData
        .filter(country => sortByQuantity(valueFrom, valueTo, country.averageDeathsPerDay))

    else if (sortBy === CASES_PER_DAY) filteredDataByQuantity = filteredData
        .filter(country => sortByQuantity(valueFrom, valueTo, country.maxCasesPerDay))
    else if (sortBy === DEATHS_PER_DAY) filteredDataByQuantity = filteredData
        .filter(country => sortByQuantity(valueFrom, valueTo, country.maxDeathsPerDay))

    else filteredDataByQuantity = filteredData
    return filteredDataByQuantity
}
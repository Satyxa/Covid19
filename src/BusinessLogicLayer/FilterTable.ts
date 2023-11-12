import {GeneralInfoByEvenCountryType} from "../types";
import {
    ALL_CASES_ASC,
    ALL_CASES_DESC,
    ALL_DEATHS_ASC,
    ALL_DEATHS_DESC,
    AVERAGE_CASES_PER_DAY_ASC,
    AVERAGE_CASES_PER_DAY_DESC,
    AVERAGE_DEATHS_PER_DAY_ASC, AVERAGE_DEATHS_PER_DAY_DESC,
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
import {sortByCountry, sortPer1000} from "../Utils/Getters";

export const filterTable = (tableFilter: string,
                            dataForSorting: GeneralInfoByEvenCountryType[]) => {

    let data: GeneralInfoByEvenCountryType[] = []
    if(tableFilter === CASES_ASC)data = dataForSorting
        .sort((a, b) => a.allCasesByPeriod - b.allCasesByPeriod)
    else if(tableFilter === CASES_DESC) data = dataForSorting
        .sort((a, b) => b.allCasesByPeriod - a.allCasesByPeriod)

    else if(tableFilter === DEATHS_ASC) data = dataForSorting
        .sort((a, b) => a.allDeathsByPeriod - b.allDeathsByPeriod)
    else if(tableFilter === DEATHS_DESC) data = dataForSorting
        .sort((a, b) => b.allDeathsByPeriod - a.allDeathsByPeriod)

    else if(tableFilter === ALL_CASES_ASC) data = dataForSorting
        .sort((a, b) => a.allCases - b.allCases)
    else if(tableFilter === ALL_CASES_DESC) data = dataForSorting
        .sort((a, b) => b.allCases - a.allCases)

    else if(tableFilter === ALL_DEATHS_ASC) data = dataForSorting
        .sort((a, b) => a.allDeaths - b.allDeaths)
    else if(tableFilter === ALL_DEATHS_DESC) data = dataForSorting
        .sort((a, b) => b.allDeaths - a.allDeaths)

    else if(tableFilter === CASES_PER_1000_PEOPLE_ASC) data = dataForSorting
        .sort((a, b) => sortPer1000(a, b, a.averageCasesPerDay, b.averageCasesPerDay))
    else if(tableFilter === CASES_PER_1000_PEOPLE_DESC) data = dataForSorting
        .sort((a, b) => sortPer1000(b, a, b.averageCasesPerDay, a.averageCasesPerDay))

    else if(tableFilter === DEATHS_PER_1000_PEOPLE_ASC) data = dataForSorting
        .sort((a, b) => sortPer1000(a, b, a.averageDeathsPerDay, b.averageDeathsPerDay))
    else if(tableFilter === DEATHS_PER_1000_PEOPLE_DESC) data = dataForSorting
        .sort((a, b) => sortPer1000(b, a, b.averageDeathsPerDay, a.averageDeathsPerDay))

    else if(tableFilter === AVERAGE_CASES_PER_DAY_ASC) data = dataForSorting
        .sort((a, b) =>  a.averageCasesPerDay - b.averageCasesPerDay)
    else if(tableFilter === AVERAGE_CASES_PER_DAY_DESC) data = dataForSorting
        .sort((a, b) => b.averageCasesPerDay - a.averageCasesPerDay)

    else if(tableFilter === AVERAGE_DEATHS_PER_DAY_ASC) data = dataForSorting
        .sort((a, b) =>  a.averageDeathsPerDay - b.averageDeathsPerDay)
    else if(tableFilter === AVERAGE_DEATHS_PER_DAY_DESC) data = dataForSorting
        .sort((a, b) => b.averageDeathsPerDay - a.averageDeathsPerDay)

    else if(tableFilter === MAX_CASES_PER_DAY_ASC) data = dataForSorting
        .sort((a, b) =>  a.maxCasesPerDay - b.maxCasesPerDay)
    else if(tableFilter === MAX_CASES_PER_DAY_DESC) data = dataForSorting
        .sort((a, b) => b.maxCasesPerDay - a.maxCasesPerDay)

    else if(tableFilter === MAX_DEATHS_PER_DAY_ASC) data = dataForSorting
        .sort((a, b) => a.maxDeathsPerDay - b.maxDeathsPerDay)
    else if(tableFilter === MAX_DEATHS_PER_DAY_DESC) data = dataForSorting
        .sort((a, b) => b.maxDeathsPerDay - a.maxDeathsPerDay)

        else if(tableFilter === COUNTRY_ASC) data = dataForSorting
        .sort((a, b) => sortByCountry(a, b, 'asc'))
        else if(tableFilter === COUNTRY_DESC) data = dataForSorting
        .sort((a, b) => sortByCountry(a, b, 'desc'))
    else return data

    return data
}

// asc - алфавит
// desc - наоборот
import {Dispatch, SetStateAction} from "react";

export type covid19Data = {
    dateRep: string,
    day: number,
    month: number,
    year: number,
    cases: number,
    deaths: number,
    countriesAndTerritories: string,
    geoId: string,
    countryterritoryCode: string,
    popData2019: number,
    continentExp: string,
    // @ts-ignore
    Cumulative: string
}

export type monthStaticType = {
    cases: number
    deaths: number
    month: string
}

export type GeneralInfoByEvenCountryType = {
    allCases: number
    allCasesByPeriod: number
    allDeaths: number
    allDeathsByPeriod: number
    country: string
    averageCasesPerDay: number
    averageDeathsPerDay: number
    population: number
    days: number,
    maxCasesPerDay: number
    maxDeathsPerDay: number
    infoByMonths: monthStaticType[]
}


export type periodStatic = {
    cases: number
    deaths: number
    startDate: string
}

export type populationDataType = {
    population: number
    name: string
}

export type PaginationProps = {
    dataWithPopulation: GeneralInfoByEvenCountryType[]
    setCurrentPage: Dispatch<SetStateAction<number>>
    pageSize: number
    currentPage: number
}

export type ChooseDateProps = {
    setStartDate: Dispatch<SetStateAction<Date>>
    setEndDate: Dispatch<SetStateAction<Date>>
    startDate: Date
    endDate: Date
}

export type FilterByCountryProps = {
    country: string
    setCountry: Dispatch<SetStateAction<string>>
}

export type FilterByFieldProps = {
    setSortBy: Dispatch<SetStateAction<string>>
    sortBy: string
}

export type FilterByQuantityProps = {
    valueFrom: any
    valueTo: any
    setValueFrom: Dispatch<SetStateAction<any>>
    setValueTo: Dispatch<SetStateAction<any>>
    localValueFrom: any
    setLocalValueFrom: Dispatch<SetStateAction<any>>
    setLocalValueTo: Dispatch<SetStateAction<any>>
    localValueTo: any
    setCurrentPage: Dispatch<SetStateAction<number>>
}

export type GraphicProps = {
    graphicData: monthStaticType[],
    graphicCountries: string[],
    setGraphicCountries: Dispatch<SetStateAction<any[]>>
    GeneralInfoByEvenCountry: GeneralInfoByEvenCountryType[]
}

export type PageSizeProps = {
    pageSizeSubtitle: string
    setPageSizeSubtitle: Dispatch<SetStateAction<string>>
    setPageSize: Dispatch<SetStateAction<number>>
    localPageSize: any
    setLocalPageSize: Dispatch<SetStateAction<any>>
}

export type PaginationButtonsProps = {
    dataWithPopulation: GeneralInfoByEvenCountryType[]
    setCurrentPage: Dispatch<SetStateAction<number>>
    pageSize: number
    currentPage: number
}

export type TableProps = {
    filteredDataByQuantity: GeneralInfoByEvenCountryType[]
    currentPage: number
    pageSize: number
    setTableFilter: Dispatch<SetStateAction<string>>
    tableFilter: string
}

export type ResetButtonProps = {
    setValueFrom: Dispatch<SetStateAction<any>>
    setValueTo:Dispatch<SetStateAction<any>>
    setCountry:Dispatch<SetStateAction<string>>
    setSortBy:Dispatch<SetStateAction<string>>
    setLocalValueFrom: Dispatch<SetStateAction<any>>
    setLocalValueTo: Dispatch<SetStateAction<any>>
}
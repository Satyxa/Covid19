import {GeneralInfoByEvenCountryType} from "../types";

export const getCountryName = (el: GeneralInfoByEvenCountryType) => el.country.toLowerCase()

export const getCasesBy1000People = (el: GeneralInfoByEvenCountryType) => el.population ? el.allCasesByPeriod / el.population * 1000 : 0

export const getDeathsBy1000People = (el: GeneralInfoByEvenCountryType) => el.population ? el.allDeathsByPeriod / el.population * 1000 : 0

export const sortByQuantity = (valueFrom: any, valueTo: any, sortBy: number) => (valueFrom ? sortBy >= valueFrom : true)
                                                                            && (valueTo ? sortBy <= valueTo : true)
export const sortPer1000 = (a: GeneralInfoByEvenCountryType, b: GeneralInfoByEvenCountryType, sortByA: number, sortByB: number) => {
    const A = a.population ? sortByA / a.population * 1000 : 0
    const B = b.population ? sortByB / b.population * 1000 : 0
    debugger
    return A - B
}

export const sortByCountry = (a: GeneralInfoByEvenCountryType, b: GeneralInfoByEvenCountryType, sortType: string) => {
    if( a.country.toLowerCase() < b.country.toLowerCase() ) return sortType === 'asc' ? -1 : 1
    else if(a.country.toLowerCase() > b.country.toLowerCase()) return sortType === 'asc' ? 1 : -1
    else return 0
}

export const getFilteredDataByCountry = (GeneralInfoByEvenCountry: GeneralInfoByEvenCountryType[], country: string) =>
    GeneralInfoByEvenCountry.filter(c => c.country.toLowerCase().startsWith(country.toLowerCase()))
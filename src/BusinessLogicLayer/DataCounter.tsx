import {covid19Data, GeneralInfoByEvenCountryType} from "../types";
import {useEffect} from "react";
import {getCountryPopulation} from "../data access layer/getData";

export const dataCounter = (data: covid19Data[], startDate: Date, endDate: Date) => {
    const GeneralInfoByEvenCountry: GeneralInfoByEvenCountryType[] = []
    data.map((el: covid19Data) => {
        const countryData: undefined | GeneralInfoByEvenCountryType =
            GeneralInfoByEvenCountry.find(d => d.country === el.countriesAndTerritories)

        let allCases: number = countryData ? countryData.allCases : 0
        let allDeaths: number = countryData ? countryData.allDeaths : 0
        let allCasesByPeriod: number = 0
        let allDeathsByPeriod: number = 0

        if (!countryData) {

            data.map((prop: covid19Data) => {
                if (el.countriesAndTerritories === prop.countriesAndTerritories) {
                    allCases += prop.cases
                    allDeaths += prop.deaths
                    const propertyDate = new Date(prop.dateRep.replace(/(\d+).(\d+).(\d+)/,
                        '$3/$2/$1'))

                    if (propertyDate >= startDate && propertyDate <= endDate) {
                        allCasesByPeriod += prop.cases
                        allDeathsByPeriod += prop.deaths
                    }
                }
            })
        }
        if (!countryData) {
            GeneralInfoByEvenCountry.push({
                country: el.countriesAndTerritories,
                allCases,
                allDeaths,
                allCasesByPeriod,
                allDeathsByPeriod
            })
        }
    })
    return GeneralInfoByEvenCountry
}
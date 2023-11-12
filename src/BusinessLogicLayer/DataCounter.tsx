import {covid19Data, GeneralInfoByEvenCountryType, periodStatic} from "../types";
import {getCountryName} from "../Utils/Getters";

export const dataCounter = (data: covid19Data[], startDate: Date, endDate: Date) => {
    const GeneralInfoByEvenCountry: GeneralInfoByEvenCountryType[] = []

    data.map((el: covid19Data) => {
        const countryData: undefined | GeneralInfoByEvenCountryType =
            GeneralInfoByEvenCountry.find(d => d.country === el.countriesAndTerritories)
        let allCases: number = countryData ? countryData.allCases : 0
        let allDeaths: number = countryData ? countryData.allDeaths : 0
        let allCasesByPeriod: number = 0
        let allDeathsByPeriod: number = 0
        let days = 0
        let maxCasesPerDay = 0
        let maxDeathsPerDay = 0
        if (!countryData) {
            data.map((prop: covid19Data) => {
                if (el.countriesAndTerritories === prop.countriesAndTerritories) {
                    allCases += prop.cases
                    allDeaths += prop.deaths

                    const propertyDate = new Date(prop.dateRep.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'))

                    if (propertyDate >= startDate && propertyDate <= endDate) {
                        days++
                        allCasesByPeriod += prop.cases
                        allDeathsByPeriod += prop.deaths
                        if(prop.cases > maxCasesPerDay) maxCasesPerDay = prop.cases
                        if(prop.deaths > maxDeathsPerDay) maxDeathsPerDay = prop.deaths
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
                allDeathsByPeriod,
                averageCasesPerDay: Number((allCasesByPeriod / days).toFixed(3)),
                averageDeathsPerDay: Number((allDeathsByPeriod / days).toFixed(3)),
                days,
                maxCasesPerDay,
                maxDeathsPerDay
            })
        }
    })
    return GeneralInfoByEvenCountry
}

 export const dataCounterGraphic = (data: covid19Data[], graphicCountries: string[], startDate: Date, endDate: Date) => {
    let periods: periodStatic[] = []
    const dates = ['01/12/2019','01/01/2020', '01/02/2020', '01/03/2020', '01/04/2020', '01/05/2020', '01/06/2020', '01/07/2020',
        '01/08/2020', '01/09/2020', '01/10/2020', '01/11/2020', '01/12/2020']
    data.map((el) => {
        const elementMonth = el.dateRep.split('/')[1]
        const elementYear = el.dateRep.split('/')[2]
        const elementDate = new Date(el.dateRep.replace(
            /(\d+).(\d+).(\d+)/,
            '$3/$2/$1'))

        if(elementDate < startDate || elementDate > endDate) return
       if(!dates.includes(`01/${elementMonth}/${elementYear}`, 0)) return

        const month = `01/${elementMonth}/${elementYear}`

        let allCasesForMonth = 0
        let allDeathForMonth = 0
        data.map(prop => {

            const propDate = new Date(prop.dateRep.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'))
            if(propDate < startDate || propDate > endDate) return

    if(!graphicCountries.includes(prop.countriesAndTerritories, 0) && graphicCountries.length) return

            const propDateArray: string[] = prop.dateRep.split('/')
            const propDateWithYear = `01/${propDateArray[1]}/${propDateArray[2]}`
            const date = dates[dates.length - 1]
            if(propDateWithYear === date) {
                allCasesForMonth += prop.cases
                allDeathForMonth += prop.deaths
            }
        })

        periods.push({
            startDate: month,
            cases: allCasesForMonth,
            deaths: allDeathForMonth
        })
        dates.splice(dates.length - 1, 1)
    })
    return periods
}

export const addPopulationToData =
    (dataAboutCovid: GeneralInfoByEvenCountryType[], dataAboutPopulation: any[]): GeneralInfoByEvenCountryType[] => {
        return dataAboutCovid.map((el: GeneralInfoByEvenCountryType) => {
            const countryName = getCountryName(el)
            const countryInfo = dataAboutPopulation
                .find(ci => ci.name.toLowerCase().startsWith(countryName, 0))

            if (countryInfo) el.population = countryInfo.population
            else el.population = 0
            return el
    })
}


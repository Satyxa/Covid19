import {covid19Data, GeneralInfoByEvenCountryType, monthStaticType, periodStatic} from "../types";
import {getCountryName} from "../Utils/Getters";


export const dataCounter = (data: covid19Data[], startDate: Date, endDate: Date) => {
    const GeneralInfoByEvenCountry: GeneralInfoByEvenCountryType[] = []

    data.map((el: covid19Data) => {
        const countryData: undefined | GeneralInfoByEvenCountryType =
            GeneralInfoByEvenCountry.find(d => d.country === el.countriesAndTerritories)
        const dateOfInfo = new Date(el.dateRep.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'))

        let allCasesByPeriod: number = 0
        let allDeathsByPeriod: number = 0

        if (!countryData) {

            if (dateOfInfo >= startDate && dateOfInfo <= endDate) {
                GeneralInfoByEvenCountry.push({
                    country: el.countriesAndTerritories,
                    allCases: el.cases,
                    allDeaths: el.deaths,
                    allCasesByPeriod: allCasesByPeriod > 0 ? allCasesByPeriod : 0,
                    allDeathsByPeriod: allDeathsByPeriod > 0 ? allDeathsByPeriod : 0,
                    averageCasesPerDay: allCasesByPeriod > 0 ? allCasesByPeriod : 0,
                    averageDeathsPerDay: allDeathsByPeriod > 0 ? allDeathsByPeriod : 0,
                    population: el.popData2019,
                    days: 1,
                    maxCasesPerDay: el.cases,
                    maxDeathsPerDay: el.deaths,
                    infoByMonths: [
                        {
                            month: '12/2019',
                            cases: endDate.getMonth() === 11 && endDate.getFullYear() === 2019 ? el.cases : 0,
                            deaths: endDate.getMonth() === 11 && endDate.getFullYear() === 2019 ? el.deaths : 0
                        },
                        {
                            month: '01/2020',
                            cases: endDate.getMonth() === 0 ? el.cases : 0,
                            deaths: endDate.getMonth() === 0 ? el.deaths : 0
                        },
                        {
                            month: '02/2020',
                            cases: endDate.getMonth() === 1 ? el.cases : 0,
                            deaths: endDate.getMonth() === 1 ? el.deaths : 0
                        },
                        {
                            month: '03/2020',
                            cases: endDate.getMonth() === 2 ? el.cases : 0,
                            deaths: endDate.getMonth() === 2 ? el.deaths : 0
                        },
                        {
                            month: '04/2020',
                            cases: endDate.getMonth() === 3 ? el.cases : 0,
                            deaths: endDate.getMonth() === 3 ? el.deaths : 0
                        },
                        {
                            month: '05/2020',
                            cases: endDate.getMonth() === 4 ? el.cases : 0,
                            deaths: endDate.getMonth() === 4 ? el.deaths : 0
                        },
                        {
                            month: '06/2020',
                            cases: endDate.getMonth() === 5 ? el.cases : 0,
                            deaths: endDate.getMonth() === 5 ? el.deaths : 0
                        },
                        {
                            month: '07/2020',
                            cases: endDate.getMonth() === 6 ? el.cases : 0,
                            deaths: endDate.getMonth() === 6 ? el.deaths : 0
                        },
                        {
                            month: '08/2020',
                            cases: endDate.getMonth() === 7 ? el.cases : 0,
                            deaths: endDate.getMonth() === 7 ? el.deaths : 0
                        },
                        {
                            month: '09/2020',
                            cases: endDate.getMonth() === 8 ? el.cases : 0,
                            deaths: endDate.getMonth() === 8 ? el.deaths : 0
                        },
                        {
                            month: '10/2020',
                            cases: endDate.getMonth() === 9 ? el.cases : 0,
                            deaths: endDate.getMonth() === 9 ? el.deaths : 0
                        },
                        {
                            month: '11/2020',
                            cases: endDate.getMonth() === 10 ? el.cases : 0,
                            deaths: endDate.getMonth() === 10 ? el.deaths : 0
                        },
                        {
                            month: '12/2020',
                            cases: endDate.getMonth() === 11 && endDate.getFullYear() === 2020 ? el.cases : 0,
                            deaths: endDate.getMonth() === 11 && endDate.getFullYear() === 2020 ? el.deaths : 0,
                        },
                    ]
                })
            }


        } else {
            GeneralInfoByEvenCountry.find((data) => {
                if (data.country === el.countriesAndTerritories) {
                    data.allCases += el.cases
                    data.allDeaths += el.deaths
                    if (dateOfInfo >= startDate && dateOfInfo <= endDate) {
                        data.days++
                        data.allCasesByPeriod += el.cases
                        data.allDeathsByPeriod += el.deaths
                        if (el.cases > data.maxCasesPerDay) data.maxCasesPerDay = el.cases
                        if (el.deaths > data.maxDeathsPerDay) data.maxDeathsPerDay = el.deaths
                        data.averageDeathsPerDay = Number((data.allDeathsByPeriod / data.days).toFixed(3))
                        data.averageCasesPerDay = Number((data.allCasesByPeriod / data.days).toFixed(3))

                        const elementDate = el.dateRep.split('/')
                        const currentDate = `${elementDate[1]}/${elementDate[2]}`
                        data.infoByMonths.find((date: monthStaticType) => {
                            if(date.month === currentDate){
                                date.cases += el.cases
                                date.deaths += el.deaths
                            }
                        })
                    }
                }
            })
        }
    })
    return GeneralInfoByEvenCountry
}

export const dataCounterGraphic = (GeneralInfoByEvenCountry: GeneralInfoByEvenCountryType[],
                                   graphicCountries: string[]) => {

    let periods: monthStaticType[] = [
        {
            month: '12/2019',
            cases: 0,
            deaths: 0
        },
        {
            month: '01/2020',
            cases: 0,
            deaths: 0
        },
        {
            month: '02/2020',
            cases: 0,
            deaths: 0
        },
        {
            month: '03/2020',
            cases: 0,
            deaths: 0
        },
        {
            month: '04/2020',
            cases: 0,
            deaths: 0
        },
        {
            month: '05/2020',
            cases: 0,
            deaths: 0
        },
        {
            month: '06/2020',
            cases: 0,
            deaths: 0
        },
        {
            month: '07/2020',
            cases: 0,
            deaths: 0
        },
        {
            month: '08/2020',
            cases: 0,
            deaths: 0
        },
        {
            month: '09/2020',
            cases: 0,
            deaths: 0
        },
        {
            month: '10/2020',
            cases: 0,
            deaths: 0
        },
        {
            month: '11/2020',
            cases: 0,
            deaths: 0
        },
        {
            month: '12/2020',
            cases: 0,
            deaths: 0,
        },
    ]

     GeneralInfoByEvenCountry.map((country) => {
         if (!graphicCountries.includes(country.country, 0) && graphicCountries.length) return

         country.infoByMonths.forEach(prop => {

             periods.find(value => {
                 if (prop.month === value.month) {
                     value.cases += prop.cases
                     value.deaths += prop.deaths
                 }
             })
         })

     })

    return periods
}


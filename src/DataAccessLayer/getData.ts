import axios from "axios";
import {covid19Data} from "../types";

export const getCovidStatic = async (): Promise<any> => await axios.get('https://opendata.ecdc.europa.eu/covid19/casedistribution/json/')
    .then(res => res.data.records)
const options = {
    method: 'GET',
    url: 'https://country-location-api.p.rapidapi.com/location',
    params: {country: 'Afghanistan'},
    headers: {
        'X-RapidAPI-Key': '2cef836714mshe09c53a202a72f8p1f940djsnbdb52a953408',
        'X-RapidAPI-Host': 'country-location-api.p.rapidapi.com'
    }
};
export const getCountryPopulation = async (country: string) => await axios.request({
    method: 'GET',
    url: 'https://country-location-api.p.rapidapi.com/location',
    params: {country},
    headers: {
        'X-RapidAPI-Key': '2cef836714mshe09c53a202a72f8p1f940djsnbdb52a953408',
        'X-RapidAPI-Host': 'country-location-api.p.rapidapi.com'
    }
}).then(res => res.data.location.population)
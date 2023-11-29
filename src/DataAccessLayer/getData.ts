import axios from "axios";

export const getCovidStatic = async (): Promise<any> => await axios.get('https://opendata.ecdc.europa.eu/covid19/casedistribution/json/')
    .then(res => res.data.records)
import * as React from 'react'
import './App.css'
import "react-datepicker/dist/react-datepicker.css";
import {memo, useEffect, useMemo, useState} from "react";
import {monthStaticType} from "./types";
import {Pagination} from "./Components/Pagination";
import {FilterByCountry} from "./Components/FilterByCountry";
import {FilterByField} from "./Components/FilterByField";
import {FilterByQuantity} from "./Components/FilterByQuantity";
import {ResetButton} from "./Components/ResetButton";
import Table from "./Components/Table";
import {dataCounter, dataCounterGraphic} from "./BusinessLogicLayer/DataCounter";
import {getCovidStatic} from "./DataAccessLayer/getData";
import {
    COUNTRY,
    COUNTRY_ASC,
    DEFAULT_END_DATE,
    DEFAULT_START_DATE,
    GRAPHIC, SET_PAGE_SIZE_SUBTITLE,
    TABLE
} from "./Utils/Constants";
import {filterTable} from "./BusinessLogicLayer/FilterTable";
import {ChooseDate} from "./Components/ChooseDate";
import {Graphic} from "./Components/Graphic";
import {getFilteredByQuantity} from './BusinessLogicLayer/Filters'
import {PageSize} from "./Components/PageSize";
import {getFilteredDataByCountry} from "./Utils/Getters";
import noData from '../src/assets/no_data.svg'

const covidTable = memo(function App() {
    const [data, setData] = useState<any[]>([])

    useEffect(() => {
        const getInfo = async () => {
            const covidData = await getCovidStatic()
            setData(covidData)
        }
        getInfo()
    }, [])

    const [startDate, setStartDate] = useState(DEFAULT_START_DATE)
    const [endDate, setEndDate] = useState(DEFAULT_END_DATE)

    const [graphicCountries, setGraphicCountries] = useState<any>([])
    const [country, setCountry] = useState('')
    const [periods, setPeriods] = useState([])

    const [sortBy, setSortBy] = useState(COUNTRY)

    const [valueFrom, setValueFrom] = useState<any>()
    const [valueTo, setValueTo] = useState<any>()
    const [localValueFrom, setLocalValueFrom] = useState<any>()
    const [localValueTo, setLocalValueTo] = useState<any>()

    const [tableFilter, setTableFilter] = useState(COUNTRY_ASC)

    const [dataFormat, setDataFormat] = useState(TABLE)

    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(3)
    const [localPageSize, setLocalPageSize] = useState<any>(3)
    const [pageSizeSubtitle, setPageSizeSubtitle] = useState(SET_PAGE_SIZE_SUBTITLE)

    const GeneralInfoByEvenCountry = useMemo(
        () => dataCounter(data, startDate, endDate),
        [data, startDate, endDate])

    const GraphicData: monthStaticType[] = useMemo(
        () => dataCounterGraphic(GeneralInfoByEvenCountry, graphicCountries),
        [GeneralInfoByEvenCountry, graphicCountries])

    console.log(GraphicData)

    const filteredDataByCountry = useMemo(
        () => getFilteredDataByCountry(GeneralInfoByEvenCountry, country),
        [GeneralInfoByEvenCountry, country])

    const filteredDataByQuantity = useMemo(
        () => getFilteredByQuantity(filteredDataByCountry, sortBy, valueFrom, valueTo),
        [filteredDataByCountry, sortBy, valueFrom, valueTo])

    useMemo(() => filterTable(tableFilter, filteredDataByQuantity),
        [tableFilter, filteredDataByQuantity])

    useMemo(() => setCurrentPage(1), [pageSize, filteredDataByQuantity])
    return <div>
        <div className="content">
            <ChooseDate setStartDate={setStartDate}
                        setEndDate={setEndDate}
                        startDate={startDate}
                        endDate={endDate}/>
            <div className='table_and_graphic'>
                <button className={dataFormat === TABLE ? 'table-button buttonHover' : 'table-button'}
                        onClick={() => setDataFormat(TABLE)}>Таблица
                </button>
                <button className={dataFormat === GRAPHIC ? 'graphic-button buttonHover' : 'graphic-button'}
                        onClick={() => setDataFormat(GRAPHIC)}>График
                </button>
            </div>
            <div className='table'>
                {dataFormat === TABLE ? <div>
                        <div className="options">
                            <div className='sort'>

                                <FilterByCountry
                                    country={country}
                                    setCountry={setCountry}/>

                                <FilterByField
                                    setSortBy={setSortBy}
                                    sortBy={sortBy}/>
                                <PageSize pageSizeSubtitle={pageSizeSubtitle}
                                          setPageSizeSubtitle={setPageSizeSubtitle}
                                          setPageSize={setPageSize}
                                          localPageSize={localPageSize}
                                          setLocalPageSize={setLocalPageSize}/>

                                <FilterByQuantity
                                    valueFrom={valueFrom}
                                    valueTo={valueTo}
                                    setValueFrom={setValueFrom}
                                    setValueTo={setValueTo}
                                    localValueFrom={localValueFrom}
                                    localValueTo={localValueTo}
                                    setLocalValueFrom={setLocalValueFrom}
                                    setLocalValueTo={setLocalValueTo}
                                    setCurrentPage={setCurrentPage}/>
                            </div>
                            <ResetButton
                                setValueFrom={setValueFrom}
                                setValueTo={setValueTo}
                                setCountry={setCountry}
                                setSortBy={setSortBy}
                                setLocalValueFrom={setLocalValueFrom}
                                setLocalValueTo={setLocalValueTo}/>
                        </div>
                        {filteredDataByQuantity.length ?
                            <div className="table-body">
                                <Table filteredDataByQuantity={filteredDataByQuantity}
                                       currentPage={currentPage}
                                       pageSize={pageSize}
                                       setTableFilter={setTableFilter}
                                       tableFilter={tableFilter}/>

                                <div className="pagination-box">
                                    <Pagination dataWithPopulation={filteredDataByQuantity}
                                                setCurrentPage={setCurrentPage}
                                                pageSize={pageSize}
                                                currentPage={currentPage}/>
                                </div>
                            </div>
                            : <div>
                                <div className="no__data">
                                    <div className="no__data__container">
                                        <p className='no__data__text'>Ничего не найдено</p>
                                        <img src={noData} alt=""/>
                                    </div>
                                </div>
                            </div>}
                    </div>
                    :
                    <Graphic GeneralInfoByEvenCountry={GeneralInfoByEvenCountry}
                             graphicData={GraphicData}
                             graphicCountries={graphicCountries}
                             setGraphicCountries={setGraphicCountries}/>
                }
            </div>
        </div>
    </div>

})

export default covidTable;

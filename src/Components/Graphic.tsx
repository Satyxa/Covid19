import {AreaChart} from "./GraphicCreator";
import * as React from "react";
import {GraphicProps} from "../types";

export const Graphic = React.memo(({GeneralInfoByEvenCountry, graphicData, graphicCountries, setGraphicCountries}: GraphicProps) => {
    return <div className="graphic">
        <div className="graphic__wrapper">
            <AreaChart periods={graphicData}/>

            <div className="filter__container">
                <select className='graphic__filter'
                        onChange={e => {
                            const value = e.currentTarget.value
                            if(value !== 'Все страны') setGraphicCountries([...graphicCountries, value])
                            else setGraphicCountries([])
                        }}>
                    <option value='Все страны'>Все страны</option>
                    {GeneralInfoByEvenCountry.map(d => <option value={d.country}>{d.country}</option>)}
                </select>

                <div className="countries__container">
                    <p className='countries__container-title'>Выбранные страны:</p>
                    {graphicCountries.map(c => <span className='countries__container-subtitle'>{c}, </span>)}
                </div>

                <div className="reset__graphicCountries__container">
                    <button className={graphicCountries.length ? "reset__graphicCountries" : 'none'}
                            onClick={() => setGraphicCountries([])}>Показать все страны</button>
                </div>
            </div>
        </div>
    </div>
})
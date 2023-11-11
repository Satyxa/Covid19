import {Dispatch, SetStateAction, useState} from "react";
import {GeneralInfoByEvenCountryType} from "./types";
import * as React from "react";
import '../App.css'
type props = {
    GeneralInfoByEvenCountry: GeneralInfoByEvenCountryType[]
    setCurrentPage: Dispatch<SetStateAction<number>>
    pageSize: number
}

export const Pagination = ({GeneralInfoByEvenCountry, setCurrentPage, pageSize}: props) => {
    const arrowLeft = '<<'
    const arrowRight = '>>'
    const totalCount = GeneralInfoByEvenCountry.length
    const pages = Math.ceil(totalCount / pageSize)

    return <div>
        <div className="pagination">
            <div className="pagination__wrapper">
                <button className="pagination__button-arrows" onClick={() => {
                    setCurrentPage(1)}
                } value='1'> {arrowLeft}  </button>
                <button className="pagination__button" value='1'>1</button>
                <button className="pagination__button" value='2'>2</button>
                <button className="pagination__button" value='3'>3</button>
                <button className="pagination__button" value='4'>4</button>
                <p className="pagination__dod">...</p>
                <button className="pagination__button-arrows" onClick={() => {
                    setCurrentPage(pages)}
                } value='6'>{arrowRight}</button>
            </div>
        </div>
    </div>
}
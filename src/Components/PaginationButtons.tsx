import * as React from "react";
import '../App.css'
import {PaginationButtonsProps} from "../types";

export const PaginationButtons = ({dataWithPopulation, currentPage, setCurrentPage, pageSize}: PaginationButtonsProps) => {
    const totalCount = dataWithPopulation.length
    const pages = Math.ceil(totalCount / pageSize)
    return <div className='pagination__buttons-wrapper'>
        {dataWithPopulation.map((el, i) => {
            if (i <= pages && i >= 1 && i < (currentPage === 1 ? currentPage + 3 : currentPage + 2) && i > (currentPage - 2)) {
                return <button
                    onClick={() => setCurrentPage(i)}
                    className={i % 2 === 0
                        ? 'pagination__button pagination__button-even'
                        : 'pagination__button pagination__button-odd'}>{i}</button>}})}
    </div>
}
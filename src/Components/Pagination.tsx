import {PaginationProps} from "../types";
import * as React from "react";
import '../App.css'
import { PaginationButtons } from "./PaginationButtons";
import {ARROW_LEFT, ARROW_RIGHT} from "../Utils/Constants";

export const Pagination = React.memo(({dataWithPopulation, setCurrentPage, pageSize, currentPage}: PaginationProps) => {
    const totalCount = dataWithPopulation.length
    const pages = Math.ceil(totalCount / pageSize)
    return <div>
        <div className="pagination">
            <div className="pagination__wrapper">
                <button className={pages > 3 ? "pagination__button-arrows" : "none"} onClick={() => setCurrentPage(1)}>{ARROW_LEFT}</button>
                <PaginationButtons pageSize={pageSize} currentPage={currentPage} setCurrentPage={setCurrentPage} dataWithPopulation={dataWithPopulation} />
                <button className={pages > 3 ? "pagination__button-arrows" : "none"} onClick={() => setCurrentPage(pages)}>{ARROW_RIGHT}</button>
            </div>
        </div>
    </div>
})
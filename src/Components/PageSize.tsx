import * as React from "react";
import '../App.css'
import {PageSizeProps} from "../types";
import {NUMBER_RANGE_MISTAKE, ONLY_NUMBER_MISTAKE, SET_PAGE_SIZE_SUBTITLE} from "../Utils/Constants";


export const PageSize = React.memo(({pageSizeSubtitle, setPageSizeSubtitle, setPageSize, localPageSize, setLocalPageSize}: PageSizeProps) => {

    return <div className="change__pageSize-wrapper">
        <input
            type="text"
            value={localPageSize}
            className='change__pageSize'
            onChange={(e) => {
                const value = Number(e.currentTarget.value)
                if (isNaN(value)) {
                    setLocalPageSize(value)
                    setPageSizeSubtitle(ONLY_NUMBER_MISTAKE)
                }
                else if (value < 1 || value > 20) {
                    setLocalPageSize(value)
                    setPageSizeSubtitle(NUMBER_RANGE_MISTAKE)
                }
                else {
                    setLocalPageSize(value)
                    setPageSize(value)
                    setPageSizeSubtitle(SET_PAGE_SIZE_SUBTITLE)
                }
            }}/>
        <p className={pageSizeSubtitle.startsWith('З', 0) ? 'change__pageSize-subtitle' : 'change__pageSize-subtitle error-color'}>{pageSizeSubtitle}</p>
    </div>
})
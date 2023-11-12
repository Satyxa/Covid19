import * as React from "react";
import {ResetButtonProps} from "../types";
import {FILTER_BY_FIELD} from "../Utils/Constants";



export const ResetButton = React.memo(({setValueFrom, setValueTo, setCountry, setSortBy,
                                           setLocalValueFrom, setLocalValueTo}: ResetButtonProps) => {
    return <div>
        <div className="reset">
            <button className="reset_filters" onClick={() => {
                setLocalValueFrom('')
                setLocalValueTo('')
                setValueFrom('')
                setValueTo('')
                setCountry('')
                setSortBy(FILTER_BY_FIELD)
            }
            }>Сбросить Фильтры</button>
        </div>

    </div>
})
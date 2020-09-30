import React, { useState } from "react"
import { useDispatch, } from "react-redux";
import { Input, Menu, } from "semantic-ui-react";

import { stocksError, stocksLoaded, stocksLoading } from "../../actions";
import useInterval from "../../hooks/useInterval";

import TipRanksApi from "../../lib/tipranks/TipRanksApi";

function ActionMenu() {
    const dispatch = useDispatch()

    const [allowSearch, setAllowSearch] = useState(true);

    useInterval(() => {
        setAllowSearch(true)
    }, allowSearch ? 1000 : null);

    function loadStocks(event) {
        dispatch(stocksError(false))
        dispatch(stocksLoading(true))

        TipRanksApi.GetAutocomplete(event.target.value)
            .then(response => {
                if (!response.success) {
                    dispatch(stocksError(true))
                    return
                }

                dispatch(stocksLoaded(response.data))
            })
            .finally(response => {
                dispatch(stocksLoading(false))
            })
    }

    return (
        <React.Fragment>
            <Menu>
                <Menu.Item >
                    <Input icon='search' placeholder='Search...' onChange={loadStocks} disabled={!allowSearch} />
                </Menu.Item>
            </Menu>
        </React.Fragment>
    )
}

export default ActionMenu;
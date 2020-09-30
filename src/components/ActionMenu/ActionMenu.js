import React, { useState } from "react"
import { useDispatch, useSelector, } from "react-redux";
import { Input, Menu, } from "semantic-ui-react";

import { stocksError, stocksLoaded, stocksLoading } from "../../actions";
import useInterval from "../../hooks/useInterval";

import TipRanksApi from "../../lib/tipranks/TipRanksApi";

function ActionMenu() {
    const dispatch = useDispatch()

    const loading = useSelector((state) => state.stocks.loading)

    const [allowSearch, setAllowSearch] = useState(true);

    useInterval(() => {
        setAllowSearch(true)
    }, allowSearch ? 1000 : null);

    function loadStocks(event) {
        if (loading) {
            setAllowSearch(false)
            return
        }

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
                    <Input icon='search' placeholder='Search...' onChange={allowSearch && loadStocks} />
                </Menu.Item>
            </Menu>
        </React.Fragment>
    )
}

export default ActionMenu;
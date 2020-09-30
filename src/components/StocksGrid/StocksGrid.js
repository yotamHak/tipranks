import React from "react"
import { Dimmer, Grid, Header, Icon, Loader, Message, Segment, } from "semantic-ui-react";
import { useSelector, } from "react-redux";
import StocksCell from "../StocksCell/StocksCell";

function StocksGrid() {
    const stocksRows = useSelector((state) => state.stocks.stocks)
    const stocksLoading = useSelector((state) => state.stocks.loading)
    const stocksError = useSelector((state) => state.stocks.error)

    return (
        <Grid container divided='vertically'>
            <Dimmer active={stocksLoading} inverted>
                <Loader inverted>Loading</Loader>
            </Dimmer>

            {
                stocksError
                    ? (
                        <Message negative>
                            <Message.Header>Ooops... We got an error :(</Message.Header>
                            <p>Try searching again</p>
                        </Message>
                    )
                    : stocksRows && stocksRows.length > 0
                        ? stocksRows.map((stocks, rowIndex) => (
                            <Grid.Row columns={3} key={rowIndex}>
                                {
                                    stocks.map((stock, index) => {
                                        const position = rowIndex * 3 + index + 1

                                        return (
                                            <StocksCell stock={stock} position={position} key={index} />
                                        )
                                    })
                                }
                            </Grid.Row>
                        ))
                        : (
                            <Grid.Row>
                                <Segment placeholder size='massive' className='full-width'>
                                    <Header icon>
                                        <Icon name='frown outline' />
                                        <span>Aww... no results yet.</span>
                                    </Header>
                                </Segment>
                            </Grid.Row>
                        )
            }
        </Grid>
    )
}

export default StocksGrid;
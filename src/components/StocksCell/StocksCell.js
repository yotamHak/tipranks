import React, { useEffect, } from "react"
import { Button, Card, Grid, Popup } from "semantic-ui-react";
import useHover from "../../hooks/useHover";

function StocksCell({ stock, position }) {
    const [uidPopUpOpen, setUidPopUpOpen] = React.useState(false)
    const [positionPopUpOpen, setPositionPopUpOpen] = React.useState(false)

    const [hoverRef, isHovered] = useHover();

    useEffect(() => { }, [])

    return (
        <Grid.Column>
            <div ref={hoverRef}>
                <Popup
                    content={`${position} - ${stock.label}`}
                    on='click'
                    onClose={() => setPositionPopUpOpen(false)}
                    onOpen={() => setPositionPopUpOpen(true)}
                    open={positionPopUpOpen}
                    position='top center'
                    trigger={
                        <Card color={isHovered && 'violet'}>
                            <Card.Content>
                                <Card.Header>{stock.label}</Card.Header>
                                <Card.Meta>{stock.category}</Card.Meta>
                                <Card.Description>
                                    {stock.value}
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                    <Popup
                                        content={stock.uid}
                                        on='click'
                                        onClose={(e) => {
                                            e.stopPropagation()
                                            setUidPopUpOpen(false)
                                        }}
                                        onOpen={(e) => {
                                            e.stopPropagation()
                                            setUidPopUpOpen(true)
                                        }}
                                        open={uidPopUpOpen}
                                        position='bottom center'
                                        trigger={
                                            <Button color='green' className='ellipsis'>
                                                {stock.uid}
                                            </Button>
                                        }
                                    />
                                </div>
                            </Card.Content>
                        </Card>
                    } />
            </div>
        </Grid.Column>
    )
}

export default StocksCell;
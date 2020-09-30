import React from "react";
import { Segment } from "semantic-ui-react";

import StocksGrid from "../../components/StocksGrid/StocksGrid";
import ActionMenu from "../../components/ActionMenu/ActionMenu";

function Home() {
    return (
        <Segment.Group raised>
            <Segment>
                <ActionMenu />
            </Segment>
            <Segment>
                <StocksGrid />
            </Segment>
        </Segment.Group>
    )
}

export default Home;
import React, { useState } from "react";
import { Container } from "./home-style";
import LatestTrend from "../latest-trend/latest-trend";
import Product from "../product/product";

const Home: React.FC = () => {
    const [showLatestTrend, hideLatestTrend] = useState<boolean>(false);
    return (
        <Container>
            <input
                type="search"
                name=""
                id=""
                onClick={() => hideLatestTrend(!showLatestTrend)}
            />
            {showLatestTrend && <LatestTrend />}
        </Container>
    );
};

export default Home;

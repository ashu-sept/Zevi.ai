import React, { useEffect, useState } from "react";
import * as Styles from "./latest-trend-style";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { data } from "../store";
import Product from "../product/product";

const LatestTrend: React.FC = () => {
  const [apiData, setApiData] = useState<any[]>([]);
  const [isComponentVisible, setComponentVisibility] = useState(false);
  const navigate = useNavigate();

  async function handleCardClick(item: any) {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/category/${item.category}`
      );

      const categoryData = response.data;

      setApiData(categoryData);
        setComponentVisibility(true)
    //   navigate(`/product`);
    } catch (error) {
      console.error("Error fetching data from the API:", error);
    }
  }
  return (
    <>
      <Styles.Container>
        <Styles.Paragraph>Latest Trends</Styles.Paragraph>
        <Styles.Cards>
          {data.map((i: any) => (
            <Styles.Card key={i.id} onClick={() => handleCardClick(i)}>
              <img src={i.image} alt=""></img>
              <Styles.CardTitle>{i.title}</Styles.CardTitle>
            </Styles.Card>
          ))}
        </Styles.Cards>

        <p className="popular">Popular Suggestions</p>
        <Styles.Type>Striped Shirt Dress</Styles.Type>
        <Styles.Type>Satin Dress</Styles.Type>
        <Styles.Type>Denim Jumpsuit</Styles.Type>
        <Styles.Type>Leather Dresses</Styles.Type>
        <Styles.Type>Solid Tshirts</Styles.Type>
      </Styles.Container>

      {isComponentVisible && <Product apiData={apiData} />}
    </>
  );
};

export default LatestTrend;

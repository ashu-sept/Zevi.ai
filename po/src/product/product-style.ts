import styled from "styled-components";


export const Container = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: #fff;
  padding: 2rem;

  .title {
    font-size: 1.5rem;
    margin-top: 10%;
    margin-bottom: 1rem;
  }
  input {
    margin: 8.1% 0% 1.2% 0%;
    width: 40rem;
    height: 3rem;
    border: 0px;
    border-radius: 0.5rem;
    padding: 0rem 1rem;
    font-size: 1.4rem;
  }
`;

export const SideBar = styled.div`
  .brand {
    display: flex;
    flex-direction: column;
  }
`;

export const Main = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 3rem;
  .cards {
    position: relative;
    img {
      height: 14rem;
      width: 11rem;
    }
    .card-title {
      font-size: 0.8rem;
      max-width: 9rem;
      margin-top: 0.3rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .card-price {
      font-size: 0.6rem;
    }

    .view-product-button
     {
      display: none;
      position: absolute;
      bottom: 50px;
      background: #8594F4  ;
      color: white;
      border: none;
      padding: 10px 20px;
      width:11rem;
      cursor: pointer;
      transition: display 0.3s;
    }

    .like-button {
      display: none;
      position: absolute;
      bottom: 240px;
      left: 130px;
      background: ; /* Background color when not liked */
      color: white;
      border: none;
      padding: 5px 10px;
      border-radius: 5px;
      cursor: pointer;
      transition: background 0.3s;
    }
    




    &:hover {
      .view-product-button,
      .like-button
       {
        display: inline-block;
      }
    }
  }
`;


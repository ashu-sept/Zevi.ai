import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  width: 45rem;
  padding: 0.5rem;
  box-shadow: -1px 3px 24px -6px rgba(0, 0, 0, 0.75);

  .popular {
    margin: 1rem 0rem 0.7rem;
    font-size: 1rem;
  }
`;
export const Paragraph = styled.p`
  margin-bottom: 0.7rem;
  font-size: 1rem;
`;

export const Cards = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-evenly;
  margin: 0rem auto;
  
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  img {
    width: 7rem;
    height: 8rem;
    border-radius: 0.2rem;
  }
`;
export const CardTitle = styled.div`
  max-width: 6rem;
  margin-top: 0.3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const Type = styled.p`
  font-size: 0.65rem;
  margin: 0.1rem 0rem 0.1rem;
  user-select: none;
  cursor: pointer;
`;

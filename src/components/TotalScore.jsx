import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  text-align: center;
  max-width: 100%;
  /* margin: 2rem; */

  h1 {
    font-size: 110px;
    line-height: 110px;

    @media (max-width: 768px) {
      font-size: 70px;
      line-height: 70px;
    }

    @media (max-width: 480px) {
      font-size: 50px;
      line-height: 50px;
    }
  }

  p {
    font-size: 28px;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 22px;
    }

    @media (max-width: 480px) {
      font-size: 18px;
    }
  }
`;

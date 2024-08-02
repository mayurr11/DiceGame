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

  h1 {
    font-size: 100px;
    line-height: 100px;

    @media (max-width: 768px) {
      font-size: 60px;
      line-height: 60px;
    }

    @media (max-width: 480px) {
      font-size: 40px;
      line-height: 40px;
    }
  }

  p {
    font-size: 24px;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 18px;
    }

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
`;

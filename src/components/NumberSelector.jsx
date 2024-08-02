import styled from "styled-components";

const NumberSelector = ({ selectedNumber, setSelectedNumber }) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  return (
    <Container>
      <Selector>
        {arrNumber.map((value, id) => (
          <Box
            isSelected={value === selectedNumber}
            key={id}
            onClick={() => setSelectedNumber(value)}
          >
            {value}
          </Box>
        ))}
      </Selector>
      {/* <p>Selected Number: {selectedNumber}</p> */}
    </Container>
  );
};

export default NumberSelector;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  align-items: end;
  flex-direction: column;
  margin: 2rem 0;

  p {
    font-size: 2rem;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }
`;

const Selector = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1rem;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  transition: 0.3s background-color ease-in;

  @media (max-width: 768px) {
    height: 60px;
    width: 60px;
    font-size: 20px;
  }

  @media (max-width: 480px) {
    height: 50px;
    width: 50px;
    font-size: 18px;
  }
`;

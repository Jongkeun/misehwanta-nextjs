import styled from "styled-components";

const Container = styled.div`
  margin: 30px 0;
  background-color: white;
`;

const Img = styled.img`
  width: 100%;
`;

const Figure = styled.figure`
  margin: 0;
  padding: 0;
`;

const ForecastMap = () => {
  return (
    <Container>
      <Figure>
        <Img src="http://www.airkorea.or.kr/file/viewImage/?atch_id=136525" />
      </Figure>
    </Container>
  );
};

export default ForecastMap;

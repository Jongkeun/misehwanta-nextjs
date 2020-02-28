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

type ForecastMapProps = {
  mapUrl?: string;
};

const ForecastMap = ({ mapUrl }: ForecastMapProps) => {
  return (
    <Container>
      <Figure>{mapUrl && <Img src={mapUrl} />}</Figure>
    </Container>
  );
};

export default ForecastMap;

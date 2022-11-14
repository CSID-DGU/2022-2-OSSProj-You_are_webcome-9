import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Map_Icon } from "../asset/Map_Icon.svg";
import { pinPositionData } from "../lib/Data";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
const Convenient = () => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState(null);
  const [pinPosition, setPinPosition] = useState([0, 0]);
  const [pinX, pinY] = [...pinPosition];
  const ChangePinPosition = (destination) => {
    for (let i = 0; i < pinPositionData.length; i++) {
      const building = pinPositionData[i];
      if (building[0] === destination) {
        const x = building[1];
        const y = building[2];
        return [x, y];
      }
    }
    return [0, 0];
  };

  function handleOnSubmit(e) {
    e.preventDefault();
    const departures = e.target[0].value;
    const arrivals = e.target[1].value;
    //가장 가까운 건물명 알아내는 알고리즘
    //setDestination(해당 건물명)
    let newDestination = "신공학관";
    setPinPosition(ChangePinPosition(newDestination));
    setDestination(newDestination);
  }
  return (
    <>
      <Section className="Section">
        <SearchMap>
          <Header>
            <Icon
              id="icon"
              src="/Logo.svg"
              onClick={() => navigate("/mainPage")}
            ></Icon>
            <Form
              onSubmit={(e) => {
                handleOnSubmit(e);
              }}
            >
              <Div>
                <Span>출발지</Span>
                <Input type="text" name="" id="" />
              </Div>
              <Div>
                <Span>편의시설</Span>
                <Input type="text" name="" id="" />
              </Div>
              <Button>검색</Button>
            </Form>
          </Header>
          <ImgMarkingContainer>
            <Img src="/campus_map.png"></Img>
            {destination && (
              <Map_Mark_Container pinX={pinX} pinY={pinY}>
                <img src="/MapMark.svg" alt="" />
              </Map_Mark_Container>
            )}
          </ImgMarkingContainer>
        </SearchMap>
        <Article id="convenientList">
          <h1>가까운 편의시설</h1>
          <Map_Icon_Container>
            <a
              href="https://map.naver.com/v5/directions/14137448.103699688,4517303.163985252,%EB%8F%99%EA%B5%AD%EB%8C%80%ED%95%99%EA%B5%90%20%EC%84%9C%EC%9A%B8%EC%BA%A0%ED%8D%BC%EC%8A%A4%EC%9B%90%ED%9D%A5%EA%B4%80,18696982,PLACE_POI/14137925.352620613,4517152.249204071,%EB%8F%99%EA%B5%AD%EB%8C%80%ED%95%99%EA%B5%90%20%EC%84%9C%EC%9A%B8%EC%BA%A0%ED%8D%BC%EC%8A%A4%EB%AC%B8%ED%99%94%EA%B4%80,18698347,PLACE_POI/-/walk?c=14137557.2976135,4517134.0006959,16.65,0,0,0,dh"
              target={"_blank"}
            >
              <Map_Icon width="70" height="70"></Map_Icon>
              <Map_Span>길찾기</Map_Span>
            </a>
          </Map_Icon_Container>
        </Article>
      </Section>
      <Footer></Footer>
    </>
  );
};
export default Convenient;
const Section = styled.section`
  display: flex;
  height: 100vh;
  @media screen and (max-width: 700px) {
    flex-direction: column;
    height: auto;
    #convenientList {
      margin: 0;
      width: auto;
    }
    *:not(footer > *) {
      font-size: 0.8rem;
    }
    header > form {
      flex-shrink: 1;
      input {
        padding: 2px;
        width: 6rem;
        height: 30px;
      }
    }
    button {
      width: 3rem;
      height: 1.5rem;
    }
    #icon {
      display: none;
    }
  }
  @media screen and (max-width: 1200px) and(min-width: 700px) {
    flex-direction: column;
    height: auto;
    #convenientList {
      margin: 0;
      width: auto;
    }
    header > form {
      flex-shrink: 1;
      input {
        width: 140px;
        height: 50px;
      }
    }
    *:not(footer > *) {
      font-size: 1.5rem;
    }
  }
`;
const Map_Icon_Container = styled.div`
  margin-left: auto;
  margin-right: 15px;
`;
const SearchMap = styled.article`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Article = styled.article`
  background-color: rgb(243, 202, 89);
  height: 100%;
  width: 300px;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border: 2.8px black solid;
  > * {
    font-size: 25px;
    text-align: center;
  }
`;
const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 65px;
  margin-top: 15px;
`;
const Form = styled.form`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  /* justify-self: center; */
`;
const Map_Mark_Container = styled.div`
  position: absolute;
  width: 20px;
  left: ${(props) => props && `${props.pinX}px`};
  top: ${(props) => props && `${props.pinY}px`};
  background-image: url("/Map_mark.svg");
`;
const Div = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Span = styled.span`
  margin: 10px;
  display: inline-block;
  font-size: 25px;
`;
const Button = styled.button`
  border-radius: 15px;
  align-self: center;
  font-size: 20px;
  width: 70px;
  height: 45px;
  background-color: rgb(243, 202, 89);
`;
const Input = styled.input`
  border-radius: 15px;
  padding: 10px;
  font-size: 20px;
  border: 2.8px black solid;
`;
const Icon = styled.img`
  height: 100%;
  padding-top: 10px;
  cursor: pointer;
`;
const Img = styled.img`
  display: block;
`;

const ImgMarkingContainer = styled.div`
  position: relative;
  margin: 50px 0;
`;
const Map_Span = styled.span`
  display: block;
  font-size: 20px;
`;
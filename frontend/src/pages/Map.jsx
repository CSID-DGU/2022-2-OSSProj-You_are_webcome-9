import { useState, useRef } from "react";
import styled from "styled-components";
import Canvas from "../components/Map/Canvas";
import { nodeData } from "../lib/mapInfo.js";
import pathData from "../lib/path/path1.json";
import pathSlopeData from "../lib/path/path2.json";
import Footer from "../components/Footer";
import Shortcut from "../lib/shortcut/shortcut1.json";
import SlopShortCut from "../lib/shortcut/shortcut2.json";
import DirectionLi from "../components/Map/DirectionsLi";
import SlopeIcon from "../components/Map/SlopeIcon";
import MapHeader from "../components/Map/MapHeader";
const Map = () => {
  const [isStart, setIsStart] = useState(false);
  const [departBuilding, setDepartBuilding] = useState("");
  const [arriveBuilding, setArriveBuilding] = useState("");
  const [nodes, setNodes] = useState([]);
  const [isSlope, setIsSlope] = useState(true);
  const appliedShortcut = useRef(null);
  const [submittedDepart, setSubmittedDepart] = useState(null);
  const [submittedArrive, setSubmittedArrive] = useState(null);
  const setPinPositions = () => {
    const arr = [];
    const data = isSlope ? pathSlopeData : pathData;
    data[departBuilding][arriveBuilding].map((item) => {
      arr.push(nodeData[item]);
    });
    setNodes([...arr]);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setSubmittedDepart(departBuilding);
    setSubmittedArrive(arriveBuilding);
    appliedShortcut.current = isSlope ? SlopShortCut : Shortcut;
    setIsStart(!isStart);
    setPinPositions();
  };
  const handleOnClick = () => {
    appliedShortcut.current = isSlope ? SlopShortCut : Shortcut;
    setIsStart(!isStart);
    setPinPositions();
  };
  return (
    <>
      <Section className="Section">
        <MapContentContainer>
          <MapHeader
            arriveBuilding={arriveBuilding}
            setArriveBuilding={setArriveBuilding}
            departBuilding={departBuilding}
            setDepartBuilding={setDepartBuilding}
            handleOnSubmit={handleOnSubmit}
          />
          <Canvas
            isStart={isStart}
            nodePositions={nodes}
            canvasWidth={1000}
            canvasHeight={687.14}
            color={isSlope ? "blue" : "red"}
          />
          <Span>교내 경로를 알려주는 페이지입니다.</Span>
          <SlopeIcon
            handleOnClick={handleOnClick}
            setIsSlope={setIsSlope}
            isSlope={isSlope}
          />
        </MapContentContainer>
        <DirectionLi
          submittedArrive={submittedArrive}
          submittedDepart={submittedDepart}
          appliedShortcut={appliedShortcut}
        />
      </Section>
      <Footer />
    </>
  );
};
export default Map;
const Section = styled.section`
  display: flex;
`;
const MapContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  position: relative;
`;
const Span = styled.span`
  font-size: 25px;
  display: inline-block;
  margin: 10px;
  flex-shrink: 1;
  flex: none;
`;

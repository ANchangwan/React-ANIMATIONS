import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
  AnimatePresence
} from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Box = styled(motion.div)`
  width: 600px;
  height:300px;
  background-color: white;
  border-radius: 15px;
`;

const Svg = styled.svg`
  width: 300px;
  height: 300px;
  path {
    stroke: white;
    stroke-width: 2;
  }
`;

const Button = styled.button`
  margin-bottom : 30px;
`

const svg = {
  start: { pathLength: 0, fill: "rgba(255, 255, 255, 0)" },
  end: {
    fill: "rgba(255, 255, 255, 1)",
    pathLength: 1,
  },
};

const boxVariants={
  initial:{
    opacity:0,
    scale:0
  },
  visible:{
    opacity:1,
    scale:1,
    rotateZ:360,
  },
  leaving:{
    opacity:0,
    scale:0,
    y:10
  }
}


function App() {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => setShowing(prev => !prev);
  return (
    <Wrapper>
        <Button onClick={toggleShowing}>click me</Button>
        <AnimatePresence>{showing ? <Box variants={boxVariants} initial="initial" animate="visible" exit="leaving" /> : null}</AnimatePresence>
    </Wrapper>
  );
}

export default App;

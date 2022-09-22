import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  max-width: 680px;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 100vh;
  display: flex;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  return (
    <Wrapper>
      <Box
        transition={{ type: "spring", damping: 1 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotateZ: 360 }}
      />
      <motion.div></motion.div>
    </Wrapper>
  );
}

export default App;

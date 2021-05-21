import cookies from "../../assets/cookies.png";
import { Heading } from "@chakra-ui/react";

const Home = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", overflow: 'hidden', fontFamily: 'Roboto' }}>
      <div
        style={{
          color: "white",
          padding: "10rem",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: 'center'
        }}
      >
        <Heading as="h1" size="4xl">
          We are C<span style={{ color: "#F2994A" }}>oo</span>kies
        </Heading>
        <Heading as="h1" size="3xl">
          We are developers
        </Heading>
        <Heading as="h1" size="2xl">
          We are creativity
        </Heading>
      </div>
      <div style={{position: 'relative'}}>
        <img src={cookies} style={{ positon: "absolute", left: '40px' }}/>
      </div>
    </div>
  );
};

export default Home;

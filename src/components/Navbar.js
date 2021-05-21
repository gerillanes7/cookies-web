import { Button, ButtonGroup, Flex, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logosinfondo.png";

const Navbar = () => {
  //F2994A
  return (
    <Flex justify="space-between" align="center">
      <Flex>
        <img src={logo} style={{width: '60%'}}/>
      </Flex>
      <Flex position="fixed" top="1rem" right="1rem" align="center">
        <Flex>
          <Link to="/">
            <Button
              as="a"
              variant="ghost"
              aria-label="home"
              my={5}
              w="100%"
              color="#FFF"
              _hover={{ color: "#F2994A" }}
            >
              Home
            </Button>
          </Link>
          <Link to="/">
            <Button
              as="a"
              variant="ghost"
              aria-label="home"
              my={5}
              w="100%"
              color="#FFF"
              _hover={{ color: "#F2994A" }}
            >
              About Us
            </Button>
          </Link>
          <Link to="/">
            <Button
              as="a"
              variant="ghost"
              aria-label="home"
              my={5}
              w="100%"
              color="#FFF"
              _hover={{ color: "#F2994A" }}
            >
              Services
            </Button>
          </Link>
          <Link to="/">
            <Button
              as="a"
              variant="ghost"
              aria-label="home"
              my={5}
              w="100%"
              color="#FFF"
              _hover={{ color: "#333" }}
              backgroundColor="#F2994A"
            >
              Contact
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;

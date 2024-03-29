// Chakra Imports
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  Flex,
  Icon,
  Link,
  Switch,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import GitHubButton from "react-github-btn";
import { Separator } from "components/Separator/Separator";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { FaTwitter, FaFacebook } from "react-icons/fa";

export default function Configurator(props) {
  const { secondary, isOpen, onClose, fixed, ...rest } = props;
  const [switched, setSwitched] = useState(props.isChecked);

  const { colorMode, toggleColorMode } = useColorMode();
  // Chakra Color Mode
  let fixedDisplay = "flex";
  if (props.secondary) {
    fixedDisplay = "none";
  }

  let bgButton = useColorModeValue(
    "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
    "white"
  );
  let colorButton = useColorModeValue("white", "gray.700");
  const secondaryButtonBg = useColorModeValue("white", "transparent");
  const secondaryButtonBorder = useColorModeValue("gray.700", "white");
  const secondaryButtonColor = useColorModeValue("gray.700", "white");
  const settingsRef = React.useRef();
  return (
    <>
      <Drawer
        isOpen={props.isOpen}
        onClose={props.onClose}
        placement={document.documentElement.dir ==="right"}
        finalFocusRef={settingsRef}
        blockScrollOnMount={false}
      >
        <DrawerContent>
          <DrawerHeader pt="24px" px="24px">
            <DrawerCloseButton />
            <Text fontSize="xl" fontWeight="bold" mt="16px">
              SonicRoom Configurator
            </Text>
            <Text fontSize="md" mb="16px">
              See your dashboard options.
            </Text>
            <Separator />
          </DrawerHeader>
          <DrawerBody w="340px" ps="24px" pe="40px">
            <Flex flexDirection="column">
              <Box>
                <Text fontSize="md" fontWeight="600">
                  Sidenav Type
                </Text>
                <Text fontSize="sm" mb="16px">
                  Choose between 2 different sidenav types.
                </Text>
                <Flex>
                  <Button
                    w="50%"
                    p="8px 32px"
                    me="8px"
                    colorScheme="teal"
                    borderColor="linear-gradient(44deg, rgba(141,25,244,1) 0%, rgba(206,31,214,1) 43%, rgba(255,170,49,1) 100%)"
                    color="linear-gradient(44deg, rgba(141,25,244,1) 0%, rgba(206,31,214,1) 43%, rgba(255,170,49,1) 100%)"
                    variant="outline"
                    fontSize="xs"
                    onClick={props.onTransparent}
                  >
                    Transparent
                  </Button>
                  <Button
                    type="submit"
                    bg="linear-gradient(44deg, rgba(141,25,244,1) 0%, rgba(206,31,214,1) 43%, rgba(255,170,49,1) 100%)"
                    w="50%"
                    p="8px 32px"
                    mb={5}
                    _hover="linear-gradient(44deg, rgba(141,25,244,1) 0%, rgba(206,31,214,1) 43%, rgba(255,170,49,1) 100%)"
                    color="white"
                    fontSize="xs"
                    onClick={props.onOpaque}
                  >
                    Opaque
                  </Button>
                </Flex>
              </Box>
              <Box
                display={fixedDisplay}
                justifyContent="space-between "
                mb="16px"
              >
              
              </Box>
              <Flex
                justifyContent="space-between"
                alignItems="center"
                mb="24px"
              >
                <Text fontSize="md" fontWeight="600" mb="4px">
                  Dark/Light
                </Text>
                <Button onClick={toggleColorMode}>
                  Toggle {colorMode === "light" ? "Dark" : "Light"}
                </Button>
              </Flex>

              <Separator />
            
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
Configurator.propTypes = {
  secondary: PropTypes.bool,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  fixed: PropTypes.bool,
};

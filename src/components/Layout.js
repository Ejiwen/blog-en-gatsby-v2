/** @jsx jsx */
// import React from "react"
import { jsx, Box, Grid, Text, Container } from "theme-ui"
import LeftSide from "../pages/LeftSide"
import "../styles/style.css"
import { useColorMode } from "theme-ui"

const Layout = ({ children }) => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    // gap={0} columns={["22% 78%"]}
    <Grid className="test-two-div">
      <Box className="sideBar" bg="background.0" sx={{ height: "100vh" }}>
        <Container>
          <LeftSide />
        </Container>
      </Box>
      <Box p={2} bg="background.1">
        <label className="styleMode">
          <input
            type="checkbox"
            onClick={e => {
              setColorMode(colorMode === "light" ? "dark" : "light")
            }}
          />
          <span class="slider round"></span>
        </label>

        <Container>
          <Text variant="posts"> {children} </Text>
        </Container>
      </Box>
    </Grid>
  )
}

export default Layout

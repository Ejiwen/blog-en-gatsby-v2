import React from "react"
import Menu from "./datamdx/Menu"
import IntroLeft from "./datamdx/IntroLeft"
import Contacts from "./datamdx/Contacts"
import Footer from "./datamdx/Footer"
import "../styles/style.css"
import { Text } from "theme-ui"

const LeftSide = () => {
  return (
    <div className="leftSide">
      <div className="topLeftSide">
        <IntroLeft />
        <Text variant="menu">
          <Menu />
        </Text>
      </div>
      <Contacts />
      <Footer />
    </div>
  )
}

export default LeftSide

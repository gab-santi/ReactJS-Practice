import React from "react"

import MainContentCheckboxes from "./components/MainContentCheckboxes"
import Header from "./components/Header"

/* function App() {
  const firstName = "Gab"
  const lastName = "Santi"
  const date = new Date(2018, 6, 31, 15)
  const hours = date.getHours()
  let timeOfDay

  const styles = {
    color: "#FF8C00"
  }

  if (hours < 12) {
    timeOfDay = "morning"
    styles.color = "#04756F"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
    styles.color = "#2E0987"
  } else {
    timeOfDay = "night"
    styles.color = "#D90000"
  }


  // return (
  //   <div>
  //     <Header />
  //     <MainContent />
  //     <Footer />
  //   </div>
  // )



  return (
    <div>
      <Header />
      <h1 style={styles}>Good {timeOfDay}!</h1>
    </div>
  )
}
 */

// checkbox activity
function App() {
  return (
    <div>
      <Header />
      <MainContentCheckboxes />
    </div>
  )
}

export default App
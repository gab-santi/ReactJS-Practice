import React from "react"

import MainContentCheckboxes from "./components/MainContentCheckboxes"
import Header from "./components/Header"
import ContactCard from "./components/ContactCard"

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
      
      <ContactCard 
        // class approach
        contact={{name: "Mr. Whiskerson", imgUrl: "http://placekitten.com/300/200", phone: "123123123", email: "mr.whiskaz@catnap.meow"}}
      />

      <ContactCard 
        contact={{name: "Fluffykins", imgUrl: "http://placekitten.com/400/200", phone: "123123123", email: "mr.whiskaz@catnap.meow"}}
      />

      <ContactCard 
        contact = {{name: "Destroyer", imgUrl: "http://placekitten.com/400/300", phone: "123123123", email: "mr.whiskaz@catnap.meow"}}
      />

      <ContactCard 
        contact = {{name: "Felix", imgUrl: "http://placekitten.com/200/100", phone: "123123123", email: "mr.whiskaz@catnap.meow"}}
      />

    </div>
  )
}

export default App
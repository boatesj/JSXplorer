import React from "react";
import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";


function App() {
  const entries = data.map(item => (
    <Entry 
      key={item.id}
      img={item.img}
      title={item.title}
      country={item.country}
      googleMapsLink={item.googleMapsLink}
      dates={item.dates}
      text={item.text}

    />
  ))

  return (
    <>
      <Header />
      <main className="container">
        {entries}
      </main>
    </>
    
  );
}

export default App;

import React from 'react'
import Nav from './components/nav'
import Card from './components/card'
import data from './data'
import Footer from './components/Footer'

function App() {
  const items=data.map((item)=>{
    return ( 

      <Card key={item.key} {...item} />

    )
    

  })
  return (
    <div className="App">
      <Nav/>

      <section className="cards-list">{items}</section>
      <Footer/>
      

    </div>
  );
}

export default App;

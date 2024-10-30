import React, { useState, useEffect } from "react";
import Restuarantcard from './Restuarantcard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Restuarantlist() {
  // create state to hold all resturant
  const [allRestuarants, setRestuarant] = useState([])

  // function to call api to get all restuarant.json
  const getRestuarant = async () => {
    await fetch('./resturants.json')
    .then((data)=>{
      data.json()
      .then((result)=>{
        setRestuarant(result.restaurants); 
      })
    })
  }
  useEffect(()=>{
    getRestuarant()
  }, [])
  return (
    <Row>
      {
        allRestuarants.map(item=>(
         <Col> <Restuarantcard restuarant={item}/></Col>
        ))
      }
    </Row>
  )
}

export default Restuarantlist;

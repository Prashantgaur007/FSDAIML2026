import React from 'react'
import pic from '../images/Prashant.png'
function ICard(props) {

  return (
    <div  style={{ border: '5px solid red',height:'auto',width:'320px',margin:'auto' }}>
    <h2 style={{backgroundColor:'aqua',color:'black'}}>ABES Enginnering College</h2>
    <h3 style={{ color: 'red',backgroundColor:'aqua' }}>Name : {props.name}</h3>
    <h3 style={{ color: 'red',backgroundColor:'aqua' }}>Roll : {props.roll}</h3>
    <h3 style={{ color: 'red',backgroundColor:'aqua' }}>Branch : {props.branch}</h3>
    <h3 style={{ color: 'red',backgroundColor:'aqua' }}>Section : {props.section} </h3>

    <div ><img src={props.image} height={'300px'} width={'300px'} style={{borderRadius:'50%'}}></img></div>
    
    </div>
  )
}
export default ICard;
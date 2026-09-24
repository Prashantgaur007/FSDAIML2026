import React from 'react'
import pic from '../images/Prashant.png'
function ICard(data) {

  return (
    <div  style={{ border: '5px solid red',height:'auto',margin:'auto' }}>
    <h2 style={{backgroundColor:'aqua',color:'black'}}>ABES Enginnering College</h2>
    <h3 style={{ color: 'red',backgroundColor:'aqua' }}>Name : {data.name}</h3>
    <h3 style={{ color: 'red',backgroundColor:'aqua' }}>Roll : {data.roll}</h3>
    <h3 style={{ color: 'red',backgroundColor:'aqua' }}>Branch : {data.branch}</h3>
    <h3 style={{ color: 'red',backgroundColor:'aqua' }}>Section : {data.section} </h3>

    <div ><img src={data.image} height={'300px'} width={'300px'} style={{borderRadius:'50%'}}></img></div>
    
    </div>
  )
}
export default ICard;
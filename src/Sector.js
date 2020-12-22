import React,{useState} from 'react';
import {Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";


 function Sector(props) {
    const mystyle = {
     
        boxShadow:'2px 2px 5px 0px rgba(50, 50, 50, 0.71)'
      };
      const header = {
      //  border: '1px solid red',
      
        backgroundColor:'#F7F9FD',
        margin: '0',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        color:'#4D8E9A'
        
      };
      const parent = {
       
  height: '60px',
  position: 'relative',
  backgroundColor:'#F7F9FD',
  borderBottom: '1px solid #D6E1E7'
      };

      const Sname={
        margin: '0',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)'
      };

      const Psname={
        borderLeft:'1px solid #D6E1E7',
        position: 'relative',
       
      }

    return (
       <>
       <div className=" mt-5 mb-5" style={mystyle}>
           
           <div style={parent}>
               <div>
                    <h6  className="pl-4" style={header}>Companies by sectors</h6>
                </div>
           </div>
           
           <Row className="pl-4 pb-3 pt-4">
                <Col style={{position:'relative'}}>
                <div style={Sname}>
                    <h4 className="ml-2">{props.fintech}</h4>
                    <h6 style={{color:'#4D8E9A'}}>Fintech</h6>
                </div>
                </Col>
                
                <Col style={Psname}>
                    <div style={Sname}>
                    <h4 className="ml-3">{props.insurtech}</h4>
                    <h6 style={{color:'#4D8E9A'}}>Insurtech</h6>
                    </div>
                </Col>
               
                <Col style={Psname}>
                <div style={Sname}>
                    <h4 className="ml-4">{props.roboadvisory}</h4>
                    <h6 style={{color:'#4D8E9A'}}>Roboadvisory</h6>
                    </div>
                </Col>

                
               
                <Col style={Psname}>

                    
                    <div style={{marginLeft:'33%'}}>
                <h4>{props.iot}</h4>
                    <h6 style={{color:'#4D8E9A'}}>Iot</h6>
                    </div>
                   
                    
                </Col>

                
              
                
           </Row>
       </div>
       </>
    )
}
export default Sector;
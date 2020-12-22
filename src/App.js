import React, { useState,useEffect } from "react";
import Sector from './Sector';
import { Table, Modal, Button, Form,Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";


export default function App() {
  const [show, setShow] = useState(false);
  

  const[first,setFirst] = useState('');
  const[second,setSecond] = useState('');
  const[selectValue,setSelectValue]= useState('Fintech');
  const[inv,setInv]=useState('');
  const[third,setThird] = useState([]);
  const[fintech,setFintech] = useState(0);
  const[insurtech,setInsurtech] = useState(0);
  const[roboadvisory,setRoboadvisory] = useState(0);
  const[iot,setIot] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onLoginFormSubmit = (e) => {
    
    e.preventDefault();
   
    handleClose();
    console.log(first);
    console.log(second);
    console.log(selectValue);
    console.log(inv);

    setThird([...third, {first,second,selectValue,inv}]);
    setFirst('');
    setSecond('');
    setSelectValue('Fintech');
    setInv('');

  };


  useEffect(() => {
   
    let f=0,it=0,io=0,ro=0;
 
     for(let i=0;i<third.length;i++){
       if(third[i].selectValue=="Fintech"){
         f++;
        
       }
       else if(third[i].selectValue=="Insurtech"){
         it++;
        
       }
       else if(third[i].selectValue=="Roboadvisory"){
         ro++;
        
       }
       else if(third[i].selectValue=="Iot"){
         io++;
        
       }
     }
     setFintech(f);
     setInsurtech(it);
     setRoboadvisory(ro);
     setIot(io);
 
   }, [third]);


   const mystyle = {
     
    boxShadow:'2px 2px 5px 0px rgba(50, 50, 50, 0.71)',
    marginTop:'50px'
  };


  return (
    <>
    <Container>
    <Sector fintech={fintech} insurtech={insurtech} roboadvisory={roboadvisory} iot={iot}/>
    <div style={{boxShadow:'2px 2px 5px 0px rgba(50, 50, 50, 0.75)'}}>
<Table>
  <thead style={{backgroundColor:'#F7F9FE',color:'#4D8E9A'}}>
    <tr>
     
      <th>COMPANY NAME</th>
      <th>STAGE</th>
      <th>SECTOR</th>
      <th>INVESTMENT SIZE</th>
    </tr>
  </thead>
  <tbody>
    


    {third.map(item => {
      return(
        <tr key={item.first}>
          <td>{item.first}</td>
          <td>{item.second}</td>
          <td>{item.selectValue}</td>
          <td>{item.inv}</td>
        </tr>
      );
    })}
    
  </tbody>
</Table>
</div>

      <div className="text-center">
        <Button onClick={handleShow} style={{borderColor:'#4D8E9A',backgroundColor:'white',color:'#4D8E9A'}}>
        Add new company
        </Button>
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title><h5 style={{color:'#4D8E9A'}}>ADD NEW COMPANY</h5></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          



        <Form onSubmit={onLoginFormSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Company Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Company name"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Stage</Form.Label>
        <Form.Control
          type="text"
          placeholder="Stage"
          value={second}
          onChange={(e) => setSecond(e.target.value)}
          required
        />
      </Form.Group>


      <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Select Sector from the list</Form.Label>
    <Form.Control as="select" value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
      <option>Fintech</option>
      <option>Insurtech</option>
      <option>Roboadvisory</option>
      <option>Iot</option>
    </Form.Control>
  </Form.Group>


  <Form.Group controlId="formBasicInvestment">
        <Form.Label>Investment Size</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter amount"
          value={inv}
          onChange={(e) => setInv(e.target.value)}
          required
        />
      </Form.Group>

     <div className="text-center">
      <Button type="submit" style={{backgroundColor:'#4D8E9A',border:'0 none'}}>
        Add new company
      </Button>
      </div>

    </Form>




        </Modal.Body>
      </Modal>
      </Container>
    </>
  );
}

import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function PaymentSection() {

    const paymentType = [
        {
            title: "Annual Payment",
            text: "This is annual payment per an individual inthe toddler care in the section of preschoolers",
            price: "Rs. 50 000.00"
        },
        {
            title: "Annual Payment",
            text: "This is annual payment per an individual inthe toddler care in the section of preschoolers",
            price: "Rs. 50 000.00"
        },
        {
            title: "Annual Payment",
            text: "This is annual payment per an individual inthe toddler care in the section of preschoolers",
            price: "Rs. 50 000.00"
        },
        {
            title: "Annual Payment",
            text: "This is annual payment per an individual inthe toddler care in the section of preschoolers",
            price: "Rs. 50 000.00"
        },
        {
            title: "Annual Payment",
            text: "This is annual payment per an individual inthe toddler care in the section of preschoolers",
            price: "Rs. 50 000.00"
        },
        {
            title: "Annual Payment",
            text: "This is annual payment per an individual inthe toddler care in the section of preschoolers",
            price: "Rs. 50 000.00"
        },

    ];
  

  return (
    <div>
        

        <div>

        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Toddler Payement Section</Accordion.Header>
        <Accordion.Body>

        {paymentType.map((data, index) => (
      <Card key={index} style={{ width: '18rem' }} className="mb-3">
        <Card.Body>
          <input type = "checkbox"></input>
          <Card.Title>{data.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>{data.text}</Card.Text>
          <Card.Text>Price: {data.price}</Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    ))}


        
        
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Preschooler Payement Section</Accordion.Header>
        <Accordion.Body>

        {paymentType.map((data, index) => (
      <Card key={index} style={{ width: '18rem' }} className="mb-3">
        <Card.Body>
          <input type = "checkbox"></input>
          <Card.Title>{data.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>{data.text}</Card.Text>
          <Card.Text>Price: {data.price}</Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    ))}

 
        
        
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>After Schooler Payment Section</Accordion.Header>
        <Accordion.Body>

        {paymentType.map((data, index) => (
      <Card key={index} style={{ width: '18rem' }} className="mb-3">
        <Card.Body>
          <input type = "checkbox"></input>
          <Card.Title>{data.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>{data.text}</Card.Text>
          <Card.Text>Price: {data.price}</Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    ))}

         
       
       
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Other Payements Section</Accordion.Header>
        <Accordion.Body>

        {paymentType.map((data, index) => (
      <Card key={index} style={{ width: '18rem' }} className="mb-3">
        <Card.Body>
          <input type = "checkbox"></input>
          <Card.Title>{data.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>{data.text}</Card.Text>
          <Card.Text>Price: {data.price}</Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    ))}


     
        
        
        
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    </div>

    <div>
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>

            <h6>Payment Summary</h6>
            <table>
                <th>
                    Payment Type
                </th>
                <th>
                    Amount (Rs:)
                </th>
                <tr> 
                    <td>skja</td>
                    <td></td>
                </tr>
            </table>



          
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>

    </div>










    </div>



  )
};

export default PaymentSection;



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
        

        <div className='Accordion'>

        <Accordion flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Toddler Payement Section</Accordion.Header>
        <Accordion.Body>
          <div className = "maincard"> 

        {paymentType.map((data, index) => (
      <Card key={index} style={{ width: '18rem' }} className="mb-3">
        <Card.Body className = "maincardbody">
          <div className='cardheader'>
          <input type = "checkbox" className='checkbox'></input>
          <Card.Title className='cardtitle'>{data.title}</Card.Title>
          </div>
          
          {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          <Card.Text className = "cardtext">{data.text}</Card.Text>
          <Card.Text className = "cardprice">Price: {data.price}</Card.Text>
          {/* <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
      </Card>
    ))}

        </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Preschooler Payement Section</Accordion.Header>
        <Accordion.Body>

        <div className = "maincard"> 
        {paymentType.map((data, index) => (
      <Card key={index} style={{ width: '18rem' }} className="mb-3">
        <Card.Body className = "maincardbody">
          <div className='cardheader'>
          <input type = "checkbox" className='checkbox'></input>
          <Card.Title className='cardtitle'>{data.title}</Card.Title>
          </div>
          
          {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          <Card.Text className = "cardtext">{data.text}</Card.Text>
          <Card.Text className = "cardprice">Price: {data.price}</Card.Text>
          {/* <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
      </Card>
    ))}

 
</div>
        
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>After Schooler Payment Section</Accordion.Header>
        <Accordion.Body>
        <div className = "maincard"> 
        {paymentType.map((data, index) => (
      <Card key={index} style={{ width: '18rem' }} className="mb-3">
        <Card.Body className = "maincardbody">
          <div className='cardheader'>
          <input type = "checkbox" className='checkbox'></input>
          <Card.Title className='cardtitle'>{data.title}</Card.Title>
          </div>
          
          {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          <Card.Text className = "cardtext">{data.text}</Card.Text>
          <Card.Text className = "cardprice">Price: {data.price}</Card.Text>
          {/* <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
      </Card>
    ))}

         
       
</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Other Payements Section</Accordion.Header>
        <Accordion.Body>
        <div className = "maincard"> 
        {paymentType.map((data, index) => (
      <Card key={index} style={{ width: '18rem' }} className="mb-3">
        <Card.Body className = "maincardbody">
          <div className='cardheader'>
          <input type = "checkbox" className='checkbox'></input>
          <Card.Title className='cardtitle'>{data.title}</Card.Title>
          </div>
          
          {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          <Card.Text className = "cardtext">{data.text}</Card.Text>
          <Card.Text className = "cardprice">Price: {data.price}</Card.Text>
          {/* <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
      </Card>
    ))}

    
</div>
        
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    </div>








        <div classname = "mainmodel">

          <h3 className='mainmodeltopic'> Summary Payments</h3>

            <table className='summarytable'>
              <tr> 
                <th>Payment Type</th>
                <th>Amount (Rs:)</th>
              </tr>
              <tr> 
                  <td>Should link from above</td>
                  <td>Should link from abovve</td>
              </tr>
              <tr> 
                  <td>Should link from above</td>
                  <td>Should link from abovve</td>
              </tr>
              <tr> 
                  <td>Should link from above</td>
                  <td>Should link from abovve</td>
              </tr>
            </table>

     

        
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
      
    

        </div>







        


    <div className='mainmodel'>

    <div className="modal show" style={{ display: 'block', position: 'initial' }}>
      <Modal.Dialog >
        <Modal.Header closeButton>
          <Modal.Title>Payment Summary</Modal.Title>
        </Modal.Header>

        <Modal.Body>

            {/* <h6>Payment Summary</h6> */}
            <table className='summarytable'>
              <tr> 
                <th>Payment Type</th>
                <th>Amount (Rs:)</th>
              </tr>
              <tr> 
                  <td>Should link from above</td>
                  <td>Should link from abovve</td>
              </tr>
              <tr> 
                  <td>Should link from above</td>
                  <td>Should link from abovve</td>
              </tr>
              <tr> 
                  <td>Should link from above</td>
                  <td>Should link from abovve</td>
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


   <div className='gotopaymentbutton'>
    <Button variant = "success">Go to Payments</Button> {' '}
   </div>


    </div>



  )
};

export default PaymentSection;



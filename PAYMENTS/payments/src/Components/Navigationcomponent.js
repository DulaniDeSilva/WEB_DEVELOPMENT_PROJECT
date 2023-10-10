import Nav from 'react-bootstrap/Nav';

function Navigationcomponent() {
  return (
    <Nav variant="pills" defaultActiveKey="/home" className='Navigationbar'>
      <Nav.Item className='NavigationbarItem' >
        <Nav.Link href="/home" className = "NavigationLink">Payments</Nav.Link>
      </Nav.Item>
      <Nav.Item className='NavigationbarItem'>
        <Nav.Link eventKey="link-1" className='NavigationLink'>Payment History</Nav.Link>
      </Nav.Item>
      
    </Nav>
  );
}

export default Navigationcomponent;
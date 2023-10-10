import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


import Navigationcomponent from './Components/Navigationcomponent';

import PaymentSection from './Components/PaymentSection';
import Headingsection from './Components/Headingsection';
// import PaymentSection from './Components/Accordiononly';
// import BasicExample from './Components/Accordiononly';
// import CustomizedSteppers from './Components/Containercomponent';
// import Dropdownpayment from './Components/Dropdownpayment';


function App() {
  return (

    <div>

      <Headingsection/>
      <Navigationcomponent/>

      {/* <Dropdownpayment/> */}

      {/* < BasicExample/> */}


      <PaymentSection/>
      {/* <CustomizedSteppers/> */}

     
     
      
      

     
   
    
     

    </div>
  );
}

export default App;

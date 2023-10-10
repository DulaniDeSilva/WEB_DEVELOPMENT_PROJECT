import React, { useState} from 'react'


const CardComponent = ({ title }) => {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Some card content goes here.</p>
          
        </div>
      </div>
    );
  };




const Dropdownpayment = () => {

    const [selectedOption, setSelectedOption] = useState('');

    const dropdownOptions = [
        {label: 'Toddler Payments', cards: ['Card 1', 'Card 2', 'Card 3']},
        {label: 'PreSchooler Payments', cards: ['Card 1', 'Card 2', 'Card 3']},
        {label: 'After Schooler Payments', cards: ['Card 1', 'Card 2', 'Card 3']},
        {label: 'Other Payments', cards: ['Card 1', 'Card 2', 'Card 3']},

    ];



  return (
    <div>
        <select value = {selectedOption} onChange = { (e) => setSelectedOption(e.target.value)}>
            <option value = "">Select an option</option>
            {dropdownOptions.map((option, index) =>(
                <option key = {index} value = {option.label}>
                    {option.label}
                </option>
            ))}
        </select>


        <div>
        {selectedOption && (
          <div>
            <h2>Selected Option: {selectedOption}</h2>
            <div>
              {dropdownOptions
                .find((option) => option.label === selectedOption)
                .cards.map((card, index) => (
                  <div key={index}>
                    <CardComponent title={card} /> {/* Replace CardComponent with your card rendering logic */}
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>





    </div>
  )
}


export default Dropdownpayment;

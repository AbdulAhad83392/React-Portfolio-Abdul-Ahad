import React, { useState } from 'react';

const Calculator = () => {
    const [loanAmount, setLoanAmount] = useState(100000);
    const [interestRate, setInterestRate] = useState(5);
    const [loanTerm, setLoanTerm] = useState(15);
    const [monthlyPayment, setMonthlyPayment] = useState(0);

    const calculateMonthlyPayment = (amount, rate, term) => {
        const monthlyRate = rate / 100 / 12;
        const totalMonths = term * 12;
        const payment = 
            (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalMonths));
        return payment.toFixed(2);
    };

    const updateMonthlyPayment = () => {
        const payment = calculateMonthlyPayment(loanAmount, interestRate, loanTerm);
        setMonthlyPayment(payment);
    };

    return (
        <div className='calc'>
            <h2 style={{ textAlign: 'center' }}>Loan Calculator</h2>
            <br />
            <div className="cl">
            <div>
                <label>Loan Amount ($):</label>
                <input 
                    type="range" 
                    min="10000" 
                    max="1000000" 
                    step="1000" 
                    value={loanAmount} 
                    onChange={(e) => {
                        setLoanAmount(Number(e.target.value));
                        updateMonthlyPayment();
                    }} 
                />
                <span>{loanAmount}</span>
            </div>
            <div>
                <label>Interest Rate (%):</label>
                <input 
                    type="range" 
                    min="0.1" 
                    max="20" 
                    step="0.1" 
                    value={interestRate} 
                    onChange={(e) => {
                        setInterestRate(Number(e.target.value));
                        updateMonthlyPayment();
                    }} 
                />
                <span>{interestRate}</span>
            </div>
            <div>
                <label>Loan Term (years):</label>
                <input 
                    type="range" 
                    min="1" 
                    max="30" 
                    step="1" 
                    value={loanTerm} 
                    onChange={(e) => {
                        setLoanTerm(Number(e.target.value));
                        updateMonthlyPayment();
                    }} 
                />
                <span>{loanTerm}</span>
            </div>

            </div>
            <br /><br />
            
            <h3 style={{textAlign:'center'}}>Monthly Payment: ${monthlyPayment}</h3>
        </div>
    );
};

export default Calculator;

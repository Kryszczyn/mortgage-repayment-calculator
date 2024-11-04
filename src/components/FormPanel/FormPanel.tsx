import { useState } from "react";
import { FaCalculator } from "react-icons/fa6";
import FormInput from "./FormInput/FormInput";
import FormRadio from "./FormRadio/FormRadio";

type FormPanelProps = {
    detectIfEmpty: (isEmpty: boolean) => void;
    calculateResult: (result: number) => void;
}

export default function FormPanel({detectIfEmpty, calculateResult}: FormPanelProps) {
    const [mortgageAmount, setMortgageAmount] = useState("");
    const [mortgageTerm, setMortgageTerm] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [mortgageType, setMortgageType] = useState(1); //1 - Repayment, 2 - Interest Only

    const calculateRepayment = () => {
        const principal = parseFloat(mortgageAmount);
        const rate = parseFloat(interestRate) / 100 / 12;
        const term = parseInt(mortgageTerm) * 12;

        if (mortgageType === 1 && principal && rate && term) {
            const repayment = Math.round((principal * rate) / (1 - Math.pow(1 + rate, -term)))/100;
            calculateResult(repayment)
            detectIfEmpty(true)
        } else if (mortgageType === 2 && principal && rate) {
            const repayment = principal * (rate);
            calculateResult(repayment)
            detectIfEmpty(true)
        } else {
            detectIfEmpty(false)
            calculateResult(0)
        }
    };

    const clearAll = () => {
        setMortgageAmount("");
        setMortgageTerm("");
        setInterestRate("");
        setMortgageType(1);
        detectIfEmpty(false)
    };

    return (
        <div className=" p-6 ">
            <div className="flex items-center justify-between w-100 mb-6">
                <p className="font-bold text-xl">Mortgage Calculator</p>
                <span onClick={clearAll} className="text-gray-400 underline cursor-pointer font-semibold">
                    Clear All
                </span>
            </div>
            <div className="w-100">
                <FormInput
                    prefix={true}
                    prefixValue="£"
                    suffix={false}
                    suffixValue=""
                    label="Mortgage Amount"
                    value={mortgageAmount}
                    onChange={(e) => setMortgageAmount(e.target.value)}
                />
            </div>
            <div className="flex items-center gap-4 w-100">
                <div>
                    <FormInput
                        prefix={false}
                        prefixValue=""
                        suffix={true}
                        suffixValue="years"
                        label="Mortgage Term"
                        value={mortgageTerm}
                        onChange={(e) => setMortgageTerm(e.target.value)}
                    />
                </div>
                <div>
                    <FormInput
                        prefix={false}
                        prefixValue=""
                        suffix={true}
                        suffixValue="%"
                        label="Interest Rate"
                        value={interestRate}
                        onChange={(e) => setInterestRate(e.target.value)}
                    />
                </div>
            </div>
            <div>
                <FormRadio selected={mortgageType} onChange={(value) => setMortgageType(value)} />
            </div>

            <div
                onClick={calculateRepayment}
                className={`w-auto bg-custom_line py-2 flex items-center justify-center gap-2 rounded-full cursor-pointer ${!mortgageAmount || !mortgageTerm || !interestRate ? 'pointer-events-none bg-gray-500 text-gray-300' :''}`}
            >
                <FaCalculator />
                <p className="font-semibold">Calculate Repayments</p>
            </div>


        </div>
    );
}

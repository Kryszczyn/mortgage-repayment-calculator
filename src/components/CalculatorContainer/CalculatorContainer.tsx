import { useState } from "react";
import FormPanel from "../FormPanel/FormPanel";
import ResultPanel from "../ResultPanel/ResultPanel";

export default function CalculatorContainer(){
    const [isEmptyResult, setIsEmptyResult] = useState(false);
    const [resultValue, setResultValue] = useState(0)

    return (
        <div className="w-1/2 h-1/2 min-w-1/2 min-h-1/2 bg-white rounded-2xl flex justify-between">
            <FormPanel detectIfEmpty={setIsEmptyResult} calculateResult={setResultValue} />
            <ResultPanel isEmpty={isEmptyResult} resultValue={resultValue} />
        </div>
    )
}
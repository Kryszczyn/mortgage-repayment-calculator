import CompleteResult from "./CompleteResult/CompleteResult"
import EmptyResult from "./EmptyResult/EmptyResult"

type ResultPanelProps = {
    isEmpty: boolean;
    resultValue: number
}

export default function ResultPanel({isEmpty, resultValue}: ResultPanelProps){
    return (
        <div className="w-1/2 min-h-full bg-custom_slate_900 p-6 rounded-es-[5rem] rounded-ee-2xl rounded-se-2xl">
            {
                !isEmpty ? <EmptyResult /> : <CompleteResult resultValue={resultValue} />
            }
        </div>
    )
}
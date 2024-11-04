type CompleteResultProps = {
    resultValue: number;
}

export default function CompleteResult({resultValue}: CompleteResultProps){
    return (
        <>
            <p className="text-white text-2xl mb-4">Your results</p>
            <p className="text-custom_slate_300 text-sm mb-4">Your results are shown below base on the information you provided. To adjust the result, edit the form and click "calculate repayments" again.</p>
            <div className="bg-custom_slate_900 px-6  border-t-2 border-t-custom_line rounded-md">
                <div className="py-6">
                    <p className="text-custom_slate_500">Your monthly repayments</p>
                    <p className="text-custom_line text-5xl">£ {resultValue}</p>
                </div>
            </div>
        </>
    )
}
import emptyImage from './../../../assets/images/illustration-empty.svg'

export default function EmptyResult(){
    return (
        <div className="flex items-center justify-center flex-col w-full h-full">
            <img src={emptyImage}/>
            <p className='text-custom_slate_100 font-bold text-xl my-4'>Result shown here</p>
            <p className='text-center text-custom_slate_300'>Complete the form and click "calculate repayments" to see what your monthly repayments would be</p>
        </div>
    )
}
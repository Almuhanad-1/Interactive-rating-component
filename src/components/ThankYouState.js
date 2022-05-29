import React from 'react'
import { ReactComponent as ThankYouSvg } from '../images/illustration-thank-you.svg';

const ThankYouState = ({selected}) => {
    return (
        <div className='w-80 mx-4 p-6 bg-VeryDarkBlue  rounded-3xl flex flex-col items-center justify-between sm:px-8 sm:py-9 sm:w-90 sm:h-92'>


            <ThankYouSvg />
            <div className='bg-DarkBlue rounded-full text-xs text-Orange px-4 py-0.5 mt-7 mb-8 leading-6 tracking-wider '>
                <p>You selected <span>{selected}</span> out of 5</p>
            </div>
            <div className='text-White font-bold text-xl tracking-wide '>
                <h1>Thank you!</h1>
            </div>
            <div className='text-LightGrey text-center text-xs indent- leading-5  mt-1.5'>
                <p >We appreciate you taking the time to give a rating. If you ever need more support,
                    don't hesitate to get in touch!</p>
            </div>


        </div>
    )
}

export default ThankYouState
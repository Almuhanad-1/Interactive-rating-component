import React, { useState } from 'react'
import { ReactComponent as StarIconSvg } from '../images/icon-star.svg';


const RatingState = ({ setSelected, selected }) => {

    const [rating, setRating] = useState(null)
    const handleChange = (event) => {
        setRating(event.target.value)
    }
    const handleClick = () => {
        setSelected(rating)
    }
    return (
        <div className='w-72 h-80 mx-4 p-5 bg-VeryDarkBlue  rounded-3xl flex flex-col items-start justify-between sm:p-7 sm:w-90 sm:h-92 sm:mx-0'>
            <div className='flex justify-start w-full ' >
                <div className='bg-DarkBlue p-3 mb-3 sm:mb-5 rounded-full '>
                    <StarIconSvg />
                </div>
            </div>
            <div className='text-White font-bold text-xl tracking-wide '>
                <h1>How did we do?</h1>
            </div>
            <div className='text-LightGrey text-xs leading-5  sm:mb-3.5 sm:mt-1.5'>
                <p >Please let us know how we did with your support request. All feedback is appreciated
                    to help us improve our offering!</p>
            </div>

            <form className='w-full' name='myform'>
                <div className='text-LightGrey self-center flex justify-between mb-4 '>
                    <div>
                        <label
                            className='bg-DarkBlue w-10 h-10 rounded-full my-2 flex justify-center items-center hover:bg-Orange hover:text-White hover:cursor-pointer focus-within:bg-LightGrey focus-within:text-White'
                            htmlFor='rating-one'>1
                            <input
                                type='radio'
                                name='rating'
                                id='rating-one'
                                value='1'
                                required
                                className='appearance-none -z-10'
                                checked={selected === '1'}
                                onChange={handleChange}
                            ></input>
                        </label>

                    </div>
                    <div>
                        <label
                            className='bg-DarkBlue w-10 h-10 rounded-full my-2 flex justify-center items-center hover:bg-Orange hover:text-White hover:cursor-pointer focus-within:bg-LightGrey focus-within:text-White'
                            htmlFor='rating-two'>2
                            <input
                                type='radio'
                                name='rating'
                                id='rating-two'
                                value='2'
                                className='appearance-none -z-10'
                                checked={selected === '2'}
                                onChange={handleChange}
                            ></input>
                        </label>

                    </div>
                    <div>
                        <label
                            className='bg-DarkBlue w-10 h-10 rounded-full my-2 flex justify-center items-center hover:bg-Orange hover:text-White hover:cursor-pointer focus-within:bg-LightGrey focus-within:text-White'
                            htmlFor='rating-three'>3
                            <input
                                type='radio'
                                name='rating'
                                id='rating-three'
                                value='3'
                                className='appearance-none -z-10'
                                checked={selected === '3'}
                                onChange={handleChange}
                            ></input>
                        </label>

                    </div>
                    <div>
                        <label
                            className='bg-DarkBlue w-10 h-10 rounded-full my-2 flex justify-center items-center hover:bg-Orange hover:text-White hover:cursor-pointer focus-within:bg-LightGrey focus-within:text-White'
                            htmlFor='rating-four'>4
                            <input
                                type='radio'
                                name='rating'
                                id='rating-four'
                                value='4'
                                className='appearance-none -z-10'
                                checked={selected === '4'}
                                onChange={handleChange}
                            ></input>
                        </label>

                    </div>
                    <div>
                        <label
                            className='bg-DarkBlue w-10 h-10 rounded-full my-2 flex justify-center items-center hover:bg-Orange hover:text-White hover:cursor-pointer focus-within:bg-LightGrey focus-within:text-White'
                            htmlFor='rating-five'>5
                            <input
                                type='radio'
                                name='rating'
                                id='rating-five'
                                value='5'
                                className='appearance-none -z-10'
                                checked={selected === '5'}
                                onChange={handleChange}
                            ></input>
                        </label>

                    </div>
                </div>

                <button
                    className=' text-White bg-Orange w-full rounded-full text-center tracking-widest text-xs py-2.5 hover:bg-White hover:text-Orange'
                    onClick={handleClick}>
                    SUBMIT
                </button>



            </form >

        </div >

    )
}

export default RatingState
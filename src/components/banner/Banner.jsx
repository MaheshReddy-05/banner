import React from 'react'
import '../../css/Banner.css';
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Button from '../materialUI/Buttons'
import { ban } from "../../assets/"
function Banner() {
    const [text] = useTypewriter({
        words: ["Raja Arivind!", "Mahesh Reddy", "blah blah..."],
        loop: true,
        typeSpeed: 100,
        deleteSpeed: 50,
        delaySpeed: 2000,
    });
    return (
        <div className=' bg-[#292d3e]  overflow-hidden flex flex-row  items-center border-b-[1px] border-b-black'>
            <div className='basis-1/2 '>
                <h2 className='font-bold text-4xl text-rose-500 heading-1'> Learn With {" "}
                    <span className='text-4xl text-[#e3e3e3]'>{text}</span>
                    <Cursor
                        cursorBlinking={false}
                        cursorColor="#e3e3e3"
                        cursorStyle={"_"}
                    />
                </h2>
                <h1 className='text-2xl  font-normal text-[#e3e3e3] heading-2'>
                    The Ultimate Guide To Ace <br />
                    MAANG Interviews.
                </h1>
                <Button ></Button>

            </div>
            <div className='basis-1/2'>
                <img className=' bg-[#292d3e]  banner-img w-5/6 ' src={ban} alt="" />
            </div>
        </div>
    )
}

export default Banner

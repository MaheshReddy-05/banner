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
        <div className=' bg-[#111827]  overflow-hidden  flex  border-b-[1px] border-b-black items-center'>
            <div className='basis-1/2 container w-32 h-32 flex pl-20'>
                <div >
                    <h2 className='font-bold text-4xl text-rose-500 heading-1'> Learn With {" "}
                        <span className='text-4xl text-[#e3e3e3]'>{text}</span>
                        <Cursor
                            cursorBlinking={true}
                            cursorColor="#e3e3e3"
                            cursorStyle={"_"}
                        />
                    </h2>
                    <h1 className='text-2xl  font-normal text-[#e3e3e3] pt-5 pb-2 heading-2'>
                        The Ultimate Guide To Ace <br />
                        MAANG Interviews.
                    </h1>
                    <Button ></Button>
                </div>
            </div>
            <div className='basis-1/2'>
                <img className=' bg-[#111827]  banner-img w-4/5   h-auto' src={ban} alt="" />
            </div>
        </div>
    )
}

export default Banner

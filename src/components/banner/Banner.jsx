import React from 'react'
import './Banner.css';
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Button from '../materialUI/Buttons'
import { banr } from "../../assets/"
function Banner() {
    const [text] = useTypewriter({
        words: ["Sunchit Deduja", "LeetCode Fam", "Interview prof"],
        loop: true,
        typeSpeed: 100,
        deleteSpeed: 50,
        delaySpeed: 2000,
    });
    return (
        <div className='w-full  h-[600px] pb-20 flex flex-row  border-b-[1px] border-b-black'>
            <div className='basis-1/2 ml-20 mt-20 pl-20 pt-10'>
                <h2 className='font-bold text-4xl text-rose-500 heading-1'> Learn With {" "}
                    <span className='text-4xl text-black'>{text}</span>
                    <Cursor
                        cursorBlinking={false}
                        cursorColor="#1f2937"
                        cursorStyle={"|"}
                    />
                </h2>
                <h1 className='text-2xl pt-4 font-normal heading-2'>
                    The Ultimate Guide To Ace <br />
                    MAANG Interviews.
                </h1>
                <Button ></Button>

            </div>
            <div className='basis-1/2'>
                <img className='max-w h-auto classes object-cover banner-img' src={banr} alt="" />
            </div>
        </div>
    )
}

export default Banner

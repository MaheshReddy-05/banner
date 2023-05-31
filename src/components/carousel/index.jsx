import { Avatar, Card } from '@mui/material';
import React from 'react'
import Carousel from 'react-grid-carousel'
import './index.css'

const Slider = () => {
    const testimonials = [
        {
            name: "Raja Aravindha",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?"
        },
        {
            name: "Mahesh reddy",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?"
        },
        {
            name: "Someone someone",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?"
        },
        {
            name: "This persobn",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?"
        },
        {
            name: "C++ or Java or Python?",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?"
        },
        {
            name: "Is CGPA matters?",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?"
        },
        {
            name: "How do I get started?",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?"
        },
        {
            name: "How do I get started?",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?"
        },

    ]
    return (<div className="slider-container">

        <Carousel
            cols={3}
            containerStyle={{ maxWidth: '1300px', margin: '0 auto' }}
            mobileBreakpoint={400}
            gap={20}
            loop={true}
            autoplay={3000}
            containerClassName={"slider-container"}
        >
            {testimonials.map(({ name, text }, i) => (
                <Carousel.Item key={i}>
                    <Card className='card'>
                        <div >
                            <Avatar>{name[0].toUpperCase()}</Avatar>
                            <span className='slider-name'>{name}</span>
                        </div>
                        <span className='slider-text'>{text}</span>
                    </Card>
                </Carousel.Item>
            ))}
        </Carousel>
    </div>
    )
}
export default Slider;


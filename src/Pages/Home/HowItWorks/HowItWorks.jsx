import React from 'react';
import Card from './Card/Card';

const HowItWorks = () => {
    return (
        <div className='px-20 my-15'>
            <h1 className='text-center font-bold text-secondary text-4xl'>How It Works</h1>

            <div className='flex gap-10 my-10'>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </div>
    );
};

export default HowItWorks;
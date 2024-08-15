import React from 'react';
import FunCard from './FunCard'

const funstuff = [
    {
        title: 'Art',
        img: '/art-img.png',
        link: '/art',
    },
    ]

    export default function ForFun() {
    return (
        <div id="fun" className="w-full md:w-[90%] lg:w-[95%] xl:w-[85%] m-auto flex flex-col items-center pt-[50px] pb-[100px] my-[50px]">
            {/* for fun section */}
            <div className="w-[80%] lg:w-[980px] lg:pl-[200px]">
                <div className="text-left">  
                <h2 className="text-3xl font-medium font-poppins text-primary">For Fun</h2>
                <div className="w-full flex flex-row gap-6 justify-between pt-[50px]">
                    {funstuff.map((fun, index) => (
                    <FunCard
                        key={index}
                        title={fun.title}
                        img={fun.img}
                        link={fun.link}
                    />
                    ))}
                </div>
                </div>
            </div>
        </div>
    );
    };

'use client';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })



export default function Home() {
    useEffect(() => {
        fetch("https://api.quotable.io/random" )
        .then((resp)=>{
            return resp.json();
        })
        .then((resp)=>{
            console.log("resp", resp);
            console.log("quote", resp.content);

        })
        .catch((err)=>{
            console.log("error occur", err);
            });
        
    }, []);

    return <h1 className='text-4xl font-bold text-center'>Hello! Dogar....</h1>;
}
  
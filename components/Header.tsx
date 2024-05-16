import React from 'react';
import snapchat from '@/public/snapchat.png'
import Image from 'next/image';
import { Button } from './ui/button';
import { FaLaptop } from "react-icons/fa";
import Link from 'next/link';
import { auth } from '@/auth';
import { BiMessageRoundedDots } from "react-icons/bi";

const Header = async () => {
    const authUser = await auth();
    console.log(authUser)



    return (
        <div className='flex justify-between items-center max-w-6xl mx-auto'>
            <div>
                <h1 className='text-7xl font-medium'>Snapchat is <br />now on the <br />web!</h1>
                <h1 className='my-5 text-xl'>Chat, Snap, and video call your friends from <br />wherever you are.</h1>
                {
                    authUser ? <Link href={'/login'}><Button className='gap-2 rounded-full'><BiMessageRoundedDots  size={'18px'}/> Start a chat</Button>
                    </Link> 
                    : 
                    <Link href={'/login'}><Button className='gap-2 rounded-full'><FaLaptop />Login to chat</Button>
                    </Link>
                }
                
            </div>
            <div className=''>
                <Image
                    src={snapchat}
                    alt='snapchat'
                    width={650}
                    height={650} />
            </div>
        </div>
    );
}

export default Header;

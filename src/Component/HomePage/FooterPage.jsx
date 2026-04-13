import React from 'react';
import instaImage from '../../assets/instagram.png'
import fbImage from '../../assets/facebook.png'
import TitterImage from '../../assets/twitter.png'
const FooterPage = () => {
    return (
        <div className='bg-[#244D3F] pt-10'>
            <div className='text-center space-y-4 max-w-290 mx-auto'>
                <h1 className='text-white font-bold text-6xl'>KeenKeeper</h1>
                <p className='text-white'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <h2 className='text-white'>Social Links</h2>
                <div className='flex justify-center items-center gap-2 border-b border-[#1A8862] pb-6'>
                    <img src={instaImage} alt="" />
                    <img src={fbImage} alt="" />
                    <img src={TitterImage} alt="" />
                </div>
            </div>
                <div className='max-w-290 mx-auto pt-3 text-[#FAFAFA]'>
                    <div className='flex justify-between'>
                        <p>© 2026 KeenKeeper. All rights reserved.</p>
                    <div className='flex justify-end gap-6'>
                        
                        <div>

                        <p>Privacy Policy</p>
                        </div>
                         <div>

                        <p> Terms of Service</p>
                        </div>
                        <div>

                        <p>Cookies</p>
                        </div>

                        
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default FooterPage;
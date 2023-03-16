import React, { useState } from 'react';
import { AiFillCloseCircle, AiFillSetting } from 'react-icons/ai'

const Navigation = () => {

    const [openDrawer, setOpenDrawer] = useState(false)

    return (
        <div>

            <div className='bg-gray-900 text-[#00AEEF] py-4'>
                <div className='flex justify-between items-center container mx-auto '>
                    <div className=" flex items-center gap-3">
                        <img className='w-12' src="/img/am-logo.png" alt="logo" />
                        <h3 className='uppercase text-[#00AEEF] font-semibold'>Aziz Mohammad</h3>
                    </div>
                    <div className="flex gap-5">
                        <button className='uppercase text-[#00AEEF] font-semibold'>Contact Us</button>
                        <button onClick={() => setOpenDrawer(true)} className='setting-icon'>
                            <AiFillSetting className='text-2xl'></AiFillSetting>
                        </button>
                    </div>
                </div>
            </div>

            <div className={`transition-all duration-1000 bg-black/80 w-full h-full fixed z-50 top-0  ${openDrawer ? 'right-0' : '-right-[200%]'} bottom-0 flex justify-end`}>
                <div className='w-[25%] h-full bg-[#071538]'>

                    <div className='flex items-center py-5 px-3 justify-between border-b-2 border-[#1C2640]'>
                        <div className='text-[#F8B127] text-2xl flex items-center gap-2'>
                            < AiFillSetting />
                            <h3>Settings</h3>
                        </div>

                        <div onClick={() => setOpenDrawer(false)} className='text-[#F8B127] text-3xl flex items-center cursor-pointer'>
                            <AiFillCloseCircle />
                        </div>
                    </div>

                    <div className='mt-5 px-3'>
                        <div className='flex items-center gap-3'>
                            <label class="switch" for="checkbox">
                                <input type="checkbox" id="checkbox" />
                                <div class="slider round"></div>
                            </label>
                            <h2 className='text-white capitalize font-medium'>Switch to sharp mode</h2>

                        </div>
                        <div className='flex items-center gap-3 mt-5'>
                            <label class="switch" for="checkbox2">
                                <input type="checkbox" id="checkbox2" />
                                <div class="slider round"></div>
                            </label>
                            <h2 className='text-white capitalize font-medium'>Switch to light mode</h2>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navigation;

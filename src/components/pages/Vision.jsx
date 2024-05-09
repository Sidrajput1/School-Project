import React from 'react'
import ShortIntro from '../ShortIntro'

function Vision() {
    return (
        <div>
            <ShortIntro />
            <div className='w-full min-h-[100vh]'>
                
                <div className='w-full min-h-[70vh] border-2 flex flex-col gap-10'>
                    <div className=' w-[100%] flex flex-row border-2 '>
                        <div className="card lg:card-side bg-base-100 shadow-xl w-[50%]">
                            <figure><img src="https://t4.ftcdn.net/jpg/01/24/96/71/360_F_124967194_TDjsWtN4E3jREDz1UQOLJbVG4lo4Zc5t.jpg" alt="Album" /></figure>
                            <div className="card-body ">
                               
                                <p className='max-w-xl line-clamp-6'>Our moral obligation and on-going work are to mould and shape future generations to meet the challenges of the twenty-first century. We envision a solid community of future leaders who would be receptive to the winds of change and committed to social responsibility while finding a delicate balance between conventional values and contemporary ethos..</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Know More</button>
                                </div>
                            </div>
                        </div>
                        <div className='m-auto'>
                            <h1 className='text-8xl font-serif font-semibold italic rotate-12'>Vision</h1>
                        </div>
                    </div>
                    <div className='w-full flex flex-row-reverse border-2 justify-end items-end'>
                        <div className="card lg:card-side bg-base-100 shadow-xl w-[50%] ">
                            <figure><img src="https://www.dpskolkata.com/wp-content/uploads/2022/12/mission-img.jpg" alt="Album" /></figure>
                            <div className="card-body">
                                
                                <p className='max-w-xl line-clamp-6'>Our mission is Education for All, so we promote a calm, energising, and intellectually stimulating environment where every student stands an equal chance to showcase their talents. Every child is born with a unique potential & ability and does not necessarily have to follow in the footsteps of others. We need to support them as they cultivate and harness the inherent strength they are blessed with.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Know More</button>
                                </div>
                            </div>
                        </div>
                        <div className='m-auto'>
                            <h1 className='text-8xl font-serif font-semibold italic rotate-45'>Misson</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vision
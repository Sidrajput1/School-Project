import React, { useEffect, useRef, useState } from "react";

import 'material-symbols';

import Enroll from "./Enroll";


// function Testimonial() {

//     const sliderRef = useRef(null);
//     const [currentCard, setCurrentCard] = useState(null);

//     useEffect(() => {
//         sliderInit();

//     }, []);

//     const renderReviews = () => {
//         return REVIEWS.map((review, idx) => (
//             <div key={idx} className={`card ${idx === 0 ? 'active' : ''}`}>
//                 <blockquote>{review.review}</blockquote>
//                 <div className="details">
//                     <img src={review.avatar} alt="Avatar" />
//                     <p>{review.name}</p>
//                     <p>{review.role}</p>
//                 </div>
//             </div>
//         ));
//     };

//     const sliderInit = () => {
//         const slides = sliderRef.current.querySelectorAll('.card');
//         slides.forEach((slide, idx) => {
//             if (idx === 0) {
//                 slide.classList.remove('hidden');
//                 setCurrentCard(slide);
//             }
//         });
//     };

//     // const handleSlide = (direction) => {
//     //     const slides = sliderRef.current.querySelectorAll('.card');
//     //     const currentIndex = Array.from(slides).findIndex((slide) => slide === currentCard);
//     //     let nextIndex;

//     //     if (direction === 'prev') {
//     //         nextIndex = (currentIndex - 1 + slides.length) % slides.length;
//     //     } else {
//     //         nextIndex = (currentIndex + 1) % slides.length;
//     //     }

//     //     currentCard.classList.add('hidden');
//     //     slides[nextIndex].classList.remove('hidden');
//     //     setCurrentCard(slides[nextIndex]);
//     // };

//     const handleSlide = (direction) => {
//         const slides = sliderRef.current.querySelectorAll('.card');
//         const currentIndex = Array.from(slides).findIndex((slide) => slide.classList.contains('active'));
//         let nextIndex;

//         if (direction === 'prev') {
//             nextIndex = (currentIndex - 1 + slides.length) % slides.length;
//         } else {
//             nextIndex = (currentIndex + 1) % slides.length;
//         }

//         slides[currentIndex].classList.remove('active');
//         slides[nextIndex].classList.add('active');
//     };




//     return (
//         <div className="bg-gradient-to-tr from-slate-200 to-slate-50 text-slate-800 flex flex-col justify-center items-center min-h-screen relative px-4">
//             <main className="bg-white my-4 w-full max-w-2xl rounded-3xl text-center p-8 sm:p-16 ease-in-out">
//                 <h1 className="text-xl font-bold">A word from our customers</h1>
//                 <p className="text-sm">We've been helping businesses do their best since 2018</p>

//                 <div className="mt-6 grid grid-cols-1 sm:grid-cols-[60px_auto_60px] grid-template-areas:'slider_slider'_'nav-left_nav-right' sm:grid-template-areas:'nav-left_slider_nav-right' gap-2 sm:gap-6 button:rounded-full button:w-10 button:h-10 button:shrink-0 button:text-gray-600 button:text-2xl button:transition-all button:duration-500 button:relative button:isolate button:bg-black sm:button:mt-8 before:button:absolute before:button:inset-px before:button:transition-all before:button:duration-300 before:button:-z-10 before:button:rounded-full hover:before:button:inset-full before:button:bg-white hover:button:text-white hover:button:bg-black hover:button:border-black">
//                     <button data-slide="prev" className="button button:grid-area:nav-left material-symbols-outlined">navigate_before</button>
//                     <div id="slider" ref={sliderRef} className="grid-area:slider">
//                         {renderReviews()}
//                     </div>
//                     <button onClick={() => handleSlide('next')} data-slide="next" className="button grid-area:nav-right material-symbols-outlined">navigate_next</button>
//                 </div>
//             </main>

//             {/* template - cards */}
//             <template id="tpl-card">
//                 <div className="card grid-area:stack hidden">
//                     <blockquote className="bg-black text-white rounded-md p-6 text-sm transition-all duration-500 scale-0 relative isolate before:absolute before:bg-black before:w-4 before:h-4 before:rotate-45 before:-bottom-2 before:left-2/4 before:-translate-x-2/4 before:-z-10 before:-translate-y-full before:transition before:duration-500 before:delay-500"></blockquote>
//                     <div className="details text-sm translate-y-[150px] transition-all duration-500 flex flex-col items-center gap-2 mt-6">
//                         <img className="w-16 h-16 object-cover rounded-full" alt="" />
//                         <div>
//                             <p className="text-sm font-bold"></p>
//                             <p className="text-xs"></p>
//                         </div>
//                     </div>
//                 </div>
//             </template>
//         </div>

//     )
// }





function Testimonial() {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const sliderRef = useRef(null);

    const REVIEWS = [
        {
            id: 6,
            name: 'Santosh Singh',
            role:'Father',
            avatar: '',
            review: `Namaste, I am Santosh, My Son Sunny is a 1st class at St. Marx School Patna. We have been Part of the School since he was three years old.We love the nurturing and warm environment and community that the school provides `,
        },
        {
            id: 0,
            name: 'Archna Tiwari',
            role: 'Mother',
            avatar: 'https://i.pravatar.cc/150?img=42',
            review: `We have been at St Marx for 2 years and We absolutely love the school.Our three children are thriving. The academics are top-notch! The language immersion program is very effective and all three are bilingual. Most importantly St Marx is a second home for them `,
        },
        {
            id: 2,
            name: 'Kishan Kumar',
            role: 'Guardian',
            avatar: 'https://i.pravatar.cc/150?img=13',
            review: `St Marx School is a wonderful, nurturing school with a rigorous and purposeful academic curriculum. While we don’t speak English at home, it has been so amazing to see our son pick up the language through the immersion program. We also love that the school focuses on developing social and emotional intelligence as much as literacy, maths and science in the early primary years. The teachers are fantastic and the entire St. Marx community has been warm and welcoming since Day 1. I would definitely recommend St marx!”`,
        },
        {
            id: 3,
            name: 'Rupa Sharma',
            role: 'Mother',
            avatar: 'https://i.pravatar.cc/150?img=41',
            review: `St Marx School is a wonderful, nurturing school with a rigorous and purposeful academic curriculum. While we don’t speak English at home, it has been so amazing to see our son pick up the language through the immersion program. We also love that the school focuses on developing social and emotional intelligence as much as literacy, maths and science in the early primary years. The teachers are fantastic and the entire St. Marx community has been warm and welcoming since Day 1. I would definitely recommend St marx!”`,
        },
        {
            id: 13,
            name: 'Pk jha',
            role: 'Father',
            avatar: 'https://i.pravatar.cc/150?img=57',
            review: ``,
        },
        {
            id: 4,
            name: 'Arvind Keshari',
            role: 'Father',
            avatar: '',
            review: `St Marx School is a wonderful, nurturing school with a rigorous and purposeful academic curriculum. While we don’t speak English at home, it has been so amazing to see our son pick up the language through the immersion program. We also love that the school focuses on developing social and emotional intelligence as much as literacy, maths and science in the early primary years. The teachers are fantastic and the entire St. Marx community has been warm and welcoming since Day 1. I would definitely recommend St marx!”`,
        },
        
        
    ];

    const renderReviews = () => {
        const tplCard = document.querySelector("#tpl-card");
        const listCards = document.querySelector("#list-cards");
        console.log(listCards)

        REVIEWS.forEach((r, idx) => {
            const clone = tplCard.content.cloneNode(true);
            clone.querySelector("blockquote").innerText = `"${r.review}"`;
            clone.querySelector("[review-name]").innerText = r.name;
            clone.querySelector("[review-role]").innerText = r.role;
            clone.querySelector("[review-img]").src = r.avatar;


            if (idx === 0) {
                // Remove opacity and transition classes for the first card
                clone.querySelector(".card").classList.remove('hidden');
            }

            listCards.appendChild(clone);
        });
    };

    const handleSlide = (direction) => {

        const totalSlides = REVIEWS.length;
        let newIndex;
        if (direction === 'prev') {
            newIndex = (totalSlides + currentCardIndex - 1) % totalSlides;
        } else {
            newIndex = (currentCardIndex + 1) % totalSlides;
        }
        setCurrentCardIndex(newIndex);
    };


    const sliderInit = () => {


        const slides = sliderRef.current.querySelectorAll('.card');
        const sliderButtons = sliderRef.current.querySelectorAll('[data-slide]');



        sliderButtons.forEach(btn => {
            btn.addEventListener("click", (e) => {
                sliderButtons[0].classList.add("translate-x-20");
                sliderButtons[1].classList.add("-translate-x-20");

                const currentCard = slides[currentCardIndex];
                currentCard.querySelector("blockquote").classList.add("scale-0", "before:-translate-y-full");
                currentCard.querySelector(".details").classList.add("scale-0", "translate-y-[150px]");

                setTimeout(() => {
                    sliderButtons[0].classList.remove("translate-x-20");
                    sliderButtons[1].classList.remove("-translate-x-20");

                    const currentCard = slides[currentCardIndex];
                    currentCard.classList.remove("opacity-0");
                    currentCard.querySelector("blockquote").classList.remove("scale-0", "before:-translate-y-full");
                    currentCard.querySelector(".details").classList.remove("scale-0", "translate-y-[150px]");
                }, 500);
            });
        });

    };

    useEffect(() => {
        document.addEventListener('DOMContentLoaded', () => {
            renderReviews();
        });
        sliderInit();


    }, []);

    return (
        <div>
           <Enroll/>
            <div className=" text-slate-800 flex flex-col justify-center items-center min-h-screen  relative px-4"
                style={{
                    background:"url('https://img.freepik.com/free-vector/watercolor-soft-earth-tones-background_23-2151155641.jpg?w=900&t=st=1715581380~exp=1715581980~hmac=68532ab095b336917deeef4050485ce1b2a7c8207bf5469146a86ca54829a744')",
                    objectFit:"cover",
                    backgroundRepeat:"no-repeat ",
                   backgroundPosition:"center",
                   
                   
                }}
            >
                {/* <img src="https://media.istockphoto.com/id/155282720/photo/five-stars.webp?b=1&s=170667a&w=0&k=20&c=G3Y51N4jlmC8KzW7y8LwdavQrFr9xe1sjRWuyVfihA8=" className="" alt="" /> */}
                <main className="bg-transparent my-4 w-full max-w-2xl rounded-3xl text-center p-8 sm:p-16 ease-in-out">
                    <h1 id="st-marx" className="text-4xl font-bold font-serif">Some words from Parents</h1>
                   
                    <p  className="text-sm text-black">We've been Provide Education to do their best since 2018</p>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-[60px_auto_60px] grid-template-areas:'slider_slider'_'nav-left_nav-right' sm:grid-template-areas:'nav-left_slider_nav-right' gap-2 sm:gap-6 button:rounded-full button:w-10 button:h-10 button:shrink-0 button:text-gray-600 button:text-2xl button:transition-all button:duration-500 button:relative button:isolate button:bg-black sm:button:mt-8 before:button:absolute before:button:inset-px before:button:transition-all before:button:duration-300 before:button:-z-10 before:button:rounded-full hover:before:button:inset-full before:button:bg-white hover:button:text-white hover:button:bg-black hover:button:border-black">
                        <button data-slide="prev" className="button button:grid-area:nav-left material-symbols-outlined">navigate_before</button>
                        <div id="slider" ref={sliderRef} className="grid-area:slider">
                            {REVIEWS.map((review, idx) => (
                                <div id="list-cards" key={idx} className={`card ${currentCardIndex === idx ? '' : 'hidden'}`}>
                                    <blockquote>{review.review}</blockquote>
                                    <div className="details">
                                        <img className="rounded-full object-cover md:px-36 px-0 py-2 md:h-28 h-36 md:w-24 w-full" src={review.avatar} alt="Avatar" />
                                        <p>{review.name}</p>
                                        <p>{review.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button onClick={() => handleSlide('next')} data-slide="next" className="button grid-area:nav-right material-symbols-outlined">navigate_next</button>
                    </div>
                </main>

                {/* template - cards */}
                <template id="tpl-card">
                    <div className="card grid-area:stack hidden">
                        <blockquote className="bg-black text-white rounded-md p-6 text-sm transition-all duration-500 scale-0 relative isolate before:absolute before:bg-black before:w-4 before:h-4 before:rotate-45 before:-bottom-2 before:left-2/4 before:-translate-x-2/4 before:-z-10 before:-translate-y-full before:transition before:duration-500 before:delay-500"></blockquote>
                        <div className="details text-sm translate-y-[150px] transition-all duration-500 flex flex-col items-center gap-2 mt-6">
                            <img className="w-16 h-16 object-cover rounded-full" alt="" />
                            <div>
                                <p className="text-sm font-bold"></p>
                                <p className="text-xs"></p>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    );
}

export default Testimonial;

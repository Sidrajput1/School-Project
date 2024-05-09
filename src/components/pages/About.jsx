import React from 'react'
import Message from './Message'

function About() {
    return (



        <div>
            <div className="relative bg-gray-900 overflow-hidden">
                {/* Background Image */}
                <img
                    className="absolute inset-0 h-full w-full object-fill"
                    src="https://lh3.googleusercontent.com/p/AF1QipM1kiFOmZ5KvOApr-GYAJZxWmcN4u3omI6v2wXW=s680-w680-h510"
                    alt="School Building"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-75"></div>
                <div className="relative z-10 p-10 lg:p-20 text-white">
                    <div className="text-center">
                        <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight mb-4">
                            Welcome to Our School
                        </h2>
                        <p className="text-lg lg:text-xl mb-6">
                            Educating Minds, Empowering Lives
                        </p>
                        <p className="text-lg lg:text-xl">
                            Discover our commitment to excellence in education and community
                            engagement.
                        </p>
                    </div>

                </div>

            </div>
            <div className='w-full ml-10 min-h-[70vh] mt-10 flex justify-between items-start '>
                <div className=''>
                    <figure className='float-right w-[50%] h-fit p-8 '>
                        <img src="https://lh3.googleusercontent.com/p/AF1QipNDxYjIZqYx_RwmSO-up8VyZE5vicYIGxHph4ut=s680-w680-h510" alt="building2" className='max-w-[80%] max-h-[70vh] object-cover shadow-2xl border-b-2 rounded-xl ' />
                    </figure>
                    <section className='w-[90%] p-4  text-justify bg-transparent'>
                        <p className='text-gray-500 text-lg'>
                        St Marx Academy school located in Kankarbagh offers students of all ages a comprehensive education that focuses on academic excellence, personal growth, and social development. Our day school offers a wide range of programs designed to meet the needs of students at every stage of their educational journey. From kindergarten through high school, our experienced and dedicated faculty work to create a safe and nurturing environment where students can thrive. Our curriculum is designed to challenge and inspire students, while also providing them with the skills and knowledge they need to succeed in today's world. At our day school, we believe that education is not just about what happens in the classroom. That's why we offer a variety of extracurricular activities, including sports, clubs, and community service programs, to help students explore their interests and develop their talents. With a focus on academic excellence, personal growth, and social development, our day school is the perfect choice for parents who want the best possible education for their child. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed suscipit vero, quaerat a facere est illo minima unde atque harum autem distinctio perspiciatis possimus qui enim neque velit accusamus ullam veniam fugit, nemo aspernatur maiores corrupti ipsa. Sunt vel ab omnis dolorem expedita sapiente suscipit error ipsam dicta, ipsum repellendus recusandae fugit modi sint eum ullam voluptatibus ipsa quidem magnam necessitatibus autem dolores ducimus et! Impedit porro culpa temporibus quo sunt eum recusandae similique itaque illum dignissimos, labore nam voluptatibus hic eveniet nulla quaerat dolorum animi ratione asperiores. Facilis impedit aut ea consectetur ex eius officia excepturi ipsum nulla voluptas.
                        </p>
                    </section>
                </div>

            </div> 

            <Message />

            
            
        </div>





    )
}

export default About
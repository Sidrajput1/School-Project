import React from 'react'
import './promise.css'
import Ball from './Ball'
// import { animate_balls } from './animate_ball'
import { Link } from 'react-router-dom'

function Promise() {
  return (
   <main>
    <div className="divisions division_4"  >
        <div className="title_header mx-auto">
            <h2 className="title medium text-center font-bold text-3xl text-[#3F985E] brightness-200">We promise best future for your kids</h2>
            <p className='text-center py-6'>"Let us be the architects of their dreams, the nurturers of their passions, and the guardians of their potential."</p>
            <aside className="flex ">
                <a href="#" className="btn btn_1 bg-sky-400">Explore more</a>
                <i className="fa fa-angle-right"> #</i>
                <Link to={'/gallery'}><a className='btn bg-green-400' >Gallery Portfolio</a></Link>
            </aside>
        </div>
        <div className="cards">
            {/* <span className="ball"></span>
            <span className="ball"></span>
            <span className="ball"></span>
            <span className="ball"></span> */}
           <Ball/>
            <section className="flex">
                <figure className="flex_content">
                    <img src="https://i.postimg.cc/0yF7CRkX/01.jpg" alt="boy1" loading="lazy" />
                </figure>
                <figure className="flex_content">
                    <img src="https://i.postimg.cc/wBNLff3q/02.jpg" alt="boy2" loading="lazy" />
                </figure>
                <figure className="flex_content">
                    <img src="https://i.postimg.cc/7hK2GjtV/03.jpg" alt="boy3" loading="lazy" />
                </figure>
                <figure className="flex_content">
                    <img src="https://i.postimg.cc/tCgPQC7m/04.jpg" alt="boy4" loading="lazy" />
                </figure>
            </section>
        </div>
    </div>
   </main>
  )
}

export default Promise
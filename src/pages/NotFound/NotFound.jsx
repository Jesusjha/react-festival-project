import React from 'react'
import './NotFound.css'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className='notfound__bg'>
      <section className='notfound__container'>
        <article className='notfound_title--article'>
          <p className="notfound__title">Oh no!</p>
        </article>
          <p className="notfound__number">404</p>
        <article className="notfound__subtitle--article">
          <p className="notfound__subtitle">You are totally lost in an imaginary festival!</p>
        </article>
        <Link to='/mainstage'><button className='notfound__btn'>TAKE ME HOME</button></Link>
      </section>
    </main>
  )
}

export default NotFound
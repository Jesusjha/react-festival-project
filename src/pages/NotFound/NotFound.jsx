import React from 'react'

import { BlueBtn } from '../../ui/BlueBtn/BlueBtn';
import logo404 from '../../assets/images/logo-bg.svg'
import './NotFound.css'

import { Link } from 'react-router-dom';


const NotFound = () => {

  return (
    <main className='notfound__bg'>
      <section className='notfound__container'>
      <img src={logo404} alt="" className="notfound__logo" />
        <article className='notfound_title--article'>
          <p className="notfound__title">Oh no!</p>
        </article>
          <p className="notfound__number">404</p>
        <article className="notfound__subtitle--article">
          <p className="notfound__subtitle">Who are you looking for?</p>
        </article>
        <Link to='/mainstage'><BlueBtn styleLog className='notfound__btn'>TAKE ME HOME</BlueBtn></Link>
      </section>
    </main>
  )
}

export default NotFound
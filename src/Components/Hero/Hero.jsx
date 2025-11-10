import React from 'react'
import './Hero.css'
import { useNavigate } from 'react-router-dom';
import dark_arrow from '../../assets/right-arrow.png'

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Fiecare Voce</h1>
        {/* DESCRIEREA GENERALĂ */}
          <div className="about-text general-description">
            <p>
            „Fiecare Voce” este un proiect născut din dorința a doi elevi de a crea un spațiu unde opiniile, ideile și
            experiențele tinerilor contează cu adevărat. Credem că fiecare persoană are o poveste de spus, iar vocea ei
            merită ascultată.
            </p>
            <p>
            Ne propunem să oferim o platformă liberă și deschisă în care elevii și tinerii să poată vorbi despre educație,
            istorie, politică, cultură și multe alte subiecte care ne influențează viața. Punem un accent deosebit pe
            drepturile omului și pe realitatea educației din România, pentru că știm că schimbarea începe cu informare și
            dialog.
            </p>
            <p>
            „Fiecare Voce” este, în același timp, un proiect, o comunitate și un spațiu sigur pentru exprimare. Aici,
            diversitatea de idei este prețuită, iar curajul de a vorbi este încurajat. Fie că îți împărtășești
            experiențele, îți exprimi opiniile sau adresezi întrebări, vei găsi un loc unde vocea ta are putere.           
             </p>
          </div>
        <button 
      className="explore-button"
      onClick={() => navigate('/articles')}>
      Explore it
      <span className="arrow">&#8594;</span>
    </button>
      </div>
      
    </div>

  )
}

export default Hero

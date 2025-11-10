import React from 'react';
import Navbar from '../Navbar/Navbar';
import './About.css';
import iulia from '../../assets/iuliagg.jpeg';
import luca from '../../assets/lucagg.jpeg'

export default function About() {
  return (
    <>
      <Navbar />
      <div className="about-wrapper">

        <div className="about-window">

          

          {/* SECȚIUNEA CU 2 COLANE */}
          <div className="founders-section">

            <div className="founder-card">
              <img src={iulia} alt="Founder 1" />
              <h3>Iulia Geambazu</h3>
              <p>
                Bună! Sunt Geambazu Iulia, co-fondatoare a proiectului Fiecare Voce. 
                De-a lungul anilor am participat la diverse olimpiade și concursuri școlare, iar implicarea în activități extrașcolare a fost mereu o parte importantă din parcursul meu. 
                Prin Fiecare Voce, am creat un spațiu în care elevii își pot exprima liber opiniile despre teme precum educație, istorie sau politică. În același timp, am reușit să informăm tinerii despre oportunitățile educaționale și extracurriculare de care pot beneficia.
                Fiecare Voce își propune să centreze atenția asupra perspective tinerilor, adesea neglijată, deși are un potențial uriaș de a aduce idei noi. Alături de Luca, am construit un mediu în care fiecare tânăr își poate descoperi și face auzită propria voce.
              </p>
            </div>

            <div className="founder-card">
              <img src={luca} alt="Founder 2" />
              <h3>Luca Georgescu</h3>
              <p>
               Sunt Luca Georgescu, co-fondator al proiectului Fiecare Voce. Sunt pasionat de graphic design, particip la olimpiade și mă implic în activități extrașcolare. 
               Prin articolele și postările de pe Fiecare Voce, contribui la informarea și educarea elevilor din România, ajutându-i să își cunoască drepturile și să se implice mai activ în comunitatea școlară.
               Fiecare Voce a apărut după ce am observat cât de ușor sunt ignorate opiniile elevilor, deși avem atât de multe idei și perspective care merită ascultate. Așa că, împreună cu Iulia, am decis să creăm un loc unde vocea fiecărui elev chiar contează.
              </p>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}

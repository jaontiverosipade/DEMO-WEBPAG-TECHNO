import React from 'react';
import Card from '../components/Card';

// API
const cardElements = [
    {
      id: 1,
      title: <a href='/pages/mega'>Jugamos Megaman X</a>,
      author: 'Capcom', 
      cover: 'https://i.imgflip.com/2uecxn.gif' 
    },
    
    {
      id: 2,
      title: 'Crah Team Raing',
      author: 'De vuelta a las pistas',
      cover: 'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_CrashTeamRacingNitroFueled_image1600w.jpg'
    },
    {
      id: 3,
      title: 'Hablamos de:',
      author: 'CyberPunk 2077',
      cover: 'https://generacionxbox.com/wp-content/uploads/2019/06/Keanu-Reeves-Cyberpunk-2077.jpg'
    },
    {
      id: 1,
      title: 'Nintendo Switch Lite',
      author: '¿Es la mejor opción?',
      cover: 'https://cnet2.cbsistatic.com/img/5-0pGeVVqtfgssCA0N3pf4erjlY=/2019/07/22/dc553840-8e61-4fa0-9736-06c263a66ee0/nintendo-switch-3.jpg'
    },
    {
      id: 2,
      title: 'Banjo Kazooie',
      author: 'Regresan al ataque en SSBU',
      cover: 'http://www.retornoanime.com/wp-content/uploads/2019/06/SSBU-Banjo-Kazooie-Header-1024x556.jpg'
    },
    {
      id: 3,
      title: 'Sir Daniel Fortesque',
      author: 'Regresa desde la tumba a tu PS4',
      cover: 'https://gematsu.com/wp-content/uploads/2019/05/MediEvil_05-09-19.jpg'
    },
    {
      id: 1,
      title: 'Pokemon Go',
      author: 'Tips para ser el mejor entrenador!',
      cover: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/main_element/public/media/image/2019/03/pokemon-go_2.jpg?itok=rHm83EtV'
    },
    {
      id: 2,
      title: 'Analísis',
      author: '',
      cover: 'http://daemoniaca.mx/wp-content/uploads/MK11-1.png'
    },
    {
      id: 3,
      title: 'Fornite',
      author: 'Por que es un exito?',
      cover: 'https://static.noticiasdegipuzkoa.eus/images/2018/11/30/fornite_25591_11.jpg'
    },



];
  

const Home = () => (
    <>
        <section className="hero">
          <div className="container">
            <h1 className="hero-title">El Technodromo</h1>
            <h2 className="hero-subtitle"><strong>La casa mundial del videojuego clásico y la tortuga ninja</strong></h2>

          </div>
        </section>
        <section className="content">
          <div className="container grid-container">
            {cardElements.map((card, index) =>
              <Card key={index} card={card} />)}
          </div>
          <div className="container">
            <button className="btn-showmore">Next</button>
            <button className="btn-showmore">2</button>
            <button className="btn-showmore">3</button>
            <button className="btn-showmore">4</button>
            <button className="btn-showmore">...</button> 
          </div>
        </section>
    </>
);

export default Home;
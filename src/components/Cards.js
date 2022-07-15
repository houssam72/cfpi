import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Insta Moritanie</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/informatique.jpg'
              text='Un taux de réussite de 88 % du BTS au Bac + 5,
100% de taux d’insertion à l’emploi après l’obtention du diplôme (Bac+5),
Des certifications à la portée des étudiants'
              label='Nos statistiques'
              path='/services'
            />
            <CardItem
              src='images/collectif-Artisis.png'
              text='  L’INSTA est sur ParcourSup
Habilité à recevoir les boursiers en BTS SIO
Certifié Qualiopi depuis Septembre 2020'
              label='Qualiopi'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/image-recadree.jpg'
              text='FORMATIONS EN INFORMATIQUE - APPRENTISSAGE, PROFESSIONNALISATION OU INITIALE'
              label='Formation'
              path='/services'
            />
            <CardItem
              src='images/tables-rondes.jpg'
              text='Découvrez des sujets importants à travers nos reportages.'
              label='LES TABLES RONDES'
              path='/products'
            />
            <CardItem
              src='images/couv.png'
              text='Insta Moritanie propose de nombreuses activités intergenérationnelles, artistiques et culturelles​ via le numérique.'
              label='NOS ACTIVITÉS'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

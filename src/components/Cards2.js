import React from 'react';
import './Cards2.css';
import CardItemq from './CardItem2';

function Cardsq() {
  return (
  

    <div className='cards'>
         <h1 id='rca'>RENCONTREZ NOTRE BRILLANTE ÉQUIPE</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <h1 id='equipe'>L ’ équipe de Direction</h1>
          <ul className='cards__items2'>
            <CardItemq
              src='images/Oswald.jpg'
              poste='Fondateur de l’association UGOP'
              text='Oswald a plus de 25 ans d’expérience dans l’éducation populaire et le monde artistique.
Il est chargé de la direction, du développement des projets et de la coordination des différents pôles du Pavillon Culturel de l’association UGOP'
              label='OSWALD MAVOUNGOUD'
              
            />
            <CardItemq
              src='images/Salima.jpg'
              poste='Directrice artistique de l’association '
              text='Coordonner les énergies, donner vie à des idées, collaborer avec les équipes autour de projets artistiques inspirants, c’est ce qui anime cette auteure, compositeur et interprète. Salima Drider a commencé sa carrière artistique par la musique urbaine et a continué avec l’écriture de pièces de théâtre musical, de livres jeunesse et de scénario.'
              label='SALIMA DRIDER'
            
            />
          
          
            <CardItemq
              src='images/OLIVIER.jpg'
              poste='Administrateur UGOP Radio'
              text='Après différentes expériences professionnelles et passionné, Olivier vient partager des clés et conseils dans les différentes activités liées aux métiers de l’Informatique et du Multimédia.'
              label='OLIVIER OLIVARIUS'
              
            />
            </ul>
            <h1 id='equipe'>Secrétariat</h1>
            <CardItemq
              src='images/Mada.jpg'
              poste='Administration '
              text='Licenciée en économie, Maddalena met tout en œuvre pour veiller au bon fonctionnement de l’association. Souriante et passionnée, elle égaillera les journées de ses collaborateurs avec sa bonne humeur.'
              label='MADDALENA LANZIANO'
              path='/products'
            />

            <h1 id='equipe'>L’équipe Communication et Marketing</h1>
           
            <ul className='cards__items2'>
            
            <CardItemq
              src='images/Lucy.jpg'
              poste='Graphiste et communication visuelle'
              text='Ambitieuse et créative, Lucy est passionnée par le dessin depuis son plus jeune âge. Actuellement en alternance chez UGOP pour sa troisième année de Bachelor en Design Graphique, elle se donne au maximum pour réaliser des créations uniques. Déterminée dans ce qu’elle entreprend, Lucy souhaite par la suite continuer ses études et poursuivre vers un Master afin de devenir DA.'
              label='LUCY TENDRE'
              
            />
            <CardItemq
              src='images/louis.jpg'
              poste='Chargé de communication'
              text='Diplômé d’une licence en communication, Louis a décidé de vivre une expérience internationale en quittant sa Belgique natale au profit de Paris. Actif dans la conception et la mise en place de plans stratégiques de communication, il vient soutenir le Pavillon Culturel et Ugop Radio dans le développement de leur notoriété.'
              label='LOUIS GUYON DE MONTLIVAULT'
              
            /> 
          </ul>
    <h1 id='equipe'>L’équipe d’Animation</h1>

            <ul className='cards__items2'>
            <CardItemq
              src='images/liona.jpg'
              poste='Directrice adjointe UGOP'
              text='Autodidacte avérée, Liona se forme seule, aux arts vivants et plus particulièrement à la musique, dès son plus jeune âge. Au cours de son parcours professionnel, elle a pu réaliser de nombreux projets dans les métiers du spectacle vivant et de l’éducation mêlant ainsi ses passions et son fort intérêt pour l’environnement social, culturel, éducatif et populaire. Attachée aux grandes valeurs humaines et impliquée, elle défend l’accès à la culture pour tous. Pour elle, il n’y a pas de création artistique sans éducation artistique.'
              label='LIONA BENCHAGRA'
              
            />
            <CardItemq
              src='images/Simon.png'
              poste='Animateur UGOP'
              text='Un grand fan de musique, mais aussi de danse et de sport. Simon rejoind UGOP en alternance pour accomplir la formation du brevet professionnel de la jeunesse, et de l’éducation populaire et du sport. Dans l’animation depuis plus de 5 ans, il a pu réaliser plusieurs projets dans différentes structures pour favoriser l’accès à la culture pour tous. Très motivé pour partager ses expériences et enthousiaste à l’idée d’apprendre et d’échanger avec la structure et son public.'
              label='SIMON TSHABALALA'
            
            />
          
          
            <CardItemq
              src='images/Louise.jpg'
              poste='Animatrice UGOP'
              text='L’engagement fait partie de la vie de Louise. Pendant quatre ans (de 2014 à 2018), elle a bénévolement aidé les moniteurs et les monitrices de la section des jeunes plongeurs et plongeuses du Centre Subaquatique Nantais. Là revoilà deux ans après au service d’UGOP. Passionnée par la littérature, la musique, le cinéma et l’histoire, Louise souhaite avant tout transmettre ses connaissances et en apprendre de nouvelles.'
              label='LOUISE FOURNIER LE RAY'
              
            />
            </ul>
      
      <h1 id='equipe'>L’équipe radio</h1>

            <ul className='cards__items2'>
            <CardItemq
              src='images/Caroline.jpg'
              poste='Journaliste Rédactrice Ugop Radio'
              text='Récemment diplômée d’un master en journalisme culturel, Caroline a rejoint l’équipe d’Ugop Radio pour contribuer au développement de la plateforme, tout en approfondissant ses connaissances radiophoniques. Dynamique et  souriante, elle affûte quotidiennement son micro pour vous proposer des podcasts toujours plus variés et passionnants.'
              label='CAROLINE GARNIER'
              
            />
            <CardItemq
              src='images/Remi.jpg'
              poste='Journaliste Ugop Radio'
              text='Après un diplôme de Chef Opérateur Son (ISTS) en poche, Rémi se tourne vers le journalisme radiophonique pour concocter des reportages et podcasts tout au long de l’année !'
              label='RÉMI PIERRE'
            
            />
          
          
            <CardItemq
              src='images/Alice.jpg'
              poste='Journaliste Ugop Radio'
              text='Revenant d’Argentine et après une licence de cinéma, Alice s’engage en alternance au sein de Ugop Radio en parallèle de ses études à l’EICAR. Animée par la passion du documentaire, elle participe à la création de sujets et de podcasts pour UGOP Radio.'
              label='ALICE CHABOT'
              
            />
            </ul>

            <ul className='cards__items2'>
            <CardItemq
              src='images/Lucas.jpg'
              poste='Technicien Son Ugop Radio  '
              text='Après un BTS audiovisuel option son, Lucas rejoint l’équipe d’UGOP Radio en tant que technicien son pour le montage et le mixage des podcasts et des vidéos mais aussi sur le terrain pour les reportages.'
              label='LUCAS BEUNECHE'
              
            />
            <CardItemq
              src='images/Xavier.jpg'
              poste='Cadreur Monteur Ugop Radio'
              text='Après un baccalauréat obtenu en candidat libre, des études de journalisme et un documentaire 52mn, Xavier intègre UGOP radio  comme cadreur-monteur. Il réalise-là une mission de service civique.'
              label='XAVIER DUCLOS'
            
            />
          
          
            <CardItemq
              src='images/Axel.jpg'
              poste='Cadreur Monteur Ugop Radio'
              text='Passionné par le monde de l’image et après des études cinématographiques, Axel a rejoint UGOP Radio pour participer au développement de son pôle vidéo comme cadreur et monteur. Cela lui permet de découvrir un autre pan de l’univers audiovisuel, tout en confirmant et approfondissant ses compétences techniques en matière de réalisation. '
              label='AXEL VAUSSOURD'
              
            />
            </ul>

             <ul className='cards__items2'>
            <CardItemq
              src='images/CLARA.jpg'
              poste='Journaliste UGOP Radio  '
              text='Jeune journaliste diplômée d’un bachelor, spécialisé en radio. Clara rejoint l’équipe pour vous faire découvrir le 12 e arrondissement, par son œil de néo parisienne. Passionnée de podcast et d’information, elle sera ravie de vous partager de nombreux contenus.'
              label='CLARA GIANNITELLI'
              
            />
            <CardItemq
              src='images/Gabriel.png'
              poste='Cadreur Monteur Ugop Radio'
              text='Après avoir obtenu un master en cinéma et réaliser des dizaine de clips, Gabriel a rejoint UGOP Radio pour participer au développement du pôle vidéo. Passionné par la caméra depuis son plus jeune âge, il met à mal, quotidiennement, son savoir-faire pour mettre en lumière les acteurs et les évènements du 12ème.'
              label='GABRIEL MOUSSERIN'
            
            />
          
            </ul>
    <h1 id='equipe'>Les bénévoles</h1>
            <CardItemq
              src='images/Michele.jpg'
              poste='Responsable partenariats'
              text='Après avoir travaillé dans des entreprises du privé à des postes opérationnels et de management et dans l’enseignement, Michèle a choisi d’évoluer dans des cabinets de conseil dans la sphère de l’accompagnement et du développement professionnel. Aujourd’hui, elle souhaite mettre son expérience au service du monde associatif, d’UGOP Radio en particulier et du Pavillon Culturel de l’association UGOP. En étroite relation avec son fondateur, elle peut ainsi aider l’association à nouer des partenariats avec des groupes privés, d’une part, et monter des dossiers de financement avec des entités publiques, d’autre part.'
              label='MICHÈLE'
              
            />
        </div>
      </div>
    </div>
  );
}

export default Cardsq;

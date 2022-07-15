import React,{Component} from 'react';

import '../ContactUs.css';
import Footer from '../Footer';
class ContactUs extends Component  {

   render(){

  return(
   
<div>
  <div class="container">
      
      
      <div class="form">
        <div class="contact-info">
          <h3 class="title">NOUS CONTACTER</h3>
          <p class="text">
            Investissez-vous pour une cause qui vous tient à cœur pour plus de lien social, de vivre-ensemble, d’aide intergénérationnelle.
          </p>

          <div class="info">
            <div class="information">
              <img src="images/location.png" class="icon" alt="" />
              <p>16 rue Maroc d'arabe, Hall 17</p>
            </div>
            <div class="information">
              <img src="images/email.png" class="icon" alt="" />
              <p>insta.paris@gmail.com</p>
            </div>
            <div class="information">
              <img src="images/phone.png" class="icon" alt="" />
              <p>01 45 84 17 26</p>
            </div>
          </div>

          <div class="social-media">
            <p>Connecte avec nous  :</p>
            <div class="social-icons">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <span class="circle one"></span>
          <span class="circle two"></span>

          <form action="index.html" autocomplete="off">
            <h3 class="title">NOUS CONTACTER</h3>
            <div class="input-container">
              <input type="text" name="name" class="input" />
              <label for="">Nom</label>
              <span>Nom</span>
            </div>
            <div class="input-container">
              <input type="email" name="email" class="input" />
              <label for="">Email</label>
              <span>Email</span>
            </div>
            <div class="input-container">
              <input type="tel" name="phone" class="input" />
              <label for="">Téléphone</label>
              <span>Téléphone</span>
            </div>
            <div class="input-container textarea">
              <textarea name="message" class="input"></textarea>
              <label for="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="envoyer" class="btm" />
          </form>
        </div>
      </div>
    </div>
         <Footer/>
         </div>
   )
}
}

export default ContactUs

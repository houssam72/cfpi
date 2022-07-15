import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {

	render(){
   
   
		return ( 
    <div className='register' style={{marginTop:'-8%'}}>
        
          <div className="tc  white center br3 ba  b--black-10 mv4 w-100 w-50-m w-100-l mw6 shadow-5 center sec_htmlForm">
          <legend className="tc f1 fw6 ph0 mh0 white center" >Register</legend><br/>
              <label htmlFor="marque_voiture">Nom : </label>
             <input 
                 className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" 
                 type="text" 
                 id="nom" 
                 name="nom" 
                 /><br></br>
             <label htmlFor="marque_voiture">Prenom : </label>
             <input 
                     className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" 
                     type="text" 
                     id="prenom" 
                     name="prenom" 
                     
                     /><br></br>
             <label htmlFor="bagage">Sexe : </label>
              <select 
                      className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" 
                      name="sexe" 
                      id="sexe"
                      
                      >
                    <option value="rien"></option>
                      <option value="homme">Homme</option>
                      <option value="femme">Femme</option>
                      
              </select><br></br>
              <label htmlFor="bagage">Telephone : </label>
              <input 
                    className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" 
                    type="text" 
                    id="telephone" 
                    name="telephone" 
                    
                    /><br></br>
              
              <label htmlFor="marque_voiture">Email : </label>
             <input 
                className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" 
                type="text" 
                id="email" 
                name="email" 
               
                /><br></br>
              <label htmlFor="marque_voiture">Ville : </label>
             <input 
                className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" 
                type="text" 
                id="Ville" 
                name="Ville" 
                
                /><br></br>
             <label htmlFor="date">Date de naissance : </label>
             <input className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" type="date" id="date" name="date" /><br></br>
             <label htmlFor="nbr_place_dispo">Photo de profil : </label>
             <input className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" type="file" id="pdp" name="pdp" /><br></br>
             <label htmlFor="marque_voiture">Password : </label>
             <input 
                   className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" 
                   type="password" 
                   id="password" 
                   name="password" 
                   
                   /><br></br>
             <Link to='sign-up'>
             <div className="">
              <input 
                    
                    className="mv2 sat b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib white" 
                    type="submit" 
                    value="Register"
                     />
            </div>
            </Link>
          </div>
        </div>
			)
	}
}
export default Register
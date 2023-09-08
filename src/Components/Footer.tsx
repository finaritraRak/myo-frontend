import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
      <footer className="blog-footer bg-dark text-light mt-2">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <h5 className='text-light'>Contactez-nous :</h5>
        <p className='text-light'>Nous sommes toujours heureux d'entendre vos commentaires et de répondre à vos questions. N'hésitez pas à nous contacter à myoGourmand@gmail.com ou la page facebook myo gourmand. Notre équipe est là pour vous aider.</p>
      </div>
      <div className="col-md-3">
        <h5 className='text-light'>Catégories</h5>
        <ul className="list-unstyled">
          <li><a href="#">Boissons</a></li>
          <li><a href="#">En-cas</a></li>
          <li><a href="#">Boissons Fraîches </a></li>
        </ul>
      </div>
      <div className="col-md-3">
        <h5 className='text-light'>Suivez-nous</h5>
        <ul className="list-unstyled">
          <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
          <li><a href="#"><i className="fab fa-facebook"></i> Facebook</a></li>
          <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
        </ul>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 text-center">
        <p className='text-light'>&copy; {new Date().getFullYear()} fylabs - Tous droits réservés</p>
      </div>
    </div>
  </div>
</footer>

    

      

    )
}

export default Footer
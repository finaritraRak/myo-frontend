import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bg from './pexels-lukas-574069.jpg';

const SearchFormations = ({ formations }: any) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchBy, setSearchBy] = useState('title');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchBy(e.target.value);
  };

  const filterFormations = (formation: any) => {
    if (searchTerm === '') {
      return true;
    } else if (searchBy === 'title' && formation.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return true;
    } else if (searchBy === 'author' && formation.author.toLowerCase().includes(searchTerm.toLowerCase())) {
      return true;
    }
    return false;
  };

  return (
    <div>
      <div className="position-relative  mb-4">
      <div className="image-container">
        <img src={bg} alt="" className="img-fluid custom-image" />
      </div>
        <div className="position-absolute top-50 start-50 translate-middle text-center">
          <h1 className='text-white mb-3'> Learn new creative skills today.</h1>
          <h2 className="h4 fw-normal text-white-75">
          Join our community and get access to over 10,000 online courses.
        </h2>
        <a className="btn btn-primary px-4 py-2" href="javascript:void(0)">Subscribe from $9/month</a>
          <div className="d-flex justify-content-center">
           
          </div>


          
        </div>
      </div>
        
    
      <div className="d-flex justify-content-center">
  <div>
    <div className="d-sm-flex align-items-center">
      <div className=" mb-sm-0 me-sm-3">
        <input
          type="text"
          placeholder="Rechercher..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="form-control"
        />
      </div>
      <div>
        <select
          value={searchBy}
          onChange={handleSearchByChange}
          className="form-select"
        >
          <option value="title">Par titre</option>
          <option value="author">Par auteur</option>
        </select>
      </div>
    </div>
  </div>
</div>

<main id="main-container">
    
  
    <div className="content content-boxed">
      <div className="row items-push py-4">
        





      {formations && formations.filter(filterFormations).map((formation: any) => (
            <div className="col-md-6 col-lg-4 col-xl-3">
             
              <Link  to={`/formations/${formation.id}`} className="block block-rounded block-link-pop h-100 mb-0">
              <img src={formation.img} className="card-img-top" alt="" />
                <div className="block-content block-content-full text-center bg-city">
                   
                  <div className="fs-sm text-white-75">
                    10 lessons &bull; 3 hours
                  </div>
                </div>
                <div className="block-content block-content-full">
                  <h4 className="h5 mb-1">
                  {formation.title}
                  </h4>
                  <div className="fs-sm text-muted">{formation.date}</div>
                </div>
              </Link>
            </div>

     ))}
      
      
      </div>
    </div>
   
   
    <div className="bg-body-dark">
      <div className="content content-full">
        <div className="my-5 text-center">
          <h3 className="h4 mb-4">
            Are you ready to get started? Join today.
          </h3>
          <a className="btn btn-primary px-4 py-2" href="javascript:void(0)">Subscribe from $9/month</a>
        </div>
      </div>
    </div>
   
  </main>



























    </div>
  );
};

export default SearchFormations;

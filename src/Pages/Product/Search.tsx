import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bg from './4884273.jpg';

const Search = ({ product }: any) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchBy, setSearchBy] = useState('name');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchBy(e.target.value);
  };

  const filterProduct = (product: any) => {
    if (searchTerm === '') {
      return true;
    } else if (searchBy === 'title' && product.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return true;
    } else if (searchBy === 'author' && product.author.toLowerCase().includes(searchTerm.toLowerCase())) {
      return true;
    }
    return false;
  };

  return (
    <div>
      
      <div id="one-hero" className="bg-body-extra-light">
          <div className="content content-full">
            <div className="row g-0 justify-content-center text-center">
              <div className="col-md-10 pt-7 pb-5">
                <div className="d-inline-flex align-items-center space-x-1 fs-sm badge bg-success-light text-success mb-2 p-2">
                  <i className="fa fa-fw fa-award"></i>
                  <span>Best seller dashboard template</span>
                </div>
                <h1 className="fs-2 fw-bold mb-3">
                  Build web apps that your users will love using
                </h1>
                <p className="fs-5 fw-medium text-muted mb-4 mx-xl-8">
                  One super flexible UI framework for amazing developers and web agencies. Now based on <span className="text-body-color fw-semibold">Bootstrap 5</span>, with <span className="text-body-color fw-semibold">no jQuery</span> in core and an amazing brand new <span className="text-body-color fw-semibold">dark mode</span>.
                </p>
                <a className="btn btn-primary py-2 px-3 m-1" data-toggle="click-ripple" href="be_pages_dashboard.html" target="_blank">
                  <i className="fa fa-fw fa-desktop opacity-50 me-1"></i> Live preview
                </a>
                <a className="btn btn-alt-primary py-2 px-3 m-1" data-toggle="click-ripple" href="#one-vue-edition">
                  <i className="fa fa-fw fa-arrow-down opacity-50 me-1"></i> Learn more
                </a>
              </div>
            </div>
           
          </div>
        </div>       
    
      <div className="d-flex justify-content-center mt-4">
  <div className="mb-5">
    <div className="d-sm-flex align-items-center">
      <div className="mb-3 mb-sm-0 me-sm-3">
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

      <div className='blog-list row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4'>
  {product && product.filter(filterProduct).map((product: any) => (
    <div key={product.id} className="blog-preview col">
      <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
        <div className="card h-100">
        <img src={`${window.location.origin}/images/${product.img}`} className="card-img-top" alt="" />



          <div className="card-body">
            <h4 className="card-title">{product.title}</h4>
            <p className="card-text">Written by {product.author}</p>
            <p className="card-text">{product.date}</p>
          </div>
        </div>
      </Link>
    </div>
  ))}
</div>

    </div>
  );
};

export default Search;

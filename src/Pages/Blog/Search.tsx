import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bg_image from './café.jpg';

const Search = ({ blogs }: any) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchBy, setSearchBy] = useState('title');
 
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchBy(e.target.value);
  };

  const filterBlogs = (blog: any) => {
    if (searchTerm === '') {
      return true;
    } else if (searchBy === 'title' && blog.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return true;
    } else if (searchBy === 'author' && blog.author.toLowerCase().includes(searchTerm.toLowerCase())) {
      return true;
    }
    return false;
  };

  const bg = {
    backgroundImage: `url(${bg_image})`,
  };

 


  return (
    <div>
       <div className="bg-image" style={bg}>
          <div className="bg-primary-dark-op">
            <div className="content content-full text-center pt-9 pb-8">
              <h1 className="text-white mb-2">
              Bienvenue chez Myo - Votre pause gourmande préférée
              </h1>
              <h2 className="h4 fw-normal text-white-75 mb-0">
              L'endroit idéal pour satisfaire vos envies gourmandes
              </h2>
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
          <option value="title">Par nom du produit</option>
          <option value="author">Par prix du produit</option>
        </select>
      </div>
    </div>
  </div>
</div>

      <div className='blog-list row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4'>
  {blogs && blogs.filter(filterBlogs).map((blog: any) => (
    <div key={blog.id} className="blog-preview col">
      <Link to={`/blogs/${blog.id}`} className="text-decoration-none text-dark">
        <div className="card h-100">
        <img src={`${window.location.origin}/images/${blog.img}`} className="card-img-top" alt="" />



          <div className="card-body">
            <h4 className="card-title">{blog.title}</h4>
            <p className="card-text">Written by {blog.author}</p>
            <p className="card-text">{blog.date}</p>
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

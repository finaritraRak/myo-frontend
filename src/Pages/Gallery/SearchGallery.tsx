import React, { useState } from 'react'



const SearchGallery = ({ gallery }: any) => {

    const [searchTerm, setSearchTerm]: any = useState('')
    const [title, setTitle]: any = useState('')
    const [modal, setModal] = useState(false);
    const [bigImage, setBigImage]: any = useState('');
    const [image, setImage]: any = useState('');
    const [searchBy, setSearchBy] = useState('title');

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
      };
    
      const handleSearchByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSearchBy(e.target.value);
      };


    const toggleModal = (e: any, image: any) => {

        setModal(!modal);
        console.log(e.src, image.title)
        setBigImage(e.src)
        setImage(image)

    };

    const filterGallery = (gallery: any) => {
        if (searchTerm === '') {
          return true;
        } else if (searchBy === 'title' && gallery.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          return true;
        } else if (searchBy === 'author' && gallery.author.toLowerCase().includes(searchTerm.toLowerCase())) {
          return true;
        }
        return false;
      };
    

    return (
        <div>
            <div className='text-center mb-4'>
        <div className='d-inline-block'>
          <input type='text' placeholder='Rechercher...' value={searchTerm} onChange={handleSearchChange} className='form-control' />
        </div>
        <div className='d-inline-block'>
          <select value={searchBy} onChange={handleSearchByChange} className='form-select'>
            <option value='title'>Par auteur</option>
            <option value='author'>Par titre</option>
          </select>
        </div>
      </div>

      <div className="gallery-list row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
  {gallery &&
    gallery
      .filter((image: any) => {
        if (searchTerm === '') {
          return gallery;
        } else if (
          image.author.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return image;
        }
      })
      .map((image: any) => (
        <div className="gallery-preview col" key={image.id}>
          <div className="card h-100">
            <div className="card-body position-relative">
              <img src={image.image} className="card-img-top img-fluid" alt="img" />
              <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                <div className="overlay-content text-white text-center">
                  <h5 className="card-title">{image.title}</h5>
                  <p className="card-text">Photo by: {image.author}</p>
                  <p className="card-text">{image.body}</p>
                </div>
              </div>
            </div>
            <div className="card-footer text-center">
              <button className="btn btn-primary" onClick={(e) => toggleModal(e.target, image)}>
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
</div>



{modal && bigImage && image && (
  <div className="modal">
    <div className="modal-content"></div>
    <div onClick={(e) => toggleModal(e.target, image)} className="overlay">
      <div className="modal-content">
        <h2>{image.title} / {image.author}</h2>
        <a href={bigImage} target="_blank" rel="noopener noreferrer">
          <p className="hover-text">Open full size</p>
          <img src={bigImage} alt="img" />
        </a>
        <button className="close-modal" onClick={(e) => toggleModal(e.target, image)}>
          CLOSE
        </button>
      </div>
    </div>
  </div>
)}


        </div>
    )
}

export default SearchGallery
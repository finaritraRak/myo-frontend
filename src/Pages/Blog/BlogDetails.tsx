import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../../Components/useFetch';
import Spinners from '../../Components/Spinners';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './BlogDetails.css';
import { maxHeaderSize } from 'http';




const BlogDetails = () => {
  type CommentType = {
    id: number;
    blogId: number;
    text: string;
  };

 


  const { id } = useParams();
  const { data: blog, error, isPanding } = useFetch('http://localhost:8080/blogs/' + id);
  const history = useNavigate();
  const [deleting, setDeleting] = useState(false);

  const handleDelete = () => {
    fetch('http://localhost:8080/blogs/' + id, {
      method: 'DELETE',
    })
      .then(() => {
        setDeleting(true);
        setTimeout(x, 2000);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  function x() {
    history('/');
  }

  const [comments, setComments] = useState<CommentType[]>([]); // Utilisez CommentType[] ici

  const [commentText, setCommentText] = useState('');

  const handleSubmitComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch('http://localhost:8080/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        blogId: id,
        text: commentText,
      }),
    })
      .then(response => response.json())
      .then((newComment: CommentType) => {
        setComments([...comments, newComment]);
        setCommentText('');
      })
      .catch(error => console.error('Error submitting comment:', error));
  };
  

  




  return (
    <div>

       
        {isPanding && (
          <div className="loading">
            <Spinners />
          </div>
        )}
        {error && <div>{error}</div>}
       
           
         

  <div className="block block-rounded">
  <a className='btn btn-primary mt-2 mb-3' href='/'>Retour</a>
  
                <div className="block-content">
                {blog && (  
                  <div className="row items-push">
                    
                   



                    <div className="col-md-6">
                     
                      <div className="row g-sm js-gallery img-fluid-100">
                        <div className="col-12 mb-3">
                          <a className="img-link img-link-zoom-in img-lightbox" href={`${window.location.origin}/images/${blog.img}`}>
                            <img className="img-fluid" src={`${window.location.origin}/images/${blog.img}`} alt=""/>
                          </a>
                        </div>
                       
                       
                      </div>
                   
                    </div>
                    <div className="col-md-6">
                  
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <div className="fs-sm fw-semibold text-primary"><h1>{blog.title}</h1></div>
                          <div className="fs-sm text-muted">200 Available</div>
                        </div>
                        <div className="fs-2 fw-bold">
                          {blog.author}Ar
                        </div>
                      </div>
                      <form className="d-flex justify-content-between my-3 border-top border-bottom" action="be_pages_ecom_store_product.html" method="post">
                        <input type='number' placeholder='nombre de commande' />
                        <div className="py-3">
                          <button type="submit" className="btn btn-sm btn-alt-secondary">
                            <i className="fa fa-plus text-success me-1"></i> Commander
                          </button>
                        </div>
                      </form>
                      <p>{blog.body}</p>
                    
                    </div>
               
                  </div>
                   )}
                  
                </div>
              </div>
























    </div>
  );
};

export default BlogDetails;

import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../../Components/useFetch';
import Spinners from '../../Components/Spinners';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './BlogDetails.css';

const ProductDetails = () => {
  type CommentType = {
    id: number;
    productId: number;
    text: string;
  };



  const { id } = useParams();
  const { data: product, error, isPanding } = useFetch('http://localhost:8000/product/' + id);
  const history = useNavigate();
  const [deleting, setDeleting] = useState(false);

  const handleDelete = () => {
    fetch('http://localhost:8000/product/' + id, {
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

    fetch('http://localhost:8000/comments', {
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

       <div className="bg-body-extra-light">
        <div className="content content-boxed">
        {isPanding && (
          <div className="loading">
            <Spinners />
          </div>
        )}
        {error && <div>{error}</div>}
        {product && (
          <article>
<div className="position-relative  mb-4">
      <div className="image-container">
      <div className="image-overlay"></div>
        <img src={`${window.location.origin}/images/${product.img}`} className="bg-image img-fluid custom-image" alt="" />
      </div>
        <div className="text-overlay position-absolute top-50 start-50 translate-middle text-center">
          <h1 className='text-white mb-3'>{product.title}</h1>
        
          <div className="d-flex justify-content-center">         
          </div>         
        </div>
      </div>   
            
            <div className="bg-body-extra-light mt-2">
          
            <div className="text-center fs-sm push mt-2">
            <span className="d-inline-block py-2 px-4 bg-body fw-medium rounded mt-2">
              <a className="link-effect" href="be_pages_generic_profile.html">{product.author}</a> on {product.date}
            </span>
          </div>

            <article className="story">
            <h3 className="fw-normal mt-5 mb-3">Experiences</h3>
                <p>
                  <ReactQuill
                    readOnly
                    value={product.body}
                    modules={{ toolbar: false }}
                    formats={[]}
                    className="quill-content"
                  />
                   </p>
                  </article>
                 
                    </div>
                {!deleting && (
                  <button className="btn btn-danger" onClick={handleDelete}>
                    Delete
                  </button>
                )}
                {deleting && (
                  <button className="btn btn-danger" disabled>
                    Deleting blog...
                  </button>
                )}
                <br />
              </article>
            )}
           <div className="mt-5 d-flex justify-content-between push">
                <a className="btn btn-alt-primary" href="javascript:void(0)">
                  <i className="fa fa-heart me-1"></i> Recommend
                </a>
                <div className="btn-group" role="group">
                  <button type="button" className="btn btn-alt-secondary" data-bs-toggle="tooltip" title="Like Story">
                    <i className="fa fa-thumbs-up"></i>
                  </button>
                  <div className="btn-group">
                    <button type="button" className="btn btn-alt-secondary dropdown-toggle" id="dropdown-blog-story" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fa fa-share-alt me-1"></i> Share
                    </button>
                    <div className="dropdown-menu dropdown-menu-end fs-sm" aria-labelledby="dropdown-blog-story">
                      <a className="dropdown-item" href="javascript:void(0)">
                        <i className="fab fa-fw fa-facebook me-1"></i> Facebook
                      </a>
                      <a className="dropdown-item" href="javascript:void(0)">
                        <i className="fab fa-fw fa-twitter me-1"></i> Twitter
                      </a>
                      <a className="dropdown-item" href="javascript:void(0)">
                        <i className="fab fa-fw fa-google-plus me-1"></i> Google+
                      </a>
                      <a className="dropdown-item" href="javascript:void(0)">
                        <i className="fab fa-fw fa-linkedin me-1"></i> LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              </div>
      </div>  
     
      // Afficher les commentaires
      <div className="comments-list">
    {comments.map((comment: CommentType) => (
      <div key={comment.id} className="comment">
        <p>{comment.text}</p>
      </div>
    ))}
  </div>

  // Ajouter le formulaire de commentaire
  <div className="comment-form">
    <h4>Add a Comment</h4>
    <form onSubmit={handleSubmitComment}>
      <div className="mb-3">
        <label htmlFor="comment" className="form-label">
          Comment
        </label>
        <textarea
          className="form-control"
          id="comment"
          rows={3}
          value={commentText}
          onChange={e => setCommentText(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  </div>












  <div className="block block-rounded">
                <div className="block-content">
                 
                  <div className="row items-push">
                    <div className="col-md-6">
                     
                      <div className="row g-sm js-gallery img-fluid-100">
                        <div className="col-12 mb-3">
                          <a className="img-link img-link-zoom-in img-lightbox" href="assets/media/various/ecom_product6.png">
                            <img className="img-fluid" src="assets/media/various/ecom_product6.png" alt=""/>
                          </a>
                        </div>
                        <div className="col-4">
                          <a className="img-link img-link-zoom-in img-lightbox" href="assets/media/various/ecom_product6_a.png">
                            <img className="img-fluid" src="assets/media/various/ecom_product6_a.png" alt=""/>
                          </a>
                        </div>
                        <div className="col-4">
                          <a className="img-link img-link-zoom-in img-lightbox" href="assets/media/various/ecom_product6_b.png">
                            <img className="img-fluid" src="assets/media/various/ecom_product6_b.png" alt=""/>
                          </a>
                        </div>
                        <div className="col-4">
                          <a className="img-link img-link-zoom-in img-lightbox" href="assets/media/various/ecom_product6_c.png">
                            <img className="img-fluid" src="assets/media/various/ecom_product6_c.png" alt=""/>
                          </a>
                        </div>
                      </div>
                   
                    </div>
                    <div className="col-md-6">
                  
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <div className="fs-sm fw-semibold text-success">IN STOCK</div>
                          <div className="fs-sm text-muted">200 Available</div>
                        </div>
                        <div className="fs-2 fw-bold">
                          $58
                        </div>
                      </div>
                      <form className="d-flex justify-content-between my-3 border-top border-bottom" action="be_pages_ecom_store_product.html" method="post">
                        <div className="py-3">
                          <select className="form-select form-select-sm" id="ecom-license" name="ecom-license">
                            <option value="0" disabled selected>LICENSE</option>
                            <option value="simple">Simple</option>
                            <option value="multiple">Multiple</option>
                          </select>
                        </div>
                        <div className="py-3">
                          <button type="submit" className="btn btn-sm btn-alt-secondary">
                            <i className="fa fa-plus text-success me-1"></i> Add to Cart
                          </button>
                        </div>
                      </form>
                      <p>Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>
                    
                    </div>
                  </div>
                
                
                  <div className="block block-rounded block-bordered">
                    <div className="block-content block-content-full d-flex justify-content-between align-items-center">
                      <div>
                        <div className="mb-2">
                          By <a className="fw-semibold" href="javascript:void(0)">Emma Cooper</a>
                        </div>
                        <div>
                          <a className="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
                            <i className="fa fa-fw fa-plus text-success"></i>
                          </a>
                          <a className="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
                            <i className="fa fa-fw fa-envelope text-muted"></i>
                          </a>
                        </div>
                      </div>
                      <img className="img-avatar" src="assets/media/avatars/avatar2.jpg" alt=""/>
                    </div>
                  </div>
                
                  <div className="block block-rounded">
                    <ul className="nav nav-tabs nav-tabs-alt align-items-center" role="tablist">
                      <li className="nav-item">
                        <button type="button" className="nav-link active" id="ecom-product-info-tab" data-bs-toggle="tab" data-bs-target="#ecom-product-info" role="tab" aria-controls="ecom-product-reviews" aria-selected="true">Info</button>
                      </li>
                      <li className="nav-item">
                        <button type="button" className="nav-link" id="ecom-product-comments-tab" data-bs-toggle="tab" data-bs-target="#ecom-product-comments" role="tab" aria-controls="ecom-product-reviews" aria-selected="false">Comments</button>
                      </li>
                      <li className="nav-item">
                        <button type="button" className="nav-link" id="ecom-product-reviews-tab" data-bs-toggle="tab" data-bs-target="#ecom-product-reviews" role="tab" aria-controls="ecom-product-reviews" aria-selected="false">Reviews</button>
                      </li>
                    </ul>
                    <div className="block-content tab-content">
                     
                      <div className="tab-pane pull-x active" id="ecom-product-info" role="tabpanel" aria-labelledby="ecom-product-info-tab">
                        <table className="table table-striped table-borderless">
                          <thead>
                            <tr>
                              <th>File Formats</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Sketch</td>
                              <td>
                                <i className="fa fa-check text-success"></i>
                              </td>
                            </tr>
                            <tr>
                              <td>PSD</td>
                              <td>
                                <i className="fa fa-check text-success"></i>
                              </td>
                            </tr>
                            <tr>
                              <td>PDF</td>
                              <td>
                                <i className="fa fa-times text-danger"></i>
                              </td>
                            </tr>
                            <tr>
                              <td>AI</td>
                              <td>
                                <i className="fa fa-check text-success"></i>
                              </td>
                            </tr>
                            <tr>
                              <td>EPS</td>
                              <td>
                                <i className="fa fa-check text-success"></i>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table className="table table-striped table-borderless">
                          <thead>
                            <tr>
                              <th>Extra</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <i className="fa fa-fw fa-calendar text-muted me-1"></i> Date
                              </td>
                              <td>January 15, 2019</td>
                            </tr>
                            <tr>
                              <td>
                                <i className="fa fa-fw fa-anchor text-muted me-1"></i> File Size
                              </td>
                              <td>265.36 MB</td>
                            </tr>
                            <tr>
                              <td>
                                <i className="fa fa-fw fa-vector-square text-muted me-1"></i> Vector
                              </td>
                              <td>
                                <i className="fa fa-fw fa-check text-success"></i>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <i className="fa fa-fw fa-expand text-muted me-1"></i> Dimensions
                              </td>
                              <td>
                                <div className="mb-2">16 x 16 px</div>
                                <div className="mb-2">32 x 32 px</div>
                                <div className="mb-2">64 x 64 px</div>
                                <div className="mb-2">128 x 128 px</div>
                                <div>256 x 256 px</div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                     
                      <div className="tab-pane pull-x fs-sm" id="ecom-product-comments" role="tabpanel">
                        <div className="d-flex push">
                          <a className="flex-shrink-0 me-3">
                            <img className="img-avatar img-avatar32" src=""/>
                          </a>
                          <div className="flex-grow-1">
                            <a className="fw-semibold" href="javascript:void(0)">Danielle Jones</a>
                            <mark className="fw-semibold text-danger">Purchased</mark>
                            <p className="my-1">High quality, thanks so much for sharing!</p>
                            <a className="me-1" href="javascript:void(0)">Like</a>
                            <a className="me-1" href="javascript:void(0)">Reply</a>
                            <span className="text-muted"><em>12 min ago</em></span>
                            <div className="d-flex mt-3">
                              <a className="flex-shrink-0 me-3" href="javascript:void(0)">
                                <img className="img-avatar img-avatar32" src="assets/media/avatars/avatar2.jpg" alt=""/>
                              </a>
                              <div className="flex-grow-1">
                                <a className="fw-semibold" href="javascript:void(0)">Emma Cooper</a>
                                <mark className="fw-semibold text-success">Author</mark>
                                <p className="my-1">Thanks so much!!</p>
                                <a className="me-1" href="javascript:void(0)">Like</a>
                                <a className="me-1" href="javascript:void(0)">Reply</a>
                                <span className="text-muted"><em>20 min ago</em></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex push">
                          <a className="flex-shrink-0 me-3" href="javascript:void(0)">
                            <img className="img-avatar img-avatar32" src="assets/media/avatars/avatar12.jpg" alt=""/>
                          </a>
                          <div className="flex-grow-1">
                            <a className="fw-semibold" href="javascript:void(0)">Jeffrey Shaw</a>
                            <mark className="fw-semibold text-danger">Purchased</mark>
                            <p className="my-1">Great work, thank you!</p>
                            <a className="me-1" href="javascript:void(0)">Like</a>
                            <a className="me-1" href="javascript:void(0)">Reply</a>
                            <span className="text-muted"><em>30 min ago</em></span>
                            <div className="d-flex mt-3">
                              <a className="flex-shrink-0 me-3" href="javascript:void(0)">
                                <img className="img-avatar img-avatar32" src="assets/media/avatars/avatar2.jpg" alt=""/>
                              </a>
                              <div className="flex-grow-1">
                                <a className="fw-semibold" href="javascript:void(0)">Emma Cooper</a>
                                <mark className="fw-semibold text-success">Author</mark>
                                <p className="my-1">Thanks so much!!</p>
                                <a className="me-1" href="javascript:void(0)">Like</a>
                                <a className="me-1" href="javascript:void(0)">Reply</a>
                                <span className="text-muted"><em>20 min ago</em></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex push">
                          <a className="flex-shrink-0 me-3" href="javascript:void(0)">
                            <img className="img-avatar img-avatar32" src="assets/media/avatars/avatar14.jpg" alt=""/>
                          </a>
                          <div className="flex-grow-1">
                            <a className="fw-semibold" href="javascript:void(0)">Jose Wagner</a>
                            <p className="my-1">Really nice!</p>
                            <a className="me-1" href="javascript:void(0)">Like</a>
                            <a className="me-1" href="javascript:void(0)">Reply</a>
                            <span className="text-muted"><em>42 min ago</em></span>
                            <div className="d-flex mt-3">
                              <a className="flex-shrink-0 me-3" href="javascript:void(0)">
                                <img className="img-avatar img-avatar32" src="assets/media/avatars/avatar2.jpg" alt=""/>
                              </a>
                              <div className="flex-grow-1">
                                <a className="fw-semibold" href="javascript:void(0)">Emma Cooper</a>
                                <mark className="fw-semibold text-success">Author</mark>
                                <p className="my-1">Thanks so much!!</p>
                                <a className="me-1" href="javascript:void(0)">Like</a>
                                <a className="me-1" href="javascript:void(0)">Reply</a>
                                <span className="text-muted"><em>20 min ago</em></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <form action="be_pages_ecom_store_product.html" method="POST">
                          <input type="text" className="form-control form-control-alt" placeholder="Write a comment.."/>
                        </form>
                      </div>
                      
                      
                     
                    </div>
                  </div>
                  
                </div>
              </div>

















    </div>
  );
};

export default ProductDetails;

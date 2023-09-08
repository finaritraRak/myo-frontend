import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../../Components/useFetch';
import Spinners from '../../Components/Spinners';
import promo from './various/promo-code.png';

const FormationDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPanding } = useFetch('http://localhost:8000/formations/' + id);
    const history = useNavigate();
    const [deleting, setDeleting] = useState(false);
  
    const handleDelete = () => {
      fetch('http://localhost:8000/formations/' + id, {
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

return(
    <div>

<main id="main-container">
      
        <img className="bg-image" src={promo}>
          <div className="bg-primary-dark-op">
            <div className="content content-full text-center py-7 pb-5">
              <h1 className="h2 text-white mb-2">
                Learn HTML5 in 10 simple and easy to follow steps
              </h1>
              <h2 className="h4 fw-normal text-white-75">
                10 Lessons &bull; 3 hours
              </h2>
            </div>
          </div>
        </img>
       
        <div className="bg-body-extra-light">
          <div className="content content-boxed py-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-alt">
                <li className="breadcrumb-item">
                  <a className="link-fx" href="be_pages_elearning_courses.html">Courses</a>
                </li>
                <li className="breadcrumb-item" aria-current="page">
                  Learn HTML5
                </li>
              </ol>
            </nav>
          </div>
        </div>
       
        <div className="content content-boxed">
          <div className="row">
            <div className="col-xl-8">
          
              <div className="block block-rounded">
                <div className="block-content fs-sm">
                  
                  <table className="table table-borderless table-vcenter">
                    <tbody>
                      <tr className="table-active">
                        <th style={{width: '50px'}}></th>
                        <th>1. Intro</th>
                        <th className="text-end">
                          <span className="text-muted">0.2 hours</span>
                        </th>
                      </tr>
                      <tr>
                        <td className="table-success text-center">
                          <i className="fa fa-fw fa-unlock text-success"></i>
                        </td>
                        <td>
                          <a className="fw-medium" href="be_pages_elearning_lesson.html">1.1 HTML5 Intro (free preview)</a>
                        </td>
                        <td className="text-end text-muted">
                          12 min
                        </td>
                      </tr>
                    </tbody>
                  </table>
                 
                  <table className="table table-borderless table-vcenter">
                    <tbody>
                      <tr className="table-active">
                        <th style={{width: '50px'}}></th>
                        <th>2. Basics</th>
                        <th className="text-end">
                          <span className="text-muted">1.3 hours</span>
                        </th>
                      </tr>
                      <tr>
                        <td className="table-danger text-center">
                          <i className="fa fa-fw fa-lock text-danger"></i>
                        </td>
                        <td>
                          <a className="fw-medium" href="javascript:void(0)">2.1 HTML5 Structure</a>
                        </td>
                        <td className="text-end text-muted">
                          15 min
                        </td>
                      </tr>
                      <tr>
                        <td className="table-danger text-center">
                          <i className="fa fa-fw fa-lock text-danger"></i>
                        </td>
                        <td>
                          <a className="fw-medium" href="javascript:void(0)">2.2 Basic HTML5 Elements</a>
                        </td>
                        <td className="text-end text-muted">
                          25 min
                        </td>
                      </tr>
                      <tr>
                        <td className="table-danger text-center">
                          <i className="fa fa-fw fa-lock text-danger"></i>
                        </td>
                        <td>
                          <a className="fw-medium" href="javascript:void(0)">2.3 New Elements in HTML5</a>
                        </td>
                        <td className="text-end text-muted">
                          20 min
                        </td>
                      </tr>
                      <tr>
                        <td className="table-danger text-center">
                          <i className="fa fa-fw fa-lock text-danger"></i>
                        </td>
                        <td>
                          <a className="fw-medium" href="javascript:void(0)">2.4 HTML5 Semantics</a>
                        </td>
                        <td className="text-end text-muted">
                          18 min
                        </td>
                      </tr>
                    </tbody>
                  </table>
                 
                  <table className="table table-borderless table-vcenter">
                    <tbody>
                      <tr className="table-active">
                        <th style={{width: '50px'}}></th>
                        <th>3. Advanced</th>
                        <th className="text-end">
                          <span className="text-muted">1.5 hours</span>
                        </th>
                      </tr>
                      <tr>
                        <td className="table-danger text-center">
                          <i className="fa fa-fw fa-lock text-danger"></i>
                        </td>
                        <td>
                          <a className="fw-medium" href="javascript:void(0)">3.1 HTML5 Forms</a>
                        </td>
                        <td className="text-end text-muted">
                          30 min
                        </td>
                      </tr>
                      <tr>
                        <td className="table-danger text-center">
                          <i className="fa fa-fw fa-lock text-danger"></i>
                        </td>
                        <td>
                          <a className="fw-medium" href="javascript:void(0)">3.2 HTML5 Media</a>
                        </td>
                        <td className="text-end text-muted">
                          20 min
                        </td>
                      </tr>
                      <tr>
                        <td className="table-danger text-center">
                          <i className="fa fa-fw fa-lock text-danger"></i>
                        </td>
                        <td>
                          <a className="fw-medium" href="javascript:void(0)">3.3 HTML5 APIS</a>
                        </td>
                        <td className="text-end text-muted">
                          10 min
                        </td>
                      </tr>
                      <tr>
                        <td className="table-danger text-center">
                          <i className="fa fa-fw fa-lock text-danger"></i>
                        </td>
                        <td>
                          <a className="fw-medium" href="javascript:void(0)">3.4 HTML5 Graphics</a>
                        </td>
                        <td className="text-end text-muted">
                          14 min
                        </td>
                      </tr>
                      <tr>
                        <td className="table-danger text-center">
                          <i className="fa fa-fw fa-lock text-danger"></i>
                        </td>
                        <td>
                          <a className="fw-medium" href="javascript:void(0)">3.5 HTML5 Examples</a>
                        </td>
                        <td className="text-end text-muted">
                          16 min
                        </td>
                      </tr>
                    </tbody>
                  </table>
                 
                </div>
              </div>
            
            </div>
            <div className="col-xl-4">
              
              <div className="block block-rounded">
                <div className="block-content">
                  <a className="btn btn-primary w-100 mb-2" href="javascript:void(0)">Subscribe from $9/month</a>
                  <p className="fs-sm text-center">
                    or <a className="link-effect fw-medium" href="javascript:void(0)">buy this course for $28</a>
                  </p>
                </div>
              </div>
              
              <div className="block block-rounded">
                <div className="block-header block-header-default text-center">
                  <h3 className="block-title">About This Course</h3>
                </div>
                <div className="block-content">
                  <table className="table table-striped table-borderless fs-sm">
                    <tbody>
                      <tr>
                        <td>
                          <i className="fa fa-fw fa-book me-1"></i> 10 Lessons
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fa fa-fw fa-clock me-1"></i> 3 hours
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fa fa-fw fa-heart me-1"></i> 16850 Favorites
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fa fa-fw fa-calendar me-1"></i> 3 weeks ago
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fa fa-fw fa-tags me-1"></i>
                          <a className="fw-semibold link-fx text-primary" href="javascript:void(0)">HTML</a>,
                          <a className="fw-semibold link-fx text-primary" href="javascript:void(0)">CSS</a>,
                          <a className="fw-semibold link-fx text-primary" href="javascript:void(0)">JavaScript</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <a className="block block-rounded block-link-shadow" href="javascript:void(0)">
                <div className="block-header block-header-default text-center">
                  <h3 className="block-title">About The Instructor</h3>
                </div>
                <div className="block-content block-content-full text-center">
                  <div className="push">
                    <img className="img-avatar" src={promo} alt=""/>
                  </div>
                  <div className="fw-semibold mb-1">Jack Greene</div>
                  <div className="fs-sm text-muted">Front-end Developer</div>
                </div>
              </a>
            
            </div>
          </div>
        </div>
      
        <div className="bg-body-dark">
          <div className="content content-full text-center py-6">
            <h3 className="h4 mb-4">
              Subscribe today and learn HTML5 in under 3 hours.
            </h3>
            <a className="btn btn-primary px-4 py-2" href="javascript:void(0)">Subscribe from $9/month</a>
          </div>
        </div>
      
      </main>

    </div>
);

};

export default FormationDetails;
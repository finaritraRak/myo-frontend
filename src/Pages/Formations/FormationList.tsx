
import React, { useState } from "react";
import Modal from "../../Components/Modal";

const FormationList = ({ formations, title }: any) => {
  const [modal, setModal] = useState(false);
  const [bigImage, setBigImage]: any = useState('');
  const [image, setImage]: any = useState('');

  const toggleModal = (e: any, formation: any) => {
    setModal(!modal);
    console.log(e.src, formation.title);
    setBigImage(e.src);
    setImage(formation);

    if (!modal) {
      document.body.classList.add('active-modal');
    } else {
      document.body.classList.remove('active-modal');
    }
  };

  return (
    <div className='gallery'>
     
      <div className='gallery-list'>
       

      
      </div>
    </div>
  );
};

export default FormationList;

import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Importez la feuille de style CSS de Quill

const Create = () => {
  const [name, setName] = useState('Mon article');
  const [category_product, setCategory_product] = useState('');
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [livraison, setLivraison] = useState("");
  const [date, setDate] = useState<string>('');
  const [img, setImg] = useState<string>('');
  const [info, setInfo] = useState<string>('');
  const [isPending, setIsPending] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    const currentDate = new Date();
    const newDate = currentDate.toLocaleTimeString('he-IL', {
      day: 'numeric',
      month: 'numeric',
      year: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
    setDate(newDate);
  }, []);

  const [imgFile, setImgFile] = useState<File | null>(null); // Ajout de l'état pour l'image

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImgFile(file); // Mettre à jour l'état avec le fichier image sélectionné
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsPending(true);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('category_product', category_product);
    formData.append('category', category);
    formData.append('price', price);
    formData.append('livraison', livraison);
    formData.append('date', date);
    formData.append('image', img); // imgFile est le fichier image que vous avez obtenu dans handleFileChange
    if (imgFile) {
      formData.append('image', imgFile); // Ajouter l'image au FormData si elle est définie
    }
    formData.append('info', info);
    fetch('http://localhost:8000/product/', {
      method: 'POST',
      body: formData,
    })
      .then(() => {
        setIsPending(false);
        history('/');
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsPending(false);
   
      });


  
};

  return (
    <div className="create">
      <h2>Ajouter un nouveau post</h2>

      <form className="row g-3" onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="col-md-6">
          <label htmlFor="title" className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="category_product" className="form-label">Category product:</label>
          <input
            type="text"
            className="form-control"
            id="category_product"
            required
            value={category_product}
            onChange={(e) => setCategory_product(e.target.value)}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="category" className="form-label">Category:</label>
          <input
            type="text"
            className="form-control"
            id="category"
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="price" className="form-label">price:</label>
          <input
            type="text"
            className="form-control"
            id="price"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="livraison" className="form-label">livraison:</label>
          <input
            type="text"
            className="form-control"
            id="livraison"
            required
            value={price}
            onChange={(e) => setLivraison(e.target.value)}
          />
        </div>

       


<div className="col-md-6">
  <label htmlFor="authorImage" className="form-label">Image:</label>
  <input
    type="file"
    className="form-control"
    id="authorImage"
    onChange={handleFileChange}
    accept="image/*"
  />
</div>

<div className="col-md-6">
          <label htmlFor="info" className="form-label">Info:</label>
          <ReactQuill
            value={info}
            onChange={(value) => setInfo(value)}
            modules={{
              toolbar: [
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                ['bold', 'italic', 'underline', 'strike'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['link', 'image', 'video'],
                ['clean'],
              ],
            }}
            formats={[
              'header',
              'bold',
              'italic',
              'underline',
              'strike',
              'list',
              'bullet',
              'link',
              'image',
              'video',
            ]}
          />
               </div>

<div className="col-12">
  {!isPending && <button className="btn btn-primary" type="submit">Ajouter</button>}
  {isPending && <button className="btn btn-primary" disabled>Ajout du post...</button>}
</div>
</form>
</div>
);
};

export default Create;


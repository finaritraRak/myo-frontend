import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Importez la feuille de style CSS de Quill

const Create = () => {
  const [title, setTitle] = useState('Mon article');
  const [body, setBody] = useState("Where does it come from?\nContrary to popular belief\n\n");
  const [author, setAuthor] = useState('fy');
  const [date, setDate] = useState<string>('');
  const [img, setImg] = useState<string>('');
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
    formData.append('title', title);
    formData.append('body', body);
    formData.append('author', author);
    formData.append('date', date);
    formData.append('image', img); // imgFile est le fichier image que vous avez obtenu dans handleFileChange
    if (imgFile) {
      formData.append('image', imgFile); // Ajouter l'image au FormData si elle est définie
    }

    fetch('http://localhost:8000/blogs/', {
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
          <label htmlFor="title" className="form-label">Titre:</label>
          <input
            type="text"
            className="form-control"
            id="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="body" className="form-label">Contenu:</label>
          <ReactQuill
            value={body}
            onChange={(value) => setBody(value)}
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

<div className="col-md-6">
  <label htmlFor="author" className="form-label">Auteur:</label>
  <select
    className="form-select"
    id="author"
    value={author}
    onChange={(e) => setAuthor(e.target.value)}
  >
    <option value="fy">fy</option>
  </select>
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

<div className="col-12">
  {!isPending && <button className="btn btn-primary" type="submit">Ajouter</button>}
  {isPending && <button className="btn btn-primary" disabled>Ajout du post...</button>}
</div>
</form>
</div>
);
};

export default Create;


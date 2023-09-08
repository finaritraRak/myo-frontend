import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Formations from './Formations';

const CreateFormation = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState(
    "Where does it come from?\nContrary to popular belief\n\n"
  );
  const [author, setAuthor] = useState('fy');
  const [date, setDate] = useState<string>('020423');
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

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImg(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsPending(true);

   
    const formation = { title, body, author, date, img };

    fetch('http://localhost:8000/formations/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formation),
    })
      .then(() => {
        setIsPending(false);
        history('/formations');
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsPending(false);
      });
  };

  return (
    <div className="create">
    <h2>Ajout nouveau formation</h2>
  
    <form className="row g-3" onSubmit={handleSubmit}>
      <div className="col-md-6">
        <label htmlFor="title" className="form-label">Titre du formation:</label>
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
        <label htmlFor="body" className="form-label">Formations:</label>
        <textarea
          className="form-control"
          id="body"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>
  
      <div className="col-md-6">
        <label htmlFor="author" className="form-label">Formateur:</label>
        <select
          className="form-select"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="fy">Fy</option>
          <option value="avi">Avi</option>
          <option value="shimi">Sami</option>
        </select>
      </div>
  
      <div className="col-md-6">
        <label htmlFor="image" className="form-label">Image:</label>
        <input
          type="file"
          className="form-control"
          id="image"
          onChange={handleFileChange}
          accept="image/*"
        />
      </div>
  
      <div className="col-12">
        {!isPending && <button className="btn btn-primary" type="submit">Ajouter</button>}
        {isPending && <button className="btn btn-primary" disabled>Ajout du formation...</button>}
      </div>
    </form>
  </div>
  
  );
};

export default CreateFormation;

import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateImage = () => {
  const [title, setTitle] = useState('Image');
  const [body, setBody] = useState('This image is the most amazing image I have ever taken');
  const [author, setAuthor] = useState('fy');
  const [date, setDate] = useState<string>('');
  const [image, setImage] = useState<string>('');
  

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
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImage('');
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setIsPending(true);

    const gallery = { title, body, author, date, image };

    fetch('http://localhost:8000/gallery/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(gallery),
    })
      .then(() => {
        setIsPending(false);
        history('/gallery');
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsPending(false);
      });
  };

  return (
    <div className="createImage d-flex justify-content-center align-items-center">
    <div className="container">
      <h2 className="mb-4">Add new Image</h2>
  
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="imageTitle" className="form-label">Image title:</label>
          <input type="text" className="form-control" id="imageTitle" required value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
  
        <div className="mb-3">
          <label htmlFor="imageDescription" className="form-label">Image description:</label>
          <textarea id="imageDescription" className="form-control" required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        </div>
  
        <div className="mb-3">
          <label htmlFor="imageAuthor" className="form-label">Image Author:</label>
          <input type="text" className="form-control" id="imageAuthor" required value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
  
        <div className="mb-3">
          <label htmlFor="imageUpload" className="form-label">Upload your Image:</label>
          <input type="file" className="form-control" id="imageUpload" accept="image/*" onChange={handleFileChange} />
        </div>
  
        {!isPending && <button type="submit" className="btn btn-primary">Add Image</button>}
        {isPending && <button disabled className="btn btn-primary">Adding image...</button>}
      </form>
    </div>
  </div>
  
  
  );
};

export default CreateImage;

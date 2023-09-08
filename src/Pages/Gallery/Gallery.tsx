import useFetch from '../../Components/useFetch'
import GallerryList from './GallerryList'
import Spinners from '../../Components/Spinners'
import Modal from '../../Components/Modal'
import SearchGallery from './SearchGallery'

const Gallery = () => {
  const { isPanding, data: gallery, error } = useFetch('http://localhost:8000/gallery/')

  return (
    <div className='container-sm mt-5'>
      {isPanding && <div className='loading'><Spinners /></div>}
      {error && <div>{error}</div>}
      {gallery && <SearchGallery gallery={gallery} />}
      {gallery && <GallerryList gallery={gallery} title='Gallery' />}
      {gallery && <Modal gallery={gallery} />}
    </div>
  )
}

export default Gallery

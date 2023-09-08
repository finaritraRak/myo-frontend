import useFetch from '../../Components/useFetch'
import FormationList from './FormationList'
import Spinners from '../../Components/Spinners'
import Modal from '../../Components/Modal'
import SearchFormations from './SearchFormations'

const Formations = () => {
  const { isPanding, data: formations, error } = useFetch('http://localhost:8000/formations/')

  return (
    <div>
      {isPanding && <div className='loading'><Spinners /></div>}
      {error && <div>{error}</div>}
      {formations && <SearchFormations formations={formations} />}
      <div className='container-sm mt-5'>
      {formations && <FormationList formations={formations} title='formations' />}
      {formations && <Modal formations={formations} />}
      </div>
    </div>
  )
}

export default Formations

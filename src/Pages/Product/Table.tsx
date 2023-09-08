import Search from './Search'
import Spinners from '../../Components/Spinners'
import useFetch from '../../Components/Fetch'
import ProductList from './ProductList'

function Table() {
    const { isPanding, data: product, error } = useFetch('http://localhost:8000/product/')


    return (
        <div className='home'>
             
            {isPanding && <div className='loading'><Spinners /></div>}
            {error && <div>{error}</div>}
            {product && <Search product={product} />}
             {product && <ProductList product={product} title='' />}

            
        </div>
    )
}

export default Table
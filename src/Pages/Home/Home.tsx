import Search from '../Blog/Search'
import Spinners from '../../Components/Spinners'
import useFetch from '../../Components/useFetch'
import BlogList from '../Blog/Bloglist'

function Home() {
    const { isPanding, data: blogs, error } = useFetch('http://localhost:8080/blogs/')


    return (
        <div className='home'>
             
            {isPanding && <div className='loading'><Spinners /></div>}
            {error && <div>{error}</div>}
            {blogs && <Search blogs={blogs} />}
             {blogs && <BlogList blogs={blogs} title='' />}

            
        </div>
    )
}

export default Home
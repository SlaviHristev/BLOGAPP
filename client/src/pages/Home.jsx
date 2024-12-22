import {Link} from 'react-router-dom'

const Home = () =>{

    return(
        <div className="mt-4 flex flex-col gap-4">
            <div className="flex gap-4">
                <Link to='/'/>
                <span className='text-blue-800'>Blogs and Articles</span>
            </div>
            <div className="flex items-center justify-between">
                <div>
                    <h1 className='text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, facilis.</h1>
                    <p className='mt-8 text-md md:text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt expedita eaque explicabo dolores repudiandae doloremque.</p>
                </div>
                <Link to='write'>
                    
                </Link>
            </div>
        </div>
    )
}

export default Home;
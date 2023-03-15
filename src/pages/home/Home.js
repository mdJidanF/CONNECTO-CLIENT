import { useLoaderData } from 'react-router-dom';
import Devision from '../../Components/Devision';
import Districts from '../../Components/Districts';

const Home = () => {
    const allDistricts = useLoaderData()
    console.log(allDistricts)

    

    return (
        <div className='container mx-auto'>
            <div className='w-[26rem] h-[2.125rem] rounded-full bg-[#6852B9] mx-auto text-[#14FF48] flex items-center justify-center font-bold mt-10'>
                <p>00 People Have Joined Today</p>
            </div>
            <Devision/>
            <Districts allDistricts={allDistricts}/>
        </div>
    );
};

export default Home;
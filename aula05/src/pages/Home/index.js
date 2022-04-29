import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import { GetMovie } from '../../service';
import { Button } from './styled-components';


const Home = () => {

    const [click, setClick] = useState(false);
    const [movie, setMovie] = useState([]);

    const handleClick = () => {
        // alert('Clique aqui');
        setClick(!click);
    };

    const handleGetMovie = async () => {
        const response = await GetMovie()
        console.log(response);
        setMovie(response);
    };

    useEffect(() => {
        handleGetMovie();
    }, []);

    return (
        <>
            <h1>Componente home</h1>
            <Button size={click} onClick={handleClick}>Cliquei</Button>

            {
                movie.map(item => {
                    return (
                        <div key={item.imdbID}>
                            <Card data={item} />
                        </div>
                    )
                })

            }

        </>
    );
};

export default Home;
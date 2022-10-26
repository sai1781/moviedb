import { Typography, Box } from '@mui/material';
import useLocalStorage from 'use-local-storage';
import FavouriteMovieCard from '../Components/FavouriteMovieCard';
import Masonry from '@mui/lab/Masonry';





const Home = _ => {

    const [favourites] = useLocalStorage("favourites", "[]");

    
    return (
        <>
            <Box p={4} >

                <Typography variant='h4' textAlign='center' >Welcome to My Collection</Typography>
                <hr  style={{color:"rgba(0,0,0,0.3)"}} />
                <Masonry columns={4} spacing={2} > 
                    {JSON.parse(favourites).map((e, i) => { // JSON parse will convert string to array format(Stringfy is oppsite to it)
                        return <FavouriteMovieCard id={e} key={i} />

                    })}
                    
                </Masonry>
                <hr  style={{color:"rgba(0,0,0,0.3)"}} />
            </Box>
        </>
    )
}

export default Home;
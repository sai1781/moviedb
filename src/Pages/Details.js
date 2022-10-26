import { Chip, Typography, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import {  useParams} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { omdb } from '../utils';
import { Box } from '@mui/material';
import { Stack } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import useLocalStorage from 'use-local-storage';
import axios from 'axios';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DetailSkeleton from './DetailSkeleton';



const Details = _ => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const[flag, setFlag] = useState(false);
    const[favourites, setFavourites] = useLocalStorage("favourites", "[]");
    const[isfavourite, setFavourite] = useState(false);
    const[detailskeleton, setDetailSkeleton] = useState(true);
    useEffect(_ =>{ // This useEffect is used to display the flag for selected id which we are getting from when we click on singlesearchcard..
        if(data.Country?.length > 0){
            console.log(data);
            (async _ =>{
                //Here we are using the async because it is response we are getting from server it behaves like asynchronous..
                //The URL we are using here is from restCountry api to display the flag of selected country 
                const response = await axios.get(`https://restcountries.com/v3.1/name/${data.Country}?fullText=true`);
                setFlag(response.data[0]?.flags?.svg);
            })()
        }
    },[data])
    useEffect(_ => { //this useEffect is used to display the data which is present in local storage..

        const favs = JSON.parse(favourites);
        if(favs.includes(id)) { //Here we wrote include it will check the id is exist or not and includes is an array method
            setFavourite(true)
        }else{
            setFavourite(false);
        }

    },[favourites, id])

    const toggleFavourite = _ =>{  // Here the toggleFavourite function is used to switch the color of ❤ button
        //Changing the color and pushing the id to local stoarage
        console.log("sai");
        const favs = JSON.parse(favourites);
        if(isfavourite){
            const idx = favs.indexOf(id)
            favs.splice(idx,1);//it will remove the idx and and no of elements it will remove if i give 1 then it will remove 1 which is matches the id's....
            setFavourite(false)
        }
        else{
            favs.push(id);
            setFavourite(true)
        }
        setFavourites(JSON.stringify(favs));
    }


    useEffect(_ => {// This useEffect is used for to get the data when we  clicked on single searchcontainer....
        // Mainly this useEffect is used for to display all the neccessary data for detailed page..
        /// like 1. release date 2. direcetor and crew etc 3. plot etc
        (async _ => {
            const response = await omdb.get(`?i=${id}&plot=full`); // This url for id searching here id is from imdbID
            console.log(response.data.response);
            if (response.data.response === "False") {
                navigate("/404");
            } else {
                console.log("sai");
                console.log(response.data);
                setData(response.data)
            }
        })()

    }, [id, navigate])
    
    useEffect(_ =>{
        setTimeout(_=>setDetailSkeleton(false), 3000);
    })

    return (
        <>
            {detailskeleton ? <DetailSkeleton/> : (
            <Box p={5}>
                <Stack>
                    <Stack direction="row" spacing={5} >
                        {/**If the poster is not available then it will show the constant image whihc is taken from google */}
                        <img src={data.Poster !=="N/A"?data.Poster:"https://ih1.redbubble.net/image.1893341687.8294/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg"} alt="no_image"/>
                        <Box>
                            <Typography  variant="h4">
                                {data.Title}

                                <IconButton  size='larger' color="error" onClick={toggleFavourite} >
                                    {isfavourite?<FavoriteIcon/>: <FavoriteBorderIcon/>}
                                    {/**Here we are using the the IconButton for click ui */}
                                    {/**1.Second thing is we are using conditional rendering because of if we click on Heart Symbol.. 
                                        2.Initially it shows border and if we click on heart then it will show red colored heart and removes the Border...
                                     */}
                                    
                                </IconButton>
                            </Typography>
                            <Typography>
                                Released {data.Year}
                            </Typography>
                            <Typography variant='h5' mt={3} mb={1}>
                                Crew
                            </Typography>
                            <Stack direction="row" gap={1} sx={{ flexWrap: "wrap" }} justify-content="flex-start" align-items="flex-start">
                                {data.Actors?.split(", ").map((e, i) => { // Here we are using split and map.. split is used for split the string in to array and map is used to display the data

                                    return <Chip key={i} label={e} /> //chip component used to show ship style from materialUI.We are showing all actors who are belogining to this film...
                                })}

                                {data.Writer?.split(", ").map((e, i) => {
                                    return <Chip key={i} label={e} /> /**Here we are using Chip to render the writer's */
                                })}

                                <Chip label={data.Director} />
                            </Stack>
                            <Stack mt={2} direction="row" spacing={2} alignItems="center">
                                {flag !== false ?<img src={flag !== "N/A"?flag:""}  alt="no_image" height={40} style={{ outline: "1px solid #1976d2", outlineOffset: "2px" }} /> : ""}
                                {/**Here we are using the terinary operator because if we don't have the flag then it will not show anything */}
                                <Typography variant='overline'>
                                    {data.Country}
                                </Typography>
                            </Stack>

                        </Box>
                    </Stack>
                    <Typography variant='h4' mt={5} mb={2}>
                       {data.Plot !== "N/A" ? "Plot:" : "Information is Not Available"}
                        
                    </Typography>
                    <Typography align="justify">
                        {data.Plot !== "N/A" ? data.Plot : ""}
                    </Typography>


                </Stack>
                <hr  style={{color:"rgba(0,0,0,0.3)"}} />


            </Box>
            )}
        </>
    )
}
export default Details;
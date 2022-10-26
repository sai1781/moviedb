import { useEffect, useState } from "react";
import { omdb } from "../utils";
import { useNavigate, useSearchParams } from 'react-router-dom';
import SingleSearchCard from "../Components/SingleSearchCard";
import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import InfiniteScroll from 'react-infinite-scroller';
import Loader from "../Components/Loader";


const Search = _ => {

    const [list, setList] = useState([]);
    const [params] = useSearchParams();
    const [totalrecords, setTotalRecords] = useState(0);
    const navigate = useNavigate();

    useEffect(_ => {
        if (params.has("q") && params.get("q") !== "") {
            setList([]);
           
        }
    }, [params])


    const loadData = () =>{
        (async _ => {

            const pageno = Math.floor(list.length/10)+1;
            const response = await omdb.get(`?s=${params.get("q")}`);

            if(response.data.Response === "False") {
                if(pageno === 1){
                    navigate('/404');
                }else return;
            }
            setTotalRecords(response.data.totalResults);
            setList((originalList) =>{
                return[...originalList, ...response.data.Search];
            })

        })();
      
    }


    return (
        <>
            <Box p={5}>
                <Typography>{totalrecords} resultsFound</Typography>
                <InfiniteScroll
                    pageStart={1} 
                    loadMore={loadData}
                    hasMore={totalrecords  === 0 || (list.length < totalrecords)} // It means if the total recordings are over it will not scroll further

                    loader={<Loader key={0} />}
                    // Here infinite scroll is package from npm we need to install before using
                    // 2.In load more we need to function to get the data from the url untill the data is over
                    // 3.hasmore = here we need give the condition to get the data untill list.length < totalrecords...
                    // 4.loader = it is toload which component to show some ui for loading(CircularProgress from MUI) 
                >
                <Stack spacing={5} >
                    {list.map((e, idx) => {
                        return (
                            <SingleSearchCard data={e} key={idx} />
                        )
                    })}
                </Stack>
                </InfiniteScroll>
                <hr  style={{color:"rgba(0,0,0,0.3)"}} />

            </Box>
        </>
    )
}
export default Search;
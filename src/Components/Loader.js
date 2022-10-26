import { Card, CircularProgress } from "@mui/material";
import { Stack } from "@mui/system";


const Loader = _ =>{


    return (
        <>
        <Card mt={3}>
            <Stack p={1} alignItems="center">
                <CircularProgress />
            </Stack>
        </Card>

        </>
    )
}


export default Loader;
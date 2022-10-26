import * as React from 'react';
import { Card, Stack, Skeleton, CardContent } from '@mui/material';


const DetailSkeleton = _ => {


    return (
        <>
            <Card style={{ display: "flex", marginLeft: 40, marginTop:40 }}>
                <Skeleton variant="rectangular" width={300} height={400} animation="wave" />


                <CardContent >
                    <Stack spacing={1.7} alignItems="flex-start" justifyContent="flex-start">
                        <Skeleton width="80ch" height="2.8rem" animation="wave" />
                        <Skeleton width="10ch" height="2rem" animation="wave" />

                        <Stack direction="row" spacing={3}>
                            <Skeleton width="10ch" height="2rem" animation="wave" />
                            <Skeleton width="10ch" height="2rem" animation="wave" />
                            <Skeleton width="10ch" height="2rem" animation="wave" />
                            <Skeleton width="10ch" height="2rem" animation="wave" />
                            <Skeleton width="10ch" height="2rem" animation="wave" />
                        </Stack>
                        <Stack direction="row" spacing={3} justifyContent="center" alignItems="center">
                        <Skeleton variant="rectangle" width="12ch" height="4rem" animation="wave" />
                        <Skeleton variant="text" width="12ch" height="2rem" animation="wave" justifyContent="center" alignItems="center" />

                            
                        </Stack>
                    </Stack>


                </CardContent>

            </Card>
            <Skeleton style={{marginLeft:40, marginTop:5}}  width="150ch" height="3rem" animation="wave" />
            <hr  style={{color:"rgba(0,0,0,0.3)"}} />


        </>
    )
}

export default DetailSkeleton;
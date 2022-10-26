import * as React from 'react';

import { Skeleton, Stack } from '@mui/material';

const FavouriteMovieCardSkeleton = _ => {

    return (
        <>
            <Stack spacing={3} paddingLeft={6}>
                <Skeleton variant="rectangular" width={320} height={400} />
                <Skeleton variant='text' width={320} height={30} />
            </Stack>

        </>
    )
}

export default FavouriteMovieCardSkeleton;
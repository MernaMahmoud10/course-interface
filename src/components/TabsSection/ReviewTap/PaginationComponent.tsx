import { Stack, Pagination } from '@mui/material'

export default function PaginationComponent() {
    return (
        <Stack spacing={2}>
            <Pagination
                count={3}
                boundaryCount={1}
                sx={{
                    '& .MuiPaginationItem-root': {
                        backgroundColor: 'transparent',
                        color: 'black',
                        border:"1px solid #EAEAEA",
                        '&:hover': {
                            backgroundColor: '#333',
                            color: '#fff',

                        },
                        '&.Mui-selected': {
                            backgroundColor: 'black !important',
                            color: 'white',
                        },
                    },
                }}
            />
        </Stack>
    )
}

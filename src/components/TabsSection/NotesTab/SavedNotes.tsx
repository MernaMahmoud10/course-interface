import { Box, Paper, Typography } from '@mui/material'
import type { INote } from '../../../assets/helpers/interfaces'

export default function SavedNotes({ note, index }: { note: INote, index: number }) {
    return (
        <Paper
            key={index}
            elevation={1}
            sx={{
                display: 'flex',
                gap: 2,
                p: 2,
                alignItems: "center",
                borderLeft: '4px solid #3f51b5',
            }}
        >
            <Typography
                variant="body2"
                color="primary"
                sx={{ fontWeight: 'bold', minWidth: 60 }}
            >
                {note.videoTime}
            </Typography>
            <Box
                sx={{
                    typography: 'body1',
                    color: 'text.primary',
                    lineHeight: 1.8,
                    '& p': {
                        marginBottom: 0,
                    },
                    '& strong': {
                        fontWeight: 600,
                    },
                    '& ul, & ol': {
                        paddingLeft: '1.25rem',
                        marginBottom: 0,
                    },
                    '& h1, & h2, & h3': {
                        fontWeight: 600,
                        marginTop: 2,
                        marginBottom: 0,
                    },
                }}
                dangerouslySetInnerHTML={{ __html: note?.note }}
            >
            </Box>
        </Paper>
    )
}

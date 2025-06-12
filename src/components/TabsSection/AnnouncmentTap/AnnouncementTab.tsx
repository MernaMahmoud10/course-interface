import { Box, Typography } from '@mui/material'

export default function AnnouncementTab() {
    return (
        <Box sx={{
            width: "92%",
            backgroundColor: "white",
            textAlign: "center",
            pt: 3,
            pb: 5,
            px: 5,
            ml:2
        }}>
            <Typography
                variant="body1"
                fontFamily={"Exo"}
                fontSize={"1rem"}
                sx={{
                    color: "black",
                    fontWeight: 700,
                    textTransform: "capitalize",
                    pb: 3
                }}>
                No announcements posted yet
            </Typography>
            <Typography
                variant="body1"
                fontFamily={"Jost"}
                fontSize={"1.1rem"}
                sx={{
                    color: "#444444",
                    fontWeight: 400,
                }}>
                The instructor hasn’t added any announcements to this course yet. Announcements are used to inform you of updates or additions to the course.

            </Typography>
        </Box>
    )
}

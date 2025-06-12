import { Box, Typography } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import FileCopyIcon from '@mui/icons-material/FileCopy';
export default function OverviewTab() {
    return (
        <Box width= "92%" pl={2}>
            <Typography component={"h4"}
                fontFamily={"Exo"}
                sx={{
                    fontWeight: 600,
                    fontSize: "1.35rem",
                    color: "black"
                }}>
                A practical guide to anyone starting a career as a scrum master helping them tackle many daily situations
            </Typography>
            <Box display={"flex"} mt={1}>
                <Box display={"flex"} alignItems={"center"} width={"140px"}>
                    <SchoolIcon sx={{ color: "#FFAB2D" }} />
                    <Typography variant="caption"
                        fontFamily={"Jost"}

                        sx={{
                            color: "#555555",
                            fontSize: "1rem",
                            fontWeight: 400,
                            ml: 1
                        }}>156 Students</Typography>
                </Box>
                <Box display={"flex"} alignItems={"center"} ml={1} width={"140px"}>
                    <SchoolIcon sx={{ color: "#FFAB2D" }} />
                    <Typography variant="caption"
                        fontFamily={"Jost"}

                        sx={{
                            color: "#555555",
                            fontSize: "1rem",
                            fontWeight: 400,
                            ml: 1
                        }}>Beginner Level</Typography>
                </Box>
            </Box>
            <Box display={"flex"} mt={1}>
                <Box display={"flex"} alignItems={"center"} width={"140px"}>
                    <FileCopyIcon sx={{ color: "#FFAB2D" }} />
                    <Typography variant="caption"
                        fontFamily={"Jost"}

                        sx={{
                            color: "#555555",
                            fontSize: "1rem",
                            fontWeight: 400,
                            ml: 1
                        }}>20 Lessons</Typography>
                </Box>
                <Box display={"flex"} alignItems={"center"} ml={1} width={"140px"}>
                    <FileCopyIcon sx={{ color: "#FFAB2D" }} />
                    <Typography variant="caption"
                        fontFamily={"Jost"}

                        sx={{
                            color: "#555555",
                            fontSize: "1rem",
                            fontWeight: 400,
                            ml: 1
                        }}>33 total mins</Typography>
                </Box>
            </Box>
            <Box pt={5}>
                <Typography
                    variant="body1"
                    fontFamily={"Jost"}
                    fontSize={"1.2rem"}
                    sx={{
                        color: "black",

                    }}>
                    Description:
                </Typography>
                <Typography
                    variant="body1"
                    fontFamily={"Jost"}
                    fontSize={"1.2rem"}
                    sx={{
                        color: "#555555",
                    }}>
                    This course is a practical guide for people who are starting a career as a scrum master, or it's also suitable for the teams adopting an Agile mindset to have a daily and practical guide to help them in their daily challenges and lead them towards continuous improvement.
                </Typography>
            </Box>
        </Box>
    )
}

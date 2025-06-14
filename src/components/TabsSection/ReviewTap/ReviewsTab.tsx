import { Avatar, Box, Divider, LinearProgress, Rating, SvgIcon, Typography } from "@mui/material"
import { ratingsData, users } from "../../../assets/data/dumyData";
import style from "./ReviewTab.module.css"
import StarIcon from '@mui/icons-material/Star';
import avatar from "../../../assets/images/avatar.jpg"
import PaginationComponent from "./PaginationComponent";

export default function ReviewsTab() {

    return (
        <Box component={"section"} className={style?.reviewsSection} ml={2} width="92%">
            <Typography className={`text-black ${style?.comments} mb-3`}>Comments</Typography>
            <div className="d-flex align-items-center mb-3">
                <Typography variant="h2" className={`text-black ${style.rateNum}`}>4.0</Typography>
                <div className={`ps-3 ${style?.ratingDiv}`}>
                    <Rating name="half-rating" defaultValue={4} precision={1} readOnly
                        icon={<StarIcon sx={{ color: '#faaf00', stroke: '#faaf00' }} />}
                        emptyIcon={<StarIcon sx={{ color: 'transparent', stroke: '#faaf00' }} />}
                    />
                    <p>based on 146,951 ratings</p>
                </div>
            </div>
            <Box sx={{ borderRadius: 2, mb: 3 }}>
                {ratingsData.map((item) => (
                    <Box key={item.stars} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Box sx={{ marginRight: "10px", display: 'flex', alignItems: 'center' }}>
                            <Rating value={item.stars} readOnly size="small"
                                icon={<StarIcon fontSize="small" sx={{ color: '#faaf00', stroke: '#faaf00' }} />}
                                emptyIcon={<StarIcon fontSize="small" sx={{ color: 'transparent', stroke: '#faaf00' }} />}
                            />

                        </Box>
                        <Typography variant="body2" sx={{ marginRight: "10px", width: 30, fontFamily: "Jost", color: "#555555" }}>
                            {item.percentage}%
                        </Typography>
                        <Box sx={{ flexGrow: 1 }}>
                            <LinearProgress
                                variant="determinate"
                                value={item.percentage}
                                sx={{
                                    height: 8,
                                    borderRadius: 5,
                                    '& .MuiLinearProgress-bar': {
                                        backgroundColor: '#FFA000',
                                    },
                                    backgroundColor: '#eee',
                                }}
                            />
                        </Box>

                    </Box>
                ))}
            </Box>
            {users?.map((_user, index) =>
                <>
                    <Divider />
                    <Box sx={{ display: "flex", py: 2 }} key={index}>
                        <Avatar alt="Avatar Img" src={avatar} />
                        <Box sx={{ width: "100%", pl: 2 }}>
                            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                                <Typography variant="h4" sx={{ color: "black", fontSize: "0.8rem", fontFamily: "Exo", fontWeight: 600 }}>Laura Hipster</Typography>
                                <Typography variant="subtitle2" sx={{ color: "#555555", fontSize: "0.8rem", fontFamily: "Jost", fontWeight: 400 }}>October 03, 2022</Typography>

                            </Box>
                            <Typography variant="body2" sx={{ color: "#555555", fontSize: "1.1rem", fontFamily: "Jost", fontWeight: 400, lineHeight: "150%" }}>
                                Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.
                                Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus.
                                At eget euismod cursus non. Molestie dignissim sed volutpat feugiat vel.
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer", mt: 1, ":hover": { border: "2px solid #555555" }, width: 65 }}>
                                <SvgIcon sx={{ fontSize: "medium" }}>
                                    <path
                                        d="M10 9V5l-7 7 7 7v-4.1c4.55 0 7.72 1.52 9.96 4.6C19.46 14.14 16.03 9 10 9z"
                                        fill="white"
                                        stroke="#555555"
                                        strokeWidth="1.5"
                                    />
                                </SvgIcon>
                                <Typography sx={{ color: "black", fontSize: "0.8rem", fontFamily: "Jost", fontWeight: 600, ml: 1 }}>Reply</Typography>
                            </Box>
                        </Box>
                    </Box>
                </>
            )}

            <Box display="flex" justifyContent="center">
                <PaginationComponent />
            </Box>
        </Box>
    )
}

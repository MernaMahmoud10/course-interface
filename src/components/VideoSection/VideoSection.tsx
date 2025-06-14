
import { Box, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { VideoTimeContext } from "../../context/VideoTimeContext";
import { videos } from "../../assets/data/dumyData";
import type { contextInterface } from "../../assets/helpers/interfaces";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ReactPlayer from "react-player";
import style from "./VideoSection.module.css"
import moment from 'moment/moment';

interface stateInterface {
    playedSeconds: number
}

export default function VideoSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { setVideoTime } = useContext(VideoTimeContext) as contextInterface
    const currentVideo = videos[currentIndex];


    const nextVideo = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    const prevVideo = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? videos.length - 1 : prevIndex - 1
        );
    };

    const handleProgress = (state: stateInterface) => {
        setVideoTime(moment(state.playedSeconds * 1000).format("mm:ss"));
    };

    return (
        <>
            <Box className="px-1" component={"div"} sx={{ backgroundColor: "#BCBEC0", color: "white" }}>
                <Box component={"div"} className="py-3 px-3 d-flex align-items-center">
                    <ArrowBackIcon />
                    <Typography className="ps-3">Scrum master practical guide</Typography>
                </Box>

                <div className={style?.playerContainer}>

                    <ReactPlayer onProgress={handleProgress} height={"444px"} controls className=" w-100" url={currentVideo} />
                    <button className={`${style.navBtn} ${style.prev}`} onClick={prevVideo}><div className={style?.circleDiv}><ArrowBackIosNewIcon /></div></button>
                    <button className={`${style.navBtn} ${style.next}`} onClick={nextVideo}><div className={style?.circleDiv}><ArrowForwardIosIcon /></div></button>

                </div>
            </Box>
        </>
    )
}

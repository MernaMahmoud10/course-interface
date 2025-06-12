import { Box, type SvgIconTypeMap } from "@mui/material"
import type { OverridableComponent } from "@mui/material/OverridableComponent";

interface IProps {
    MyIcon: OverridableComponent<SvgIconTypeMap>
    expanded: boolean;
    playBtn: boolean
}

function CustomIcon({ MyIcon, expanded, playBtn }: IProps) {
    return (
        <Box
            sx={{
                width: "25px",
                pointerEvents: "none",
                height: "25px",
                borderRadius: "50%",
                backgroundColor: !expanded && playBtn ? "#fff" : "#c0c0c0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 9,
                ".MuiStepLabel-root.MuiStepLabel-vertical": {
                    py: 0
                }
            }}>
            <MyIcon fontSize="small" sx={{ fill: !expanded && playBtn ? "#c0c0c0" : "white" }} />
        </Box>
    )
}

export default CustomIcon
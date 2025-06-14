import { Box, Checkbox, Step, StepLabel, Stepper, Typography } from '@mui/material'
import { useState } from 'react';
import { steps } from '../../assets/data/dumyData';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CustomIcon from './CustomIcon'

export default function SessionContent() {
    const [activeStepper, setactiveStepper] = useState<number>(2);
    const handleChange = (value: boolean, index: number) => {
        if (value)
            setactiveStepper(index + 1)
        else
            setactiveStepper(index)
    }

    return (
        <Stepper orientation="vertical"
            sx={{
                ml: 4,
                ":before": {
                    content: '""',
                    position: "absolute",
                    top: "16%",
                    width: "2px",
                    left: "59px",
                    height: "70%",
                    backgroundColor: "#c0c0c0",
                    zIndex: 0
                }
            }}
            connector={null}
            activeStep={2}>
            {steps.map((step, index) => (
                <Step key={step.label}>

                    <StepLabel
                        icon={
                            <CustomIcon MyIcon={PlayArrowIcon} playBtn={true} expanded={true} />

                        }>
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            width="100%">
                            <Box>
                                <Typography fontSize={"1.1rem"} fontWeight={600} sx={{ color: index !== activeStepper ? "#C0C0C0" : "#444444" }}>{step?.label}</Typography>
                                <Typography component={"option"} variant="caption" sx={{ color: "#C0C0C0" }}>{step?.duration}</Typography>

                            </Box>
                            <Checkbox sx={{
                                color: index == activeStepper ? 'black' : "#c0c0c0",
                                p: 0,
                                '&.Mui-checked': {
                                    color: '#dadada', // checked color
                                },
                            }}
                                checked={index !== activeStepper && index < activeStepper}
                                onChange={(_e, value) => handleChange(value, index)} />
                        </Box>

                    </StepLabel>
                </Step>
            ))}
        </Stepper>
    )
}

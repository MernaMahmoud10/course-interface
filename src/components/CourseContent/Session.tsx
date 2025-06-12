import { useState } from 'react';
import { Box, Typography, AccordionSummary, AccordionDetails } from '@mui/material';
import type { ISection } from '../../assets/helpers/interfaces';
import CustomIcon from "./CustomIcon";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Accordion from '@mui/material/Accordion';
import SessionContent from './SessionContent';

export default function Session({ section, index }: { section: ISection, index: number }) {
    const [expanded, setExpanded] = useState<boolean>(false);

    return (
        <Accordion
            expanded={expanded}
            key={index}
            onChange={() => setExpanded(!expanded)}>
            <AccordionSummary
                aria-expanded={expanded}
                sx={{
                    background: "linear-gradient(180deg,rgba(247, 235, 235, 0.99) 0%, rgba(217, 206, 206, 1) 100%)",
                    py: 0,
                    my: 0,
                    mb: !expanded ? 2 : 0,
                    zIndex: 99,
                    ".Mui-expanded": {
                        margin: "5px 0 !important",
                        mb: 0,
                    },
                    "&.MuiAccordionSummary-root": {
                        minHeight: "50px"
                    },
                    ".MuiAccordionSummary-content.MuiAccordionSummary-contentGutters": {
                        my: 0
                    }
                }}
                expandIcon={
                    <CustomIcon MyIcon={KeyboardArrowDownIcon} playBtn={false} expanded={expanded} />

                    // CustomIcon(KeyboardArrowDownIcon)
                }>
                <Box display={"flex"} alignItems={"center"}>
                    <CustomIcon MyIcon={PlayArrowIcon} playBtn={true} expanded={expanded} />

                    <Box>
                        <Typography variant="h5" ml={1} sx={{
                            color: "#444444",
                            fontWeight: 600,
                            fontSize: "1rem"
                        }}>
                            {section?.name} : {section?.title}
                        </Typography>
                        <Typography variant="body2" ml={1} sx={{
                            color: "#444444",
                            fontWeight: 400,
                            fontSize: "0.75rem"
                        }}>
                            2 / 3 | 6min
                        </Typography>
                    </Box>
                </Box>
            </AccordionSummary>
            <AccordionDetails sx={{
                "&.MuiAccordionDetails-root": {
                    padding: "8px 16px"
                }
            }}>
                <SessionContent />
            </AccordionDetails>
        </Accordion>
    )
}

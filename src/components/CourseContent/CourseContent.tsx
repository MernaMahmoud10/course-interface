import { AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import { useState } from "react";
import { sections } from "../../assets/data/dumyData";
import Accordion from '@mui/material/Accordion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import Session from "./Session";

export default function CourseContent() {
  const [expanded, setExpanded] = useState<boolean>(true);

  return (
    <Box sx={{ border: "1px solid #F5F5F5" }}>
      <Accordion
        expanded={expanded}
        onChange={() => setExpanded(!expanded)}
      >
        <AccordionSummary
          aria-expanded={expanded}
          expandIcon={expanded ? <CloseIcon /> : <KeyboardArrowDownIcon />}
          sx={{
            borderBottom: expanded ? "2px solid #F5F5F5" : "none",
            mb: expanded ? 1 : 0,
            ".Mui-expanded": {
              margin: "5px 0 !important",
            },
            "&.MuiAccordionSummary-root": {
              minHeight: "50px"
            },
            ".MuiAccordionSummary-content.MuiAccordionSummary-contentGutters": {
              my: 0
            }
          }}
        >
          <Typography fontWeight="bold" fontSize={"1.15rem"}>Course Content</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{
          "&.MuiAccordionDetails-root": {
            px: 0,
            padding: "8px 16px 0px"

          }
        }}>
          {sections?.map((section, index) =>
            <Session section={section} index={index} />
          )}

        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

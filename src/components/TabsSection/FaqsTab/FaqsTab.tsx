import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';
import { users } from '../../../assets/data/dumyData';

export default function FaqsTab() {

  return (
    <Box ml={2}>
      {users?.map((_item, index) =>
        <Box mb={2} key={index} >
          <Accordion
            defaultExpanded={index == 1}
            disableGutters
            square={false}
            elevation={0}
            sx={{
              width: "92%",
              mb: 2,
              borderRadius: 2,
              p: 1,
              overflow: 'hidden',
              backgroundColor: '#fff',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              '&::before': {
                display: 'none',
              },
              '&.MuiAccordion-root': {
                borderRadius: 2,
              },
              '& .MuiAccordionSummary-root': {
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                minHeight: 48,
                padding: '0 16px',
              },
              '& .MuiAccordionSummary-content': {
                margin: '12px 0',
              },
              '& .MuiAccordionDetails-root': {
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
                padding: 2,
              },
              '&.Mui-expanded': {
                margin: 0,
              },
            }}
          >
            <AccordionSummary
              aria-expanded="false"
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography
                component="span"
                fontFamily={"Exo"}
                sx={{
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: "black"
                }}>What Does Royalty Free Mean?</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{
              fontWeight: 400,
              fontFamily: "Jost",
              fontSize: "1.14rem",
              color: "#555555"
            }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat.
              Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.
            </AccordionDetails>
          </Accordion>
        </Box>)}



    </Box>
  );
}
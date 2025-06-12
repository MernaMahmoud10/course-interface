import { Box, Button, InputBase } from '@mui/material';
import { useContext, type Dispatch, type SetStateAction } from 'react';
import { VideoTimeContext } from '../../../context/VideoTimeContext';
import type { contextInterface, IMyNote } from '../../../assets/helpers/interfaces';
import TextEditor from './TextEditor';

interface IProps extends IMyNote {
  setTextAreaAppeared: Dispatch<SetStateAction<boolean>>;
  handleAddNote: () => void;
}

const AddNote = ({ setTextAreaAppeared, handleAddNote, setmyNote, myNote }: IProps) => {
  const { videoTime } = useContext(VideoTimeContext) as contextInterface
  const cancelNote = () => {
    setTextAreaAppeared(false);
    setmyNote("")
  }
  return (
    <>
      <InputBase sx={{
        border: '1px solid #ccc',
        borderRadius: "8px",
        px: 1,
        width: 60,
        backgroundColor: "#fff",
        fontFamily: "Jost",
        fontWeight: 700,
        height: 30,
        fontSize: "0.9rem"
      }}
        value={videoTime}
        readOnly />

      <TextEditor setmyNote={setmyNote} myNote={myNote} />
      <Box component={"div"}
        sx={{
          display: "flex",
          justifyContent: "end",
          mt: 2,
        }}>
        <Button sx={{
          borderRadius: "8px",
          height: 40,
          width: 85,
          color: "black",
          backgroundColor: "white",
          fontFamily: "Work Sans",
          fontSize: "0.7rem",
          fontWeight: 700,
          textTransform: "capitalize"
        }}
          aria-label='cancel'
          onClick={cancelNote}
        >cancel</Button>
        <Button sx={{
          borderRadius: "8px",
          ml: 2,
          height: 40,
          width: 110,
          color: "white",
          backgroundColor: "black",
          fontFamily: "Work Sans",
          fontSize: "0.7rem",
          fontWeight: 700,
          textTransform: "capitalize"
        }}
          aria-label='save your note'
          onClick={handleAddNote}
        >Save Note</Button>
      </Box>
    </>
  );
};

export default AddNote;
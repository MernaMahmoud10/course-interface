import { useContext, useEffect, useState } from "react";
import { Box, IconButton, Stack, Typography, } from "@mui/material";
import { VideoTimeContext } from "../../../context/VideoTimeContext";
import type { contextInterface, INote } from "../../../assets/helpers/interfaces";
import AddIcon from '@mui/icons-material/Add';
import AddNote from "./AddNote";
import CustomDropDown from "./CustomDropDown";
import SavedNotes from "./SavedNotes";


export default function NotesTab() {
    const lectureOptions = ['All lectures', 'Math', 'Science', 'History'];
    const sortOptions = ['Most recent', 'Oldest', 'Most popular'];
    const [selectedLecture, setSelectedLecture] = useState<string>("");
    const [selectedSort, setSelectedSort] = useState<string>("");
    const [textAreaAppeared, setTextAreaAppeared] = useState<boolean>(false);
    const { videoTime } = useContext(VideoTimeContext) as contextInterface
    const [notesArr, setNotesArr] = useState<INote[]>([]);
    const [myNote, setmyNote] = useState<string>("")


    const handleAddNote = () => {
        const newNote = {
            note: myNote,
            videoTime: videoTime
        }
        const NotesArrCopy = [...notesArr]
        NotesArrCopy.push(newNote)
        setNotesArr(NotesArrCopy)
        localStorage.setItem("notes", JSON.stringify(NotesArrCopy))
        setmyNote("")
    }

    useEffect(() => {
        const localStoratgNotes = localStorage.getItem("notes")
        if (localStoratgNotes) {
            setNotesArr(JSON.parse(localStoratgNotes))
        }
    }, []);



    return (
        <Box component={"section"} maxWidth={"lg"} ml={2} width={"92%"}>

            {textAreaAppeared ?
                <>
                    <AddNote setTextAreaAppeared={setTextAreaAppeared} handleAddNote={handleAddNote} setmyNote={setmyNote} myNote={myNote} />
                </>
                :
                <Box sx={(theme) => ({
                    display: 'flex',
                    alignItems: 'center',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    px: 2,
                    py: 0.5,
                    width: '50%',
                    [theme.breakpoints.down("sm")]: {
                        width: '100%',
                    },
                    backgroundColor: '#ffff',
                    cursor: "pointer",
                })}
                    onClick={() => setTextAreaAppeared(true)}>
                    <Typography sx={{ flex: 1, color: '#9D9D9D', py: 0.5, fontWeight: 400, fontFamily: "Jost", fontSize: 18 }}>
                        Create a new note at {videoTime}
                    </Typography>
                    <IconButton
                        aria-label='add new note'
                        sx={{
                            backgroundColor: 'black',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#333',
                            },
                            width: 20,
                            height: 20,
                        }}
                    >
                        <AddIcon fontSize="small" />
                    </IconButton>
                </Box>
            }


            <Box display="flex" gap={2} pt={2}>
                <CustomDropDown
                    options={lectureOptions} placeholder={"All lectures"}
                    selectedValue={selectedLecture} setSelectedValue={setSelectedLecture} />

                <CustomDropDown
                    options={sortOptions} placeholder={"Sort by most recent"}
                    selectedValue={selectedSort} setSelectedValue={setSelectedSort} />

            </Box>

            <Stack spacing={2} mt={2}>
                {notesArr?.map((note, index) => (
                    <SavedNotes note={note} index={index} />
                ))}
            </Stack>

        </Box >
    )
}

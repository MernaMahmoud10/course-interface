import { Autocomplete, ClickAwayListener, IconButton, InputBase, styled } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState, type Dispatch, type SetStateAction } from "react";

interface Iprops {
    placeholder: string;
    options: string[];
    selectedValue: string;
    setSelectedValue: Dispatch<SetStateAction<string>>
}
export default function CustomDropDown({ placeholder, options, selectedValue, setSelectedValue }: Iprops) {

    const [opened, setopened] = useState(false);
    const CustomIcon = (() => (
        <IconButton
            aria-label='open dropdown menu'
            sx={{
                backgroundColor: "black",
                borderRadius: "50%",
                height: 20,
                width: 20,
                textAlign: "center",
                ":hover": {
                    backgroundColor: "#555555",

                }
            }}
            onClick={() => setopened(!opened)}>
            <ExpandMoreIcon fontSize="small" style={{ color: 'white' }} />
        </IconButton>
    ))

    const StyledInput = styled(InputBase)(() => ({
        border: '1px solid #ccc',
        borderRadius: 8,
        fontFamily: "Jost",
        padding: '10px 12px',
        width: '100%',
        backgroundColor: '#fff',
        fontSize: 18,
        color: '#333',
        '& input': {
            padding: 0,
        },
    }));

    const handleOnChange = (newValue: string) => {
        setSelectedValue(newValue)
        setopened(!opened)
    }
    return (
        <ClickAwayListener onClickAway={() => setopened(false)}>
            <Autocomplete
                options={options}
                value={selectedValue}
                popupIcon={null}
                disableClearable
                open={opened}
                onChange={(_event, newValue) => handleOnChange(newValue)}
                renderInput={(params) => <StyledInput
                    aria-expanded={opened}
                    onClick={() => setopened(true)}
                    ref={params.InputProps.ref}
                    inputProps={params.inputProps}
                    placeholder={placeholder}
                    endAdornment={<CustomIcon />}
                />}
                sx={{ width: 250 }}
            />
        </ClickAwayListener>
    )
}

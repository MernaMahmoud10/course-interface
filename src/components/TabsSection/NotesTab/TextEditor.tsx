import { useEditor, EditorContent } from '@tiptap/react';
import { Box, IconButton, Menu, MenuItem, Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import type { IMyNote } from '../../../assets/helpers/interfaces';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import StrikethroughSIcon from '@mui/icons-material/StrikethroughS';
import CodeIcon from '@mui/icons-material/Code';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';



export default function TextEditor({ setmyNote, myNote }: IMyNote) {
    // define your extension array
    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
        ],
        content: myNote,
        onUpdate({ editor }) {
            setmyNote(editor.getHTML());
        },
    });

    //set textEditor content with the value of myNote
    useEffect(() => {
        editor?.commands.setContent(myNote)
    }, [myNote]);

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = (type: 'paragraph' | 'heading1' | 'heading2') => {
        if (!editor) return;

        if (type === 'paragraph') {
            editor.chain().focus().setParagraph().run();
        } else if (type === 'heading1') {
            editor.chain().focus().toggleHeading({ level: 1 }).run();
        } else if (type === 'heading2') {
            editor.chain().focus().toggleHeading({ level: 2 }).run();
        }
        setAnchorEl(null);
    };

    //to prevent the early rendering if the editor is not ready
    if (!editor) return null;

    const getTextTypeLabel = () => {
        if (editor.isActive('heading', { level: 1 })) return 'Heading 1';
        if (editor.isActive('heading', { level: 2 })) return 'Heading 2';
        return 'Normal text';
    };

    return (
        <Paper elevation={1} sx={{ p: 2, borderRadius: 2, pt: 0, mt: 2 }}>
            {/* Toolbar */}
            <Box display="flex" gap={1} alignItems="center" flexWrap="wrap">
                {/* Undo/Redo */}
                <IconButton
                    aria-label='undo'
                    onClick={() => editor.chain().focus().undo().run()}>
                    <UndoIcon />
                </IconButton>
                <IconButton
                    aria-label='redo'
                    onClick={() => editor.chain().focus().redo().run()}>
                    <RedoIcon />
                </IconButton>

                {/* Text Type Dropdown */}
                <Box
                    onClick={handleMenuOpen}
                    display="flex"
                    alignItems="center"
                    sx={{ cursor: 'pointer', userSelect: 'none', fontSize: 14 }}
                >
                    {getTextTypeLabel()}
                    <ArrowDropDownIcon />
                </Box>
                <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
                    <MenuItem onClick={() => handleMenuClose('paragraph')}>Normal text</MenuItem>
                    <MenuItem onClick={() => handleMenuClose('heading1')}>Heading 1</MenuItem>
                    <MenuItem onClick={() => handleMenuClose('heading2')}>Heading 2</MenuItem>
                </Menu>

                {/* Formatting Icons */}
                <IconButton
                    aria-label='type in bolder mode'
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    color={editor.isActive('bold') ? 'primary' : 'default'}
                >
                    <FormatBoldIcon />
                </IconButton>
                <IconButton
                    aria-label='type in italic mode'
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    color={editor.isActive('italic') ? 'primary' : 'default'}
                >
                    <FormatItalicIcon />
                </IconButton>
                <IconButton
                    aria-label='type in strikethrough mode'
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    color={editor.isActive('underline') ? 'primary' : 'default'}
                >
                    <FormatUnderlinedIcon />
                </IconButton>
                <IconButton
                    aria-label='type in superscript mode'
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    color={editor.isActive('strike') ? 'primary' : 'default'}
                >
                    <StrikethroughSIcon />
                </IconButton>
                <IconButton
                    aria-label='type in subscript mode'
                    onClick={() => editor.chain().focus().toggleCode().run()}
                    color={editor.isActive('code') ? 'primary' : 'default'}
                >
                    <CodeIcon />
                </IconButton>
                <IconButton
                    aria-label='type content as a list'
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    color={editor.isActive('bulletList') ? 'primary' : 'default'}
                >
                    <FormatListBulletedIcon />
                </IconButton>
                <IconButton
                    aria-label='type content as a numbered list'
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    color={editor.isActive('orderedList') ? 'primary' : 'default'}
                >
                    <FormatListNumberedIcon />
                </IconButton>
            </Box>

            {/* Editor */}
            <Box
                sx={{
                    border: '1px solid #ccc',
                    borderRadius: 2,
                    minHeight: 125,
                    padding: 1,
                    '& .ProseMirror': {
                        outline: 'none',
                    },
                }}
            >
                <EditorContent editor={editor} />
            </Box>
        </Paper>
    )
}

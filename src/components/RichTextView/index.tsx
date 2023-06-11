import "./styles.scss"
import React, { useState } from "react";
import { Paper } from "@mui/material";
import { ContentState, convertFromHTML, EditorState, Editor } from "draft-js";

type Props = {
    htmlValue?: string
}

export const RichTextView: React.FC<Props> = ({ htmlValue = "" }) => {
    const blocksFromHTML = convertFromHTML(htmlValue);

    const state = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
    );

    const [editorState] = useState(() =>
        EditorState.createWithContent(state)
    );

    return (
        <Paper elevation={1} sx={{ p: 1, minHeight: 500 }}>
            <Editor
                readOnly
                editorState={editorState}
            />
        </Paper>
    )
}
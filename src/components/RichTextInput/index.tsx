import { useController } from "react-hook-form"
import "./styles.scss"
import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Paper } from "@mui/material";
import { ContentState, convertFromHTML, EditorState } from "draft-js";
import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import useThrottle from "hooks/useThrottle";

type Props = {
    control: any
    name: string,
    required?: boolean,
    label?: string,
    placeholder?: string,
    readOnly?: boolean
}

export const RichTextInput: React.FC<Props> = ({ control, name, label }) => {
    const { field: { value, onChange } } = useController({ name, control })

    const blocksFromHTML = convertFromHTML(value ?? "");

    const state = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
    );

    const [editorState, setEditorState] = useState(() =>
        EditorState.createWithContent(state)
    );

    const handleChange = useThrottle(() => {
        onChange(draftToHtml(
            convertToRaw(editorState.getCurrentContent())
        ));
    }, 500)

    useEffect(() => {
        handleChange()
    }, [editorState]);

    return (
        <div className="rich-text-input">
            <label className="label">
                {label}
            </label>
            <div className="editor">
                <Editor
                    editorState={editorState}
                    onEditorStateChange={setEditorState}
                />
            </div >
        </div>
    );
}
import "./styles.scss"
import React, { useState } from "react";
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
        <div className="rich-text-view">
            <Editor
                readOnly
                editorState={editorState}
            />
        </div>
    )
}
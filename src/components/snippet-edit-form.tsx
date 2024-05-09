"use client";

import { editSnippet } from "@/actions";
import { Editor } from "@monaco-editor/react";
import type { Snippet } from "@prisma/client";
import { useState } from "react";

interface ISnippetEditForm {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: ISnippetEditForm) {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };

  const editSnippetAction = editSnippet.bind(null, snippet.id, code);

  return (
    <div>
      <Editor
        height="50vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{
          minimap: { enabled: false },
          fontSize: 20,
        }}
        onChange={handleEditorChange}
      />
      <form action={editSnippetAction}>
        <button type="submit" className="p-2 border round">
          Save
        </button>
      </form>
    </div>
  );
}

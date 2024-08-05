import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";
import Selector from "./Selector";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import Output from "./Output";
import { DragHandleIcon } from "@chakra-ui/icons";

const CodeEditor = () => {
  const editorReference = useRef(
    null
  ) as React.MutableRefObject<null | HTMLInputElement>;
  const [CurrentLanguage, ChangeLanguage] = useState("c");
  const [currentBoilerPlate, changeBoilerPlate] = useState(
    '#include <stdio.h>\n\nint main() {\n  printf("Hello, World!!\\n");\n  return 0 ;\n}'
  );

  const focusEditor = (editor: any) => {
    editorReference.current = editor;
    editor.focus();
  };

  return (
    <>
      <PanelGroup direction="horizontal">
        <Panel defaultSize={70}>
          <Selector
            language={CurrentLanguage}
            changeLang={ChangeLanguage}
            changeBoilerPlate={changeBoilerPlate}
          />
          <Editor
            value={currentBoilerPlate}
            theme="vs-dark"
            height={"78vh"}
            language={CurrentLanguage}
            defaultValue="// some comment"
            onMount={focusEditor}
          />
        </Panel>
        <PanelResizeHandle
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 6,
          }}
        >
          <DragHandleIcon />
        </PanelResizeHandle>
        <Panel>
          <Output editorReference={editorReference} lang={CurrentLanguage} />
        </Panel>
      </PanelGroup>
    </>
  );
};

export default CodeEditor;

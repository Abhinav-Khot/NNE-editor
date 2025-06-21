import { Editor } from "@monaco-editor/react";
import { useRef, useState, useEffect } from "react";
import Selector from "./Selector";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import Output from "./Output";
import { DragHandleIcon } from "@chakra-ui/icons";

const CodeEditor = () => {
  const editorReference = useRef(null) as React.MutableRefObject<null | HTMLInputElement>;

  const [CurrentLanguage, ChangeLanguage] = useState("c");
  const [currentBoilerPlate, changeBoilerPlate] = useState(
    () =>
    { //check if some C code had been previously written
      const savedCodeMapping = JSON.parse(localStorage.getItem("codeMapping") || '{}');
      if (savedCodeMapping["c"]) return savedCodeMapping["c"];
      else return '#include <stdio.h>\n\nint main() {\n  printf("Hello, World!\\n");\n  return 0 ;\n}';
    }
  );
  
  useEffect(() => {
    if (CurrentLanguage) {
      localStorage.setItem("editorLanguage", CurrentLanguage);
    }
  }, [CurrentLanguage]); 

  function saveCode(value : string)
  {
    const savedCodeMapping = JSON.parse(localStorage.getItem("codeMapping") || '{}');
    savedCodeMapping[CurrentLanguage] = value; 
    localStorage.setItem("codeMapping", JSON.stringify(savedCodeMapping));
  }

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
            language={CurrentLanguage}
            onMount={focusEditor}
            onChange={(value) => saveCode(value || "")}
            height = "80vh"
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

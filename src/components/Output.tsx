import { Box, Textarea, Text, Button } from "@chakra-ui/react";
import {useState } from "react";
import RunCode from "./ApiCall";
import { useHotkeys } from "react-hotkeys-hook";
import { useRef } from "react";

interface Props {
  editorReference: any;
  lang: string;
}

const Output = ({ editorReference, lang }: Props) => {
  const stdinRef = useRef(null);
  const [load, setLoading] = useState("");
  const [output, setOutput] = useState(null);
  async function runCode() {
    const code = editorReference.current.getValue();
    if (!code) return;
    try {
      setLoading("yes");
      const ans = await RunCode(lang, code, stdinRef.current);
      const finans = ans.run.output;
      setLoading("");
      setOutput(finans);
    } catch (error) {}
  }

  useHotkeys("shift+enter", () => runCode(), { enableOnFormTags: true });
  
  return (
    <>
      <Box ml={2}>
        <Text
          mb={3}
          decoration={"solid underline teal"}
          fontFamily={"Lucida Console"}
        >
          Submit Code:
        </Text>
        {load ? (
          <Button
            colorScheme="teal"
            variant="solid"
            mb={3}
            onClick={runCode}
            isLoading
          >
            Run
          </Button>
        ) : (
          <Button colorScheme="teal" variant="solid" mb={3} onClick={runCode}>
            Run
          </Button>
        )}
      </Box>
      <Box p={2}>
        <Text
          mb={3}
          decoration={"solid underline teal"}
          fontFamily={"Lucida Console"}
        >
          STDIN
        </Text>
        <Textarea
          ref = {stdinRef}
          placeholder="Standard Input, if any."
          resize={"none"}
          minHeight={"20vh"}
        />
      </Box>
      <Box p={2}>
        <Text
          mb={3}
          decoration={"solid underline teal"}
          fontFamily={"Lucida Console"}
        >
          Output
        </Text>
        <Box
          p={2}
          borderColor={"gray.500"}
          borderWidth={1}
          borderStyle={"solid"}
          height={"45vh"}
          overflow={"auto"}
        >
          <div style={{ whiteSpace: "pre-line" }}>
            {output ? output : "Output of the program"}
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Output;

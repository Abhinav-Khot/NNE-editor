import { Button, Box, HStack, Spacer } from "@chakra-ui/react"
import Testcase from "./Testcase"
import RunCodeMod from "./ApiCallCFMode";
import fetchLatestProblem from "./testGet";
import { useState } from "react";

interface Props{
  editorReference : any;
  language : string;
}
const CFMode = ({editorReference, language} : Props) => {
    const [tests, modifyTests] = useState([{input : "", output : "", timeLimit : 0, memoryLimit : 0}]);
    const [results, setResults] = useState<any[]>([]);
    const [runningTests, setRunningTests] = useState(false);
    async function getTests() {
       const data = await fetchLatestProblem();
       modifyTests(data.tests);
       console.log(tests);
    }
    async function getAll()
    {
        let results_ = [];
        setRunningTests(true);
        for (let i = 0; i < tests.length; i = i + 1)
        {
          const lang = language;
          const code = editorReference.current.getValue();
          let curr = await RunCodeMod(lang, code, tests[i].input, tests[i].timeLimit, tests[i].memoryLimit);
          results_.push(curr);
        }
        setRunningTests(false);
        setResults(results_);
        console.log(results_);
    }
  return (
    <div>
        <Box height ="3vh">

        </Box>
        <HStack>
        <Button onClick={getTests} colorScheme="teal" variant="solid" mb={3}>Fetch TestCases</Button>
        <Spacer/>
        <Button onClick={getAll} colorScheme="teal" variant="solid" mb={3} isLoading={runningTests}>Run Tests</Button>
        </HStack>
        <Testcase testcases={tests} results = {results}></Testcase>
    </div>
  )
}

export default CFMode
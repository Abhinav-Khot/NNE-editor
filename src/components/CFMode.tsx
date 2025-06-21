import { Button, Box, HStack, Spacer } from "@chakra-ui/react"
import Testcase from "./Testcase"
import RunCodeMod from "./ApiCallCFMode";
import fetchLatestProblem from "./testGet";
import { useState } from "react";

const CFMode = () => {
    const [tests, modifyTests] = useState([{input : "", output : ""}]);
    async function getTests() {
       const data = await fetchLatestProblem();
       modifyTests(data.tests);
       console.log(tests);
    }
  return (
    <div>
        <Box height ="3vh">

        </Box>
        <HStack>
        <Button onClick={getTests} colorScheme="teal" variant="solid" mb={3}>Fetch TestCases</Button>
        <Spacer/>
        <Button onClick={getTests} colorScheme="teal" variant="solid" mb={3}>Run Tests</Button>
        </HStack>
        <Testcase testcases={tests}></Testcase>
    </div>
  )
}

export default CFMode
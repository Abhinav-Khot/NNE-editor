import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
  Box,
  HStack,
  Spacer,
  Text,
  Textarea,
  Code,
} from "@chakra-ui/react";

interface Props {
  testcases: any;
  results : any;
}

const Testcase = ({ testcases, results}: Props) => {
  function checkVerdict(a : string, b : string)
  {
      return a == b ? "Accepted" : "Rejected"; 
  }

  return (
    <Accordion allowMultiple allowToggle>
      {testcases.map((value : any, index : number) => (
        <AccordionItem key={index}>
          <h2>
            <AccordionButton>
              <HStack width="100%">
                <Box flex="1" textAlign="left">
                  <Code colorScheme="blue">
                    {`Testcase ${index + 1}`}
                  </Code>
                </Box>
                <Box>
                  <Code
                      colorScheme={
                        results.length == 0 ? "gray" : checkVerdict(results[index].run.output, testcases[index].output) == "Accepted"
                          ? "green"
                          : "red"
                      }
                    >
                    {results.length > 0 ? checkVerdict(results[index].run.output, testcases[index].output): "Pending"}
                  </Code>
                </Box>
              </HStack>
              <Spacer />
              <AccordionIcon />
            </AccordionButton>
          </h2>
          
          <AccordionPanel pb={4}>
            <Box mb={3}>
              <Text as="b" color="gray.600" mb={2} display="block">
                Input
              </Text>
              <Textarea 
                value={value.input}
                readOnly 
                resize="vertical"
                minHeight="60px"
              />
            </Box>
            
            <Box mb={3}>
              <Text as="b" color="gray.600" mb={2} display="block">
                Expected Output
              </Text>
              <Textarea 
                value={value.output}
                readOnly 
                resize="vertical"
                minHeight="60px"
              />
            </Box>
            
            <Box>
              <Text as="b" color="gray.600" mb={2} display="block">
                Actual Output
              </Text>
              <Textarea 
                value={results.length > 0 ? results[index].run.output : ""} 
                readOnly 
                resize="vertical"
                minHeight="60px"
              />
            </Box>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Testcase;
import axios from "axios";
import LangsJSON from "./SupportedLanguages.json";

const API = axios.create({ baseURL: "https://emkc.org/api/v2/piston" });

async function RunCodeMod(lang: any, code: any, stdin: any, TimeLimit : number, MemoryLimit : number) {
  if (stdin === null) {
    stdin = "";
  } else {
    stdin = String(stdin.value);
  }
  console.log(stdin);
  const res: any = LangsJSON.find((obj) => obj.language == lang);
  const ver = res.version;
  const response = await API.post("/execute", {
    language: lang,
    version: ver,
    files: [
      {
        content: code,
      },
    ],
    stdin: stdin,
    run_timeout : TimeLimit,
    run_memory_limit : MemoryLimit
  });
  return response.data;
}

export default RunCodeMod;

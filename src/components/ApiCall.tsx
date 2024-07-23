import axios from "axios";
import LangsJSON from "./SupportedLanguages.json";

const API = axios.create({ baseURL: "https://emkc.org/api/v2/piston" });

async function RunCode(lang: any, code: any, stdin: any) {
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
  });
  return response.data;
}

export default RunCode;

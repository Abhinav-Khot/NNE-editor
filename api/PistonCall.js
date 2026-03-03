import axios from "axios";

export default async function handler(req, res) {
  const response = await axios.post(
    "https://emkc.org/api/v2/piston/execute",
    req.body,
    {
      headers: {
        Authorization: process.env.SECRET_KEY,
      },
    },
  );
}

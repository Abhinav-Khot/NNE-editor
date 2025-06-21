import axios from "axios";

async function fetchLatestProblem() {
  try {
    const response = await axios.get('http://localhost:10043/');
    if (response.status === 200) {
      console.log('Latest problem:', response.data);
    }
    return response.data;
  } catch (error) {
    console.error('Error fetching the latest problem:', error);
  }
}

export default fetchLatestProblem;
import axios from "axios";

const BASE_URL = "https://semantle.ishefi.com/api/distance?word=";

const guessWord = async (word: string) => {
  const url = encodeURI(decodeURI(`${BASE_URL + word}`));
  const res = await axios.get(url);

  if (res.status !== 200) throw new Error(`${res.status}: ${res.statusText}`);

  if (res.data.length !== 1)
    throw new Error(
      `error: recieved ${res.data.length} guess results instead of 1`
    );

  if (res.data[0].similarity === null) throw new Error("unknown word");

  return res.data[0];
};

export default guessWord;

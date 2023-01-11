import axios from "axios";

export const getSickResult = async (text: string): Promise<[]> => {
  const { data } = await axios.get(`http://localhost:4000/sick?q=${text}`);
  return data;
};

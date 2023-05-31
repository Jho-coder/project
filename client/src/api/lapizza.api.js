import axios from "axios";

export const getListas = async () =>
  await axios.get("http://localhost:4000/lista");

import axios from "axios";
import md5 from "md5";

//EXCLUIR AO ENVIAR O ARQUIVO FINAL
// const publicKey = "";
// const privateKey = "";

const publicKey = "419f9855dd423139318bec1ffa26bdbe";
const privateKey = "13f0af0228cb207747ca2b67e568bcc33c382f19";

const ts = Number(new Date());
const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public/",
  params: {
    ts,
    apikey: publicKey,
    hash,
  },
});

export default api;

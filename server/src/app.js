import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
  res.status(200).send("완료");
});

const PORT = Number(process.env.PORT || 4000);

app.listen(PORT, () => {
  console.log(`API 서버 실행: http://localhost:${PORT}`);
});

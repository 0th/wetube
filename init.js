import "./db";
import app from "./app";
import dotenv from 'dotenv';
dotenv.config();
import './Models/Video';

const PORT = process.env.PORT || 4000;
const handleListening = () => console.log(`listening on : ${PORT}`);

app.listen(PORT, handleListening);


import app from "./app.js";
import { connectDB } from "./db.js";

connectDB();
app.listen(4000)
console.log("ta chido si corre 4000");


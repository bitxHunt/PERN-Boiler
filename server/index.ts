import { config } from "dotenv";
import app from "./src/app.js";
config();
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

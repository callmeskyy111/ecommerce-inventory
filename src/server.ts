import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

async function main() {
  await mongoose.connect(config.MONGODB_URL as string);
  app.listen(config.PORT, () => {
    console.log(`Server listening on PORT: ${config.PORT} ✅`);
  });
}

main()
  .then(() => console.log(`Connected to MongoDB ☑️`))
  .catch((err) => console.log(`🔴ERROR: {err}`));

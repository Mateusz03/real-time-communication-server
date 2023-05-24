import { app } from "./src/app";

const PORT = 2137;

app.listen(PORT, (): void => {
  console.log(`Server Running on http://localhost:${PORT}`);
});

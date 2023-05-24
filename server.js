"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./build/app");
const PORT = 2137;
app_1.app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});

// "type": "module", boawaya lajyaty requer wshya impoert bakar byany

import userRouer from "./src/routes/user.routes.js";

//  am dwana hy app  xoyaty
import express from "express";
const app = express();

app.use(userRouer);

app.listen(5000, () => {
  console.log(`Example app listening at http://localhost:${5000}`);
});

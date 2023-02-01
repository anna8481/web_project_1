const { app } = require("./src/app");

const port = 5000;
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

// mongoose 받아오기
const mongoose = require("mongoose");

mongoose.set("strictQuery", true); // stricQuery 오류를 처리하기 위한 세팅

//mongo db atlas 연결
mongoose
  .connect(
    "mongodb+srv://moTeam:bxOVnhCekl12R3lL@moteam3.pkqnbhq.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("welcome");
  })
  .catch((err) => {
    console.log(err);
  });

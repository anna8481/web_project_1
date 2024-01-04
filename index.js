require('dotenv').config();
const logger = require('./src/utils/logger');
const { app } = require('./src/app');

const PORT = process.env.PORT || 5001;

// mongoose 받아오기
const mongoose = require('mongoose');

mongoose.set('strictQuery', true); // stricQuery 오류를 처리하기 위한 세팅

const DB_URL = process.env.MONGODB_URL || 'address error';

//mongo db atlas 연결

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(DB_URL);
    console.log(`mongoDB connected: + ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    logger.error('failed connection\n' + error);
    process.exit(1);
  }
};

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
  });
});

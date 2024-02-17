import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://mohit4444:mohit4444@ganga.wxg2i.mongodb.net/ganga?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log(`mongo DB connected:${conn.connection.host}`.cyan.underline);
  } catch (err) {
    console.error(err.message.red.underline.bold);
    //exit tghe whole process with failure
    process.exit(1);
  }
};
export default connectDB;

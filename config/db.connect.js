const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const ConnectDB = () => {
  mongoose
    .connect(`mongodb+srv://amanpatel3045:amanpatel3045@cluster0.zrlepsi.mongodb.net/`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`MongoDB connected with server ${data.connection.host}`);
    });
};

module.exports = ConnectDB;

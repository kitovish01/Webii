const mongoose = require("mongoose");
// mongodb+srv://kitovish:728290Vk##@mongo.11gsfk4.mongodb.net/?retryWrites=true&w=majority&appName=mongo
//mongodb+srv://sharma092005:asdf1ghjkl@cluster0.cjshox2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
mongoose
  .connect(
    "mongodb+srv://kitovish:E3kKZT9yRCtra4VQ@mongo.11gsfk4.mongodb.net/?retryWrites=true&w=majority&appName=mongo",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((e) => {
    console.log("MongoDB not connected");
    console.log(e);
  });

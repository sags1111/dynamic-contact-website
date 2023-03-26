const mongoose = require("mongoose");

// create index on mongoose
mongoose.connect("mongodb://127.0.0.1:27017/dynamic", {
    // useCreateIndex: false,
    useNewUrlParser: false,
    useUnifiedTopology: false,
}).then(() => {
    console.log("connectionn done!!");
}).catch((error) => {
    console.log(error);
});
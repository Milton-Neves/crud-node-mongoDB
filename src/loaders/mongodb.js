const mongoose = require("mongoose");

const startDB = async () => {
  await mongoose.connect(
    "mongodb+srv://Milton:Milton0210@cluster0.fedwrth.mongodb.net/test" //como ocultar a senha
  );
};

module.exports = startDB;

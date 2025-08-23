const mongoose = require("mongoose");
const { Schema } = mongoose;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    }
    /* You don't need to enter username and password here because these two fields are automatically implemented by "passport-local-mongoose".
        Hashing and Salting are also implemented automatically for the following plugin.
    */
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
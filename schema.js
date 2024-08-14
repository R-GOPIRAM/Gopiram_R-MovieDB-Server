const userSchema = new mongoose.Schema({
    fullname:String,
    email:String,
    username:String,
    password:String,
    confirmPassword:String

})
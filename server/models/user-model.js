const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    googleId: String,
    email:String,
    photo:String
});

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;








/*
https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A4000%2Fauth%2Fgoogle%2Fredirect&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&client_id=1001879371780-aj1qsmeog20nhr8d719hffcn9n8kia4e.apps.googleusercontent.com
https://accounts.google.com/signin/oauth/oauthchooseaccount?client_id=1001879371780-aj1qsmeog20nhr8d719hffcn9n8kia4e.apps.googleusercontent.com&as=iF1m4BOSd0zQ-Ufj-bvzHg&destination=http%3A%2F%2Flocalhost%3A4000&approval_state=!ChRYZktoTFlycWs1SGR3N0VhbHFLNxIfazBFSzJMazFsSkVWOEhuU1JuY2dubXAtQXI3NTNCWQ%E2%88%99AJDr988AAAAAXacbMgd5Jxb4Nb02wbcwiytQHZTLs60g&oauthgdpr=1&xsrfsig=ChkAeAh8Txk1uHbfBRXSWp97y6W0fkdctVhPEg5hcHByb3ZhbF9zdGF0ZRILZGVzdGluYXRpb24SBXNvYWN1Eg9vYXV0aHJpc2t5c2NvcGU&flowName=GeneralOAuthFlow
http://localhost:4000/auth/google/redirect?code=4/sAGrYUGvxNeWpHSILikpCB2rPrfFSMVxjCkhTgBFNoKyWNIG08LFACJAfYxhjAvRP6T21Yv1ugoO9U52JUeSad8&scope=email%20profile%20https://www.googleapis.com/auth/userinfo.profile%20https://www.googleapis.com/auth/userinfo.email&authuser=0&hd=hyderabad.bits-pilani.ac.in&session_state=4da124f9a72b076a29f24155ec00b73ac6829f7e..86b1&prompt=none
*/
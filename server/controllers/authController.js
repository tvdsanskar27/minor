const User = require('../models/user');

exports.createOrUpdateUser = async (req, res) =>{

  try {
        // const {name, picture, email} = req.user;
        //
        // const user = await User.findOneAndUpdate({email: email}, {name: email.split('@')[0], picture}, {new:true})

        if (req.user) {
          console.log("<<<<<<<<<<User Updated >>>>>>>>>>>>");
          // res.setHeader(user);
          // res.json(user);
          // console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@ auth controller done @@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
          // res.send(user);
          // res.status(200);
          // res.json(user);
          // res.status(200).end();
          // console.log("~~~~~~~~~~~~~~~~~~~~Succesfully completed~~~~~~~~~~~~~~~~~~~~~~~~~~");
        }else {
          const newUser = await User({
             email,
             name: email.split('@')[0],
             picture,
          });
          newUser.save();
          console.log("<<<<<<<User CREATED>>>>>>>>>>", newUser);
          res.json(newUser);
        }
  }catch(err){console.log("!!!!!!!!!!!!Error occured from authcontroller!!!!!!!!!!!!!!!!!!!!!!!!",err)}

};


exports.currentUser = async (req, res) =>{
  console.log("!!!!!!!!!!!!!!!!Succesfully Current user worked");

}


exports.currentAdmin = async (req, res) =>{
  console.log("!!!!!!!!!!!!!!!!Succesfully Current ADMIN worked");
}

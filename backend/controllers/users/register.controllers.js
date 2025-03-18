 const bcrypt = require('bcryptjs');
const UserModel = require('../../models/User');
 

const userRegister = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new UserModel({
    name,
    email,
    password: hashedPassword,   
    role 
});  
    await user.save();
    res.status(201).json({ message: "User Registered" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = userRegister
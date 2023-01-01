import  Jwt  from "jsonwebtoken";
import  bcrypt  from "bcrypt";
import UserModel from '../models/userModel.js';

//Register
export const applicationUser = async (req, res) => {
  try {
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const doc = new UserModel ({
      fullName: req.body.fullName,
      surName: req.body.surName,
      email: req.body.email,
      phone: req.body.phone,
      passwordHash: hash,
      checkbox: req.body.checkbox
    });

    const user = await doc.save();

    const token = Jwt.sign(
      {
        _id: user._id
      },
      'secret123',
      {
        expiresIn: '30d'
      }
    )

    const { passwordHash, ...userData } = user._doc;

    res.json(
      {
        ...userData,
        token,
      }
    );

  } catch(err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось зарегистроваться',
    })
  };
};

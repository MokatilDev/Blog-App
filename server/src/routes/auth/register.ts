import { Router } from "express";
import registerValidation from "../../middlewares/registerValidation";
import crypto from "crypto";
import jdenticon from "jdenticon";
import fs from "fs";
import User from "../../models/users";
import { hashPassword } from "../../utils/password/hashPassword";
import uploadImage from "../../utils/upload/uploadImage";
import errorResponse from "../../utils/response/errorResponse";

const registerRouter = Router();

registerRouter.route("/").post(registerValidation, async (req, res) => {
  try {
    const { email, username, password } = req.body;

    let existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res
        .status(400)
        .send(
          errorResponse(400, "DUPLICATE_EMAIL", "Email address is already exist")
        );
    }

    existingUser = await User.findOne({ username: username });

    if (existingUser) {
      return res
        .status(400)
        .send(
          errorResponse(400, "DUPLICATE_USERNAME", "Username is already exist")
        );
    }

    const hashedPassword = hashPassword(password);

    const newUser = new User({
      email: email,
      username: username,
      password: hashedPassword,
      authProviders: [
        {
          provider: "local",
          providerId: email,
        },
      ],
    });

    await newUser.save();

    const value = crypto.randomBytes(10).toString();
    const avatar = jdenticon.toPng(value, 500, { backColor: "#121212" });
    fs.writeFileSync(`./src/images/avatars/${newUser.id}.png`, avatar);

    const avatarUrl = uploadImage(`./src/images/avatars/${newUser.id}.png`);

    newUser.avatar = (await avatarUrl).url;
    await newUser.save();

    fs.unlink(`./src/images/avatars/${newUser.id}.png`, () => { });

    return res.status(201).send({ message: "Account has been created" });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

export default registerRouter;

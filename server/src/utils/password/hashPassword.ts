import bcrypt from "bcrypt";

const saltRounds = 10;

const hashPassword = (password: string) => {
  const salt = bcrypt.genSaltSync(saltRounds);

  return bcrypt.hashSync(password, salt);
};

export { hashPassword };

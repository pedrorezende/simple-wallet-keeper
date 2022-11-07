import shajs from "sha.js";

export const getHashedPassword = (password: string) =>
  shajs("sha256").update(password).digest("hex");

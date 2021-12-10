import fs from "fs";

export const deleteFile = async (filename: string) => {
  try {
    // verifica se o arquivo existe
    fs.promises.stat(filename);
  } catch {
    return;
  }

  // remove o arquivo
  await fs.promises.unlink(filename);
};

import fs from "fs";
import fsPromices from "fs/promises";
import path from "path";
import { v4 as uuid } from "uuid";
import { format } from "date-fns";

const displayMessage = async (message: string) => {
  const dateTime = `${format(new Date(), "dd/MM/yyyy\thh:mm:ss")}`;
  const uniqueID = uuid();
  const joining = `${dateTime}\t${uniqueID}\t${message}\n`;
  console.log(joining);

  try {
    if (!fs.existsSync(path.join(__dirname, "Welcome"))) {
      await fsPromices.mkdir(path.join(__dirname, "Welcome"));
    }

    await fsPromices.appendFile(
      path.join(__dirname, "Welcome", "welcome.txt"),
      joining
    );
  } catch (error) {
    console.log("An Error Occoured" + error);
  }
};

export default displayMessage;

import { format } from "date-fns";
import { v4 as uuid } from "uuid";
import fsPromise from "fs/promises";
import fs from "fs";
import path from "path";

const welcomeEvent = async (message: string) => {
  const dateTime = `${format(new Date(), "dd/MM/yyyy\thh:mm:ss")}`;
  const uniqueID = `${uuid()}`;
  const welcomeMessage = `${dateTime}\t${uniqueID}\t${message}\n`;
  console.log(welcomeMessage);

  try {
    if (!fs.existsSync(path.join(__dirname, "welcomeFolder"))) {
      await fsPromise.mkdir(path.join(__dirname, "welcomeFolder"));
    }

    await fsPromise.appendFile(
      path.join(__dirname, "welcomeFolder", "welcome.txt"),
      welcomeMessage
    );
  } catch (error) {
    console.log("An Error Occoured:" + error);
  }
};

export default welcomeEvent;

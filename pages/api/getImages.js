const fs = require("fs");
import path from "path";
import getConfig from "next/config";

const serverPath = (staticFilePath) => {
  return path.join(
    getConfig().serverRuntimeConfig.PROJECT_ROOT,
    staticFilePath
  );
};

export default async function (req, res) {
  if (req.method === "GET") {
    let fileList = [];
    console.log(serverPath("public/carousel"));
    await fs.readdir(serverPath("public/carousel"), (err, files) => {
      files.forEach((file) => {
        fileList.push(path.join(serverPath("public/carousel"), file));
        //console.log(path.join(serverPath("public/carousel"), file));
      });
    });
    // console.log(fileList);
    res.json(fileList);
  }
}

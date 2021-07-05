const child_process = require("child_process");

module.exports = function banner() {
  const commit = child_process.execSync("git rev-parse --short HEAD");
  const user = child_process.execSync("git config user.name");
  const date = new Date().toLocaleString();

  return `\n CommitVersion: ${commit} \n Build Date: ${date} \n Author: ${user}`;
};

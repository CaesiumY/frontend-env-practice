import _ from "lodash";

export default function printMe() {
  console.log(_.join(["print", "me"], ' '));
  console.log("process.env:", process.env.NODE_ENV);
}

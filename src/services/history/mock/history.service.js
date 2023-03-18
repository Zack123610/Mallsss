import { mocks } from "./mock";
const historyRequest = (id = "1") => {
    console.log(mocks);
}
// export const historyRequest = (history = "1") => {
//   return new Promise((resolve, reject) => {
//     const mock = mocks[history];
//     if (!mock) {
//       reject("not found");
//     }
//     resolve(mock);
//   });
// };
// historyRequest()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log("error");
//   });

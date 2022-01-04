// const getData = () => {
//   let time = "";

//   fetch(
//     "https://defi.mobiwebsolutionz.com/api/timer/get-time.php?site=luxuryDeer"
//   )
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       time = data.data;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//   console.log(time);
// };
// const getTime = getData();

// console.log(getTime);

// async function getUsers() {
//   let url =
//     "https://defi.mobiwebsolutionz.com/api/timer/get-time.php?site=luxuryDeer";
//   try {
//     let res = await fetch(url);
//     let time = await res.json();
//     return time;
//   } catch (error) {
// //     console.log(error);
// //   }
// // }
// // getUsers();

// // api url
// const url =
//   "https://defi.mobiwebsolutionz.com/api/timer/get-time.php?site=luxuryDeer";

// // Defining async function
// async function getapi(url) {
//   // Storing response
//   const response = await fetch(url);

//   // Storing data in form of JSON
//   var data = await response.json();
//   return data;
// }
// // Calling that async function
// const date = await getapi(api_url);
// console.log(date);

// const url =
//   "https://defi.mobiwebsolutionz.com/api/timer/get-time.php?site=luxuryDeer";
// fetch(url)
//   .then(function (u) {
//     return u.json();
//   })
//   .then(function (json) {
//     jsondata = json;
//   });

// console.log(jsondata);

function updateTimer() {
  // let jsondata;
  // const url =
  //   "https://defi.mobiwebsolutionz.com/api/timer/get-time.php?site=luxuryDeer";
  // fetch(url)
  //   .then(function (u) {
  //     return u.json();
  //   })
  //   .then(function (json) {
  //     jsondata = json;
  //   });
  // console.log(jsondata);

  future = Date.parse("2022-01-24T12:00:00.000Z");
  now = new Date();
  diff = future - now;
  if (diff < 0) {
    document.querySelector(".mint-button").classList.remove("hidden");
    console.log(document.querySelector(".mint-button"));
    document.querySelector(".timer").classList.add("hidden");
  }
  days = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours = Math.floor(diff / (1000 * 60 * 60));
  mins = Math.floor(diff / (1000 * 60));
  secs = Math.floor(diff / 1000);

  d = days;
  h = hours - days * 24;
  m = mins - hours * 60;
  s = secs - mins * 60;

  document.getElementById("timer").innerHTML =
    "<div>" +
    "<p>" +
    d.toString().padStart(2, "0") +
    "</p>" +
    "<span>days</span></div>" +
    "<div>" +
    "<p>" +
    h.toString().padStart(2, "0") +
    "</p>" +
    "<span>hours</span></div>" +
    "<div>" +
    "<p>" +
    m.toString().padStart(2, "0") +
    "</p>" +
    "<span>minutes</span></div>" +
    "<div>" +
    "<p>" +
    s.toString().padStart(2, "0") +
    "</p>" +
    "<span>seconds</span></div>";
}

setInterval("updateTimer()", 1000);

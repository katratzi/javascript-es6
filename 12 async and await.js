const apiUrl = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime";

//   function getTop100Campers() {
//     fetch(apiUrl)
//       .then(r => r.json())
//       .then(json => {
//         console.log(json[0]);
//       })
//       .catch(error => {
//         console.log("failed");
//       });
//   }

// another way of writing above
async function getTop100Campers() {
  // please wait until this fetch completes
  const response = await fetch(apiUrl);
  // please wait until we turn this into json
  const json = await response.json();

  console.log(json[0]);
}

getTop100Campers();

// this is a function that returns a promise
// waits 3 seconds then send info
function resolveAfter3Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("resolved");
    }, 3000);
  });
}

// resolveAfter3Seconds().then((data) => {
//     console.log(data);
// });

async function getAsyncData() {
  const result = await resolveAfter3Seconds();
  console.log(result);
}

getAsyncData();

//Promise.race

var promise1 = new Promise(function(resolve, reject){
  setTimeout(function(){
    return resolve('data-2000');
  }, 2000);
});

var promise2 = new Promise(function(resolve, reject){
  setTimeout(function(){
    return resolve('data-5000');
  }, 5000);
});

/*
var race = function (promises) {
    return new Promise(function (resolve, reject) {
        promises.forEach(function (prom) {
            return prom.then(resolve, reject);
        });
    });
};

*/

var race = promises => 
  new Promise((resolve, reject) => {
    promises.forEach(prom => 
      prom.then(resolve, reject)
    );
  }
);

race([promise1, promise2]).then(function(data){
  console.info(data);
});
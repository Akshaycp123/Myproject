const arr = [1,1,2,2,3,4,4,5];
const extractUnique = arr => {
   const res = [];
   for(let i = 0; i < arr.length; i++){
      if(arr.lastIndexOf(arr[i]) !== arr.indexOf(arr[i])){
         continue;
      };
      res.push(arr[i]);
   };
   return res;
};
console.log(extractUnique(arr));
const student = new Map();

student.set(1, "ali yılmaz");
student.set("İsim", "Ali");
student.set(true, "yılmaz");
student.set(true, "yılmaz");

let sonuc;

sonuc = student.get(true);
sonuc = student.has(1);
sonuc = student.size;
// sonuc = student.entries();

// console.log(sonuc);

// for (let x of student.keys()) {
//   console.log(x);
// }

// for (let x of student.values()) {
//   console.log(x);
// }

// for (let x of student.entries()) {
//   console.log(x);
// }

for(let [key,value] of student.entries()){
    console.log(key,value);
}

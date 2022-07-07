let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum = sum + i;
    console.log(sum);
}
console.log("dışarıda: " + sum);


let sayilar = [1, 2, 4, 7, 3, 9, 122, 335];
let sub = 0;

//Tip1 for döngüsü
for (let i = 0; i < sayilar.length; i++) {
    sub += sayilar[i];
    console.log(sub);
}
console.log("Dışarıda: " + sub);

//Tip2 for döngüsü
for (let i in sayilar) {
    sub += sayilar[i];
    console.log(sub);
}
console.log("Dışarıda: " + sub);

for(sayi of sayilar){
    sub+=sayi;
    console.log(sub);
}
console.log("Dışarıda: " + sub);


//Objelerde for döngüsü
let user = {
    "name":"Yunus",
    "user_name":"yunusadas",
    "pass":"Yu112358",
    "email":"yunusadas@hotmail.com"
};

for(key in user){
    console.log(user[key]);
}
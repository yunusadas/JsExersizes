const sayilar = new Set([1,2,3]); //Arrayden farklı olarak sadece 1 kere tanımlanabiliyor.

sayilar.add("4");  //ekleme metodu

// let dizi = [...sayilar]; //Şeklinde diziye de dönüştürelebilir.

sayilar.delete(1); //Eleman silme!

console.log(sayilar);

console.log(sayilar.has(2)); //Eleman var mı? True-False

console.log(sayilar.values()); //Iterator olarak döner yani for döngüsü kullanımı için muazzam!

for(let x of sayilar){
    console.log(x); 
}
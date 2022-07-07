var isim = "Ahmet";

function yazdir() {
    var isim = "Ayşe";
    var yas = 20;
    console.log("function scope: ", isim, yas);
}

if (true) {
    var isim = "Zeynep";
    console.log(isim);
}

console.log(isim);

yazdir();

// Eğer var ile yapılırsa Global (etki alanı =scope) if ve for gibi döngüleri kapsar bu sebeple altta 
//tanımlanan değişken globalde de öne geçer ve erişilir.
//Fakat fonksiyon için overrride edilmiş olur ve global de buna 
//erişemezsin eğer return edilmemişse.
//let ile yapılırsa herkesin scopu oluşur.
//const = final variable
//ES5
        // function selam (){
        //     console.log("merhaba");
        // }
        var selamlama = function (isim){
            console.log("merhaba "+ isim);
        }
        selamlama("Yunus");

        //ES6
        // const selamlamaES6 = () => console.log("merhaba es6");
        const selamlamaES6 = (isim) => { console.log("merhaba es6 "+isim); }
        selamlamaES6("Yunus");

        //ES5
        let toplamES5 = function(a,b,c){
            var toplam = a+b+c;
            return toplam;
        }
        console.log(toplamES5(1,2,3));

        //ES6
        // let toplamES6 = (a,b) => a+b;
        let toplamES6 = (a,b) => {return a+b};
        var toplamES61 =toplamES6(10,20);
        console.log(toplamES61);
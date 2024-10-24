// Konstruktor funksiyalari
function Kitob(nom, muallif, narx) {
    this.nom = nom
    this.muallif = muallif
    this.narx = narx
}

const ob = new Kitob("1984", "George ", 15)
console.log(ob)

function Avtomobil(nom, rang, narx) {
    this.nom = nom
    this.rang = rang
    this.narx = narx
}

const avtomobil1 = new Avtomobil("Tesla ", "Qora", 80000)
console.log(avtomobil1)

function Talaba(ism, yosh, fakultet) {
    this.ism = ism
    this.yosh = yosh
    this.fakultet = fakultet
}

const talaba1 = new Talaba("Ali", 20, "Informatika")
console.log(talaba1)

function Xodim(ism, ishHaqi, lavozim) {
    this.ism = ism
    this.ishHaqi = ishHaqi
    this.lavozim = lavozim
}
const xodim1 = new Xodim("Dilshod", 3500, "Meneger")
console.log(xodim1)

function Hayvon(nom, turi, ovoz) {
    this.nom = nom;
    this.turi = turi
    this.ovoz = ovoz
}

const hayvon1 = new Hayvon("Mushuk", "Uy hayvoni", "Miyov")
console.log(hayvon1)


// 1. Kitob classi
class Kitob {
    constructor(nom, muallif, narx) {
        this.nom = nom
        this.muallif = muallif
        this.narx = narx
    }

    malumotlar() {
        return `${this.nom} - ${this.muallif} (Narxi: ${this.narx} $)`
    }
}

const kitob1 = new Kitob("1984", "George Orwell", 15)
console.log(kitob1.malumotlar())

// 2. Avtomobil classi
class Avtomobil {
    constructor(nom, rang, narx) {
        this.nom = nom
        this.rang = rang
        this.narx = narx
    }

    malumotlar() {
        return `${this.nom} - Rang: ${this.rang}, Narxi: ${this.narx} $`
    }
}

const avtomobil1 = new Avtomobil("Tesla ", "Qora", 80000)
console.log(avtomobil1.malumotlar())

// 3. Talaba classi
class Talaba {
    constructor(ism, yosh, fakultet) {
        this.ism = ism
        this.yosh = yosh
        this.fakultet = fakultet
    }

    malumotlar() {
        return `${this.ism}, ${this.yosh} yosh, Fakultet: ${this.fakultet}`
    }
}

const talaba1 = new Talaba("Ali", 20, "Informatika")
console.log(talaba1.malumotlar())

// 4. Xodim classi
class Xodim {
    constructor(ism, ishHaqi, lavozim) {
        this.ism = ism
        this.ishHaqi = ishHaqi
        this.lavozim = lavozim
    }

    malumotlar() {
        return `${this.ism}, Ish Haqi: ${this.ishHaqi} $, Lavozim: ${this.lavozim}`
    }
}

const xodim1 = new Xodim("Dilshod", 3500, "Meneger")
console.log(xodim1.malumotlar())

// 5. Hayvon classi
class Hayvon {
    constructor(nom, turi, ovoz) {
        this.nom = nom
        this.turi = turi
        this.ovoz = ovoz
    }

    malumotlar() {
        return `${this.nom} - Turi: ${this.turi}, Ovoz: ${this.ovoz}`
    }
}

const hayvon1 = new Hayvon("Mushuk", "Uy hayvoni", "Miyov");
console.log(hayvon1.malumotlar())

// Classlar


// 1. **O'quvchilarni chiqarish**  
//    **Masala:** Berilgan o'quvchilar massivida har bir o'quvchining ism va yoshini ekranga chiqaruvchi funksiya yozing.  
//    **Ma'lumot:**  
   
//     const oquvchilar = [
//     { ism: "Ali", yosh: 17 },
//     { ism: "O'ktam", yosh: 18 },
//     { ism: "Sardor", yosh: 19 }
// ];

// function studen(oquvchilar) {
//     oquvchilar.forEach(oquvchi => {
//         console.log(`Ismi: ${oquvchi.ism}, Yoshi: ${oquvchi.yosh}`)
//     })
// }

// studen(oquvchilar)



// 2. **Mahsulot narxini oshirish**  
//    **Masala:** Berilgan mahsulotlar massivida har bir mahsulotning narxini 20% ga oshirib yangi massiv yaratuvchi funksiya yozing.  
//    **Ma'lumot:**  
   




// 3. **18 yoshdan katta o'quvchilarni tanlash**  
//    **Masala:** O'quvchilar ro'yxatidagi barcha o'quvchilar 18 yoshdan katta bo'lsa, ularni tanlaydigan funksiya yozing.  
//    **Ma'lumot:**  
   
// const oquvchilar = [
//     { ism: "Dilorom", yosh: 20 },
//     { ism: "Shahrizoda", yosh: 17 },
//     { ism: "Akbar", yosh: 19 }
// ]
// function studen(oquvchilar) {
//     return oquvchilar.filter(oquvchi => oquvchi.yosh > 18)
// }

// console.log(studen(oquvchilar))

// 4. **Kitob mualliflarini formatlash**  
//    **Masala:** Berilgan kitoblar massivida kitoblarning mualliflarini bir xil qilib yozadigan funksiya yarating.  
//    **Ma'lumot:**  
   
// const kitoblar = [
//     { nom: "Kitob A", mualif: "Said Ahmad" },
//     { nom: "Kitob B", mualif: "Zokir Khoshimov" },
//     { nom: "Kitob C", mualif: "Murodjon Abduqodirov" }
// ];

// function book(kitob) {
//     return kitob.map(kitob => {
//         kitob.mualif = kitob.mualif.toLowerCase()
//         return kitob
//     })
// }

//console.log(book(kitob))



// 5. **Ish haqini oshirish**  
//    **Masala:** Berilgan xodimlar massivida har bir xodimning ish haqini 10% ga oshiruvchi funksiya yozing va yangilangan ish haqlarini ekranga chiqaruvchi funksiya yarating.  
//    **Ma'lumot:**  
   
 


// 6. **Ism prefiksini qo'shish**  
//    **Masala:** O'quvchilar ro'yxatida ismlarini "Mr." prefiksi bilan ko'rsatadigan funksiya yozing.  
//    **Ma'lumot:**  
   
//    const oquvchilar = [
//        { ism: "Jasur", yosh: 21 },
//        { ism: "Sardorbek", yosh: 22 },
//        { ism: "Azizbek", yosh: 20 }
//    ];


// 7. **Elektr avtomobillarini tanlash**  
//    **Masala:** Berilgan avtomobillar massividan faqat elektr avtomobillarini tanlaydigan funksiya yozing.  
//    **Ma'lumot:**  
   
// const avtomobillar = [
//     { nom: "Tesla", tur: "elektr" },
//     { nom: "Toyota", tur: "benzin" },
//     { nom: "Nissan Leaf", tur: "elektr" }
// ];

// function elektrFor(avtomobillar) {
//     return avtomobillar.filter(avtomobil => avtomobil.tur === "elektr")
// }

// console.log(elektrFor(avtomobillar))



// 8. **Foydalanuvchi ma'lumotlarini qaytarish**  
//    **Masala:** Berilgan foydalanuvchilar massivida foydalanuvchi ma'lumotlarini (ism, email) qaytaruvchi funksiya yarating.  
//    **Ma'lumot:**  
   
// const foydalanuvchilar = [
//     { ism: "Aziz", email: "aziz@example.com" },
//     { ism: "Nodir", email: "nodir@example.com" },
//     { ism: "Malika", email: "malika@example.com" }
// ]

// function foydalnivchi(foydalanuvchilar) {
//     return foydalanuvchilar.map(foydalanuvchi => ({
//         ism: foydalanuvchi.ism,
//         email: foydalanuvchi.email
//     }))
// }

// console.log(foydalnivchi(foydalanuvchilar))



// 9. **Eng yuqori mahsulotni topish**  
//    **Masala:** Berilgan mahsulotlar massivida narxi eng yuqori bo'lgan mahsulotni topuvchi funksiya yozing.  
//    **Ma'lumot:**  
   
// const mahsulotlar = [
//     { nom: "Televizor", narx: 500 },
//     { nom: "Konditsioner", narx: 700 },
//     { nom: "Butler", narx: 300 }
// ]

// function prize(mahsulotlar) {
//     let res = mahsulotlar[0]
//     for (let i = 1; i < mahsulotlar.length; i++) {
//         if (mahsulotlar[i].narx > res.narx) {
//             engQimmat = mahsulotlar[i]
//         }
//     }
//     return res
// }

// console.log(prize(mahsulotlar))




// 10. **O'quvchi ballarini tenglashtirish**  
//    **Masala:** O'quvchilar ro'yxatida har bir o'quvchining ballarini umumiy qiymatga tenglashtiruvchi funksiya yozing.  
//    **Ma'lumot:**  
// const oquvchilar = [
//     { ism: "Zarina", ball: 85 },
//     { ism: "Doston", ball: 90 },
//     { ism: "Gulbahor", ball: 95 }
// ]

// function balar(oquvchilar, umumiyBall) {
//     return oquvchilar.map(oquvchi => {
//         oquvchi.ball = umumiyBall;  // Har bir o'quvchining ballini umumiy qiymatga tenglashtiramiz
//         return oquvchi;
//     })
// }

// console.log(balar(oquvchilar))

// String metodiga oid masalalar

// 1. **Satrni kichik harflarga o‘girish**  
//    Berilgan satrni kichik harflarga o‘girish va natijani ekranga chiqaruvchi funksiya yozing.


// 2. **Satrning uzunligini hisoblash**  
//    Berilgan satrning uzunligini hisoblaydigan funksiya yozing va natijani ekranga chiqaring.

// function ab(satr) {
//     console.log(satr.length)
// }

// console.log(ab('hello vorld'))

// 3. **Satrning boshlanishi va tugashi**  
//    Berilgan satrning "Hello" bilan boshlanishi va "!" bilan tugashi haqida ma'lumot beruvchi funksiya yozing.


// function helo(satr) {
//     const boshlanishi = satr.start("Hello")
//     const tugashi = satr.finish("!")
//     console.log(`"Hello" ${boshlanishi}, "!" ${tugashi}`)
// }

// console.log(helo("lorem ipsim"))


// 4. **Satrni qisqartirish**  
//    Berilgan satrni 10 ta belgidan iborat qilib qisqartiruvchi funksiya yozing va natijani ekranga chiqaruvchi funksiya yarating.

// function qisqa(satr) {
//     const res = satr.slice(0, 10)
//     console.log(res)
// }

// console.log(qisqa('jhbfhjvhajbslfiuerffbhs jhwebfrw whjebfilw fwilqh'))

// 5. **Satr ichidagi belgilarni almashtirish**  
//    Berilgan satrda "a" harfini "o" harfiga almashtiruvchi funksiya yozing va natijani ekranga chiqaring.

// function almawtrish(satr) {
//     let res = ""
//     for (let i = 0; i < satr.length; i++) {
//         if (satr[i] === "a") {
//             res += "o"
//         } else {
//             res += satr[i]
//         }
//     }
//     console.log(res)
// }

// console.log(almawtrish('sjdfbnjefblalaojnaonhciusa'))


// 6. **Satrning ma'lum bir indeksidagi belgi**  
//    Berilgan satrning 5-indeksidagi belgi haqida ma'lumot beruvchi funksiya yozing.

// function _5index(satr) {
//     const ra = satr[5]
//     console.log(`5 index '${ra}'`)
// }

// console.log(_5index('sknkjrfnew'))


// 7. **Satr ichida qidiruv**  
//    Berilgan satrda "JavaScript" so'zining mavjudligini tekshiruvchi funksiya yozing va natijani ekranga chiqaring.

// function javascript(satr) {
//     const mavjudmi = satr.includes("JavaScript")
//     console.log(`JavaScript bormijkwq ${mavjudmi}`)
// }

// console.log(javascript('fnkdfiew javascript kfleme'))
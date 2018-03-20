(function () {
	return console.log('yürü be oğlum kim tutar seni')
})()


module.exports = {
	method(s) {
		alert(s)
	},

	name(params) {
		alert(params)
	}
}


const sinif = (() => {
	let i = 0
	return {
		get: () => {
			return i
		}, //o anki değeri getir
		set: (deger) => {
			i = deger
		}, //değerini eşitle
		artir: (artim) => {
			i += artim
		} //'artır'
	}
})() //kendini çağırıyor
sinif.set(45)
sinif.artir(5)
console.log(sinif.get())


class trTarih extends Date {
	constructor(tarih) {
		super(tarih)
	}
	getAyliTarih() {
		var aylar = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz',
			'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'
		]
		return `${this.getDate()} ${aylar[this.getMonth()]} ${this.getFullYear()}`
	}
}
let tarih = new trTarih('August 19, 1975 23:15:30').getAyliTarih()
console.log(tarih)


class StaticClass {
	constructor() {
		console.log('staticClass oluştu')
	}
	normalMethod(deger) {
		return deger
	}
	static staticMethod(deger) {
		return deger
	}
}
let sm = new StaticClass()
console.log(sm.normalMethod(10))
console.log(StaticClass.staticMethod(11))


let sayilar = [1, 29, 35, 5, 15, 32]
let enbuyuk = Math.max(...sayilar) //Math.max(sayilar) NaN döndürürü bu yüzden spread yani başına ... yapıyoruz
console.log(enbuyuk)


let nesne = {
	ad: 'Ali',
	soyad: 'Türkücü',
	merhaba: function () {
		console.log(this)
		let n = {
			kim: 'zülküf',
			helper: () => {
				console.log(this)
			}
		}
		n.helper()
	}
}
nesne.merhaba()


var {id} = {yas: 15, soyad: 'altın', id: 'XB23'}
console.log(id)
let {ad:isim, soyad} = {ad: 'ali', yas: 15, soyad: 'altın'}
console.log(isim + ' ' + soyad)
let {address: {street: sokak}} = {name:'Mia', address: {street:'Backer St', no:21244, city:'Donlan'}}
console.log(sokak)


let [a,b]=[1,2,3,4,5]
let [c,...d]=[1,2,3,4,5]
console.log(b + '-' + a + ' ; ' + d + '-' + c)


let sehir='muş', plaka=66, nufus=121212
let il={sehir, plaka, nufus}
console.log(il)

console.log(`İL: ${sehir} 
						Plaka ${plaka}`) // tek tırnak değil quote işareti ALT + ,


function buyut(sabitler,...degiskenler){
	let cikti=''
	sabitler.forEach(s => {
		cikti += s.toUpperCase()
	})
	degiskenler.forEach(d=>{
		cikti += ' '+ d
	})
	return cikti
}
let metin=buyut`kücükyazdım ${sehir} adını`
console.log(metin)


let renk='color'
let top={
	[renk]:'kırmızı'
}
console.log(top)


!(function () {
	return console.log('ilk ben çalışmıyorum malesef')
})()


function ana(){
	let bagla = function () {
		console.log(this.toString())
	}.bind(nesne.soyad)
	bagla()
}
ana()

//PROMISE---------------------------------------------------
let bunuyap=new Promise(function(resolve){
	let sayi=0
	while (sayi<=20) {
		sayi+=1
		console.log('A ' + sayi)
	}
	resolve('A ' + sayi)
})

let bunudayap=new Promise(function(resolve, reject){
	let sayi2=0
	while (sayi2<=10) {
		sayi2+=1
		console.log('B ' + sayi2)
	}
	resolve('B ' + sayi2)
})

bunuyap
	.then(bunudayap)
	.then(()=>{
		Promise
			.all([bunuyap, bunudayap, bunuyap])
			.then((cb)=>{
				console.log('OK ' + cb)
			})
			.catch((err)=>{
				console.log(err)
			})
	})
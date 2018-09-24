# JavaScript Dünyası (@ jscript-world)

Java Script Dünyası'na Girişte Öğrenilmesi Gerekenler (Ben zorluk çektim siz çekmeyin)

## Temel Olarak Bilinmesi Gerekenler

### GitHub

* Temel Git Sistemi
* GitHub Üyelik ve Kullanım Bilgisi
* GitHub Repository, Branch, Commit, Pull, Push, Issue, Request Terimleri vb...
* GitHub Desktop Uygulaması
* .gitatributes, .gitignore dosyası işlevi
* MarkDown yapısındaki dosyalar README.md

### Command Prompt - Terminal - iTerminal

* cmd, terminal
* cd.., dir, ls, mkdir, gibi komutlar
* cd klasör adının bir kısmı ve tab
* Yöetici olarak kullanma

### NPM

* NPM Paket Yöneticisi
* npm install, uninstall, -g, --save, -dev vb... nedir
* package.json dosyası ve dependencies, devDependencies, script, gibi alanlar
* proje içindeki node_modules klasörü ve genel paket klasörü

### Node.js

* Node.js kurulumu
* Çok kullanılan Paketler hakkında temel bilgi
	* Express paketi npm install express -g
	* mongoose paketi npm install mongoose -g
	* body-parser paketi npm install body-parser -g
	* multer paketi npm install multer -g
	* nodemon paketi
	* json-web-token JWT
* Restfull API
* MEAN Stack (Mongo, Express, Angular, Node) - MEVN Stack (Mongo, Express, Vue, Node)

### Ecma Script 2015 - ES6

* Temel Java Script ile Farklar
* Desteklenen Ortamlar (Node.js, Chrome, V8 engine, Safari vb...)
* Node.js deki require module.exports ES6'da import export farkı

### Webpack

*bir NPM paketi olmakla birlikte geniş bir konu*

* Kullanım Mantığı ve Amacı
* webpack.config.json
* loader'lar yani paketlenecek dosyalara özel plugin paketleri
* package.json içinden script ile kullanımı

```json
"script":{
	"build":"webpack --mode development --entry ./src/app.js --output dist/bundle.js",
	"build:prod":"webpack -p"
}
```

### Babel

* Kullanım Mantığı ve amacı
* EcmaScript'den dönüşüm
* TypeScript'den dönüşüm

### Travis CI (Continuous Integration)

* Travis'e GitHub hesabıyla üyelik
* .travis.yml dosyası ve temel konfigürasyon

```yml
language: node_js
node_js:
- "8"
- "9"
before_install:
# yüklemeden önce şimdilik işlem yok
install:
- npm install
- npm install -g codecov
services:
- mongodb
env:
# dışarıdan verilen parametreler
- DEGISKEN="123456"
script:
- istanbul cover ./node_modules/mocha/bin/_mocha --reporter lcovonly -- -R spec
- codecov
- npm start
os: linux
group: stable
dist: trusty
```

* Readme.md dosyasına resimli belirteç koyma

```markdown
[![Build Status](https://travis-ci.org/USER_NAME/REPO.svg?branch=master)](https://travis-ci.org/USER_NAME/REPO)
```

### Visual studio Code (VSCode)

* Extensions yani eklentiler
* Built-in eklentileri
* Gömülü Terminal kullanımı ve komutlar
* ESLint nedir ne işe yarar 'Debugging'
	* ESlint temel ayarları config.json dosyası
	* console.log() neden hatalı görünür
	* eklentiler
	* Kodlama standartları Google, Airbnb vb...
* Chrome DevTools
* Dosya ve Klasörler için icon paketleri, File Icon Theme
* Text Editor için temalar, Color Theme
* ctrl-shift-p içinden komutlar, Command Panel
* Git,Visual Studio Team Servise gibi ortak çalışma alanları, Source Control commit, pull, push, scync, stage

### Vue.js

* Nedir, Nasıl Kullanılır Tercih Sebepleri
* `<template>` tagı kullanımı ve tek sayfada js,css,html - pwa
* Vuex, vue-router, vue-cli, vue-loader, Vue DevTool
* Sunucu tabanlı vue çalıştırma Nuxt, SSR Server Side Rendering
* Örnek uygulama Şablonu

### Electron.js

* Masaüstü Platform bağımsız uygulama geliştrime
* Electron ile yapılan Popüler Uygulamalar VSCode, Npm Desktop, Github desktop, MongoDB Compass, Postman
* Örnek Uygulama Şablonu

### Adonis.js

* Node.js için Web Framework, genelde Express.js yerine kullanılabilecek daha sade yapıda.
* MVC mantığında model view controller gibi çalışmakta

### Mongo DB

* MongoDB kurulumu
* MongoDB Atlas Servisi
* MongoDB Compass Uygulaması
* MongoDB Document Base Veri tabanı mantığı BSON
* MongoDB Stitch nedir Firebase benzerliği Three way Binding


### İşleri Kolaylaştıran Bazı Kütüphaneler

* Axios (Promise tabanlı HTTP istemcisi tarayıcı ve node.js için)
* Lodash veya Underscore (Modüler yapılar, Veri işleme '.NET Linq' benzeri için Araç kütüphaneleri)
* ReactiveX RxJS (Sadece jscript değil diğer dillerdede kullanılabilen Senkron ve Asenkron veri akışlarını sağlayan kontrol eden bir API)

### Bilinmesi gereken bazı Jscript kullanımları

* Promise kullanım amacı çalışma prensibi
* async, await; kullanımı ve mantığı

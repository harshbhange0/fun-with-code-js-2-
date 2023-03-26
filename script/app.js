// ruchika
const webDevOpt = ['../images/webdevelopment/htmlcode.jpg', '../images/webdevelopment/csscode.webp', '../images/webdevelopment/jscode.png', '../images/webdevelopment/reactcode.jpg', '../images/webdevelopment/nodejs.jpg'];
const webDevOptIcon = ['../images/webdevelopment/htmlicon.png/', '../images/webdevelopment/cssicon.png', '../images/webdevelopment/jsicon.png', '../images/webdevelopment/reacticon.png', '../images/webdevelopment/nodejsicon.png'];

// sweta
const  cyberSecurity = ['../images/cyber-security/java.png', '../images/cyber-security/pyhton.jpg', '../images/cyber-security/sql.jpg', '../images/cyber-security/c++.png', '../images/cyber-security/php.jpg',];
const  cyberSecurityIcon = ['../images/cyber-security/javaicone.png', '../images/cyber-security/pythonicone.png', '../images/cyber-security/sql-icone.png', '../images/cyber-security/c++icone.png', '../images/cyber-security/phpicone.png',];

//sanika
const roboticProLang = ['c#-img', 'HardwareDesLang-img', 'lips-img', 'matlab-img'];
const roboticProLangIcon = ['c#-icon', 'HardwareDesLang-icon', 'lips-icon', 'matlab-icon'];

//nikita
const blockchainDev = ['go-img', 'simplicity-img', 'ruby-img', 'Rust-img', 'solidity-img'];
const blockchainDevIcon = ['go-icon', 'simplicity-icon', 'ruby-icon', 'Rust-icon', 'solidity-icon'];
 


function randomImageGenerator(){ 
     let randomNumber= Math.floor(Math.random()*5)
 
   document.getElementById("imgRandomShow").src = `${webDevOpt[randomNumber]}`;
        document.getElementById("iconRandomShow").src = `${webDevOptIcon[randomNumber]}`;
     
         document.getElementById("randomTextLink").innerHTML= `${webDevOptIcon[randomNumber]} `+`<br>`+`${webDevOpt[randomNumber]}`
   
 }
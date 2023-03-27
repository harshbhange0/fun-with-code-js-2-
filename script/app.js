


// ruchika
const webDevOpt = ['../images/webdevelopment/htmlcode.jpg', '../images/webdevelopment/csscode.webp', '../images/webdevelopment/jscode.png', '../images/webdevelopment/reactcode.jpg', '../images/webdevelopment/nodejs.jpg'];
const webDevOptIcon = ['../images/webdevelopment/htmlicon.png', '../images/webdevelopment/cssicon.png', '../images/webdevelopment/jsicon.png', '../images/webdevelopment/reacticon.png', '../images/webdevelopment/nodejsicon.png'];
// sweta
const cyberSecurity = ['../images/cyber-security/java.png', '../images/cyber-security/pyhton.jpg', '../images/cyber-security/sql.jpg', '../images/cyber-security/c++.png', '../images/cyber-security/php.jpg',];
const cyberSecurityIcon = ['../images/cyber-security/javaicone.png', '../images/cyber-security/pythonicone.png', '../images/cyber-security/sql-icone.png', '../images/cyber-security/c++icone.png', '../images/cyber-security/phpicone.png',];
//sanika
const roboticProLang = ['c#-img', 'HardwareDesLang-img', 'lips-img', 'matlab-img'];
const roboticProLangIcon = ['c#-icon', 'HardwareDesLang-icon', 'lips-icon', 'matlab-icon'];
// //nikita
const blockchainDev = ['go-img', 'simplicity-img', 'ruby-img', 'Rust-img', 'solidity-img'];
const blockchainDevIcon = ['go-icon', 'simplicity-icon', 'ruby-icon', 'Rust-icon', 'solidity-icon'];

function randomImageGenerator() { 
  const category = document.getElementById("category").value;
  let randomNumber = Math.floor(Math.random() * 5);
  
  let randomImageUrl;
  if (category === "webDevOpt") {
    randomImageUrl = webDevOpt[randomNumber];
    randomIconUrl = webDevOptIcon[randomNumber];
    
    document.getElementById("randomTextLink").innerHTML = `${webDevOptIcon[randomNumber]} `+`<br>`+`${randomImageUrl}`;
} 

else if (category === "cyberSecurity") {
     randomImageUrl = cyberSecurity[randomNumber];
     randomIconUrl = cyberSecurityIcon[randomNumber];
     
     document.getElementById("randomTextLink").innerHTML = `${cyberSecurityIcon[randomNumber]} `+`<br>`+`${randomImageUrl}`;
} 

else if (category === "roboticProLang") {
     randomImageUrl = roboticProLang[randomNumber];
     randomIconUrl = roboticProLangIcon[randomNumber];

     document.getElementById("randomTextLink").innerHTML = `${roboticProLangIcon[randomNumber]} `+`<br>`+`${randomImageUrl}`;
} 

else if (category === "blockchainDev") {
     randomImageUrl = blockchainDev[randomNumber];
     randomIconUrl = blockchainDevIcon[randomNumber];
     
     document.getElementById("randomTextLink").innerHTML = `${blockchainDevIcon[randomNumber]} `+`<br>`+`${randomImageUrl}`;
}


document.getElementById("imgRandomShow").src = randomImageUrl;
document.getElementById("iconRandomShow").src = randomIconUrl;
}


     
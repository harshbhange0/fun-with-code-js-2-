//ruchika
const webDevOpt = ['https://miro.medium.com/v2/resize:fit:498/1*5gJzummAqpBDGATo0fjU6Q.jpeg',
                     'https://www.bu.edu/lernet/artemis/years/2020/projects/FinalPresentations/HTML/csscode.jpg',
                     'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/JavaScript_code.png/640px-JavaScript_code.png',
                     'https://code.visualstudio.com/assets/docs/nodejs/reactjs/bracket-matching.png',
                     'https://code.visualstudio.com/assets/docs/nodejs/nodejs/moduleintellisense.png'];


const webDevOptIcon = ['https://cdn-icons-png.flaticon.com/128/1051/1051277.png',
                          'https://cdn-icons-png.flaticon.com/128/732/732190.png', 
                          'https://cdn-icons-png.flaticon.com/128/5968/5968292.png', 
                          'https://cdn-icons-png.flaticon.com/128/9440/9440705.png', 
                          'https://img.icons8.com/color/256/nodejs.png'];
// sweta
const cyberSecurity = ['https://www.shutterstock.com/image-illustration/sql-structured-query-language-code-260nw-2162907171.jpg', 
                         'https://st2.depositphotos.com/3198157/11795/i/950/depositphotos_117959086-stock-photo-computer-language-source-code.jpg', 
                         'https://t3.ftcdn.net/jpg/05/08/28/24/360_F_508282415_kPLm9LiHsPSxwURuDI2XlNDNADywGcPK.jpg', 
                         'https://media.geeksforgeeks.org/wp-content/uploads/20200809173814/geeksforgeeksC5.png', 
                         'https://i1.pickpik.com/photos/906/1/293/programming-code-development-web-preview.jpg',];

const cyberSecurityIcon = ['https://img.icons8.com/color/256/java-coffee-cup-logo.png', 
                          'https://img.icons8.com/color/256/python.png', 
                          'https://cdn-icons-png.flaticon.com/512/5968/5968364.png', 
                          'https://cdn-icons-png.flaticon.com/512/6132/6132222.png', 
                          'https://cdn-icons-png.flaticon.com/512/5968/5968332.png'];

//nikita
const blockchainDev = ['https://contentstatic.techgig.com/photo/90458389/Top-Go-programming-interview-questions-to-prepare-for-in-2022.jpg',
                          'https://blockstream.com/img/blog/2018-11-28/simplicity_v2_1920x1080.jpg', 
                          'https://cdn2.vectorstock.com/i/1000x1000/92/76/learning-programming-language-vector-9299276.jpg', 
                          'https://www.pragmaticcoders.com/hubfs/Blockchain-technology.jpg', 
                          'https://cdn.pixabay.com/photo/2020/01/16/12/02/digitization-4770296__340.jpg'];

const blockchainDevIcon = ['https://img.icons8.com/color/256/golang.png',
                          'https://blockstream.com/img/blog/2018-11-28/simplicity_v2_1920x1080.jpg',
                           'https://img.icons8.com/color/256/ruby-programming-language.png', 
                           'https://img.icons8.com/nolan/256/1A6DFF/C822FF/rust-programming-language.png',
                            'https://img.icons8.com/ios/256/solidity.png'];

function randomImageGenerator() { 
  const category = document.getElementById("category").value;
  let randomNumber = Math.floor(Math.random() * 5);
  
  let randomImageUrl;
  if (category === "webDevOpt") {
    randomImageUrl = webDevOpt[randomNumber];
    randomIconUrl = webDevOptIcon[randomNumber];
    
    document.getElementById("randomTextLink1").innerHTML = `${randomImageUrl}`;
    document.getElementById("randomTextLink2").innerHTML = `${webDevOptIcon[randomNumber]} `;
} 

else if (category === "cyberSecurity") {
     randomImageUrl = cyberSecurity[randomNumber];
     randomIconUrl = cyberSecurityIcon[randomNumber];
     
     document.getElementById("randomTextLink1").innerHTML = `${randomImageUrl}`;
     document.getElementById("randomTextLink2").innerHTML = `${webDevOptIcon[randomNumber]} `;
} 

else if (category === "roboticProLang") {
     randomImageUrl = roboticProLang[randomNumber];
     randomIconUrl = roboticProLangIcon[randomNumber];

     document.getElementById("randomTextLink1").innerHTML = `${randomImageUrl}`;
     document.getElementById("randomTextLink2").innerHTML = `${webDevOptIcon[randomNumber]} `;
} 

else if (category === "blockchainDev") {
     randomImageUrl = blockchainDev[randomNumber];
     randomIconUrl = blockchainDevIcon[randomNumber];
     
     document.getElementById("randomTextLink1").innerHTML = `${randomImageUrl}`;
     document.getElementById("randomTextLink2").innerHTML = `${webDevOptIcon[randomNumber]} `;
}


document.getElementById("imgRandomShow").src = randomImageUrl;
document.getElementById("iconRandomShow").src = randomIconUrl;
}
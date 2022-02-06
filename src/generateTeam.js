const fs = require(`fs`); // write file resource (node resource)


function generateTeam(employeeArr) {
  const mParse = employeeArr.filter(function (el) { return el.role === 'Manager'; });
  const eParse = employeeArr.filter(function (el) { return el.role === 'Engineer'; });
  const iParse = employeeArr.filter(function (el) { return el.role === 'Intern'; });


  const empArr = [];

  function mCards(mParse) {
    const mArr = [];
    for (let m = 0; m < mParse.length; m++) {
      const mRole = mParse[m].role;
      const mName = mParse[m].name;
      const mId = mParse[m].id;
      const mEmail = mParse[m].email;
      const mOfficeNumber = mParse[m].officeNumber;
      const mCard = `<div class="cards">
      <div class="chead">
          <p>${mName}</p>
          <p><i class="fas fa-mug-hot"></i> ${mRole}</p>
      </div>
      <div class="cbody">
          <div class="box">ID: ${mId}</div>
          <div class="box">Email: <a href="mailto:${mEmail}">${mEmail}</a></div>
          <div class="box">Office Number: ${mOfficeNumber}</div>
      </div>
      </div>`
      mArr.push(mCard);
    }
    return mArr
  };

  const eCards = (eParse) => {
    const eArr = [];
    for (let e = 0; e < eParse.length; e++) {
      const eRole = eParse[e].role;
      const eName = eParse[e].name;
      const eId = eParse[e].id;
      const eEmail = eParse[e].email
      const eGithub = eParse[e].github
      const eCard = `<div class="cards">
    <div class='chead'>
        <p>${eName}</p>
        <p><i class="fas fa-glasses"></i> ${eRole}</p>
    </div>
    <div class="cbody">
        <div class="box">ID: ${eId}</div>
        <div class="box">Email: <a href="mailto:${eEmail}">${eEmail}</a></div>
        <div class="box">Github: <a href="https://github.com/${eGithub}" target="_blank">${eGithub}</a></div>
    </div>
    </div>`
      eArr.push(eCard)
    }
    return eArr
  };


  const iCards = (iParse) => {
    const iArr = [];
    for (let i = 0; i < iParse.length; i++) {
      const iRole = iParse[i].role;
      const iName = iParse[i].name;
      const iId = iParse[i].id;
      const iEmail = iParse[i].email;
      const iSchool = iParse[i].school;
      const iCard = `<div class="cards">
        <div class="chead">
            <div>${iName}</div>
            <div><i class="fas fa-user-graduate"></i> ${iRole}</div>
        </div>
        <div class="cbody">
            <div class="box">ID: ${iId}</div>
            <div class="box">Email: <a href="mailto:${iEmail}">${iEmail}</a></div>
            <div class="box">School: ${iSchool}</div>
        </div>
        </div>`
      iArr.push(iCard)
    }
    return iArr
  }

  const mArray = mCards(mParse)
  const eArray = eCards(eParse)
  const iArray = iCards(iParse)
  const allArr = [...mArray, ...eArray, ...iArray]


  const writeToFile = () => {
    fs.writeFileSync('./dist/portfolio.html', (`<!DOCTYPE html>
    <html lang="en">
    
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <!-- CSS only -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
    <link rel="stylesheet" href="style.css" />
    </head>

    <body>

    <div class="row">My Team</div>
    <div class="wrapper">
    ${allArr}

    
    </div>
    <script src="https://kit.fontawesome.com/4778b033a0.js" crossorigin="anonymous"></script>
</body>

</html> `))
  }



  const writeCSS = () => {
    fs.writeFileSync('./dist/style.css', (`* {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
    
      /* root variable */
    :root {
      --primary-color: #ffffff;
      --secondary-color: #000000;
      --tertiary-color: #aaaaaa;
      --quatinary-color: rgba(223,218,218,0.7539390756302521);
      --font-family-one: Arial, sans-serif;
      --background-one: radial-gradient(circle, rgba(255,255,255,0) 15%, rgba(223,218,218,.75) 40%,rgba(223,218,218,1) 100%);
      --background-two: radial-gradient(circle, rgba(255,255,255,1) 10%, rgba(223,218,218,1) 90%);
      --background-blue: rgb(17, 94, 196);
      --box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    body {
        color: var(--primary-color);
      }
    
    .row {
      background-color: red;
      border-radius: 8px;
      box-shadow: var(--box-shadow);
      color: var(--primary-color);
      font-family: var(--font-family-one);
      font-size: 2vw;
      font-weight: bold;
      text-align: center;
      padding: 15px;
      margin: 10px;
    }
    
    .wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around; 
    }
    
    .cards {
        margin: 10px;
        border-radius: 8px;
        box-shadow: var(--box-shadow);
        padding: 10px;
        background: var(--background-two);
        color: var(--secondary-color);
        font-family: var(--font-family-one);
        width: 30%;
    }
  
    .cbody {
      font-size: 1.3vw;
      color: var(--secondary-color);
      margin: 10px;
      padding: 10px;
    }
    
    .chead {
      font-size: 1.3vw;
      color: var(--primary-color);
      background-color: var(--background-blue);
      margin: 10px;
      padding: 10px;
      border-radius: 8px;
    }
    
    .box {
      border: 1px solid var(--secondary-color);
      background-color: var(--primary-color);
      box-shadow: var(--box-shadow);
      padding: 10px;
      margin: 10px;
      border-radius: 8px;
    }
    `))
  };

  writeToFile();
  writeCSS();

};




module.exports = generateTeam
let counter1 = 2;
let active = false;
let done = false;

function Socmed() {

  if (done == "false") {
    document.getElementById("Socmed").style.marginRight = '130px';
    done = "true";
    document.getElementById("hamburger").style.transform = 'rotate(90deg)'
  }
  else {

    document.getElementById("Socmed").style.marginRight = '-100px';
    done = "false"
    document.getElementById("hamburger").style.transform = 'rotate(0deg)'
  }
}


function siteA() {
  //2 for center, odd for return
  if (counter1 % 2 == 0 && active == false) {
    active = true;
    document.getElementById("havenA").style.position = 'relative';
    document.getElementById("havenA").style.transform = 'translateX(600px) translateY(100px) scale(2)';
    document.getElementById("havenB").style.zIndex = '0';
    document.getElementById("havenC").style.zIndex = '0';
    document.getElementById("ORB1").style.zIndex = '0';
    document.getElementById("ORB2").style.zIndex = '0';
    document.getElementById("havenA").style.zIndex = '100';

    //blur
    document.getElementById("blur").style.zIndex = '99';

  }

  else {
    document.getElementById("havenA").style.transform = 'none';
    document.getElementById("havenA").style.width = '300px';
    document.getElementById("havenA").style.height = '300px';

    //blur
    document.getElementById("blur").style.zIndex = '-100';
    active = false;

  }

  counter1 = counter1 + 1;

  console.log(counter1);
}

function siteB() {
  //2 for center, odd for return
  if (counter1 % 2 == 0 && active == false) {
    active = true;
    document.getElementById("havenC").style.zIndex = '0';
    document.getElementById("ORB1").style.zIndex = '0';
    document.getElementById("ORB2").style.zIndex = '0';
    document.getElementById("havenB").style.position = 'relative';
    document.getElementById("havenB").style.transform = 'translateX(250px) translateY(100px) scale(2)';
    document.getElementById("havenB").style.zIndex = '100';

    //blur
    document.getElementById("blur").style.zIndex = '99';

  }

  if (counter1 % 2 != 0) {
    active = false;
    document.getElementById("havenB").style.transform = 'none';

    //blur
    document.getElementById("blur").style.zIndex = '-100';

  }
  counter1 = counter1 + 1;
  console.log(counter1);
}

function siteC() {
  //2 for center, odd for return
  if (counter1 % 2 == 0) {

    document.getElementById("ORB1").style.zIndex = '0';
    document.getElementById("ORB2").style.zIndex = '0';
    document.getElementById("havenC").style.position = 'relative';
    document.getElementById("havenC").style.transform = 'translateX(-10px) translateY(100px) scale(2)';
    document.getElementById("havenC").style.zIndex = '100';

    //blur
    document.getElementById("blur").style.zIndex = '99';
  }

  if (counter1 % 2 != 0) {
    document.getElementById("havenC").style.transform = 'none';

    //blur
    document.getElementById("blur").style.zIndex = '-100';
  }
  counter1 = counter1 + 1;
  console.log(counter1);
}

function ORB1() {
  //2 for center, odd for return
  if (counter1 % 2 == 0) {

    document.getElementById("havenA").style.zIndex = '0';
    document.getElementById("havenB").style.zIndex = '0';
    document.getElementById("havenC").style.zIndex = '0';
    document.getElementById("ORB2").style.zIndex = '0';
    document.getElementById("ORB1").style.position = 'relative';
    document.getElementById("ORB1").style.transform = 'translateX(500px) translateY(-250px) scale(2)';
    document.getElementById("ORB1").style.zIndex = '100';

    //blur
    document.getElementById("blur").style.zIndex = '99';
  }

  if (counter1 % 2 != 0) {
    document.getElementById("ORB1").style.transform = 'none';

    //blur
    document.getElementById("blur").style.zIndex = '-100';
  }
  counter1 = counter1 + 1;
  console.log(counter1);
}

function ORB2() {
  //2 for center, odd for return
  if (counter1 % 2 == 0) {


    document.getElementById("havenB").style.zIndex = '0';
    document.getElementById("havenC").style.zIndex = '0';
    document.getElementById("ORB2").style.position = 'relative';
    document.getElementById("ORB2").style.transform = 'translateX(100px) translateY(-250px) scale(2)';
    document.getElementById("ORB2").style.zIndex = '100';

    //blur
    document.getElementById("blur").style.zIndex = '99';
  }

  if (counter1 % 2 != 0) {
    document.getElementById("ORB2").style.transform = 'none';

    //blur
    document.getElementById("blur").style.zIndex = '-100';
  }
  counter1 = counter1 + 1;
  console.log(counter1);
}
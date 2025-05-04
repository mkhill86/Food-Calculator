console.log('hello world');

let personalInfo = {
  name: "Full Name",
  weight: "Weight",
  height: "Height",
};

let storePerInfo = document.getElementsByClassName(personalInfo);

storePerInfo.innerHTML = personalInfo.name;

storePerInfo;
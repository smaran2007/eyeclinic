onEvent("Choose", "click", function( ) {
  if (getChecked("radiokid")) {
    setScreen("KIDSCREEN");
  } else if ((getChecked("radioteens"))) {
    setScreen("teenager");
  } else if ((getChecked("radioold"))) {
    setScreen("Old");
  } else {
    
  }
});
onEvent("dropdown2", "change", function( ) {
  if (getText("dropdown2") == "HOME") {
    setScreen("HOME");
  }
});
onEvent("dropdown3", "change", function( ) {
  if (getText("dropdown3") == "test1") {
    setScreen("test1");
  }
});
onEvent("test1", "click", function( ) {
  if (getChecked("radio1")) {
    setScreen("CongratsPage");
  } else if ((getChecked("radio2"))) {
    setScreen("FailPage");
  } else {
    
  }
});
onEvent("teenager", "change", function( ) {
  if (getText("dropdown4") == "test2") {
    setScreen("test2");
  }
});
onEvent("test2", "change", function( ) {
  if (getChecked("radio3")) {
    setScreen("CongratsPage");
  } else if ((getChecked("radio4"))) {
    setScreen("FailPage");
  } else {
    
  }
});
onEvent("test3", "click", function( ) {
  if (getChecked("radio5")) {
    setScreen("CongratsPage");
  } else if ((getChecked("radio6"))) {
    setScreen("FailPage");
  } else {
    
  }
});
onEvent("dropdownfinal", "change", function( ) {
  if (getText("dropdownfinal") == "test3") {
    setScreen("test3");
  }
});
onEvent("dropdown5", "change", function( ) {
  if (getText("dropdown5") == "HOME") {
    setScreen("HOME");
  }
});
onEvent("dropdown6", "change", function( ) {
  if (getText("dropdown6") == "HOME") {
    setScreen("HOME");
  }
});
onEvent("dropdown1", "change", function( ) {
  if (getText("dropdown1") == "Choose") {
    setScreen("Choose");
  }
});

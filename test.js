(function() {
  //   open(
  //     "file:///C:/Users/farhan.h/Documents/Farhan/React%20Projects/final-nextjs-pwa/login.html",
  //     "/final-nextjs-pwa/login.html",
  //     "Test",
  //     "scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=600,height=600,left=300,top=100"
  //   );
  if (getCookie("Test") != "") {
    console.log("Cookie found", getCookie("Test"));
  } else {
    setCookie("Test", "Hello Test");
  }

  function getCookie(cname, cookieData) {
    console.log("Get Cookie");
    var name = cname + "=";
    var decodedCookie = cookieData
      ? cookieData
      : decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function setCookie(cname, cvalue) {
    console.log("Set Cookie");
    document.cookie = cname + "=" + cvalue + ";path=/";
  }

  function eraseCookie(name) {
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;";
  }
})();

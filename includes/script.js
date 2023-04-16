var moreText = document.getElementById("more");
var readMoreLink = document.getElementsByTagName("a")[0];
moreText.style.display = "none";
readMoreLink.onclick = function() {
  if (moreText.style.display === "none") {
    moreText.style.display = "block";
    readMoreLink.style.display = "none";
  }
};

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  alert("Please open this website on your laptop or desktop");
}

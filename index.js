function openLink(evt, linkName) {
    let i, x, tablinks;
    x = document.getElementsByClassName("tab-content");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
    document.getElementById(linkName).style.display = "block";
    evt.currentTarget.classList.add("active");
  }

  // Auto-open first tab
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementsByClassName("tablink")[0].click();
  });

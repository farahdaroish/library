
  const toggleBtn = document.getElementById("theme-toggle");
  toggleBtn.addEventListener("click", () => {
    document.documentElement.toggleAttribute("data-theme");
    if (!document.documentElement.hasAttribute("data-theme")) {
      document.documentElement.setAttribute("data-theme", "light");
    } else if (document.documentElement.getAttribute("data-theme") === "light") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  });

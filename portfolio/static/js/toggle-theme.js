document.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.getElementById("toggle-theme");
  const html = document.documentElement;
  const current = localStorage.getItem("theme") || "light";

  html.setAttribute("data-bs-theme", current);
  toggleSwitch.checked = (current === "dark");

  toggleSwitch.addEventListener("change", () => {
    const newTheme = toggleSwitch.checked ? "dark" : "light";
    html.setAttribute("data-bs-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
});

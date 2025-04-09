const blogDropdownBtn = document.querySelector("#blog-dropdown-btn");
const blogDropdown = document.querySelector("#blog-dropdown");

blogDropdownBtn.addEventListener("click", () => {
    blogDropdown.classList.toggle("open");
});

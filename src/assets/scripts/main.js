const blogDropdownBtn = document.querySelector("#blog-dropdown-btn");
const blogDropdown = document.querySelector("#blog-dropdown");

blogDropdownBtn.addEventListener("click", () => {
    blogDropdown.classList.toggle("open");
});

document.addEventListener("click", (e) => {
    if(!e.target.matches("#blog-dropdown") && !e.target.matches("#blog-dropdown-btn")) {
        blogDropdown.classList.remove("open");
    }
});
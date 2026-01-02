// Smooth scroll for navigation links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    if (targetId.startsWith("#")) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Simple alert when CTA is clicked (optional UX feedback)
const emailBtn = document.querySelector('a[href^="mailto"]');
if (emailBtn) {
  emailBtn.addEventListener("click", () => {
    console.log("Email button clicked");
  });
}

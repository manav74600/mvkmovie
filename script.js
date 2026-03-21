// Show alert when page loads
window.onload = function () {
    console.log("Movie Review Page Loaded 🎬");
};

// Add simple interaction to rating
const rating = document.querySelector(".details p:last-child");

rating.addEventListener("click", function () {
    alert("You rated this movie ⭐⭐⭐⭐☆");
});

// Add hover effect message on image
const img = document.querySelector(".movie-img");

img.addEventListener("mouseover", function () {
    img.style.opacity = "0.8";
});

img.addEventListener("mouseout", function () {
    img.style.opacity = "1";
});
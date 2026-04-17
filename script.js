// Movie Click -> Details Page
function openDetails(title, img) {
  localStorage.setItem("movieTitle", title);
  localStorage.setItem("movieImg", img);
  window.location.href = "details.html";
}

// Load Details Data
function loadDetails() {
  let title = localStorage.getItem("movieTitle");
  let img = localStorage.getItem("movieImg");

  if (title && img) {
    document.getElementById("movieTitle").innerText = title;
    document.getElementById("movieImg").src = img;
  }
}

// Watch Button
function watchNow() {
  window.location.href = "watch.html";
}

// Fake Login
function loginUser(event) {
  event.preventDefault();
  alert("Login Successful! (Frontend Demo)");
  window.location.href = "index.html";
}

// Fake Signup
function signupUser(event) {
  event.preventDefault();
  alert("Account Created Successfully! (Frontend Demo)");
  window.location.href = "login.html";
}

// Search Feature (Frontend)
function searchMovies() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let name = card.getAttribute("data-name").toLowerCase();
    if (name.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
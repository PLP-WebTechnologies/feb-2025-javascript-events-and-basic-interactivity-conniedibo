// 1. Event Handling
document.getElementById("clickBtn").addEventListener("click", () => {
    alert("Button clicked!");
  });
  
  document.getElementById("hoverBox").addEventListener("mouseover", () => {
    document.getElementById("hoverBox").style.backgroundColor = "#a2d5f2";
  });
  
  document.getElementById("keypressInput").addEventListener("keypress", (e) => {
    console.log("Key pressed:", e.key);
  });
  
  document.getElementById("secretBtn").addEventListener("dblclick", () => {
    alert("🎉 Secret double-click detected!");
  });
  
  // 2. Interactive Elements
  document.getElementById("colorChanger").addEventListener("click", (e) => {
    e.target.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  });
  
  // Image Gallery
  const galleryImg = document.getElementById("galleryImg");
  const galleryImgs = [
    "https://via.placeholder.com/300x200?text=1",
    "https://via.placeholder.com/300x200?text=2",
    "https://via.placeholder.com/300x200?text=3"
  ];
  let currentImg = 0;
  
  document.getElementById("nextImg").addEventListener("click", () => {
    currentImg = (currentImg + 1) % galleryImgs.length;
    galleryImg.src = galleryImgs[currentImg];
  });
  
  // Tabs
  const tabButtons = document.querySelectorAll(".tabBtn");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tabContent").forEach(c => c.classList.add("hidden"));
      document.getElementById("tab" + btn.dataset.tab).classList.remove("hidden");
    });
  });
  
  // 3. Form Validation
  const form = document.getElementById("myForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
  
    let valid = true;
  
    // Name
    if (name.value.trim() === "") {
      document.getElementById("nameError").textContent = "Name is required";
      valid = false;
    } else {
      document.getElementById("nameError").textContent = "";
    }
  
    // Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
      document.getElementById("emailError").textContent = "Invalid email format";
      valid = false;
    } else {
      document.getElementById("emailError").textContent = "";
    }
  
    // Password
    if (password.value.length < 8) {
      document.getElementById("passwordError").textContent = "Password must be at least 8 characters";
      valid = false;
    } else {
      document.getElementById("passwordError").textContent = "";
    }
  
    if (valid) {
      alert("Form submitted successfully!");
    }
  });
  
  // Real-time validation (bonus)
  document.getElementById("password").addEventListener("input", (e) => {
    const val = e.target.value;
    const feedback = document.getElementById("passwordError");
    if (val.length < 8) {
      feedback.textContent = "Still too short...";
    } else {
      feedback.textContent = "Looks good!";
    }
  });
  
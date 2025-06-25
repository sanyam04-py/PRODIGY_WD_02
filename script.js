const aboutData = {
  education: [
    "B.Tech in AI & Data Science - 2024–2028",
    "12th Grade - RBSE Board - 2023",
    "10th Grade - RBSE Board - 2021"
  ],
  skills: [
    "Python, JavaScript, HTML, CSS",
    "Machine Learning, Data Analysis",
    "Web Development (Frontend)",
    "Git & GitHub"
  ],
  achievements: [
    "Built several full-stack web apps",
    "Content creator on YouTube (Backpack Stories by Sam)",
    "Completed multiple machine learning projects",
    "Hackathon participant",
    "Karate Int. Player And National Referee"
  ]
};

const projectData = [
  "Menstrual Cycle Tracker",
  "Stopwatch",
  "Personal Portfolio",
  "Explore more on GitHub: <a href='https://github.com/sanyam04-py' target='_blank'>Visit GitHub</a>"
];

const contactInfo = {
  phone: "9982281385",
  email: "2024btechaidssanyam16808@poornima.edu.in"
};

function showSection(sectionName) {
  const main = document.querySelector("main");
  main.innerHTML = "";

  let sectionContent = document.createElement("section");
  sectionContent.className = "dynamic-section";

  switch (sectionName) {
    case "Home":
      sectionContent.innerHTML = `
        <div class="content">
          <h2>Hey, I'm <span>Sanyam</span></h2>
          <h4>|AI & Data Science Student| |Aspiring ML Engineer|</h4>
          <h4>|Web Developer|</h4>
          <p>Tech enthusiast diving deep into AI, ML, and data-driven solutions. Whether it's analyzing data or building full-stack web apps, I love creating things that make a difference. Also creator on YouTube as Backpack Stories By Sam.</p>
          <div class="btn-group">
            <a href="#" id="hire-me-btn">Hire me</a>
            <a href="#" id="see-projects-btn">See Projects</a>
          </div>
        </div>
      `;
      break;

    case "About":
      sectionContent.innerHTML = `
        <h2>About Me</h2>
        <h3>Education</h3>
        <ul>${aboutData.education.map(item => '<li>${item}</li>').join('')}</ul>
        <h3>Skills</h3>
        <ul>${aboutData.skills.map(item => '<li>${item}</li>').join('')}</ul>
        <h3>Achievements</h3>
        <ul>${aboutData.achievements.map(item => '<li>${item}</li>').join('')}</ul>
      `;
      break;

    case "Portfolio":
      sectionContent.innerHTML = `
        <h2>My Projects</h2>
        <ul>${projectData.map(item => '<li>${item}</li>').join('')}</ul>
      `;
      break;

    case "Blog":
      sectionContent.innerHTML = `
        <h2>Blog</h2>
        <p>Coming soon! I’ll be sharing thoughts on AI, web dev, productivity, and real-world ML project experiences.</p>
      `;
      break;

    case "Content":
      sectionContent.innerHTML = `
        <h2>Content</h2>
        <p>I create content around tech journeys, vlogs, project walk-throughs, and learning resources.</p>
        <p>Check out my YouTube: <a href="https://youtube.com/@backpackstoriesbysam?feature=shared" target="_blank">Backpack Stories By Sam</a></p>
      `;
      break;

    default:
      sectionContent.innerHTML = '<h2>${sectionName}</h2><p>This section is under construction.</p>';
      break;
  }

  main.appendChild(sectionContent);

  // Re-attach dynamic buttons
  if (sectionName === "Home") {
    document.getElementById("hire-me-btn").addEventListener("click", showContact);
    document.getElementById("see-projects-btn").addEventListener("click", () => showSection("Portfolio"));
  }
}

function showContact(e) {
  e.preventDefault();
  const main = document.querySelector("main");
  main.innerHTML = `
    <section class="dynamic-section">
      <h2>Contact Me</h2>
      <p>Phone: ${contactInfo.phone}</p>
      <p>Email: <a href="mailto:${contactInfo.email}">${contactInfo.email}</a></p>
    </section>
  `;
}

// Navbar click handler
document.querySelectorAll(".navigation a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const section = link.textContent.trim();
    showSection(section);
  });
});

// Initial buttons
document.getElementById("hire-me-btn").addEventListener("click", showContact);
document.getElementById("see-projects-btn").addEventListener("click", (e) => {
  e.preventDefault();
  showSection("Portfolio");
});
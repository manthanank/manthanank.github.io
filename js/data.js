fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const {
      fullName,
      shortName,
      about,
      resumeUrl,
      contact: { email, phone },
      title,
      skills,
      socialLinks,
      career,
      education,
      address,
      projects,
    } = data;

    document.getElementsByClassName("full-name")[0].textContent = fullName;
    document.getElementsByClassName("short-name")[0].textContent = shortName;
    document.getElementsByClassName("about")[0].textContent = about;
    document.getElementById("resume").href = resumeUrl;
    document.getElementById("email").textContent = email;
    document.getElementById("email").href = `mailto:${email}`;
    document.getElementById("phone").textContent = phone;
    document.getElementById("phone").href = `tel:${phone}`;
    document.getElementsByClassName("title")[0].textContent = title;
    skills.forEach((skill) => {
      document.querySelector(".skill-bars-fat").innerHTML += `
        <li>
          <div class="progress percent${skill.percentage}"></div>
          <strong>${skill.name}</strong>
        </li>
      `;
    });
    socialLinks.forEach((link) => {
      document.querySelector(".s-hero__content-social").innerHTML += `
        <a href="${link.url}" aria-label="${link.name} link"><i class="fab fa-${link.icon}" aria-hidden="true"></i></a>
      `;
      document.querySelector(".s-footer__social").innerHTML += `
      <li>
        <a href="${link.url}" aria-label="${link.name} link"><i class="fab fa-${link.icon}" aria-hidden="true"></i></a>
      </li>
    `;
    });
    document.getElementById("state").textContent = address.state;
    document.getElementById(
      "address"
    ).textContent = `${address.state}, ${address.country}`;

    career.forEach((job) => {
      // console.log(job);
      document.querySelector(
        ".s-experience__section .column.large-9"
      ).innerHTML += `
        <div class="experience-block">
          <div class="experience-block__header">
            <h4 class="h3">${job.company}</h4>
            <p class="experience-block__header-meta">
              <span>${job.position}</span>
              <span class="experience-block__header-date">
                ${job.startDate} - ${job.endDate}
              </span>
            </p>
          </div>
          <p>
            ${job.description}
          </p>
        </div>
      `;
    });

    education.forEach((edu) => {
      // console.log(edu);
    });

    projects.forEach((project) => {
      // console.log(project);
    });
  })
  .catch((error) => console.error("Error fetching JSON:", error));

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
      document.querySelector(".s-experience").innerHTML += `
      <div class="target-section">
        <div class="row s-experience__section">
          <div class="column large-3 tab-12">
            <h3 class="section-header-allcaps">Education</h3>
          </div>
          <div class="column large-9 tab-12">
            <div class="experience-block">
              <div class="experience-block__header">
                <h4 class="h3">${edu.institution}</h4>
                <p class="experience-block__header-meta">
                  <span>${edu.degree}</span>
                  <span class="experience-block__header-date">
                    ${edu.startYear} - ${edu.endYear}
                  </span>
                </p>
              </div>
              <p>${edu.description}</p>
            </div>
          </div>
        </div>
      </div>
      `;
    });

    projects.forEach((project) => {
      // console.log(project);
    });
    
    document.querySelector("#contact .column.large-12").innerHTML = `
      <h3 class="section-header-allcaps">Contact</h3>
      <div class="row s-contact__content">
        <div class="column large-7 medium-12">
          <h4 class="huge-text">You can contact me through this.👉</h4>
        </div>
        <div class="column large-4 medium-12">
          <div class="row contact-infos">
            <div class="column large-12 medium-6 tab-12">
              <div class="contact-block">
                <h5 class="contact-block__header">Email</h5>
                <p class="contact-block__content">
                  <a class="mailtoui" href="mailto:${email}" aria-label="email to">${email}</a>
                </p>
              </div>
            </div>
            <div class="column large-12 medium-6 tab-12">
              <div class="contact-block">
                <h5 class="contact-block__header">Phone</h5>
                <p class="contact-block__content">
                  <a href="tel:${phone}" aria-label="contact number">${phone}</a>
                </p>
              </div>
            </div>
            <div class="column large-12">
              <a href="mailto:${email}" class="mailtoui btn h-full-width" aria-label="email id">Let's Talk</a>
            </div>
          </div>
        </div>
      </div>
    `;
  })
  .catch((error) => console.error("Error fetching JSON:", error));

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const { resumeUrl, skills, socialLinks, career, education } = data;

    // Set resume link dynamically
    const resumeEl = document.getElementById("resume");
    if (resumeEl && resumeUrl) resumeEl.href = resumeUrl;

    // Render Skills
    function renderSkills(skills) {
      const skillsList = document.querySelector(".skill-bars-fat");
      if (!skillsList) return;
      skillsList.innerHTML = "";
      const fragment = document.createDocumentFragment();
      skills.forEach((skill) => {
        const li = document.createElement("li");
        li.innerHTML = `
          <div class="progress percent${skill.percentage}"></div>
          <strong>${skill.name}</strong>
        `;
        fragment.appendChild(li);
      });
      skillsList.appendChild(fragment);
    }

    // Render Social Links
    function renderSocialLinks(links) {
      const heroSocial = document.querySelector(".s-hero__content-social");
      const footerSocial = document.querySelector(".s-footer__social");
      if (heroSocial) heroSocial.innerHTML = "";
      if (footerSocial) footerSocial.innerHTML = "";
      links.forEach((link) => {
        if (heroSocial) {
          heroSocial.innerHTML += `
            <a href="${link.url}" aria-label="${link.name} link"><i class="fab fa-${link.icon}" aria-hidden="true"></i></a>
          `;
        }
        if (footerSocial) {
          footerSocial.innerHTML += `
            <li>
              <a href="${link.url}" aria-label="${link.name} link"><i class="fab fa-${link.icon}" aria-hidden="true"></i></a>
            </li>
          `;
        }
      });
    }

    // Render Career
    function renderCareer(career) {
      const careerSection = document.querySelectorAll(".s-experience__section .column.large-9")[0];
      if (!careerSection) return;
      careerSection.innerHTML = "";
      career.forEach((job) => {
        careerSection.innerHTML += `
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
    }

    // Render Education (only once, with all entries)
    function renderEducation(education) {
      const experienceSection = document.querySelector(".s-experience");
      if (!experienceSection) return;
      // Remove previous education sections if any
      experienceSection.querySelectorAll('.education-section').forEach(e => e.remove());
      const eduSection = document.createElement('div');
      eduSection.className = 'target-section education-section';
      eduSection.innerHTML = `
        <div class="row s-experience__section">
          <div class="column large-3 tab-12">
            <h3 class="section-header-allcaps">Education</h3>
          </div>
          <div class="column large-9 tab-12" id="edu-list"></div>
        </div>
      `;
      experienceSection.appendChild(eduSection);
      const eduList = eduSection.querySelector('#edu-list');
      education.forEach((edu) => {
        const block = document.createElement('div');
        block.className = 'experience-block';
        block.innerHTML = `
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
        `;
        eduList.appendChild(block);
      });
    }

    renderSkills(skills);
    renderSocialLinks(socialLinks);
    renderCareer(career);
    renderEducation(education);
  })
  .catch((error) => console.error("Error fetching JSON:", error));

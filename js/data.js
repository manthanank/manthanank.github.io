fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const { resumeUrl, skills, socialLinks, career, education } = data;

    document.getElementById("resume").href = resumeUrl;

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
  })
  .catch((error) => console.error("Error fetching JSON:", error));

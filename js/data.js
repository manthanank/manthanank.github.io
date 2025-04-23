fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const { resumeUrl, skills, socialLinks, career, education, projects, testimonials } =
      data;

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
      const careerSection = document.querySelectorAll(
        ".s-experience__section .column.large-9"
      )[0];
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
      experienceSection
        .querySelectorAll(".education-section")
        .forEach((e) => e.remove());
      const eduSection = document.createElement("div");
      eduSection.className = "target-section education-section";
      eduSection.innerHTML = `
        <div class="row s-experience__section">
          <div class="column large-3 tab-12">
            <h3 class="section-header-allcaps">Education</h3>
          </div>
          <div class="column large-9 tab-12" id="edu-list"></div>
        </div>
      `;
      experienceSection.appendChild(eduSection);
      const eduList = eduSection.querySelector("#edu-list");
      education.forEach((edu) => {
        const block = document.createElement("div");
        block.className = "experience-block";
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

    // Render Projects
    function renderProjects(projects) {
      if (!projects || !projects.length) return;

      // Get projects container
      const projectsContainer = document.querySelector(".folio-list");
      if (!projectsContainer) return;

      // Clear existing content
      projectsContainer.innerHTML = "";

      // Create projects list
      projects.forEach((project) => {
        // Create project item
        const projectItem = document.createElement("div");
        projectItem.className = "column folio-item";

        // Create project thumbnail with link to modal
        projectItem.innerHTML = `
          <a href="#modal-${project.id}" class="folio-item__thumb" aria-label="${project.title} project">
            <img src="${project.image}" srcset="${project.image}, ${project.image}" alt="${project.title}" width="100%" height="100%" />
          </a>
        `;

        // Add to container
        projectsContainer.appendChild(projectItem);

        // Create modal for the project
        const modalContainer = document.createElement("div");
        modalContainer.id = `modal-${project.id}`;
        modalContainer.style.display = "none";

        // Create modal content
        let techStackHtml = "";
        if (project.technologies && project.technologies.length) {
          techStackHtml = project.technologies
            .map((tech) => `<li>${tech}</li>`)
            .join("");
        }

        modalContainer.innerHTML = `
          <div class="modal-popup">
            <img src="${project.image}" alt="${project.title}" />
            <div class="modal-popup__desc">
              <h5>${project.title}</h5>
              <p>${project.description}</p>
              <ul class="modal-popup__cat">
                ${techStackHtml}
              </ul>
            </div>
            <a href="${project.link}" class="modal-popup__details" target="_blank" rel="noopener noreferrer">Project link</a>
          </div>
        `;

        // Add modal to the document body instead of the projects section
        document.body.appendChild(modalContainer);
      });

      // Initialize lightbox after adding modals
      initProjectModals();
    }

    // Initialize modals for projects
    function initProjectModals() {
      // Wait for DOM to be fully loaded
      setTimeout(() => {
        const folioLinks = document.querySelectorAll(".folio-item a");
        const modals = [];

        folioLinks.forEach(function (link) {
          let modalbox = link.getAttribute("href");
          let instance = basicLightbox.create(
            document.querySelector(modalbox),
            {
              onShow: function (instance) {
                document.addEventListener("keydown", function (evt) {
                  evt = evt || window.event;
                  if (evt.keyCode === 27) {
                    instance.close();
                  }
                });
              },
            }
          );
          modals.push(instance);
        });

        folioLinks.forEach(function (link, index) {
          link.addEventListener("click", function (e) {
            e.preventDefault();
            modals[index].show();
          });
        });
      }, 300);
    }

    // Render Testimonials
    function renderTestimonials(testimonials) {
      if (!testimonials || !testimonials.length) return;
      
      // Get testimonials container
      const testimonialsWrapper = document.querySelector(".swiper-wrapper");
      if (!testimonialsWrapper) return;
      
      // Clear existing content
      testimonialsWrapper.innerHTML = "";
      
      // Create testimonials slides
      testimonials.forEach((testimonial) => {
        const slide = document.createElement("div");
        slide.className = "testimonial-slider__slide swiper-slide";
        
        slide.innerHTML = `
          <div class="testimonial-slider__author">
            <cite class="testimonial-slider__cite">
              <strong>${testimonial.name}</strong>
              <span>${testimonial.position}</span>
            </cite>
          </div>
          <p>${testimonial.content}</p>
        `;
        
        testimonialsWrapper.appendChild(slide);
      });
      
      // Initialize Swiper after adding slides
      setTimeout(() => {
        if (typeof Swiper !== 'undefined') {
          new Swiper(".testimonial-slider", {
            slidesPerView: 1,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            breakpoints: {
              // when window width is >= 400px
              400: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              // when window width is >= 800px
              800: {
                slidesPerView: 1,
                spaceBetween: 32
              }
            }
          });
        }
      }, 300);
    }

    renderSkills(skills);
    renderSocialLinks(socialLinks);
    renderCareer(career);
    renderEducation(education);
    renderProjects(projects);
    renderTestimonials(testimonials); // Add this line to render testimonials
  })
  .catch((error) => console.error("Error fetching JSON:", error));

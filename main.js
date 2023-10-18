
function toggleModal () {
  const modal = document.querySelector(".navbar-modal");
  modal.classList.toggle("visible");
}

const hamburgerBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".menu-close");
hamburgerBtn.addEventListener("click", toggleModal);
closeBtn.addEventListener("click", toggleModal);

// add active class menu
const menu_links = document.getElementById("menu-links");
const menu_links_items = menu_links.getElementsByClassName("menu-links-item");
for (var i = 0; i < menu_links_items.length; i++) {
  menu_links_items[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// dot mouse
const body = document.querySelector("body");
body.addEventListener("mousemove", (e) => {
  const clientX = e.clientX;
  const clientY = e.clientY;
  const dot = document.querySelector(".dot");
  dot.style.setProperty('--x', clientX + 'px');
  dot.style.setProperty('--y', clientY + 'px');
})

/// Dropdown
const dropdownSearch = document.querySelector(".search-dropdown");
const textBoxSearch = document.querySelector(".textBox");

textBoxSearch.addEventListener("click", () => {
  dropdownSearch.classList.toggle('active');
})

function show(anything) {
  textBoxSearch.value = anything;
}

// render jobs
const jobs = [
  {
    title: "Senior Designer-Mobile Apps Team",
    location: "Bankok",
    employmentType: "Full-time",
    company: "Peopleperhour",
    postedTime: "2 days ago",
    logo: "job_Peopleperhour.svg"
  },
  {
    title: "Senior Designer-Mobile Apps Team",
    location: "Bankok",
    employmentType: "Full-time",
    company: "Upwork",
    postedTime: "2 days ago",
    logo: "job_Upwork.svg"
  },
  {
    title: "Graphic Designer- Illustrations expert",
    location: "Bankok",
    employmentType: "Full-time",
    company: "Guru",
    postedTime: "2 days ago",
    logo: "job_Guru.svg"
  },
  {
    title: "Senior Designer-Mobile Apps Team",
    location: "Bankok",
    employmentType: "Full-time",
    company: "Peopleperhour",
    postedTime: "2 days ago",
    logo: "job_Peopleperhour.svg"
  },
  {
    title: "Senior Designer-Mobile Apps Team",
    location: "Bankok",
    employmentType: "Full-time",
    company: "Upwork",
    postedTime: "2 days ago",
    logo: "job_Upwork.svg"
  },
  {
    title: "Graphic Designer- Illustrations expert",
    location: "Bankok",
    employmentType: "Full-time",
    company: "Guru",
    postedTime: "2 days ago",
    logo: "job_Guru.svg"
  }
]

function createJobItem(data) {
  const jobItem = `
    <div class="job-item box-container">
      <div class="job-item-top">
        <h3>${data.title}</h3>
        <div class="job-item-features">
          <div class="job-item-feature">
            <img src="images/location.svg"/>
            <span>${data.location}</span>
          </div>
          <div class="job-item-feature">
            <img src="images/position_time.svg"/>
            <span>${data.employmentType}</span>
          </div>
        </div>
      </div>
      <hr class="divider-horizontal" >
      <div class="job-item-bottom">
        <img src="images/${data.logo}"/>
        <span>${data.company}</span>
        <span class="job-item-post-time">${data.postedTime}</span>
      </div>
    </div>`;
  return jobItem;
};

const jobList = document.getElementById('job-list');
jobs.forEach(function(job) {
  var jobItem = createJobItem(job);
  jobList.innerHTML += jobItem;
});


// render footer links
const footerLinks = [
  {
    "title": "Community",
    "links": [
      "Job Board",
      "Career Advice",
      "Pricing",
      "Powered"   
    ]
  },
  {
    "title": "About Us",
    "links": [
      "Career",
      "Internship",
      "Press",
      "Blog",
    ]
  },
  {
    "title": "Help & Support",
    "links": [
      "Job Search",
      "Hiring",
      "Online Test"
    ]
  },
  {
    "title": "Feedback",
    "links": [
      "Clients",
      "Reviews",
      "User",
      "Bug Fixing"
    ]
  }
];

function createFooterLinksItem(data) {
  let liItem="";
  data.links.forEach((link) => {
    liItem += `<li><a href="#">${link}</a></li>`;
  });

  const item = `
  <div class="footer-links-col">
    <p>${data.title}</p>
    <ul>
    ${liItem}
    </ul>
  </div>`;
  return item;
};

const footerLinksList = document.getElementById('footer-links-list');
footerLinks.forEach(function(footerLink) {
  var footerLinkItem = createFooterLinksItem(footerLink);
  footerLinksList.innerHTML += footerLinkItem;
});

// render category item
const categories = [
  {
    "name": "UI/UX Designer",
    "vacancy": "100 Job Vacancy",
    "icon": "Orion_page.svg",
    "bgColorIcon": "#0074D9"
  },
  {
    "name": "UI/UX Designer",
    "vacancy": "100 Job Vacancy",
    "icon": "Orion_page.svg",
    "bgColorIcon": "#0074D9"
  },
  {
    "name": "Web Developer",
    "vacancy": "100 Job Vacancy",
    "icon": "Orion_code-window.svg",
    "bgColorIcon": "#0091D0"
  },
  {
    "name": "Video Animator",
    "vacancy": "100 Job Vacancy",
    "icon": "Orion_video-camera.svg",
    "bgColorIcon": "#00B7B4"
  },
  {
    "name": "Graphic Illustrator",
    "vacancy": "100 Job Vacancy",
    "icon": "Orion_megaphone.svg",
    "bgColorIcon": "#1F0A0A"
  },
  {
    "name": "Graphic Illustrator",
    "vacancy": "100 Job Vacancy",
    "icon": "Orion_megaphone.svg",
    "bgColorIcon": "#1F0A0A"
  },
  {
    "name": "Graphic Illustrator",
    "vacancy": "100 Job Vacancy",
    "icon": "Orion_megaphone.svg",
    "bgColorIcon": "#1F0A0A"
  }
]

function createCategoryItem(data) {
  const item = `<div class="category-item">
    <div class="category-item-boxIcon" style="background-color: ${data.bgColorIcon};">
      <img src="images/${data.icon}" />
    </div>
    <h3>
      ${data.name}
    </h3>
    <span>${data.vacancy}</span>
  </div>`;
  return item;
};

const categoryList = document.getElementById('category-list');
categories.forEach(function(category) {
  var categoryItem = createCategoryItem(category);
  categoryList.innerHTML += categoryItem;
});
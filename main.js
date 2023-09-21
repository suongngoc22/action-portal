
function toggleModal () {
  console.log("hhehhe");
  const modal = document.querySelector(".navbar-modal");
  modal.classList.toggle("visible");
}

const hamburgerBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".menu-close");
hamburgerBtn.addEventListener("click", toggleModal);
closeBtn.addEventListener("click", toggleModal);


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
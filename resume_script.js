document.querySelector('.theme-toggle-btn').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if(document.body.classList.contains('dark-mode')){
    localStorage.setItem('theme', 'dark'); 
  } else {
    localStorage.setItem('theme', 'light');
  }

});

if(localStorage.getItem('theme') === 'dark'){
  document.body.classList.add('dark-mode');
}

const collapsibles = document.querySelectorAll('.collapsible');
collapsibles.forEach((item) =>
  item.addEventListener('click', function() {
      this.classList.toggle('active');
      let content = this.nextElementSibling;
      if (content.style.display === "block") {
          content.style.display = "none";
      } else {
          content.style.display = "block";
      }
  })
);

const backToTopButton = document.createElement('button');
backToTopButton.innerText = '↑';
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

document.getElementById('contactMe').addEventListener('click', function() {
  document.getElementById('contactForm').style.display = 'block';
  document.querySelector('.form-backdrop').style.display = 'block';
});

document.getElementById('submitQuestions').addEventListener('click', function() {
  document.getElementById('contactForm').style.display = 'block';
  document.querySelector('.form-backdrop').style.display = 'block';
});

document.querySelector('.cancel-btn').addEventListener('click', function() {
  document.getElementById('contactForm').style.display = 'none';
  document.querySelector('.form-backdrop').style.display = 'none';
});


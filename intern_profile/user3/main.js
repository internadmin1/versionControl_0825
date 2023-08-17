const home_about = document.getElementById('home_about');
const home_portfolio = document.getElementById('home_portfolio');
const home_contact = document.getElementById('home_contact');
const owl = document.getElementById('owl');

home_about.addEventListener('mouseover', () => {
  home_about.animate(
    [
      { transform: 'rotate(0deg)' }, 
      { transform: 'rotate(360deg)' } 
    ], 
    {
      fill: 'backwards', 
      duration: 1000, 
    },
  );
});

home_portfolio.addEventListener('mouseover', () => {
  home_portfolio.animate(
    [
      { transform: 'rotate(0deg)' }, 
      { transform: 'rotate(360deg)' } 
    ], 
    {
      fill: 'backwards', 
      duration: 1000, 
    },
  );
});

home_contact.addEventListener('mouseover', () => {
  home_contact.animate(
    [
      { transform: 'rotate(0deg)' }, 
      { transform: 'rotate(360deg)' } 
    ], 
    {
      fill: 'backwards', 
      duration: 1000, 
    },
  );
});

owl.addEventListener('mouseover', () => {
  owl.animate(
    [
      { transform: 'rotate(0deg)' }, 
      { transform: 'rotate(360deg)' } 
    ], 
    {
      fill: 'backwards', 
      duration: 1000, 
    },
  );
});

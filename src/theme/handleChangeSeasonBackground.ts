const lightColours = ['#93d5eb', '#add63a', '#c5d63a', '#febe42', 'transparent'];
const mediumColours = ['#66bbd8', '#92c938', '#acc52b', '#ff9d25', 'transparent'];
const darkColours = ['#4da2bb', '#2a9d5c', '#89a503', '#ff6b2f', 'transparent'];
const backgroundColours = ['#cbe9f4', '#daf8ff', '#feec98', '#ffdc8a'];
const bushColours = ['#ffffff', '#3ebf6d', '#99b31a', '#fd6d2e', '#93ccb8'];
const cloudColours = ['#ffffff', '#ffffff', '#ffffff', '#eaf9fe', '#ffffff'];
const seasons = ['winter', 'spring', 'summer', 'autumn', 'default'];

const handleChangeSeasonBackground = (season: string = 'default') => {
  const html = document.getElementsByTagName('html')[0];
  /* const sun = document.querySelector('.sun'); */
  const background = document.getElementById('seasonsBg');
  const rainbow = document.querySelector('.rainbow');
  const rabbit = document.querySelector('.rabbit');
  const snow = document.querySelectorAll('.snow');
  const rain = document.querySelectorAll('.rain');
  const flowers = document.querySelectorAll('.flower');

  const index = seasons.indexOf(season);
  html.style.setProperty('--bgd-color', backgroundColours[index]);
  html.style.setProperty('--light', lightColours[index]);
  html.style.setProperty('--medium', mediumColours[index]);
  html.style.setProperty('--dark', darkColours[index]);
  html.style.setProperty('--bush', bushColours[index]);
  html.style.setProperty('--cloud', cloudColours[index]);

  if (season === 'winter') {
    background?.classList.remove('invisible');
    rabbit?.classList.add('animated');
    snow.forEach((sn: any) => {
      sn.style.display = 'block';
    });
  } else {
    snow.forEach((sn: any) => {
      sn.style.display = 'none';
    });
  }

  if (season === 'spring') {
    background?.classList.remove('invisible');
    rainbow?.classList.add('animated');
    rabbit?.classList.remove('animated');
    /* html.style.setProperty('--rabbit', '#9E6255'); */
    flowers.forEach((flower: any) => {
      flower.classList.add('animated');
    });
  } else {
    rainbow?.classList.remove('animated');
    flowers.forEach((flower: any) => {
      flower.classList.remove('animated');
    });
  }

  if (season === 'summer') {
    background?.classList.remove('invisible');
    rabbit?.classList.add('animated');
    html.style.setProperty('--sun', '#ffb53a');
    html.style.setProperty('--rabbit', '#9E6255');
  } else {
    html.style.setProperty('--sun', 'transparent');
    html.style.setProperty('--rabbit', '#ffffff');
  }

  if (season === 'autumn') {
    background?.classList.remove('invisible');
    rabbit?.classList.remove('animated');
    rain.forEach((g: any) => {
      g.style.display = 'block';
    });
  } else {
    rain.forEach((g: any) => {
      g.style.display = 'none';
    });
  }

  if (season === 'default') {
    rabbit?.classList.remove('animated');
  }
};

export default handleChangeSeasonBackground;

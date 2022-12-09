const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('.gallery');

const listItemes = images.map(({ url, alt }) => {
  return `<li><img class="js-img" src="${url}" alt="${alt}" width="350" height="200"></li>`;
});

galleryRef.insertAdjacentHTML("afterbegin", listItemes);
galleryRef.style.listStyleType = 'none';
galleryRef.style.display = 'flex';

const imageRef = document.querySelectorAll('.js-img');
imageRef.forEach((image) => {
  image.style.margin = '20px';
});












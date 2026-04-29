// src/data/socials.js
import { 
  FaInstagram, 
  FaYoutube, 
  FaSpotify, 
  FaApple, 
  FaBandcamp 
} from 'react-icons/fa';

export const socialData = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/the_phantom_eye/',
    Icon: FaInstagram,
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/playlist?list=PLb8aGAqQkw-sH-GGjzxkcjc0hNgZPs0Ke',
    Icon: FaYoutube,
  },
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/artist/1574021580', // Updated to a standard artist link
    Icon: FaSpotify,
  },
  {
    name: 'Apple Music',
    url: 'https://music.apple.com/us/artist/the-phantom-eye/1574021580',
    Icon: FaApple,
  },
  {
    name: 'Bandcamp',
    url: 'https://phantomeye.bandcamp.com/',
    Icon: FaBandcamp,
  },
];
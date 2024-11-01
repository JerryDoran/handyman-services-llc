import bathroomImage from '@/assets/images/image37.jpg';
import kitchenImage from '@/assets/images/image36.jpg';
import porchImage from '@/assets/images/image22.jpg';
import carpentry from '@/assets/images/carpentry.jpg';
import drywallImage from '@/assets/images/image16.jpg';
import doorImage from '@/assets/images/image40.jpg';
import plumbing from '@/assets/images/plumbing.jpeg';
import electrical from '@/assets/images/electrical.jpeg';
import basement from '@/assets/images/basement.jpg';
import landscape from '@/assets/images/landscape.jpg';
import handymanServices from '@/assets/images/image21.jpg';
import basementThumb from '@/assets/icons/basement.png';
import carpentryThumb from '@/assets/icons/carpentry.png';
import deckingThumb from '@/assets/icons/decking.png';
import doorsThumb from '@/assets/icons/doors.png';
import electricalThumb from '@/assets/icons/electrical.png';
import handymanThumb from '@/assets/icons/handyman.png';
import kitchenThumb from '@/assets/icons/kitchen.png';
import paintingThumb from '@/assets/icons/painting.png';
import plumbingThumb from '@/assets/icons/plumbing.png';
import shovelThumb from '@/assets/icons/shovel.svg';

export const services = [
  {
    id: 1,
    title: 'Kitchen Remodeling',
    image: kitchenImage,
    thumb: kitchenThumb,
  },
  {
    id: 2,
    title: 'Bathroom Remodeling',
    image: bathroomImage,
    thumb: kitchenThumb,
  },
  { id: 3, title: 'Porches and Decks', image: porchImage, thumb: deckingThumb },
  { id: 4, title: 'Carpentry', image: carpentry, thumb: carpentryThumb },
  {
    id: 5,
    title: 'Painting and Drywall',
    image: drywallImage,
    thumb: paintingThumb,
  },
  { id: 6, title: 'Windows and Doors', image: doorImage, thumb: doorsThumb },
  { id: 7, title: 'Plumbing', image: plumbing, thumb: plumbingThumb },
  { id: 8, title: 'Electrical', image: electrical, thumb: electricalThumb },
  {
    id: 9,
    title: 'Handyman Services',
    image: handymanServices,
    thumb: handymanThumb,
  },
  {
    id: 10,
    title: 'Landscaping Design',
    image: landscape,
    thumb: shovelThumb,
  },
  {
    id: 11,
    title: 'Basements',
    image: basement,
    thumb: basementThumb,
  },
];

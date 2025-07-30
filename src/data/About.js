import { Users, Target, Award, Clock } from 'lucide-react';

const stats = [
    { number: '1000+', label: 'Happy Customers', icon: Users },
    { number: '50+', label: 'Burger Varieties', icon: Target },
    { number: '8+', label: 'Years Serving', icon: Award },
    { number: '30min', label: 'Average Delivery', icon: Clock }
  ];

export { stats };

const values = [
    {
      icon: Target,
      title: 'Quality First',
      description: 'We use only the freshest ingredients and premium beef to craft burgers that exceed your expectations every single time.'
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'We\'re proud to be part of this community, supporting local suppliers and creating jobs for our neighbors.'
    },
    {
      icon: Award,
      title: 'Burger Excellence',
      description: 'From our signature sauces to our perfectly toasted buns, every detail is crafted to create the ultimate burger experience.'
    }
];

export { values }
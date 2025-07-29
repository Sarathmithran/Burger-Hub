import React from 'react';
import { Users, Target, Award, Clock, ChevronRight } from 'lucide-react';
import heroImg from '../../assets/img/cheeseburger.webp';

const About = () => {
  const stats = [
    { number: '1000+', label: 'Happy Customers', icon: Users },
    { number: '50+', label: 'Burger Varieties', icon: Target },
    { number: '8+', label: 'Years Serving', icon: Award },
    { number: '30min', label: 'Average Delivery', icon: Clock }
  ];

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

  return (
    <div className="min-h-screen bg-white pt-15">
      {/* Hero Section */}
      <section className="hero min-h-[50vh] lg:min-h-[70vh] relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImg})`,
            filter: 'brightness(0.7)',
          }}
        ></div>
        <div className="hero-overlay bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 bg-opacity-85"></div>
        <div className="hero-content text-center z-10 px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              About Our Burger Shop
            </h1>
            <p className="text-base sm:text-lg lg:text-xl opacity-90 leading-relaxed max-w-3xl mx-auto mb-6 lg:mb-8">
              We're passionate burger artisans dedicated to crafting exceptional burgers 
              that bring joy to every bite and create unforgettable dining experiences.
            </p>
            <button className="btn btn-lg bg-white text-orange-500 hover:bg-gray-100 border-none shadow-lg transform hover:scale-105 transition-all duration-300">
              Our Story <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-orange-50 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-orange-100 transition-all duration-300 transform group-hover:scale-110">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">Our Story</h2>
              <div className="space-y-4 sm:space-y-6 text-gray-600 text-sm sm:text-base lg:text-lg">
                <p>
                  Founded in 2016, our burger shop started with a simple dream: to create the 
                  perfect burger using fresh, locally-sourced ingredients. What began as a small 
                  family business has grown into the neighborhood's favorite burger destination.
                </p>
                <p>
                  Today, we're proud to serve handcrafted burgers that combine traditional techniques 
                  with innovative flavors. Every patty is made fresh daily, every bun is toasted to 
                  perfection, and every bite delivers the quality our customers have come to love.
                </p>
                <p>
                  We believe great food brings people together. Whether it's a quick lunch, family 
                  dinner, or late-night craving, we're here to satisfy your hunger with burgers 
                  that are made with love and served with a smile.
                </p>
              </div>
              <div className="mt-6 lg:mt-8">
                <button className="btn btn-outline border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                  View Our Menu
                </button>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <img 
                src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&h=600&fit=crop" 
                alt="Fresh burger preparation" 
                className="rounded-2xl shadow-2xl w-full h-64 sm:h-80 lg:h-96 object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-orange-500 text-white p-4 sm:p-6 rounded-xl shadow-lg">
                <div className="text-xl sm:text-2xl font-bold">2016</div>
                <div className="text-xs sm:text-sm opacity-90">Est.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-r from-gray-50 to-gray-100 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-gray-800">What We Stand For</h2>
            <p className="text-base sm:text-lg lg:text-xl opacity-90 max-w-2xl mx-auto text-gray-700">The values that make every burger special</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-4 sm:p-6 shadow-lg rounded-xl bg-white bg-opacity-5 backdrop-blur-sm hover:bg-opacity-10 transition-all duration-300">
                <div className="bg-orange-500 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <value.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-700">{value.title}</h3>
                <p className="opacity-80 text-sm sm:text-base leading-relaxed text-gray-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }
        
        @media (max-width: 640px) {
          .hero-content {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
        }
      `}</style>
    </div>
  );
}

export default About;
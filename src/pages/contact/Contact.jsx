import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, MessageSquareMore  } from 'lucide-react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      info: '+1 (555) 287-4371',
      detail: 'Daily 10AM-11PM'
    },
    {
      icon: Mail,
      title: 'Email Us',
      info: 'hello@burgerhub.com',
      detail: 'We reply within 2 hours'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: '456 Burger Street, Food City',
      detail: 'Dine-in & takeout available'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-18">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-400 to-orange-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-4 w-fit mx-auto mb-6">
            <MessageSquareMore className="w-12 h-12 text-gray-800" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Questions about our burgers? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 rounded-full p-3 mr-4">
                  <Send className="w-6 h-6 text-orange-500" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Send us a Message</h2>
              </div>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thanks for reaching out! We'll get back to you soon.</p>
                </div>
              ) : (
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Name *</label>
                      <input 
                        type="text" 
                        name="name"
                        placeholder="Your name" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-700 bg-white" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Email *</label>
                      <input 
                        type="email" 
                        name="email"
                        placeholder="your@email.com" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-700 bg-white" 
                        required 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Subject *</label>
                    <select 
                      name="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-700 bg-white"
                      required
                    >
                      <option value="">Choose a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="catering">Catering Services</option>
                      <option value="feedback">Feedback</option>
                      <option value="complaint">Complaint</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Message *</label>
                    <textarea 
                      name="message"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent h-32 resize-none text-gray-700 bg-white" 
                      placeholder="Tell us what's on your mind..."
                      required
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="cursor-pointer w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
                  >
                    Send Message <Send className="ml-2 w-5 h-5" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  Ready to satisfy your burger cravings? Here's how to reach us!
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg">
                    <div className="bg-orange-100 rounded-full p-3">
                      <info.icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">{info.title}</h3>
                      <p className="text-gray-700">{info.info}</p>
                      <p className="text-gray-500 text-sm">{info.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Action Buttons */}
              <div className="space-y-3">
                <button className="cursor-pointer w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now to Order
                </button>
                <button className="cursor-pointer w-full border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Got questions? We've got answers! Here are the most common questions we receive.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {[
              {
                question: 'What are your operating hours?',
                answer: 'We\'re open daily from 10:00 AM to 11:00 PM. Kitchen closes at 10:30 PM for dine-in customers.'
              },
              {
                question: 'Do you offer delivery?',
                answer: 'Yes! We deliver within a 5-mile radius. You can order through our website.'
              },
              {
                question: 'Can I make reservations?',
                answer: 'We operate on a first-come, first-served basis, but you can call ahead for large groups (8+ people) and we\'ll do our best to accommodate you.'
              },
              {
                question: 'Do you have vegetarian options?',
                answer: 'Absolutely! We offer delicious plant-based patties, veggie burgers, and plenty of vegetarian sides and salads.'
              },
              {
                question: 'Can I customize my burger?',
                answer: 'Of course! We love customization. You can add or remove any toppings, change the patty type, or create your own unique burger combination.'
              }
            ].map((faq, index) => (
              <div key={index} className="collapse collapse-plus bg-white mb-3 sm:mb-4 shadow-md hover:shadow-lg transition-shadow">
                <input type="radio" name="faq-accordion" defaultChecked={index === 0} />
                <div className="collapse-title text-gray-700 sm:text-lg lg:text-xl font-medium px-4 sm:px-6 py-3 sm:py-4">
                  {faq.question}
                </div>
                <div className="collapse-content px-4 sm:px-6">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 lg:mt-12">
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              Still have questions? We're always happy to help!
            </p>
            <button className="btn btn-outline border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
              Call Us Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
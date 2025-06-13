
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Enrollment = () => {
  const [formData, setFormData] = useState({
    childName: '',
    childAge: '',
    parentName: '',
    email: '',
    phone: '',
    course: '',
    experience: '',
    message: ''
  });

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach(section => observer.observe(section));

    const header = document.querySelector('.header');
    const handleScroll = () => {
      if (window.scrollY > 100) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      sections.forEach(section => observer.unobserve(section));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for enrolling! We will contact you soon.');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="header fixed top-0 left-0 w-full bg-transparent transition-all duration-300 z-50">
        <nav className="navbar max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="logo flex items-center text-xl font-bold text-primary">
            <i className="fas fa-robot mr-2 text-2xl"></i>
            <span>NextGenAISchool</span>
          </div>
          <ul className="nav-links flex gap-8">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/about" className="nav-link">About</Link></li>
            <li><Link to="/courses" className="nav-link">Courses</Link></li>
            <li><Link to="/team" className="nav-link">Team</Link></li>
            <li><Link to="/blog" className="nav-link">Blog</Link></li>
            <li><Link to="/enrollment" className="active nav-link">Enroll Now</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero min-h-screen flex items-center px-8 pt-32 pb-16 bg-gradient-to-br from-emerald-50 to-blue-50 relative overflow-hidden animate-on-scroll">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold leading-tight mb-6">
            <span className="gradient-text bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">Enroll Today</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Start your child's journey into the exciting world of AI and coding. Join our community of young innovators and prepare them for the future.
          </p>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="py-24 bg-white animate-on-scroll">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Complete Your Enrollment</h2>
            <p className="text-xl text-gray-600">Fill out the form below. Admission is open to anyone aged 8 and above—there is no upper age limit!</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label htmlFor="childName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Child's Name *
                    </label>
                    <input
                      type="text"
                      id="childName"
                      name="childName"
                      value={formData.childName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                      placeholder="Enter child's full name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="childAge" className="block text-sm font-semibold text-gray-700 mb-2">
                      Child's Age *
                    </label>
                    <select
                      id="childAge"
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                    >
                      <option value="">Select age</option>
                      {Array.from({length: 92}, (_, i) => i + 8).map(age => (
                        <option key={age} value={age}>{age} years old</option>
                      ))}
                      <option value="99+">99+ years old</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label htmlFor="parentName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Parent/Guardian Name *
                    </label>
                    <input
                      type="text"
                      id="parentName"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="course" className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Course *
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                  >
                    <option value="">Select a course</option>
                    <option value="ai-basics">AI Basics for Beginners (Ages 8+)</option>
                    <option value="python-adventures">Python Coding Adventures (Ages 8+)</option>
                    <option value="chatbot-building">Build Your Own Chatbot (Ages 8+)</option>
                    <option value="ai-game-dev">AI Game Development (Ages 8+)</option>
                    <option value="creative-ai">Creative AI & Art (Ages 8+)</option>
                    <option value="data-science">Data Science for Kids (Ages 8+)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-2">
                    Child's Programming Experience
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                  >
                    <option value="">Select experience level</option>
                    <option value="none">No experience</option>
                    <option value="beginner">Some experience with visual programming (Scratch, etc.)</option>
                    <option value="intermediate">Some text-based programming experience</option>
                    <option value="advanced">Advanced programming knowledge</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Questions or Comments
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                    placeholder="Tell us about your child's interests, goals, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Complete Enrollment
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* What to Expect */}
              <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4">What to Expect</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></span>
                    <span className="text-sm text-gray-700">Confirmation call within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></span>
                    <span className="text-sm text-gray-700">Free trial class scheduled</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></span>
                    <span className="text-sm text-gray-700">Welcome packet with course materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></span>
                    <span className="text-sm text-gray-700">Access to parent dashboard</span>
                  </li>
                </ul>
              </div>

              {/* Pricing */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold mb-4">Course Pricing</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Beginner Courses</span>
                    <span className="font-semibold">$199 - $249</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Intermediate Courses</span>
                    <span className="font-semibold">$279 - $299</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Advanced Courses</span>
                    <span className="font-semibold">$329 - $349</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Includes:</span>
                    </div>
                    <ul className="mt-2 space-y-1">
                      <li className="text-sm text-gray-600">• Live instruction</li>
                      <li className="text-sm text-gray-600">• Course materials</li>
                      <li className="text-sm text-gray-600">• Certificate completion</li>
                      <li className="text-sm text-gray-600">• Ongoing support</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-gray-900 text-white rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Have questions about enrollment? Our team is here to help!
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <i className="fas fa-phone text-emerald-400"></i>
                    <span className="text-sm">(555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="fas fa-envelope text-emerald-400"></i>
                    <span className="text-sm">hello@nextgenaischool.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="fas fa-clock text-emerald-400"></i>
                    <span className="text-sm">Mon-Fri 9AM-6PM PST</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50 animate-on-scroll">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Parents Say</h2>
            <p className="text-xl text-gray-600">Hear from families in our community</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "The enrollment process was so smooth and the team was incredibly helpful in choosing the right course for my daughter.",
                author: "Jennifer Martinez",
                role: "Parent of Sofia, Age 10"
              },
              {
                quote: "From the first call to the first class, everything exceeded our expectations. My son is now obsessed with coding!",
                author: "Robert Chen",
                role: "Parent of Kevin, Age 12"
              },
              {
                quote: "The personalized attention during enrollment helped us feel confident this was the right choice for our child.",
                author: "Amanda Williams",
                role: "Parent of Emma, Age 9"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-yellow-500 mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <span className="text-sm text-gray-500">{testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="footer-col">
              <div className="footer-logo-row flex items-center gap-3 mb-4">
                <span className="footer-logo-icon w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">AI</span>
                <span className="footer-logo-text font-bold text-lg">Next-Gen AI School</span>
              </div>
              <div className="footer-desc text-gray-400 max-w-xs">
                Empowering the next generation with AI and coding skills through engaging, interactive learning experiences.
              </div>
            </div>
            
            <div className="footer-col">
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300">Home</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300">About</Link></li>
                <li><Link to="/courses" className="text-gray-400 hover:text-white transition-colors duration-300">Courses</Link></li>
                <li><Link to="/team" className="text-gray-400 hover:text-white transition-colors duration-300">Team</Link></li>
                <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors duration-300">Blog</Link></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4 className="font-semibold mb-4">Popular Courses</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">AI Basics for Beginners</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Python Coding Adventures</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Build Your Own Chatbot</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4 className="font-semibold mb-4">Contact & Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hello@nextgenaischool.com</li>
                <li>(555) 123-4567</li>
                <li>123 Innovation St, Tech City, TC 12345</li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 Next-Gen AI School. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Enrollment;

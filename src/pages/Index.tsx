
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  useEffect(() => {
    // Add scroll animations
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

    // Observe all sections
    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach(section => observer.observe(section));

    // Header scroll effect
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
            <li><Link to="/" className="active nav-link">Home</Link></li>
            <li><Link to="/about" className="nav-link">About</Link></li>
            <li><Link to="/courses" className="nav-link">Courses</Link></li>
            <li><Link to="/team" className="nav-link">Team</Link></li>
            <li><Link to="/blog" className="nav-link">Blog</Link></li>
            <li><Link to="/enrollment" className="cta-button nav-cta">Enroll Now</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero min-h-screen flex items-center px-8 pt-32 pb-16 bg-gradient-to-br from-blue-50 to-cyan-50 relative overflow-hidden animate-on-scroll">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="hero-content">
              <span className="enroll-pill inline-block bg-teal-100 text-teal-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Now Enrolling Ages 8+
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Empowering Kids to <span className="gradient-text bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">Code with AI</span>
              </h1>
              <p className="subtitle text-xl text-gray-600 mb-8 max-w-lg">
                Join the future of learning! Our interactive AI courses teach kids to create, think critically, and build amazing projects while having fun.
              </p>

              <div className="cta-buttons flex gap-4 mb-8">
                <Link to="/enrollment" className="primary-btn bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Enroll Now
                </Link>
                <button className="secondary-btn border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
                  Watch Demo
                </button>
              </div>

              <ul className="hero-features flex gap-6 text-sm text-gray-600">
                
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Expert Teachers
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Fun Projects
                </li>
              </ul>
            </div>

            <div className="hero-image relative flex items-center justify-center">
              <div className="code-window bg-white rounded-2xl p-6 shadow-2xl max-w-md transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="code-browser-bar flex gap-2 mb-4">
                  <span className="dot w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className="dot w-3 h-3 bg-yellow-400 rounded-full"></span>
                  <span className="dot w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
                <pre className="code-snippet bg-gray-100 p-4 rounded-lg font-mono text-sm text-gray-700">
{`// Let's create an AI chatbot!
function greetUser() {
  console.log("Hello! I'm your AI friend");
}`}
                </pre>
                <div className="assistant-response bg-indigo-50 p-4 rounded-lg mt-4 flex gap-3 items-start text-sm text-gray-700">
                  <i className="fas fa-robot text-indigo-500"></i>
                  Great job! You just created your first AI function. Ready for the next challenge?
                </div>
              </div>
              
              {/* Floating circles */}
              <span className="floating-circle absolute w-32 h-32 bg-teal-400 rounded-full opacity-20 blur-sm top-16 left-10 animate-pulse"></span>
              <span className="floating-circle absolute w-20 h-20 bg-yellow-400 rounded-full opacity-20 blur-sm top-48 right-80 animate-pulse" style={{ animationDelay: '1s' }}></span>
              <span className="floating-circle absolute w-16 h-16 bg-pink-400 rounded-full opacity-20 blur-sm bottom-32 right-20 animate-pulse" style={{ animationDelay: '2s' }}></span>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about py-24 bg-gray-50 animate-on-scroll">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="about-content">
                <span className="tag inline-flex items-center gap-2 bg-gradient-to-r from-yellow-200 to-yellow-300 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold mb-6">
                  Why Choose Us?
                </span>
                <h2 className="text-4xl font-bold leading-tight mb-6">
                  Preparing Young Minds for an <span className="gradient-text bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">AI-Powered Future</span>
                </h2>
                <p className="intro text-lg text-gray-600 mb-8">
                  At Next-Gen AI School, we believe every child deserves to understand and shape the technology that will define their future. Our mission is to make AI education accessible, engaging, and fun for young learners.
                </p>

                <div className="feature-list grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { icon: '🎯', title: 'Expert-Led Learning', desc: 'Certified instructors who make complex AI concepts simple and fun.' },
                    { icon: '🎮', title: 'Interactive Projects', desc: 'Hands-on coding projects that turn learning into an adventure.' },
                    { icon: '👥', title: 'Small Class Sizes', desc: 'Maximum 8 students per class for personalized attention.' },
                    { icon: '🏆', title: 'Achievement System', desc: 'Earn badges, certificates, and showcase your projects.' },
                    { icon: '🌟', title: 'Future-Ready Skills', desc: 'Prepare kids with essential AI and coding knowledge.' },
                    { icon: '🔒', title: 'Safe Environment', desc: 'Secure, monitored platform designed for young learners.' }
                  ].map((feature, index) => (
                    <div key={index} className="feature-item flex gap-3 hover:transform hover:translateX-2 transition-transform duration-300">
                      <span className="icon text-2xl w-10 h-10 flex items-center justify-center bg-gray-100 rounded-xl">{feature.icon}</span>
                      <div>
                        <h3 className="font-semibold mb-1">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="about-visual">
                <div className="stats-grid grid grid-cols-2 gap-4 mb-6">
                  {[
                    { number: '500+', label: 'Happy Students' },
                    { number: '98%', label: 'Completion Rate' },
                    { number: '50+', label: 'Expert Teachers' },
                    { number: '4.9★', label: 'Parent Rating' }
                  ].map((stat, index) => (
                    <div key={index} className="stat-card bg-white p-5 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                      <span className="stat-number text-2xl font-bold text-indigo-500 block">{stat.number}</span>
                      <span className="stat-label text-sm text-gray-600">{stat.label}</span>
                    </div>
                  ))}
                </div>
                <div className="student-showcase flex items-center gap-3 bg-white p-4 rounded-xl shadow-md">
                  <div className="avatar w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 text-white rounded-full flex items-center justify-center font-bold">S</div>
                  <div className="showcase-info">
                    <span className="name block font-semibold text-gray-800">Sarah, Age 10</span>
                    <span className="caption text-sm text-gray-600">Built her first chatbot!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="courses py-24 bg-white animate-on-scroll">
          <div className="max-w-7xl mx-auto px-8">
            <div className="section-header text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Popular Courses</h2>
              <p className="text-xl text-gray-600">Start your AI journey with our most loved courses designed specifically for young learners</p>
            </div>
            
            <div className="courses-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: '🤖',
                  title: 'AI Basics for Beginners',
                  description: 'Perfect introduction to artificial intelligence concepts through fun games and interactive activities.',
                  badge: 'Ages 8-10',
                  duration: '6 weeks',
                  rating: '4.9',
                  students: '234',
                  color: 'blue'
                },
                {
                  icon: '🐍',
                  title: 'Python Coding Adventures',
                  description: 'Learn Python programming while creating games, stories, and solving exciting coding challenges.',
                  badge: 'Ages 10-12',
                  duration: '8 weeks',
                  rating: '4.8',
                  students: '189',
                  color: 'teal'
                },
                {
                  icon: '💬',
                  title: 'Build Your Own Chatbot',
                  description: 'Create smart chatbots that can talk, learn, and help people with everyday tasks.',
                  badge: 'Ages 12-14',
                  duration: '10 weeks',
                  rating: '4.9',
                  students: '156',
                  color: 'purple'
                }
              ].map((course, index) => (
                <div key={index} className={`course-card bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:translateY-2 border border-gray-100`}>
                  <div className={`course-icon w-20 h-20 mx-auto mb-6 text-4xl flex items-center justify-center rounded-full ${
                    course.color === 'blue' ? 'bg-gradient-to-br from-blue-400 to-blue-600' :
                    course.color === 'teal' ? 'bg-gradient-to-br from-teal-400 to-teal-600' :
                    'bg-gradient-to-br from-purple-400 to-purple-600'
                  } text-white`}>
                    {course.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{course.title}</h3>
                  <p className="description text-gray-600 text-sm mb-6">{course.description}</p>
                  <div className="meta flex justify-between mb-4 text-sm">
                    <span className="badge bg-gray-100 text-indigo-600 px-3 py-1 rounded-full font-semibold">{course.badge}</span>
                    <span className="duration text-gray-600">{course.duration}</span>
                  </div>
                  <div className="stats flex justify-between text-sm text-gray-600 mb-6">
                    <span className="text-yellow-500">⭐ {course.rating}</span>
                    <span>👥 {course.students} students</span>
                  </div>
                  <button className={`course-btn w-full py-3 rounded-lg text-white font-semibold transition-all duration-300 hover:transform hover:translateY-1 ${
                    course.color === 'blue' ? 'bg-gradient-to-r from-blue-400 to-blue-600' :
                    course.color === 'teal' ? 'bg-gradient-to-r from-teal-400 to-teal-600' :
                    'bg-gradient-to-r from-purple-400 to-purple-600'
                  }`}>
                    Learn More
                  </button>
                </div>
              ))}
            </div>
            
            <div className="courses-cta text-center mt-12">
              <Link to="/courses" className="secondary-btn border-2 border-indigo-500 text-indigo-500 px-8 py-3 rounded-full font-semibold hover:bg-indigo-500 hover:text-white transition-all duration-300">
                View All Courses
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-24 bg-gray-50 animate-on-scroll">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="flex flex-col gap-4">
                <h2 className="text-4xl font-bold text-gray-800 leading-tight">Experience Learning Like Never Before</h2>
                <p className="text-lg text-gray-600 max-w-md">
                  Discover Personalized, AI-Powered Learning That Prepares Students for Success in the Real World
                </p>
                <button className="bg-orange-500 text-white px-7 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 hover:transform hover:translateY-1 self-start">
                  Start Your Journey
                </button>
              </div>
              
              <div className="grid grid-rows-2 gap-6">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img src="/placeholder.svg" alt="Personalized Learning Paths" className="w-full h-48 object-cover" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h4 className="font-bold mb-2">Earn While You Learn</h4>
                    <p className="text-sm text-gray-600">Accumulate scholarship funds as you progress</p>
                  </div>
                  <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h4 className="font-bold mb-2">Verified Credentials</h4>
                    <p className="text-sm text-gray-600">Secure blockchain certificates for your achievements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="testimonials py-24 bg-gradient-to-br from-blue-50 to-green-50 animate-on-scroll">
          <div className="max-w-7xl mx-auto px-8">
            <div className="section-header text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">What Parents Are Saying</h2>
              <p className="text-xl text-gray-600">Hear from families who've seen their kids thrive in our programs</p>
            </div>
            
            <div className="testimonials-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  rating: '⭐⭐⭐⭐⭐',
                  content: "Emma went from knowing nothing about coding to building her own AI chatbot in just 8 weeks! The teachers are amazing and really know how to connect with kids.",
                  avatar: '👩‍💼',
                  name: 'Sarah Johnson',
                  role: 'Parent of Emma (Age 10)'
                },
                {
                  rating: '⭐⭐⭐⭐⭐',
                  content: "The best investment in my child's future. Alex is now creating games and talking about machine learning like a pro. The class structure keeps kids engaged.",
                  avatar: '👨‍💻',
                  name: 'Michael Chen',
                  role: 'Parent of Alex (Age 12)'
                },
                {
                  rating: '⭐⭐⭐⭐⭐',
                  content: "Sofia was shy about technology before this course. Now she's confident, creative, and excited about coding every single day. Thank you for this transformation!",
                  avatar: '👩‍🎓',
                  name: 'Lisa Rodriguez',
                  role: 'Parent of Sofia (Age 9)'
                }
              ].map((testimonial, index) => (
                <div key={index} className="testimonial-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:translateY-2 relative">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-t-2xl"></div>
                  <div className="rating text-yellow-500 mb-4">{testimonial.rating}</div>
                  <p className="content text-gray-600 italic mb-6">{testimonial.content}</p>
                  <div className="author flex items-center gap-3">
                    <div className="avatar text-2xl">{testimonial.avatar}</div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <span className="text-sm text-gray-600">{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="reviews-summary text-center mt-12 text-gray-600">
              <span className="score text-3xl font-bold text-indigo-500 mr-2">4.9</span>
              <span className="stars text-yellow-500">⭐⭐⭐⭐⭐</span>
              <span className="meta"> | 200+ verified reviews</span>
            </div>
          </div>
        </section>
      </main>

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

      {/* Back to top button */}
      <button 
        className="fixed bottom-8 right-8 bg-indigo-500 text-white w-12 h-12 rounded-full shadow-lg hover:bg-indigo-600 transition-all duration-300 hover:transform hover:scale-110 opacity-0 invisible"
        id="backToTop"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>
    </div>
  );
};

export default Index;

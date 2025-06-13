
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
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
            <li><Link to="/about" className="active nav-link">About</Link></li>
            <li><Link to="/courses" className="nav-link">Courses</Link></li>
            <li><Link to="/team" className="nav-link">Team</Link></li>
            <li><Link to="/blog" className="nav-link">Blog</Link></li>
            <li><Link to="/enrollment" className="cta-button nav-cta">Enroll Now</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero min-h-screen flex items-center px-8 pt-32 pb-16 bg-gradient-to-br from-purple-50 to-indigo-50 relative overflow-hidden animate-on-scroll">
        <div className="max-w-3xl mx-auto text-center">
  <h1 className="text-6xl font-bold leading-tight mb-6 animate-fade-in-up drop-shadow-lg">
    About <span className="gradient-text bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">NextGenAISchool</span>
  </h1>
  <p className="text-xl text-gray-700 mb-8 animate-fade-in-up delay-150">
    We're on a mission to prepare the next generation for an AI-powered future through engaging, hands-on learning experiences that make complex concepts accessible to young minds.
  </p>
</div>

<style>
{`
@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  animation: fadeInUp 1s cubic-bezier(0.4,0,0.2,1) both;
}
.animate-fade-in-up.delay-150 {
  animation-delay: 0.15s;
}
`}
</style>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white animate-on-scroll">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At NextGenAISchool, we believe that every child deserves to understand and shape the technology that will define their future. We're committed to making AI education accessible, engaging, and fun for learners starting from age 8, with no upper age limit.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Through our carefully crafted curriculum, expert instructors, and interactive learning environment, we empower children to become confident creators, critical thinkers, and problem solvers in an increasingly digital world.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-500 mb-2">500+</div>
                  <div className="text-gray-600">Students Taught</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-500 mb-2">98%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="/placeholder.svg" alt="Mission" className="rounded-2xl shadow-2xl w-full" />
              <div className="absolute -bottom-6 -right-6 bg-indigo-500 text-white p-6 rounded-2xl shadow-lg">
                <div className="text-2xl font-bold">2019</div>
                <div className="text-sm">Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50 animate-on-scroll">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Excellence in Education',
                description: 'We maintain the highest standards in our curriculum, teaching methods, and student outcomes.'
              },
              {
                icon: '🤝',
                title: 'Inclusive Learning',
                description: 'We create an environment where every child feels valued, supported, and empowered to learn.'
              },
              {
                icon: '🚀',
                title: 'Innovation First',
                description: 'We continuously evolve our methods to stay at the forefront of educational technology.'
              },
              {
                icon: '🌟',
                title: 'Student-Centered',
                description: 'Every decision we make prioritizes the learning experience and growth of our students.'
              },
              {
                icon: '🔒',
                title: 'Safety & Trust',
                description: 'We provide a secure, monitored environment where children can explore and learn safely.'
              },
              {
                icon: '🌍',
                title: 'Future Ready',
                description: 'We prepare students for the jobs and challenges of tomorrow with cutting-edge skills.'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:translateY-2 text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white animate-on-scroll">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img src="/placeholder.svg" alt="Our Story" className="rounded-2xl shadow-2xl w-full" />
              <div className="absolute -top-6 -left-6 bg-teal-500 text-white p-6 rounded-2xl shadow-lg">
                <div className="text-sm">Growing</div>
                <div className="text-2xl font-bold">50%</div>
                <div className="text-sm">Year over Year</div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                NextGenAISchool was founded in 2019 by a team of educators and technologists who saw the need for quality AI education for children. What started as a small pilot program with 20 students has grown into a thriving educational platform serving hundreds of young learners worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our founders, Dr. Sarah Chen and Mark Rodriguez, combined their expertise in child psychology and artificial intelligence to create a curriculum that makes complex concepts accessible and engaging for young minds.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Today, we continue to innovate and expand our offerings, always keeping our students' success and growth at the heart of everything we do.
              </p>
              <Link to="/team" className="primary-btn bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:transform hover:scale-105 transition-all duration-300 shadow-lg inline-block">
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-500 to-purple-600 text-white animate-on-scroll">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8 opacity-90">
            Give your child the skills they need to thrive in an AI-powered future. Join hundreds of families who trust NextGenAISchool for their child's technology education.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/enrollment" className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:transform hover:scale-105 transition-all duration-300 shadow-lg">
              Enroll Now
            </Link>
            <Link to="/courses" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
              View Courses
            </Link>
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

export default About;

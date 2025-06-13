import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Courses = () => {
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

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const courses = [
    {
      id: 1,
      icon: '🤖',
      title: 'AI Basics for Beginners',
      description: 'Perfect introduction to artificial intelligence concepts through fun games and interactive activities. Students learn what AI is, how it works, and create their first simple AI projects.',
      badge: 'Ages 8+',
      duration: '6 weeks',
      rating: '4.9',
      students: '234',
      color: 'blue',
      price: '$199',
      features: ['Interactive games', 'Visual programming', 'AI concept introduction', 'Certificate completion']
    },
    {
      id: 2,
      icon: '🐍',
      title: 'Python Coding Adventures',
      description: 'Learn Python programming while creating games, stories, and solving exciting coding challenges. Perfect for kids who want to dive deeper into programming fundamentals.',
      badge: 'Ages 8+',
      duration: '8 weeks',
      rating: '4.8',
      students: '189',
      color: 'teal',
      price: '$249',
      features: ['Python fundamentals', 'Game development', 'Problem solving', 'Portfolio projects']
    },
    {
      id: 3,
      icon: '💬',
      title: 'Build Your Own Chatbot',
      description: 'Create smart chatbots that can talk, learn, and help people with everyday tasks. Students learn natural language processing and conversation design.',
      badge: 'Ages 8+',
      duration: '10 weeks',
      rating: '4.9',
      students: '156',
      color: 'purple',
      price: '$299',
      features: ['NLP basics', 'Conversation design', 'Bot deployment', 'Advanced AI concepts']
    },
    {
      id: 4,
      icon: '🎮',
      title: 'AI Game Development',
      description: 'Combine AI and game development to create intelligent NPCs, procedural content, and adaptive gameplay mechanics.',
      badge: 'Ages 8+',
      duration: '12 weeks',
      rating: '4.7',
      students: '98',
      color: 'green',
      price: '$349',
      features: ['Game AI', 'Unity basics', 'Smart NPCs', 'Game publication']
    },
    {
      id: 5,
      icon: '🎨',
      title: 'Creative AI & Art',
      description: 'Explore the intersection of AI and creativity by generating art, music, and stories using machine learning tools.',
      badge: 'Ages 8+',
      duration: '8 weeks',
      rating: '4.8',
      students: '142',
      color: 'pink',
      price: '$229',
      features: ['AI art generation', 'Music creation', 'Story writing', 'Creative portfolio']
    },
    {
      id: 6,
      icon: '🔬',
      title: 'Data Science for Kids',
      description: 'Learn to collect, analyze, and visualize data to uncover insights and make predictions about the world around us.',
      badge: 'Ages 8+',
      duration: '10 weeks',
      rating: '4.6',
      students: '87',
      color: 'orange',
      price: '$279',
      features: ['Data collection', 'Statistical analysis', 'Data visualization', 'Prediction models']
    }
  ];

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
            <li><Link to="/courses" className="active nav-link">Courses</Link></li>
            <li><Link to="/team" className="nav-link">Team</Link></li>
            <li><Link to="/blog" className="nav-link">Blog</Link></li>
            <li><Link to="/enrollment" className="cta-button nav-cta">Enroll Now</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero min-h-screen flex items-center px-8 pt-32 pb-16 bg-gradient-to-br from-green-50 to-teal-50 relative overflow-hidden animate-on-scroll">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold leading-tight mb-6">
            Our <span className="gradient-text bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">Courses</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover our comprehensive AI and coding curriculum designed specifically for young learners. From beginners to advanced students, we have the perfect course to spark your child's interest in technology.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/enrollment" className="primary-btn bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:transform hover:scale-105 transition-all duration-300 shadow-lg">
              Enroll Today
            </Link>

          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-24 bg-white animate-on-scroll">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Choose Your Learning Path</h2>
            <p className="text-xl text-gray-600">All courses include live instruction, interactive projects, and personalized feedback</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => {
  let cardId = '';
  if (course.title === 'AI Basics for Beginners') cardId = 'ai-basics';
  if (course.title === 'Python Coding Adventures') cardId = 'python-coding';
  if (course.title === 'Build Your Own Chatbot') cardId = 'chatbot';
  return (
    <div key={course.id} id={cardId || undefined} className={`course-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:translateY-2 border border-gray-100 animate-on-scroll`} style={{ animationDelay: `${index * 0.1}s` }}>
      <div className={`course-icon w-20 h-20 mx-auto mb-6 text-4xl flex items-center justify-center rounded-full ${
        course.color === 'blue' ? 'bg-gradient-to-br from-blue-400 to-blue-600' :
        course.color === 'teal' ? 'bg-gradient-to-br from-teal-400 to-teal-600' :
        course.color === 'purple' ? 'bg-gradient-to-br from-purple-400 to-purple-600' :
        course.color === 'green' ? 'bg-gradient-to-br from-green-400 to-green-600' :
        course.color === 'pink' ? 'bg-gradient-to-br from-pink-400 to-pink-600' :
        'bg-gradient-to-br from-orange-400 to-orange-600'
      } text-white`}>
        {course.icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-center">{course.title}</h3>
      <p className="description text-gray-600 text-sm mb-6 leading-relaxed">{course.description}</p>
      <div className="meta flex justify-between mb-4 text-sm">
        <span className="badge bg-gray-100 text-indigo-600 px-3 py-1 rounded-full font-semibold">{course.badge}</span>
        <span className="duration text-gray-600">{course.duration}</span>
      </div>
      <div className="stats flex justify-between text-sm text-gray-600 mb-4">
        <span className="text-yellow-500">⭐ {course.rating}</span>
        <span>👥 {course.students} students</span>
      </div>
      <div className="features mb-6">
        <h4 className="font-semibold text-sm mb-2">What you'll learn:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          {course.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="price text-center mb-6">
        <span className="text-2xl font-bold text-gray-800">{course.price}</span>
        <span className="text-gray-600 text-sm ml-1">/ course</span>
      </div>
      <button className={`course-btn w-full py-3 rounded-lg text-white font-semibold transition-all duration-300 hover:transform hover:translateY-1 ${
        course.color === 'blue' ? 'bg-gradient-to-r from-blue-400 to-blue-600' :
        course.color === 'teal' ? 'bg-gradient-to-r from-teal-400 to-teal-600' :
        course.color === 'purple' ? 'bg-gradient-to-r from-purple-400 to-purple-600' :
        course.color === 'green' ? 'bg-gradient-to-r from-green-400 to-green-600' :
        course.color === 'pink' ? 'bg-gradient-to-r from-pink-400 to-pink-600' :
        'bg-gradient-to-r from-orange-400 to-orange-600'
      }`}>
        Enroll Now
      </button>
    </div>
  );
})}
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-24 bg-gray-50 animate-on-scroll">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Your Learning Journey</h2>
            <p className="text-xl text-gray-600">Progressive curriculum designed to build skills step by step</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 to-teal-500 rounded-full"></div>
            
            <div className="space-y-12">
              {[
                {
                  level: 'Beginner',
                  title: 'Foundation Level',
                  description: 'Start with AI basics and visual programming concepts',
                  courses: ['AI Basics for Beginners', 'Creative AI & Art'],
                  position: 'left'
                },
                {
                  level: 'Intermediate',
                  title: 'Building Skills',
                  description: 'Learn programming languages and create interactive projects',
                  courses: ['Python Coding Adventures', 'Data Science for Kids'],
                  position: 'right'
                },
                {
                  level: 'Advanced',
                  title: 'Expert Level',
                  description: 'Build complex AI applications and deploy real projects',
                  courses: ['Build Your Own Chatbot', 'AI Game Development'],
                  position: 'left'
                }
              ].map((level, index) => (
                <div key={index} className={`flex items-center ${level.position === 'right' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`w-1/2 ${level.position === 'right' ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                      <span className="inline-block bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                        {level.level}
                      </span>
                      <h3 className="text-2xl font-bold mb-3">{level.title}</h3>
                      <p className="text-gray-600 mb-4">{level.description}</p>
                      <div className="space-y-2">
                        {level.courses.map((course, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                            <span className="text-sm text-gray-700">{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-indigo-500 to-teal-500 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-500 to-teal-600 text-white animate-on-scroll">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Learning?</h2>
          <div className="flex gap-4 justify-center">
            <Link to="/enrollment" className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:transform hover:scale-105 transition-all duration-300 shadow-lg">
              Enroll Now
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
                <li><Link to="/courses#ai-basics" className="text-gray-400 hover:text-white transition-colors duration-300">AI Basics for Beginners</Link></li>
                <li><Link to="/courses#python-coding" className="text-gray-400 hover:text-white transition-colors duration-300">Python Coding Adventures</Link></li>
                <li><Link to="/courses#chatbot" className="text-gray-400 hover:text-white transition-colors duration-300">Build Your Own Chatbot</Link></li>
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
}

export default Courses;

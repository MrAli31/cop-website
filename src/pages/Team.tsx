
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Team = () => {
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

  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Founder & CEO',
      expertise: 'Child Psychology & AI Education',
      description: 'Ph.D. in Child Psychology from Stanford. 15+ years developing educational curricula for young learners.',
      image: '👩‍🎓',
      achievements: ['Stanford Ph.D.', '15+ Years Experience', 'Published Researcher']
    },
    {
      name: 'Mark Rodriguez',
      role: 'Co-Founder & CTO',
      expertise: 'Artificial Intelligence & Software Engineering',
      description: 'Former Google AI researcher with expertise in machine learning and educational technology platforms.',
      image: '👨‍💻',
      achievements: ['Google AI Alumni', 'ML Expert', 'EdTech Pioneer']
    },
    {
      name: 'Lisa Wang',
      role: 'Head of Curriculum',
      expertise: 'Educational Technology & Curriculum Design',
      description: 'M.Ed. from MIT. Specialized in creating engaging STEM curricula for K-12 students.',
      image: '👩‍🏫',
      achievements: ['MIT Graduate', 'STEM Specialist', 'Curriculum Expert']
    },
    {
      name: 'David Kim',
      role: 'Lead AI Instructor',
      expertise: 'Machine Learning & Youth Education',
      description: 'Former Microsoft engineer turned educator. Passionate about making AI accessible to young minds.',
      image: '👨‍🔬',
      achievements: ['Microsoft Alumni', 'AI Educator', 'Youth Mentor']
    },
    {
      name: 'Maria Garcia',
      role: 'Student Experience Director',
      expertise: 'Student Engagement & Community Building',
      description: 'Expert in creating supportive learning environments and building strong student communities.',
      image: '👩‍💼',
      achievements: ['Community Builder', 'Student Advocate', 'Engagement Expert']
    },
    {
      name: 'Alex Thompson',
      role: 'Senior Python Instructor',
      expertise: 'Python Programming & Game Development',
      description: 'Professional game developer with 10+ years experience teaching coding to children and teens.',
      image: '👨‍🎮',
      achievements: ['Game Developer', '10+ Years Teaching', 'Youth Coding Expert']
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
            <li><Link to="/courses" className="nav-link">Courses</Link></li>
            <li><Link to="/team" className="active nav-link">Team</Link></li>
            <li><Link to="/blog" className="nav-link">Blog</Link></li>
            <li><Link to="/enrollment" className="cta-button nav-cta">Enroll Now</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero min-h-screen flex items-center px-8 pt-32 pb-16 bg-gradient-to-br from-orange-50 to-red-50 relative overflow-hidden animate-on-scroll">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold leading-tight mb-6">
            Meet Our <span className="gradient-text bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Expert Team</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our passionate educators and technology experts are dedicated to inspiring the next generation of AI innovators. Each team member brings unique expertise and a shared commitment to making learning fun and accessible.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-white animate-on-scroll">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">World-Class Educators</h2>
            <p className="text-xl text-gray-600">Experts from top universities and leading tech companies</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className={`team-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:translateY-2 border border-gray-100 animate-on-scroll`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 text-6xl flex items-center justify-center bg-gradient-to-br from-orange-100 to-red-100 rounded-full">
                    {member.image}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-orange-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-4">{member.expertise}</p>
                </div>
                
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{member.description}</p>
                
                <div className="achievements">
                  <h4 className="font-semibold text-sm mb-3">Key Achievements:</h4>
                  <div className="space-y-2">
                    {member.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                        <span className="text-sm text-gray-600">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-gray-50 animate-on-scroll">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Leadership Vision</h2>
            <p className="text-xl text-gray-600">Our founders' shared mission to transform education</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Our Leadership Philosophy</h3>
              <p className="text-lg text-gray-600 mb-6">
                Our leadership team combines decades of experience in education, technology, and child development. We believe that every child has the potential to become a creator and innovator when given the right tools and guidance.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We're committed to staying at the forefront of educational technology while never losing sight of what matters most: creating meaningful, engaging learning experiences that prepare students for the future.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
                  <div className="text-gray-600">Expert Instructors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">95%</div>
                  <div className="text-gray-600">Teacher Satisfaction</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img src="/placeholder.svg" alt="Leadership Team" className="rounded-2xl shadow-2xl w-full" />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-2xl shadow-lg">
                <div className="text-sm">Team Since</div>
                <div className="text-2xl font-bold">2019</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="py-24 bg-white animate-on-scroll">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Join Our Team</h2>
            <p className="text-xl text-gray-600">Help us shape the future of AI education for children</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI Instructors',
                description: 'Passionate educators with AI/ML background who love working with children',
                requirements: ['AI/ML expertise', 'Teaching experience', 'Child education passion']
              },
              {
                title: 'Curriculum Developers',
                description: 'Creative minds who can transform complex concepts into engaging lessons',
                requirements: ['Educational design', 'STEM background', 'Creative thinking']
              },
              {
                title: 'Student Mentors',
                description: 'Supportive individuals who help students succeed in their learning journey',
                requirements: ['Mentoring skills', 'Tech background', 'Student advocacy']
              }
            ].map((position, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-4">{position.title}</h3>
                <p className="text-gray-600 mb-6">{position.description}</p>
                <div className="space-y-2 mb-6">
                  {position.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                      <span className="text-sm text-gray-600">{req}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:transform hover:translateY-1 transition-all duration-300">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-500 to-red-600 text-white animate-on-scroll">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Learn from the Best?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our expert team is ready to guide your child through an amazing journey into the world of AI and coding. Join our community of learners and innovators.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/enrollment" className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:transform hover:scale-105 transition-all duration-300 shadow-lg">
              Enroll Today
            </Link>
            <Link to="/courses" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300">
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

export default Team;

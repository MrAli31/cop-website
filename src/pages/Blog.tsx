
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
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

  const blogPosts = [
    {
      id: 1,
      title: 'Why Kids Should Learn AI: Preparing for the Future',
      excerpt: 'Discover why artificial intelligence education is crucial for children and how it prepares them for future careers and challenges.',
      author: 'Dr. Sarah Chen',
      date: 'December 10, 2024',
      readTime: '5 min read',
      category: 'Education',
      image: '🤖',
      featured: true
    },
    {
      id: 2,
      title: 'Python vs Scratch: Which Programming Language for Kids?',
      excerpt: 'A comprehensive comparison of visual programming languages and text-based coding for young learners.',
      author: 'Alex Thompson',
      date: 'December 8, 2024',
      readTime: '7 min read',
      category: 'Programming',
      image: '🐍'
    },
    {
      id: 3,
      title: 'Building Your First Chatbot: A Parent\'s Guide',
      excerpt: 'Help your child create their first AI chatbot with this step-by-step guide for parents and beginners.',
      author: 'Mark Rodriguez',
      date: 'December 5, 2024',
      readTime: '6 min read',
      category: 'AI Projects',
      image: '💬'
    },
    {
      id: 4,
      title: 'The Psychology of Learning to Code as a Child',
      excerpt: 'Understanding how children\'s minds work when learning programming concepts and how to support their journey.',
      author: 'Dr. Sarah Chen',
      date: 'December 3, 2024',
      readTime: '8 min read',
      category: 'Psychology',
      image: '🧠'
    },
    {
      id: 5,
      title: 'AI in Education: Trends and Future Predictions',
      excerpt: 'Explore the latest trends in AI-powered education and what the future holds for digital learning.',
      author: 'Lisa Wang',
      date: 'November 30, 2024',
      readTime: '6 min read',
      category: 'Technology',
      image: '🚀'
    },
    {
      id: 6,
      title: 'Creative Projects: Teaching AI Through Art and Music',
      excerpt: 'Innovative ways to combine creativity with artificial intelligence education for engaging learning experiences.',
      author: 'Maria Garcia',
      date: 'November 28, 2024',
      readTime: '5 min read',
      category: 'Creativity',
      image: '🎨'
    }
  ];

  const categories = ['All', 'Education', 'Programming', 'AI Projects', 'Psychology', 'Technology', 'Creativity'];

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
            <li><Link to="/blog" className="active nav-link">Blog</Link></li>
            <li><Link to="/enrollment" className="cta-button nav-cta">Enroll Now</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero min-h-screen flex items-center px-8 pt-32 pb-16 bg-gradient-to-br from-violet-50 to-purple-50 relative overflow-hidden animate-on-scroll">
        <div className="max-w-md mx-auto text-center p-4">
  <h1 className="text-6xl font-bold leading-tight mb-6">
    Our <span className="gradient-text bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">Blog</span>
  </h1>
  <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
    Insights, tips, and resources for parents, educators, and young learners exploring the exciting world of AI and coding education.
  </p>
  <div className="flex justify-center">
    <button className="primary-btn bg-gradient-to-r from-violet-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:transform hover:scale-105 transition-all duration-300 shadow-lg">
      Follow on Social Media
    </button>
  </div>
</div>
      </section>

      {/* Featured Post */}
      <section className="py-24 bg-white animate-on-scroll">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Article</h2>
            <p className="text-xl text-gray-600">Our latest insights on AI education</p>
          </div>
          
          {blogPosts.filter(post => post.featured).map(post => (
            <div key={post.id} className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-12 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="inline-block bg-violet-100 text-violet-600 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {post.category}
                  </span>
                  <h3 className="text-3xl font-bold mb-4">{post.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">{post.excerpt}</p>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-gray-600">By {post.author}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-600">{post.date}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-600">{post.readTime}</span>
                  </div>
                  <button className="bg-gradient-to-r from-violet-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:transform hover:scale-105 transition-all duration-300 shadow-lg">
                    Read Full Article
                  </button>
                </div>
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto bg-white rounded-2xl shadow-lg flex items-center justify-center text-8xl">
                    {post.image}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-gray-50 animate-on-scroll">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <button key={index} className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                category === 'All' 
                  ? 'bg-violet-500 text-white shadow-lg' 
                  : 'bg-white text-gray-600 hover:bg-violet-100 hover:text-violet-600'
              }`}>
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-gray-50 animate-on-scroll">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-600">Explore our latest insights and educational resources</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <article key={post.id} className={`blog-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:translateY-2 animate-on-scroll`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl flex items-center justify-center text-4xl mb-4">
                    {post.image}
                  </div>
                  <span className="inline-block bg-violet-100 text-violet-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-4 leading-tight">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{post.excerpt}</p>
                
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-6">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                  <button className="text-violet-600 font-semibold hover:text-violet-700 transition-colors duration-300">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-white animate-on-scroll">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our newsletter for the latest insights on AI education, parenting tips, and course updates.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-violet-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:transform hover:scale-105 transition-all duration-300 shadow-lg">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-violet-500 to-purple-600 text-white animate-on-scroll">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Child's AI Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of families who are already giving their children the skills they need for the future. Start with a free trial class today.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/enrollment" className="bg-white text-violet-600 px-8 py-3 rounded-full font-semibold hover:transform hover:scale-105 transition-all duration-300 shadow-lg">
              Start Free Trial
            </Link>
            <Link to="/courses" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-violet-600 transition-all duration-300">
              Browse Courses
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

export default Blog;

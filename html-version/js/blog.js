// Blog posts data (static for now, can be moved to database later)
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

// Function to create a blog post card
function createBlogPostCard(post) {
    return `
        <article class="blog-card bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div class="p-6">
                <div class="emoji-container mb-4 bg-gray-50 w-16 h-16 rounded-lg flex items-center justify-center text-4xl">
                    ${post.image}
                </div>
                <span class="category-tag">${post.category}</span>
                <h3 class="text-xl font-bold mt-2 mb-3">${post.title}</h3>
                <p class="text-gray-600 mb-4">${post.excerpt}</p>
                <div class="article-meta text-sm text-gray-500">
                    <span>${post.author}</span>
                    <span class="separator">•</span>
                    <span>${post.date}</span>
                    <span class="separator">•</span>
                    <span>${post.readTime}</span>
                </div>
            </div>
            <div class="p-6 border-t border-gray-100">
                <button class="read-more-btn">Read More</button>
            </div>
        </article>
    `;
}

// Function to render blog posts
function renderBlogPosts(posts = blogPosts) {
    const postsGrid = document.querySelector('.posts-grid');
    if (postsGrid) {
        postsGrid.innerHTML = posts.map(post => createBlogPostCard(post)).join('');
    }
}

// Function to handle category filtering
function handleCategoryFilter() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter posts
            const category = button.dataset.category;
            const filteredPosts = category === 'all' 
                ? blogPosts 
                : blogPosts.filter(post => post.category.toLowerCase() === category.toLowerCase());
            
            renderBlogPosts(filteredPosts);
        });
    });
}

// Function to handle newsletter form submission
function handleNewsletterSubmission() {
    const form = document.querySelector('.newsletter-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        
        // Here you would typically send this to your backend
        console.log('Newsletter subscription:', email);
        
        // Show success message
        alert('Thank you for subscribing to our newsletter!');
        form.reset();
    });
}

// Function to handle scroll animations
function handleScrollAnimations() {
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
}

// Function to handle header scroll effect
function handleHeaderScroll() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Function to handle mobile menu
function handleMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Initialize blog functionality
document.addEventListener('DOMContentLoaded', () => {
    renderBlogPosts();
    handleCategoryFilter();
    handleNewsletterSubmission();
    handleScrollAnimations();
    handleHeaderScroll();
    handleMobileMenu();
}); 
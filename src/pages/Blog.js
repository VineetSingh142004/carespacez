import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Clock, User, Tag, ChevronRight } from 'lucide-react';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'mental-health', name: 'Mental Health' },
    { id: 'self-care', name: 'Self Care' },
    { id: 'relationships', name: 'Relationships' },
    { id: 'productivity', name: 'Productivity' },
    { id: 'wellness', name: 'Wellness' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Digital Anxiety in the Modern Age",
      excerpt: "Explore how constant connectivity affects mental health and learn practical strategies for maintaining digital wellness...",
      category: "mental-health",
      author: "Dr. Sarah Chen",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Building Healthy Relationships in a Virtual World",
      excerpt: "Tips and insights on maintaining meaningful connections in an increasingly digital landscape...",
      category: "relationships",
      author: "Michael Rodriguez",
      date: "March 12, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop"
    },
    // Add more blog posts
  ];

  const filteredPosts = blogPosts.filter(post => 
    (activeCategory === 'all' || post.category === activeCategory) &&
    (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const featuredPost = {
    title: "The Impact of Social Media on Gen Z Mental Health",
    excerpt: "A comprehensive look at how social media shapes modern mental health challenges and what we can do about it...",
    category: "mental-health",
    author: "Dr. Emily Watson",
    date: "March 20, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1573152958734-1922c188fba3?w=1200&h=600&fit=crop"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Featured Post */}
      <div className="bg-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  CareSpacez Blog
                </h1>
                <p className="text-xl text-white/90 mb-8">
                  Insights, tips, and stories about mental health and well-being
                </p>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300"
                  />
                </div>
              </div>
              <div className="hidden md:block">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={featuredPost.image}
                    alt="Featured post"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="text-purple-600 text-sm font-semibold mb-2">
                      Featured Post
                    </div>
                    <h2 className="text-gray-800 text-xl font-bold mb-2">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="w-4 h-4 mr-2" />
                      <span className="mr-4">{featuredPost.author}</span>
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-purple-50'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Tag className="w-4 h-4 text-purple-600 mr-2" />
                  <span className="text-sm text-purple-600">{post.category}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-500">
                    <User className="w-4 h-4 mr-2" />
                    <span className="mr-4">{post.author}</span>
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  <button className="text-purple-600 hover:text-purple-700 flex items-center">
                    Read More
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-purple-50 py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter for the latest articles and resources
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Blog; 
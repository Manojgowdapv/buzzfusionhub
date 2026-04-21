import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  const featuredPosts = [
    {
      id: 1,
      title: 'Ultimate Guide to Digital Marketing in 2026',
      excerpt: 'Learn the latest digital marketing strategies and techniques to boost your online presence and reach your target audience effectively.',
      image: '/images/digital-marketing.jpg',
      category: 'Marketing',
      date: 'April 21, 2026',
      author: 'Manoj Gowda',
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'Web Development Trends You Should Know',
      excerpt: 'Discover the hottest web development trends, frameworks, and tools that are shaping the future of web development in 2026.',
      image: '/images/web-dev.jpg',
      category: 'Technology',
      date: 'April 20, 2026',
      author: 'Manoj Gowda',
      readTime: '10 min read'
    },
    {
      id: 3,
      title: 'SEO Best Practices for Beginners',
      excerpt: 'Master the fundamentals of SEO and learn how to optimize your website to rank higher on search engines and drive organic traffic.',
      image: '/images/seo.jpg',
      category: 'SEO',
      date: 'April 19, 2026',
      author: 'Manoj Gowda',
      readTime: '7 min read'
    }
  ];

  return (
    <> 
      <Head>
        <title>Buzzfusion Hub - Professional Blog for Digital Insights</title>
        <meta name="description" content="Buzzfusion Hub brings you the latest insights on digital marketing, web development, SEO, and technology trends. Expert articles and guides for professionals." />
        <meta name="keywords" content="digital marketing, web development, SEO, technology, blogging, professional blog" />
        <meta property="og:title" content="Buzzfusion Hub - Professional Blog" />
        <meta property="og:description" content="Discover expert insights on digital marketing, web development, and technology trends." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Manoj Gowda" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 cursor-pointer"> Buzzfusion Hub </span>
          </Link>
          <div className="flex gap-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
            <Link href="/blogs" className="text-gray-700 hover:text-blue-600 transition">Blogs</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Buzzfusion Hub</h1>
          <p className="text-xl mb-8">Your trusted source for digital marketing, web development, and technology insights</p>
          <Link href="/blogs">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"> Explore Our Blog </button>
          </Link>
        </div>
      </section>
      {/* Featured Posts */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105">
              <div className="bg-gradient-to-r from-blue-400 to-purple-400 h-48 flex items-center justify-center">
                <span className="text-white text-5xl">📚</span>
              </div>
              <div className="p-6">
                <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-2"> {post.category} </span>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <Link href={`/blog/${post.id}`}> 
                  <button className="text-blue-600 font-semibold hover:text-purple-600 transition"> Read More → </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Latest Articles</h2>
          <p className="text-gray-600 mb-6">Subscribe to our newsletter to get the latest insights delivered to your inbox</p>
          <div className="flex gap-2 justify-center max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg focus:outline-none" />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition"> Subscribe </button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Buzzfusion Hub</h3>
            <p className="text-gray-400">Your ultimate destination for digital marketing and technology insights.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="text-gray-400 space-y-2">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/blogs" className="hover:text-white transition">Blogs</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="text-gray-400 space-y-2">
              <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Buzzfusion Hub. All rights reserved. | Made with ❤️ for digital enthusiasts</p>
        </div>
      </footer>
      {/* AdSense Code */}
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx"></script>
    </> 
  );
}
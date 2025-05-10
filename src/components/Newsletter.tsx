import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real application, you would send this to your backend
      console.log('Subscribing email:', email);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset the success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };
  
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-blue-100 mb-8">
            Subscribe to our newsletter for exclusive deals, new product announcements, and tech tips.
          </p>
          
          {isSubmitted ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 inline-block">
              <p className="text-white">Thanks for subscribing! Check your inbox soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit"
                className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors flex items-center justify-center"
              >
                Subscribe
                <Send size={18} className="ml-2" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
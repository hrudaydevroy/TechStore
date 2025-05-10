import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-lg text-gray-600 mb-8">
              Have a question or need assistance? We're here to help! Reach out to us 
              through any of the following channels or fill out the contact form.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail size={24} className="text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">support@techstore.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone size={24} className="text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">1-800-TECH-STORE</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MapPin size={24} className="text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600">
                    123 Tech Street<br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Clock size={24} className="text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                  <Send size={24} className="text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-green-900 mb-2">Message Sent!</h3>
                <p className="text-green-700">
                  Thank you for reaching out. We'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  Send Message
                  <Send size={18} className="ml-2" />
                </button>
              </form>
            )}
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What are your shipping times?</h3>
              <p className="text-gray-600">
                We process orders within 24 hours and offer standard shipping (3-5 business days) 
                and express shipping (1-2 business days).
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer international shipping?</h3>
              <p className="text-gray-600">
                Yes, we ship to most countries worldwide. International shipping times and rates 
                vary by location.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What is your return policy?</h3>
              <p className="text-gray-600">
                We offer a 30-day return policy for most items. Products must be in original 
                condition with all packaging.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
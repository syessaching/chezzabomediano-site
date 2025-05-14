import React from 'react';

const ContactMe: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-gray-200">
      <h2 className="text-3xl font-bold text-gray-800 text-center">Contact Me</h2>
      <form className="mt-8 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="w-full mt-2 p-2 border rounded-lg"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full mt-2 p-2 border rounded-lg"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea
            className="w-full mt-2 p-2 border rounded-lg"
            rows={4}
            placeholder="Your Message"
          ></textarea>
        </div>
        <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactMe;
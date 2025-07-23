import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mblkgkjj', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (err) {
      toast.error("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-black text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold inline-block border-b-4 border-pink-500 pb-2">Contact Me</h2>
        <p className="text-gray-400 mt-2">Let’s get in touch! I am right behind this form.</p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
        />
        <textarea
          name="message"
          rows="6"
          placeholder="Your Message"
          required
          className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
        ></textarea>
        <button
          type="submit"
          disabled={loading}
          className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded font-semibold transition duration-200 w-full"
        >
          {loading ? (
            <div className="flex justify-center items-center gap-2">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              Sending...
            </div>
          ) : (
            'Send Message'
          )}
        </button>
      </form>

      <ToastContainer position="bottom-right" theme="dark" />
    </section>
  );
}

export default Contact;

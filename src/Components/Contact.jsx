import { useState } from 'react'

const Contact = () => {
    const [formData, setFromData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFromData({
            ...formData,
            [e.target.name]: e. target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent successfully!");
        setFromData({name: "", email: "", message: ""});
    };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
        <form onSubmit={handleSubmit}
        className="w-full max-w-md p-6 border rounded-lg shadow"
        >
            <h2 className="text-2x1 font-bold md-4 text-center">Contact Me</h2>

            <input
               type="text"
               name="name"
               placeholder="Your Name"
               value={setFromData.name}
               onChange={handleChange}
               className="w-full mb-3 p-2 border rounded"
               required 
            />

            <input 
              type="email"
              name="email"
              placeholder="Your Email"
              value={setFromData.email}
              onChange={handleChange}
              className="w-full mb-3 p-2 border rounded"
              required
            />

            <textarea 
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full mb-4 p-2 border rounded"
              required
            />

            <button type="submit"
                   className="w-full bg-black text-white py-2 rounded"
            >
                send Message
            </button>

        </form>

    </div>
  );
};

export default Contact;
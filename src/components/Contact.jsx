import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { Github, Linkedin, Twitter } from 'lucide-react'

const Contact = () => {
  const form = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  const serviceId = "service_hwg71bl";
  const templateId = "template_o2xvkqd";
  const publicKey = "EFmc325Y9L_px_8i8";

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus("")
      setErrors({})
    }, 3000)

    return () => clearTimeout(timer)
  }, [status, errors])

  const handleSubmit = (e) => {
    e.preventDefault();


    const newErrors = {};

    if (name.trim().length < 2) {
      newErrors.name = "Name must be at least more than 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      newErrors.email = "Enter a valid email";
    }

    if (description.trim().length < 10) {
      newErrors.description = "Message should be at least 10 characters";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);


    const templateParams = {
      name: name,
      email: email,
      to_name: "Abdul Adnan",
      message: description,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        setName("");
        setEmail("");
        setDescription("");
        setStatus("Email sent successfully");
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error sending message", err);
        setStatus("Failed! please try again later");
        setLoading(false);
      });
  };

  return (
    <section className="px-6 py-16 scroll-mt-24" id="contact">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-semibold">Contact Me</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left */}
          <div className="flex flex-col justify-center gap-6">
            <div>
              <h2 className="text-xl font-medium mb-2">Let's work together</h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                Got a project, opportunity, or just want to say hi? My inbox is always open — I'll get back to you as soon as I can.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <span className="text-text-secondary">Email</span>
                <a href="mailto:peerabduladnan@gmail.com" className="hover:text-white transition">
                  peerabduladnan@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-text-secondary">Location</span>
                <span>Hyderabad, India</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-text-secondary">Status</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Open to work
                </span>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="https://github.com/AbdulAdnan7" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 text-text-secondary hover:text-white transition" />
              </a>
              <a href="https://linkedin.com/in/peerabduladnan" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 text-text-secondary hover:text-white transition" />
              </a>
              <a href="https://x.com/peerabduladnan" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5 text-text-secondary hover:text-white transition" />
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <form ref={form} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-text-secondary mb-1.5 block">Name</label>
              <input
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm placeholder:text-text-secondary focus:outline-none focus:border-white/30 transition"
              />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="text-sm text-text-secondary mb-1.5 block">Email</label>
              <input
                name="user_email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm placeholder:text-text-secondary focus:outline-none focus:border-white/30 transition"
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="text-sm text-text-secondary mb-1.5 block">Message</label>
              <textarea
                name="message"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="5"
                placeholder="What's on your mind?"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm placeholder:text-text-secondary focus:outline-none focus:border-white/30 transition resize-none"
              />
              {errors.description && <p className="text-red-400 text-xs mt-1">{errors.description}</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-sm font-medium transition"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {status && (
              <p className={`text-center text-sm ${status.includes('Failed') ? 'text-red-400' : 'text-green-400'}`}>
                {status}
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  )
};

export default Contact;

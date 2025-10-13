import React, { useState } from "react";
import { Mail, Facebook, Linkedin, MessageCircle } from "lucide-react";
import avt1 from "./assets/avt.png";
export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !message)
      return alert("Please enter your email and message.");

    const subject = encodeURIComponent("Contact from Portfolio");
    const body = encodeURIComponent(`Email: ${email}\n\nMessage: ${message}`);
    window.location.href = `mailto:nhattruong07122003@gmail.com?subject=${subject}&body=${body}`;

    setSent(true);
    setEmail("");
    setMessage("");
  };

  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-transparent py-12 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start justify-between gap-10">
        {/* ===== Left: Logo + Social Links ===== */}
        <div className="flex flex-col items-start gap-6">
          {/* Logo / Name */}
          <div className="flex items-center gap-3">
            <img
              src={avt1}
              alt="Logo"
              className="w-10 h-10 rounded-full object-cover shadow"
            />
            <span className="font-semibold text-gray-800 dark:text-gray-100 text-xl">
              Nguyễn Nhật Trường
            </span>
          </div>

          {/* Socials Vertical List */}
          <div className="flex flex-col items-start gap-4 text-gray-700 dark:text-gray-300">
            <a
              href="https://www.facebook.com/truong.nguyen.88028"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-blue-600 transition"
            >
              <Facebook size={22} />
              <span className="text-sm font-medium">Facebook</span>
            </a>

            <a
              href="https://www.linkedin.com/in/nhật-trường-nguyễn-8b7922342"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-blue-600 transition"
            >
              <Linkedin size={22} />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>

            <a
              href="https://zalo.me/0327730336"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-blue-600 transition"
            >
              <MessageCircle size={22} />
              <span className="text-sm font-medium">Zalo</span>
            </a>
          </div>
        </div>

        {/* ===== Right: Contact Form ===== */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:max-w-md bg-white/10 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 flex flex-col gap-4 shadow-lg backdrop-blur-md"
        >
          <div className="flex items-center gap-3 w-full">
            <div className="p-2  rounded-md">
              <Mail size={18} className="text-gray-300" />
            </div>
            <input
              type="email"
              placeholder="Your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent focus:outline-none text-sm w-full text-gray-900 dark:text-gray-100 placeholder-gray-400"
            />
          </div>

          <textarea
            placeholder="Your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-transparent focus:outline-none text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 border border-gray-200 dark:border-gray-800 rounded-lg p-3 w-full resize-none"
            rows={4}
          />

          <button
            type="submit"
            className="text-sm px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition shadow-md w-full md:w-auto self-end"
          >
            Send
          </button>

          {sent && (
            <p className="text-green-600 text-sm text-center">
              ✅ Your message has been prepared. Please check your mail app.
            </p>
          )}
        </form>
      </div>

      <p className="text-center text-xs text-gray-500 mt-10">
        © {new Date().getFullYear()} Nguyễn Nhật Trường. All rights reserved.
      </p>
    </footer>
  );
}

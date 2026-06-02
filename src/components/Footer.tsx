"use client";

import { useState } from "react";
import { profile, languages, workExperience } from "@/data/portfolio";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      window.location.href = `mailto:${profile.contact.email}?subject=Portfolio Contact&body=Email: ${email}`;
      setEmail("");
    }
  };

  return (
    <footer id="contact" className="bg-[#eef2f6]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="font-sans text-lg font-bold">
              {profile.name.split(" ")[0]}®
            </p>
            <p className="mt-1 font-sans text-sm text-[#666]">{profile.title}</p>
            <div className="mt-6 space-y-2 text-sm text-[#555]">
              <p>{profile.contact.location}</p>
              <p>
                <a
                  href={`mailto:${profile.contact.email}`}
                  className="hover:underline"
                >
                  {profile.contact.email}
                </a>
              </p>
              <p>{profile.contact.phone}</p>
              <p>{profile.contact.website}</p>
            </div>

            <div className="mt-8">
              <p className="font-sans text-xs font-semibold uppercase tracking-wider text-[#888]">
                Experience
              </p>
              <ul className="mt-3 space-y-2">
                {workExperience.map((job) => (
                  <li key={job.company} className="text-sm text-[#555]">
                    <span className="font-sans font-medium">{job.role}</span>
                    {" · "}
                    {job.company}
                    <span className="block text-xs text-[#999]">{job.period}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-sans text-xl font-bold">Get in touch</h3>
            <p className="mt-2 text-sm text-[#666]">
              Open to UX/UI and product design project collaborations.
            </p>
            <form onSubmit={handleSubscribe} className="mt-6 flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="flex-1 rounded-full border border-[#ddd] bg-white px-5 py-3 text-sm outline-none focus:border-black"
              />
              <button
                type="submit"
                className="rounded-full bg-black px-6 py-3 font-sans text-sm font-medium text-white transition hover:bg-[#333]"
              >
                Contact
              </button>
            </form>

            <div className="mt-8">
              <p className="font-sans text-xs font-semibold uppercase tracking-wider text-[#888]">
                Languages
              </p>
              <div className="mt-3 flex flex-wrap gap-4">
                {languages.map((lang) => (
                  <div key={lang.name} className="text-sm">
                    <span className="font-sans font-medium">{lang.name}</span>
                    <span className="ml-2 text-xs tracking-widest text-[#aaa]">
                      {"★".repeat(lang.stars)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#dde3ea] pt-8 md:flex-row">
          <div className="flex gap-6 font-sans text-xs text-[#888]">
            <a href="#" className="hover:text-black">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-black">
              Terms
            </a>
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#888] transition hover:text-black"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://www.behance.net"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Behance"
              className="text-[#888] transition hover:text-black"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-2.297-5.564-5.625 0-3.131 2.297-5.954 5.305-5.954 3.018 0 4.971 1.932 5.504 4.43h-3.093c-.117-.446-.498-.893-1.411-.893-1.214 0-2.117.893-2.117 2.679 0 1.786.903 2.679 2.117 2.679.913 0 1.294-.447 1.411-.893h3.093zm-7.726-8h-12v14h12v-14z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#888] transition hover:text-black"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>

        <p className="mt-6 text-center font-sans text-xs text-[#aaa]">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

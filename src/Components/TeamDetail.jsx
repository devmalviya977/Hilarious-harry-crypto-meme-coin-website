// src/Components/TeamDetail.jsx
import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URL
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    facebook: 'https://facebook.com',
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URL
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    facebook: 'https://facebook.com',
  },
  {
    name: 'Mark Wilson',
    role: 'Lead Developer',
    imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URL
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    facebook: 'https://facebook.com',
  },
  {
    name: 'Sara Lee',
    role: 'UI/UX Designer',
    imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URL
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    facebook: 'https://facebook.com',
  },
];

const TeamDetail = () => {
  return (
    <div className="md:my-10 py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl font-extrabold text-center text-black font-tillana mb-12">Meet Our Team</h2>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center ">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-lightYellow w-auto  py-14 px-4 rounded-xl shadow-lg text-center items-center">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-40 h-40 mx-auto rounded-full mb-6"
              />
              <h3 className="text-xl font-bold font-tillana text-black">{member.name}</h3>
              <p className="text-black mb-4">{member.role}</p>

              {/* Social Media Links */}
              <div className="flex justify-center space-x-4">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    className="text-black hover:text-orange text-2xl"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                )}
                {member.twitter && (
                  <a
                    href={member.twitter}
                    className="text-black hover:text-orange text-2xl"
                    aria-label="Twitter"
                  >
                    <FaTwitter />
                  </a>
                )}
                {member.facebook && (
                  <a
                    href={member.facebook}
                    className="text-black hover:text-orange text-2xl"
                    aria-label="Facebook"
                  >
                    <FaFacebook />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamDetail;

import React from "react";

const Profile: React.FC = () => {
  return (
    <section className="text-center mb-8">
      <img
        src="https://via.placeholder.com/100"
        alt="Profile"
        className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500"
      />
      <h2 className="text-lg font-bold mt-4">Your Name</h2>
      <p className="text-gray-500">Frontend Developer | React | TypeScript</p>
    </section>
  );
};

export default Profile;

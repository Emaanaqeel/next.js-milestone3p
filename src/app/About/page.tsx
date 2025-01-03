import React from "react";

const AboutUs = () => {
  return (

   
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          About Us
        </h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          Welcome to our blog! We're here to share insights, ideas, and stories
          with a community of curious minds.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Our Mission
            </h2>
            <p className="text-gray-600">
              At this website, we aim to provide valuable content that
              inspires, educates, and entertains our readers. From thought-provoking
              articles to practical tips, we’re committed to delivering content
              that matters.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800">
              Who We Are
            </h2>
            <p className="text-gray-600">
              We are a group of writers, designers, and tech enthusiasts who
              share a passion for creating meaningful content. Our diverse
              backgrounds bring unique perspectives to every post.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg" 
              alt="About Us"
              className="rounded-lg shadow-lg w-full md:w-3/4"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-16 space-y-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Creativity
              </h3>
              <p className="text-gray-600">
                We value original ideas and innovative solutions to provide
                engaging content for our readers.
              </p>
            </div>
            {/* Value 2 */}
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Authenticity
              </h3>
              <p className="text-gray-600">
                Our content reflects our true thoughts and insights. We
                prioritize honesty and transparency.
              </p>
            </div>
            {/* Value 3 */}
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Growth
              </h3>
              <p className="text-gray-600">
                We are committed to learning and evolving to create even better
                experiences for our readers.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Team Member 1 */}
            <div className="text-center">
              <img
                src="/images/team.png" // Replace with your actual team member images
                alt="Team Member"
                className="rounded-full w-32 h-32 mx-auto shadow-md"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
               Emaan Malik
              </h3>
              <p className="text-gray-600">Founder & Content Creator</p>
            </div>
            {/* Team Member 2 */}
            <div className="text-center">
              <img
                src="/images/team1.png" 
                alt="Team Member"
                className="rounded-full w-32 h-32 mx-auto shadow-md"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
               Shanaya Malik
              </h3>
              <p className="text-gray-600">Designer & Editor</p>
            </div>
            {/* Team Member 3 */}
            <div className="text-center">
              <img
                src="/images/team2.png"
                alt="Team Member"
                className="rounded-full w-32 h-32 mx-auto shadow-md"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Emaan Malik
              </h3>
              <p className="text-gray-600">Developer & Strategist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;


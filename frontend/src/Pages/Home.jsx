import React from "react";
import Layout from "../Layout/Layout.jsx";
import mainImage from "../assets/main.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import ParallaxSection from "../Layout/MainPageUI.jsx";
function Main() {
  return (
    <Layout>
      <div className="font-sans">

        {/* HERO SECTION */}
        <section
          className="relative h-screen bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${mainImage})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 h-full flex items-center px-6 md:px-20">
            <div className="max-w-xl text-white space-y-5">
              <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-wide">
                Welcome to My Gym
              </h1>

              <p className="text-gray-200 leading-relaxed">
                Push your limits, build your strength, and transform your body
                with expert training and world-class equipment.
              </p>
            </div>
          </div>
        </section>

        {/* NORMAL SECTION */}
        <section className="h-screen bg-gray-100 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl font-bold mb-4">Why Choose Us?</h1>
          <p className="max-w-xl text-gray-600">
            We provide personalized training, modern equipment, and a motivating
            environment to help you achieve your fitness goals.
          </p>
        </section>

        {/* PARALLAX 1 */}
        <ParallaxSection
          image={image2}
          title="Train Hard"
          subtitle="Strength, endurance, and discipline—everything you need to build the best version of yourself."
        />

        {/* NORMAL SECTION */}
        <section className="h-screen bg-gray-100 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl font-bold mb-4">Our Mission</h1>
          <p className="max-w-xl text-gray-600">
            To inspire a healthier lifestyle by combining expert coaching with
            a powerful fitness community.
          </p>
        </section>

        {/* PARALLAX 2 */}
        <ParallaxSection
          image={image3}
          title="Stay Strong"
          subtitle="Consistency beats motivation. Show up every day and results will follow."
        />

        {/* CONTACT SECTION */}
        <section className="h-screen bg-gray-100 flex flex-col justify-center items-center text-center px-6 text-white">
          <h1 className="text-4xl font-bold mb-4 text-black">Contact Us</h1>
          <p className="max-w-xl text-gray-600">
            Join today and start your fitness journey with us.
          </p>
        </section>

      </div>
    </Layout>
  );
}

export default Main;

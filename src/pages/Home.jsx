import React, { useState } from "react";
import selfCareImage from "@/assets/images/selfcare.svg";
import readingBookImage from "@/assets/images/reading.svg";
import readingBookSideImage from "@/assets/images/reading-side.svg";

import { Fade, Slide } from "react-awesome-reveal";

import {
  ArrowRight,
  Database,
  Eye,
  TrendingUp,
  Heart,
  Users,
  Shield,
  Mail,
} from "lucide-react";

function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-white min-h-[100vh] flex items-center">
        <div className="container mx-auto px-6 py-16 md:py-20 relative bottom-12 md:bottom-30">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center max-w-7xl mx-auto">
            {/* Columna Imagen */}
            <div className="order-1 md:col-span-5 flex justify-center">
              <Slide direction="left" triggerOnce duration={800}>
                <div className="relative w-full">
                  <img
                    src={selfCareImage}
                    alt="Self Care"
                    className="w-full max-w-[320px] md:max-w-full h-auto drop-shadow-lg mx-auto scale-108 md:scale-110"
                  />
                </div>
              </Slide>
            </div>

            {/* Columna Texto */}
            <div className="order-2 md:col-span-7 space-y-6">
              <Slide direction="right" triggerOnce duration={800}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark text-center md:text-left font-brand-heading leading-tight">
                  The{" "}
                  <span className="text-brand-orange">Flare Initiative</span>
                </h1>

                <p className="text-lg text-center md:text-left md:text-xl text-brand-dark/70 font-brand leading-relaxed max-w-2xl">
                  Shining a light on first responder suicides through
                  data-driven prevention and national visibility.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href="#mission"
                    className="group px-6 py-3 rounded-full bg-brand-orange text-white hover:opacity-90 transition-all font-medium flex items-center justify-center gap-2"
                  >
                    Our Mission
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#help"
                    className="px-6 py-3 rounded-full border border-brand-orange/20 text-brand-dark hover:bg-brand-peach transition-all font-medium text-center"
                  >
                    How You Can Help
                  </a>
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <Fade triggerOnce duration={800}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 font-brand-heading">
                Who We Are
              </h2>
              <div className="w-20 h-1 bg-brand-orange mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              {/* Imagen */}
              <div className="md:col-span-5 flex justify-center">
                <div className="relative w-full transform transition-transform duration-300">
                  <img
                    src={readingBookImage}
                    alt="Reading and Learning"
                    className="w-full h-auto drop-shadow-2xl md:scale-130 "
                  />
                </div>
              </div>

              {/* Texto */}
              <div className="md:col-span-7 text-center md:text-left space-y-6 text-brand-dark/80 font-brand leading-relaxed text-lg">
                <p>
                  The Flare Initiative was created in response to a gap in
                  suicide tracking for first responders. Canada currently has no
                  consistent system to track suicides among police, fire, EMS,
                  corrections, or dispatch personnel.
                </p>
                <p>
                  Existing information is fragmented, inconsistent, and
                  inaccessible, leaving first responder agencies and mental
                  health organizations unable to fully understand the scope of
                  the issue or evaluate prevention efforts.
                </p>
                <p className="text-brand-dark font-semibold text-xl">
                  By creating visibility on the true scale of first responder
                  suicides, the Flare Initiative will provide the evidence base
                  for effective prevention programs, inform policy changes, and
                  reduce stigma around first responder mental health.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-16 md:py-24 bg-brand-peach">
        <Fade triggerOnce duration={800}>
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6 font-brand-heading">
                Our Mission
              </h2>
              <p className="text-xl md:text-2xl text-brand-dark/80 font-brand leading-relaxed">
                To reduce first responder suicides through data-driven
                prevention.
              </p>
              <p className="text-lg text-brand-dark/70 font-brand mt-6 leading-relaxed">
                By creating visibility on the true scale of first responder
                suicides, the Flare Initiative will provide the evidence base
                for effective prevention programs.
              </p>
            </div>
            <div>
              <img
                src={readingBookSideImage}
                alt="Reading and Learning"
                className="w-full h-auto drop-shadow-2xl max-w-md mx-auto mt-10 md:scale-130"
              />
            </div>
          </div>
        </Fade>
      </section>

      {/* Approach Section */}
      <section className="py-16 md:py-24 bg-white">
        <Fade triggerOnce duration={800}>
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 font-brand-heading">
                Our Approach
              </h2>
              <div className="w-20 h-1 bg-brand-orange mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {/* Step 01 */}
              <div className="text-center space-y-4">
                <div className="relative w-16 h-16 mx-auto">
                  <div className="absolute inset-0 bg-rose-200 transform rotate-3 rounded-[40%_60%_70%_30%/60%_30%_70%_40%]"></div>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Database
                      className="w-7 h-7 text-rose-600"
                      strokeWidth={2.5}
                    />
                  </div>
                </div>
                <div className="text-4xl font-bold text-brand-orange font-brand-heading">
                  01
                </div>
                <h3 className="text-xl font-bold text-brand-dark font-brand-heading">
                  Collect Data
                </h3>
                <p className="text-brand-dark/70 font-brand">
                  Build a secure national database with historical and current
                  information.
                </p>
              </div>

              {/* Step 02 */}
              <div className="text-center space-y-4">
                <div className="relative w-16 h-16 mx-auto">
                  <div className="absolute inset-0 bg-amber-200 transform -rotate-2 rounded-[60%_40%_30%_70%/60%_30%_70%_40%]"></div>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Eye className="w-7 h-7 text-amber-700" strokeWidth={2.5} />
                  </div>
                </div>
                <div className="text-4xl font-bold text-brand-orange font-brand-heading">
                  02
                </div>
                <h3 className="text-xl font-bold text-brand-dark font-brand-heading">
                  Make It Visible
                </h3>
                <p className="text-brand-dark/70 font-brand">
                  Share suicide trends through transparent, trauma-informed
                  reporting.
                </p>
              </div>

              {/* Step 03 */}
              <div className="text-center space-y-4">
                <div className="relative w-16 h-16 mx-auto">
                  <div className="absolute inset-0 bg-sky-200 transform rotate-6 rounded-[30%_70%_70%_30%/30%_60%_40%_70%]"></div>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <TrendingUp
                      className="w-7 h-7 text-sky-700"
                      strokeWidth={2.5}
                    />
                  </div>
                </div>
                <div className="text-4xl font-bold text-brand-orange font-brand-heading">
                  03
                </div>
                <h3 className="text-xl font-bold text-brand-dark font-brand-heading">
                  Drive Change
                </h3>
                <p className="text-brand-dark/70 font-brand">
                  Equip organizations and governments with evidence to guide
                  prevention and policy.
                </p>
              </div>

              {/* Step 04 */}
              <div className="text-center space-y-4">
                <div className="relative w-16 h-16 mx-auto">
                  <div className="absolute inset-0 bg-emerald-200 transform -rotate-3 rounded-[50%_50%_60%_40%/40%_60%_50%_50%]"></div>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Heart
                      className="w-7 h-7 text-emerald-700 fill-emerald-700"
                      strokeWidth={2.5}
                    />
                  </div>
                </div>
                <div className="text-4xl font-bold text-brand-orange font-brand-heading">
                  04
                </div>
                <h3 className="text-xl font-bold text-brand-dark font-brand-heading">
                  Long-Term Impact
                </h3>
                <p className="text-brand-dark/70 font-brand">
                  Stronger prevention programs, national reporting standards,
                  reduced stigma, and consistent support for families.
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </section>

      {/* How You Can Help Section */}
      <section id="help" className="py-16 md:py-24 bg-brand-white">
        <Fade triggerOnce duration={800}>
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 font-brand-heading">
                How You Can Help
              </h2>
              <div className="w-20 h-1 bg-brand-orange mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Partner */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-orange/10 space-y-4 text-center">
                <div className="relative w-16 h-16 mx-auto">
                  <div className="absolute inset-0 bg-violet-200 transform rotate-2 rounded-[45%_55%_60%_40%/55%_45%_55%_45%]"></div>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Users
                      className="w-7 h-7 text-violet-700"
                      strokeWidth={2.5}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brand-dark font-brand-heading">
                  Partner With Us
                </h3>
                <p className="text-brand-dark/70 font-brand">
                  Collaborate on building a secure, national system for first
                  responder suicide tracking.
                </p>
                <button className="mt-4 px-6 py-2 rounded-full border border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white transition-all font-medium">
                  Learn More
                </button>
              </div>

              {/* Donate */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-orange/10 space-y-4 text-center">
                <div className="relative w-16 h-16 mx-auto">
                  <div className="absolute inset-0 bg-rose-200 transform -rotate-3 rounded-[55%_45%_50%_50%/60%_40%_60%_40%]"></div>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Heart
                      className="w-7 h-7 text-rose-600 fill-rose-600"
                      strokeWidth={2.5}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brand-dark font-brand-heading">
                  Donate
                </h3>
                <p className="text-brand-dark/70 font-brand">
                  Support the development of a sustainable database that ensures
                  long-term visibility and accountability.
                </p>
                <button className="mt-4 px-6 py-2 rounded-full bg-brand-orange text-white hover:opacity-90 transition-all font-medium">
                  Donate Now
                </button>
              </div>

              {/* Support */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-orange/10 space-y-4 text-center">
                <div className="relative w-16 h-16 mx-auto">
                  <div className="absolute inset-0 bg-amber-200 transform rotate-4 rounded-[50%_50%_65%_35%/45%_55%_45%_55%]"></div>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Shield
                      className="w-7 h-7 text-amber-700"
                      strokeWidth={2.5}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brand-dark font-brand-heading">
                  Support Us
                </h3>
                <p className="text-brand-dark/70 font-brand">
                  Help bring national attention to an issue too often
                  overlooked.
                </p>
                <button className="mt-4 px-6 py-2 rounded-full border border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white transition-all font-medium">
                  Get Involved
                </button>
              </div>
            </div>
          </div>
        </Fade>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 font-brand-heading">
              Contact Us
            </h2>
            <div className="w-20 h-1 bg-brand-orange mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-brand-dark font-medium mb-2 font-brand"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-brand-orange/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/50 font-brand"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-brand-dark font-medium mb-2 font-brand"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-brand-orange/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/50 font-brand"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-brand-dark font-medium mb-2 font-brand"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-brand-orange/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/50 font-brand resize-none"
              ></textarea>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full px-8 py-4 bg-brand-orange text-white rounded-full font-medium text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              Send Message
              <Mail className="w-5 h-5" />
            </button>

            <p className="text-sm text-brand-dark/60 text-center font-brand">
              FormSubmit will open in a new tab to complete the submission. The
              information I receive is your message and your email address to
              respond to you. I do not store or share it with third parties.
            </p>
          </div>
        </div>
      </section>

      {/* Crisis Support CTA Section */}
      <section className="py-16 md:py-20 bg-brand-peach">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 font-brand-heading">
            Need immediate support?
          </h2>
          <p className="text-brand-dark/70 text-lg mb-8 font-brand">
            If you or someone you know is in crisis, help is available 24/7. You
            are not alone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
            <a
              href="tel:988"
              className="inline-block px-8 py-4 bg-brand-orange text-white rounded-full font-medium text-lg hover:opacity-90 transition-all"
            >
              Call 9-8-8 (Canada)
            </a>
            <a
              href="tel:18334564566"
              className="inline-block px-8 py-4 border-2 border-brand-orange text-brand-orange rounded-full font-medium text-lg hover:bg-brand-orange hover:text-white transition-all"
            >
              First Responders: 1-833-456-4566
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

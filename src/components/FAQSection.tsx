import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Shield, Clock, CheckCircle } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What services does HemTech offer?',
      answer: 'HemTech provides comprehensive digital services including web development, AI integration, SEO & digital marketing, and social media management. We specialize in creating custom solutions that drive business growth and improve online presence.'
    },
    {
      question: 'How long does it take to complete a project?',
      answer: 'Project timelines vary based on complexity and scope. Typically, a basic website takes 2-3 weeks, while more complex projects with AI integration or custom features may take 4-8 weeks. We provide detailed timelines during our consultation phase.'
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes! We offer comprehensive post-launch support including maintenance, updates, technical assistance, and performance monitoring. Our support packages range from basic maintenance to 24/7 premium support depending on your needs.'
    },
    {
      question: 'What makes HemTech different from other digital agencies?',
      answer: 'HemTech combines cutting-edge technology with personalized service. We specialize in AI integration, offer transparent pricing, maintain 100% client satisfaction, and provide ongoing support. Our founder, Hemstone Vidonyi, personally oversees every project to ensure quality.'
    },
    {
      question: 'Can you help improve my existing website?',
      answer: 'Absolutely! We offer website optimization services including performance improvements, SEO enhancements, mobile responsiveness updates, security upgrades, and feature additions. We can work with your existing site or recommend a complete redesign if needed.'
    },
    {
      question: 'Do you work with businesses outside Kenya?',
      answer: 'Yes, we work with clients globally! While we\'re based in Nairobi, Kenya, we serve businesses worldwide through remote collaboration. We use modern communication tools to ensure seamless project management regardless of location.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'We offer transparent, competitive pricing with packages starting from Ksh 15,000 for basic websites. Pricing varies based on project complexity, features required, and ongoing support needs. We provide detailed quotes after understanding your specific requirements.'
    },
    {
      question: 'Do I own my website and content after completion?',
      answer: 'Yes, you have complete ownership of your website, content, and all associated assets upon project completion and final payment. We believe in full transparency and client ownership of their digital properties.'
    }
  ];

  const reassurances = [
    {
      icon: Shield,
      title: 'Full Ownership',
      description: 'You own 100% of your website and content'
    },
    {
      icon: CheckCircle,
      title: 'Quality Guarantee',
      description: '100% satisfaction or money back'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Projects delivered on time, every time'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/5 to-indigo-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-indigo-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <HelpCircle className="w-12 h-12 text-blue-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get answers to common questions about our services, process, and policies.
          </p>
        </div>

        {/* Reassurances */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reassurances.map((item, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
              <div className="flex justify-center mb-3">
                <item.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                {openFAQ === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Our team is here to help!
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
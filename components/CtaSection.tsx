import React from 'react';

export const CtaSection: React.FC = () => {
  return (
    <section id="register" className="py-16 md:py-24 bg-brand-green">
      <div className="container mx-auto px-4 sm-px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">
            Ready to Start Building?
          </h2>
          <p className="text-lg text-green-100 mb-10 max-w-2xl mx-auto">
            Dive into the free introductory learning plan and start building your cloud skills today. It only takes a few clicks to get started.
          </p>

          <div className="mt-12">
            <a 
              href="https://skillbuilder.aws/learning-plan/JE1AJBF5ZP/introduction-to-aws-cloud-builder-labs-learning-plan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-brand-dark-blue font-bold py-5 px-12 rounded-lg text-xl hover:bg-gray-200 transition duration-300 transform hover:scale-105 shadow-2xl"
            >
              Start the Learning Plan Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
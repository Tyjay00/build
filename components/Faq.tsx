import React, { useState } from 'react';

interface FaqItemProps {
  question: string;
  children: React.ReactNode;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-text-primary focus:outline-none"
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <svg
          className={`w-5 h-5 transform transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}
      >
        <p className="text-text-secondary leading-relaxed pr-8">{children}</p>
      </div>
    </div>
  );
};

export const Faq: React.FC = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-4 tracking-tighter">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <FaqItem question="Are the AWS Builder Labs really free?">
            Yes, 100% free. AWS provides access to a large catalog of labs that you can take at your own pace without any cost. Each lab provides a temporary AWS account for you to use.
          </FaqItem>
          <FaqItem question="Who is this learning plan for?">
            It's designed for anyone new to the cloud or AWS. Whether you're a student, a developer, or just curious, this is the perfect starting point with no prior experience needed.
          </FaqItem>
          <FaqItem question="Do I need my own AWS account or a credit card?">
            No. For each lab, you'll be given access to a temporary, sandboxed AWS account. You do not need to provide your own account or any payment information.
          </FaqItem>
          <FaqItem question="Is this 'Introduction' Learning Plan the only free content?">
            No! This plan is a curated starting point. After completing it, you can explore over 100 other free labs and digital courses on the AWS Skill Builder platform.
          </FaqItem>
           <FaqItem question="Will I get a certificate after completing a lab?">
            While individual labs do not grant formal certifications, they provide invaluable hands-on experience. The verifiable skills you gain are the real reward and a powerful addition to your resume.
          </FaqItem>
        </div>
      </div>
    </section>
  );
};
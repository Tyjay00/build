import React from 'react';

const Feature: React.FC<{ icon: React.ReactNode; children: React.ReactNode }> = ({ icon, children }) => (
    <div className="flex items-center space-x-3">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center">
            {icon}
        </div>
        <span className="text-lg text-text-secondary">{children}</span>
    </div>
);


export const Hero: React.FC = () => {
  return (
    <section className="relative bg-white pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden opacity-30 z-0">
            <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gray-100 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-green-50 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid lg:grid-cols-5 gap-8 items-center max-w-7xl mx-auto">
                {/* Content Section */}
                <div className="lg:col-span-2 text-center lg:text-left z-20 relative">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text-primary tracking-tighter leading-tight">
                        Unlock Your Future in the Cloud for <span className="text-brand-green">Free</span>
                    </h1>
                    <p className="mt-6 text-xl text-text-secondary">
                        Gain valuable, hands-on AWS skills with free Builder Labs. No credit card required, just a desire to learn and build.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a 
                            href="https://skillbuilder.aws/learning-plan/JE1AJBF5ZP/introduction-to-aws-cloud-builder-labs-learning-plan" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block bg-brand-green text-white font-bold py-4 px-10 rounded-lg text-lg hover:opacity-90 transition duration-300 transform hover:scale-105 shadow-lg text-center"
                        >
                            Access the Learning Plan
                        </a>
                        <a 
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdtkU6jeS47PoTFn_3R-ajhb-wh0JI32W8vsSDwKle30w90RA/viewform?usp=dialog" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block bg-brand-green text-white font-bold py-4 px-10 rounded-lg text-lg hover:opacity-90 transition duration-300 transform hover:scale-105 shadow-lg text-center"
                        >
                            Join Live guided sessions Online
                        </a>
                    </div>
                </div>

                {/* Image Section - Takes up 3/5 of the space */}
                <div className="lg:col-span-3 relative">
                    <div className="relative w-full">
                        {/* Main large image with embedded styling */}
                        <div className="relative overflow-hidden">
                            <img 
                                src="/images/tyrone.png" 
                                alt="AWS Cloud Professional - Tyrone" 
                                className="w-full h-[500px] sm:h-[600px] lg:h-[700px] xl:h-[800px] object-cover object-center shadow-2xl"
                                style={{
                                    borderRadius: '2rem 0.5rem 2rem 0.5rem',
                                    clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)'
                                }}
                            />
                            
                            {/* Overlay gradient for better text contrast if needed */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-brand-green/5 pointer-events-none"></div>
                        </div>
                        
                        {/* Enhanced decorative elements that integrate with the page */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-green/15 rounded-full blur-2xl animate-pulse"></div>
                        <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-500/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
                        
                        {/* Embedded geometric accent */}
                        <div className="absolute top-6 right-6 w-12 h-12 border-2 border-brand-green/30 rounded-lg rotate-12 backdrop-blur-sm"></div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="mt-20 flex flex-col sm:flex-row justify-center items-center gap-x-12 gap-y-6 max-w-4xl mx-auto">
                <Feature icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>}>
                    10 Free Labs
                </Feature>
                <Feature icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>}>
                    Real AWS Environment
                </Feature>
                <Feature icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c.058 0 .117.002.175.005L12 11c-2.485 0-4.5 2.015-4.5 4.5S9.515 20 12 20s4.5-2.015 4.5-4.5c0-.135-.006-.268-.018-.4M12 11V7m0 4c-2.485 0-4.5 2.015-4.5 4.5S9.515 20 12 20s4.5-2.015 4.5-4.5c0-1.07-.37-2.05-.98-2.828M18 8a6 6 0 11-12 0 6 6 0 0112 0z" /></svg>}>
                    No Experience Needed
                </Feature>
            </div>
        </div>
    </section>
  );
};
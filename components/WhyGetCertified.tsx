import React from 'react';

const BenefitCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-gray-50 p-8 rounded-lg transition-all duration-300 border border-gray-200 hover:border-gray-300 hover:shadow-xl">
        <div className="text-brand-green mb-4">{icon}</div>
        <h3 className="text-2xl font-bold text-text-primary mb-3">{title}</h3>
        <p className="text-text-secondary">{children}</p>
    </div>
);

export const WhyLearnOnAWS: React.FC = () => {
    return (
        <section id="benefits" className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-4 tracking-tighter">Why Start with this Learning Plan?</h2>
                    <p className="text-lg text-text-secondary">
                        This curated plan is the perfect starting point to gain practical, hands-on experience that modern employers value.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <BenefitCard 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
                        title="Real-World Scenarios"
                    >
                        Go beyond theory. Build practical solutions in a live AWS environment, from hosting a website to training an AI model.
                    </BenefitCard>
                    <BenefitCard 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg>}
                        title="Risk-Free Exploration"
                    >
                        Experiment with a wide range of AWS services in a sandboxed environment without worrying about costs or breaking things.
                    </BenefitCard>
                    <BenefitCard 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20M12 12L8 14.5 4 12l8-4.5 8 4.5-4 2.5" /></svg>}
                        title="Build In-Demand Skills"
                    >
                        Develop practical skills in high-demand areas like Serverless, AI/ML, and Data Analytics that will make your resume stand out.
                    </BenefitCard>
                </div>
            </div>
        </section>
    );
};
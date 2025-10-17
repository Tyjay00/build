import React from 'react';

const StepCard: React.FC<{ number: string; title: string; children: React.ReactNode }> = ({ number, title, children }) => (
    <div className="grid grid-cols-[auto,1fr] gap-x-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-green/10 text-brand-green font-extrabold text-2xl">
            {number}
        </div>
        <div>
            <h3 className="text-xl font-bold text-text-primary mb-1">{title}</h3>
            <p className="text-text-secondary">{children}</p>
        </div>
    </div>
);


export const HowItWorks: React.FC = () => {
    return (
        <section id="steps" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-4 tracking-tighter">Your Journey in 4 Simple Steps</h2>
                    <p className="text-lg text-text-secondary">Follow this path to start building real-world cloud solutions in minutes.</p>
                </div>

                <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                   <StepCard number="1" title="Access the Plan">
                        Use the link to go to the free 'Introduction to AWS Cloud Builder Labs' learning plan on AWS Skill Builder.
                    </StepCard>
                    <StepCard number="2" title="Sign Up / Log In">
                        Create a free AWS Skill Builder account or log in. This gives you access to the entire learning plan.
                    </StepCard>
                    <StepCard number="3" title="Select a Lab">
                        Follow the learning plan and choose a foundational lab, such as 'Introduction to Amazon EC2' or 'Building a Static Website'.
                    </StepCard>
                     <StepCard number="4" title="Learn by Doing">
                        Fill in the form and join the step by step guidance from an Instructor hosted online
                    </StepCard>
                </div>
            </div>
        </section>
    );
}
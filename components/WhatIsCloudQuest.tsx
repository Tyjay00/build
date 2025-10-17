import React from 'react';

const CategoryCard: React.FC<{ title: string; imageUrl: string }> = ({ title, imageUrl }) => (
  <a 
    href="https://skillbuilder.aws/learning-plan/JE1AJBF5ZP/introduction-to-aws-cloud-builder-labs-learning-plan"
    target="_blank"
    rel="noopener noreferrer"
    className="relative block rounded-lg overflow-hidden group aspect-w-16 aspect-h-9 shadow-lg"
  >
    <img src={imageUrl} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
    <div className="absolute inset-0 flex items-end p-6">
      <h3 className="text-2xl font-bold text-white tracking-tight">{title}</h3>
    </div>
  </a>
);

export const FeaturedContent: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-4 tracking-tighter">What You'll Learn in the Intro Plan</h2>
          <p className="text-lg text-text-secondary">This learning plan provides hands-on experience with core AWS services perfect for beginners.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <CategoryCard title="Launch a Virtual Server" imageUrl="https://images.unsplash.com/photo-1580894908361-967195033215?q=80&w=800&auto=format&fit=crop" />
          <CategoryCard title="Store & Host Assets" imageUrl="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop"  />
          <CategoryCard title="Build a Virtual Network" imageUrl="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop" />
          <CategoryCard title="Manage User Permissions" imageUrl="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" />
      </div>
      </div>
    </section>
  );
};
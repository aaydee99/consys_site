import React from 'react'

const About = () => {
  return (
    <div className="py-16 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center">
        <span className="section-tag">About Us</span>
        <h2 className="section-title">Our Story</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="text-left">
            <p className="text-gray-700 mb-6">At CONSYS, we take pride in our team of highly skilled Professional Engineers and Managers with over 12 years of experience in the construction industry. Specializing in the construction of buildings, roads, sewerage systems, and water supply projects, our team brings expertise and precision to every project. </p>
            <p className="text-gray-700 mb-6">Our leadership is spearheaded by Engr. Tahir Yousaf, a Civil Engineer with 26 years of experience, who serves as the company's major shareholder. Alongside him, Mr. Mirza Azhar Baig (MBA) plays a crucial role as the General Manager and managing partner, ensuring operational excellence and strategic growth.</p>
            <p className="text-gray-700 mb-6">At CONSYS, we are committed to maintaining professionalism and innovation in construction and management. Our well-knit team stays ahead of the curve with modern construction practices, ensuring quality and efficiency in every project.</p>
            <p className="text-gray-700 mb-6">Additionally, we collaborate with specialized equipment providers to meet the unique demands of each project. Our company-owned equipment is also listed in our brochure, demonstrating our capability to handle projects with cutting-edge resources and industry expertise.</p>
            <p className="text-gray-700 mb-6">Driven by excellence, integrity, and innovation, CONSYS continues to build a better future—one project at a time.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1581094480465-4e6c25fb4a52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                alt="Engineers discussing project" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                alt="Survey equipment in field" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                alt="Consultation meeting" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                alt="Blueprint review" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About
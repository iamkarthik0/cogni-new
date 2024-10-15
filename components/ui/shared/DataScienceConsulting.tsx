import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DataScienceConsulting() {
  const services = [
    {
      title: "AI for healthcare",
      description: "We have successfully delivered large-scale projects in the healthcare sector, developing advanced clinical named entity recognition models and predictive analytics for patient outcomes and workforce management. Our work focuses on enhancing healthcare operations and improving patient outcomes through AI-driven innovations.",
      color: "bg-blue-600",
      hoverColor: "group-hover:bg-blue-700",
    },
    {
      title: "AI in pharmaceuticals",
      description: "The pharmaceutical industry is rapidly adopting AI technologies. We have worked on projects utilizing AI models to extract valuable data from clinical trials, drug interactions, and molecular structures to accelerate drug discovery through AI-powered solutions.",
      color: "bg-gray-200",
      hoverColor: "group-hover:bg-gray-300",
    },
    {
      title: "AI in Retail",
      description: "Our solutions empower retailers to create personalized shopping experiences with AI-driven insights, helping deliver more effective customer experiences while optimizing inventory and operations. Businesses optimize inventory and boost sales. Cognitive AI, NLP, and computer vision technologies enable advanced retail analytics experiences, enhancing customer satisfaction and loyalty.",
      color: "bg-gray-200",
      hoverColor: "group-hover:bg-gray-300",
    },
    {
      title: "AI for Manufacturing",
      description: "Transforming the manufacturing landscape with innovative predictive maintenance, quality control, and supply chain optimization. By leveraging advanced machine learning models and data analytics, equipment AI helps manufacturers reduce downtime, enhance product quality, and streamline operations. Our expertise empowers manufacturers to stay competitive in an industry driven by innovation and efficiency.",
      color: "bg-gray-200",
      hoverColor: "group-hover:bg-gray-300",
    },
    {
      title: "AI for Energy",
      description: "We are at the forefront of revolutionizing the energy sector with AI-driven solutions. Developing sophisticated predictive models for energy consumption forecasting, anomaly detection in grid operations, and optimization of renewable energy resources. Our AI solutions support energy companies in reducing operational costs, improving grid reliability, forecasting demand and supply, managing smart grids, and contributing to a sustainable future through efficient energy management.",
      color: "bg-gray-200",
      hoverColor: "group-hover:bg-gray-300",
    },
    {
      title: "AI in Media and Entertainment",
      description: "Pioneering media and entertainment solutions with cutting-edge AI technologies that enhance content creation, distribution, and audience engagement. From advanced recommendation systems, content analysis, automated content generation, and personalized recommendations to immersive AR/VR experiences and captivating storytelling. We help media companies thrive in an increasingly competitive and rapidly evolving digital landscape.",
      color: "bg-gray-200",
      hoverColor: "group-hover:bg-gray-300",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="h2  text-center mb-3">Data Science Consulting Services</h1>
      <p className="text-center mb-12 subtle-text">AI consultancy in the US and India - wide across industries and purposes</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card 
            key={index} 
            className={`group bg-[#D9D9D9]  hover:bg-[#0055A7] transition-all duration-300 ease-in-out cursor-pointer rounded-none`}
          >
            <CardHeader>
              <CardTitle className="text-xl font-semibold group-hover:text-white transition-colors duration-300 ease-in-out">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm group-hover:text-white transition-colors duration-300 ease-in-out">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
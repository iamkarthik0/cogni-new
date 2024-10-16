import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DataScienceConsulting(props:any) {

  const {heading,paragraph,card} = props.services; 


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="h2  text-center mb-3">{heading}</h1>
      <p className="text-center mb-12 subtle-text">{paragraph}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {card.map((service:any, index:any) => (
          <Card 
            key={index} 
            className={`group bg-[#D9D9D9]  hover:bg-[#0055A7] transition-all duration-300 ease-in-out cursor-pointer rounded-none`}
          >
            <CardHeader>
              <CardTitle className="text-xl font-semibold group-hover:text-white transition-colors duration-300 ease-in-out">{service.heading}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm group-hover:text-white transition-colors duration-300 ease-in-out">{service.paragraph}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
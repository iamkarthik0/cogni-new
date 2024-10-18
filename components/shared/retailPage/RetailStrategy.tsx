import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RetailStrategy() {
    const solutions = [
        {
          title: "Sentiment Analysis",
          description: "Understand how your customers feel about your brand, products, and services through advanced NLP models. Our sentiment analysis tools help you gauge customer satisfaction, identify potential issues early, and tailor your marketing strategies to resonate with your audience."
        },
        {
          title: "Fraud Detection",
          description: "Protect your business and customers with AI-powered fraud detection systems. We leverage machine learning algorithms to detect unusual patterns and prevent fraudulent activities, ensuring secure transactions and maintaining customer trust."
        },
        {
          title: "Price Optimization",
          description: "Maximize your profitability by using dynamic pricing strategies. Our price optimization models analyze market trends, demand fluctuations, and competitor pricing to recommend optimal prices that balance profitability and sales volume."
        },
        {
          title: "Inventory Management",
          description: "Eliminate stockouts and overstock situations with our intelligent inventory management solutions. By predicting demand accurately, we help you maintain optimal stock levels, reducing costs and improving customer satisfaction."
        },
        {
          title: "Personalized Marketing",
          description: "Deliver tailored marketing messages to each customer segment. Our personalized marketing solutions use customer data to create targeted campaigns that boost engagement and drive conversions, enhancing customer loyalty and lifetime value."
        },
        {
          title: "Location of New Stores",
          description: "Make data-driven decisions on where to open your next store. Using Location Intelligence, we analyze demographic data, market trends, and competition to identify prime locations that promise high foot traffic and profitability."
        },
        {
          title: "Merchandising",
          description: "Optimize your merchandising strategy with insights from advanced analytics. Our solutions help you determine the ideal product mix, placement, and promotions to maximize sales and enhance the shopping experience."
        },
        {
          title: "Social Media Insights",
          description: "Harness the power of social media to understand trends and consumer behavior. Our social media analytics tools provide actionable insights that inform your marketing strategies and help you connect with your audience more effectively."
        },
        {
          title: "Recommendation System",
          description: "Boost sales and customer satisfaction with personalized product recommendations. Our recommendation engines use advanced machine learning to suggest products based on customer preferences, purchase history, and browsing behavior."
        },
        {
          title: "Lifetime Value Prediction",
          description: "Identify your most valuable customers and predict future spending with our lifetime value prediction models. This allows you to focus your marketing efforts on retaining high-value customers and maximizing long-term profitability."
        },
        {
          title: "Market Basket Analysis",
          description: "Uncover patterns in customer purchasing behavior with market basket analysis. This helps you create effective cross-selling and up-selling strategies, increasing the average order value and enhancing the shopping experience."
        },
        {
          title: "Warranty Analytics",
          description: "Reduce costs and improve customer service with our warranty analytics solutions. We help you analyze warranty claims to identify product quality issues and optimize your warranty policies, ensuring customer satisfaction and brand loyalty."
        }
      ];
      

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((service, index) => (
          <Card key={index} className="flex flex-col border-none">
            <CardHeader>
              <CardTitle className="h4">
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-gray-600">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

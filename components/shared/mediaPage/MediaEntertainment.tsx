import { Card, CardContent } from "@/components/ui/card";

export default function MediaEntertainment() {
  const techniques = [
    {
      title: "Natural Language Processing (NLP)",
      description:
        "NLP enables the analysis of text data, including scripts, subtitles, and social media comments, to gain insights and automate tasks like caption generation and content tagging.",
    },
    {
      title: "Machine Learning (ML)",
      description:
        "Machine learning models help predict trends, personalize content, and automate decision-making processes, such as ad placement and content scheduling.",
    },
    {
      title: "Deep Learning",
      description:
        "Utilize deep learning for advanced image and video recognition, enabling improved video editing, automated highlight generation, and scene detection.",
    },
    {
      title: "Reinforcement Learning",
      description:
        "Optimize user engagement by dynamically adapting content recommendations and interactive experiences based on user feedback and behavior.",
    },
    {
      title: "Computer Vision",
      description:
        "Use advanced image analysis and recognition for tasks like content filtering, facial recognition, object segmentation, and automated content moderation.",
    },
  ];

  return (
    <div className="p-4 bg-white max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4  place-content-center">
        {techniques.map((technique, index) => (
          <Card key={index} className={`bg-[#EEEEEE] rounded-[23px]  py-5`}>
            <CardContent className="p-4 space-y-8 ">
              <h3 className="paragraph font-bold  ">{technique.title}</h3>
              <p className="text-sm text-gray-600">{technique.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

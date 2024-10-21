import { Button } from "@/components/ui/button";
import React from "react";

const DeepMain = () => {
  return (
    <div>
      <div className=" lg:pt-20 pt-16">
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
          <div className=" group lg:w-[271px] lg:h-[492px] bg-[#D9D9D9] hover:bg-[#0055A7] flex-col space-y-4  p-6 cursor-pointer">
            <h2 className="  h4 group-hover:text-white">
              {" "}
              Business value exploration
            </h2>
            <p className=" group-hover:text-white">
              Cogninest AI experts in deep learning consulting will define your
              business problem and come up with an appropriate way to solve it
              with deep learning — or an alternative AI subset. We will assess
              the viability of deep learning implementation with the specifics
              of your business in mind...
            </p>
          </div>

          <div className=" group lg:w-[271px] lg:h-[492px] bg-[#D9D9D9] hover:bg-[#0055A7] flex-col space-y-4  p-6 cursor-pointer">
            <h2 className="  h4 group-hover:text-white">
              {" "}
              Exploratory data analysis
            </h2>
            <p className=" group-hover:text-white">
              We will dig into your data to validate it’s a good fit for
              training algorithms. If you don’t have enough data points, no
              worries. An experienced deep learning consulting services vendor,
              we will develop an optimum strategy to compensate for the lack, as
              well as help clean, process, and label data...
            </p>
          </div>

          <div className=" group lg:w-[271px] lg:h-[492px] bg-[#D9D9D9] hover:bg-[#0055A7] flex-col space-y-4  p-6 cursor-pointer">
            <h2 className="  h4 group-hover:text-white">
              {" "}
              Deep learning model implementation
            </h2>
            <p className=" group-hover:text-white">
              For those who are ready to move onto implementation, we will bring
              our deep learning engineers to train and deploy deep learning
              models. Our priorities are high accuracy, high performance,
              optimal operational costs, and seamless integration with other
              enterprise systems...
            </p>
          </div>

          <div className=" group lg:w-[271px] lg:h-[492px] bg-[#D9D9D9] hover:bg-[#0055A7] flex-col space-y-4  p-6 cursor-pointer">
            <h2 className="  h4 group-hover:text-white">
              {" "}
              Deep learning app development
            </h2>
            <p className=" group-hover:text-white">
              We will not only train and implement a high-performing deep
              learning model but also develop a business application to
              operationalize it. We will put down and implement all the
              necessary integrations as well...
            </p>
          </div>

          <div className=" group lg:w-[271px] lg:h-[492px] bg-[#D9D9D9] hover:bg-[#0055A7] flex-col space-y-4  p-6 cursor-pointer">
            <h2 className="  h4 group-hover:text-white">
              {" "}
              Deep learning model evaluation
            </h2>
            <p className=" group-hover:text-white">
              As a part of our deep learning consulting services, we can
              identify risks bound to your deep learning model portfolio and
              nail down actionable suggestions on how to combat them. We can
              help you improve models’ accuracy and speed, and cut down
              operational costs...
            </p>
          </div>

          <div className=" group lg:w-[271px] lg:h-[492px] bg-[#D9D9D9] hover:bg-[#0055A7] flex-col space-y-4  p-6 cursor-pointer">
            <h2 className="  h4 group-hover:text-white">
              {" "}
              Business value exploration
            </h2>
            <p className=" group-hover:text-white">
              Cogninest AI experts in deep learning consulting will define your
              business problem and come up with an appropriate way to solve it
              with deep learning — or an alternative AI subset. We will assess
              the viability of deep learning implementation with the specifics
              of your business in mind...
            </p>
          </div>

          <div className=" group lg:w-[271px] lg:h-[492px] bg-[#D9D9D9] hover:bg-[#0055A7] flex-col space-y-4  p-6 cursor-pointer">
            <h2 className="  h4 group-hover:text-white"> Employee training</h2>
            <p className=" group-hover:text-white">
              Our deep learning consultants will devise training plans for your
              team on how to gather data for deep learning solutions and use
              those for optimum performance. We can also oversee the training
              process and provide the necessary recommendations on the go...
            </p>
          </div>

          <div className=" group lg:w-[271px] lg:h-[492px] bg-[#D9D9D9] hover:bg-[#0055A7] flex-col space-y-4  p-6 cursor-pointer">
            <h2 className="  h4 group-hover:text-white">
              {" "}
              Scaling deep learning models
            </h2>
            <p className=" group-hover:text-white">
              We will come up with an optimal strategy on how to use the
              existing infrastructure, processes, and data to bring the value of
              deep learning to more facets of your business...
            </p>
          </div>
        </div>
        {/* -------------------------------------------------------------- */}

        <div className=" pt-8 lg:pt-14 space-y-10">
          <div className=" flex justify-center">
            <Button className=" btn">Discuss your need with our team...</Button>
          </div>
          <h1 className=" h1">Deep learning solutions in focus</h1>

          <p>
            Deep learning practitioners ourselves, we know how to craft powerful
            solutions — be it an intelligent advisory system or a video analysis
            tool — and are ready to share our know-how. Providing advisory
            services and development assistance, our deep learning consultants
            focus on the following facets of deep learning:
          </p>

          <div className=" flex lg:flex-row flex-col gap-6 ">
            <div className="px-8 py-12 space-y-2 bg-[#EEEEEE] rounded-[23px]">
              <p className=" paragraph">Recommendation systems</p>

              <ul className=" ">
                <li>◉ Forecasting</li>
                <li>◉ Content personalization</li>
                <li>◉ Recommendation engines</li>
              </ul>
            </div>
            <div className="p-8 space-y-2 bg-[#EEEEEE] rounded-[23px]">
              <p className=" paragraph">NLP</p>

              <ul className=" ">
                <li>◉ Intelligent document processing</li>
                <li>◉ Sentiment analysis</li>
                <li>◉ Smart chatbots</li>
              </ul>
            </div>
            <div className="p-8 space-y-2 bg-[#EEEEEE] rounded-[23px]">
              <p className=" paragraph">Computer Vision</p>

              <ul className=" ">
                <li>◉ Image analysis</li>
                <li>◉ Video content analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeepMain;

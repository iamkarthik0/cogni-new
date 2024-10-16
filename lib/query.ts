export const dsQuery = `*[_type == "dataScience"][0]{
    title,
    slug,
    hero{
      heading,
      subheading,
      paragraph,
      image,
         servicesImage[]{
           image
           }
    },
      services{
      title,
      ServicesCard[]{
      heading,
      paragraph,
      image
      }
    
    },
      blogs {
        blogTitle,
        blogsCard[] {
          heading,
          paragraph,
          name,
          date,
          image
        }
      }
  }`;

export const landingQuery = `*[_type == "landingPage"][0]{
    title,
    slug,
    hero{
      heading,
      subheading,
      paragraph,
      image
    },
      hero2{
      heading,
     
      paragraph,
      backgroundImage
    },
      ourclient[]{
      client
    },
    services {
        services,
        servicesParagraph,
        ServicesCard[] {
          heading,
          paragraph,
          serviceAction {
            text,
            link
          }
        }
      },
   consultingServices {
        heading,
        paragraph,
        card[] {
          heading,
          paragraph,
      
        }
      },
  
       blogs {
        blogTitle,
        blogsCard[] {
          heading,
          paragraph,
          name,
          date,
          image
        }
      }
  }`;

export const genAIQuery = `*[_type == "GenAiService"][0]{
    title,
    slug,
    hero{
      heading,
      subheading,
      paragraph,
      image,
    
    },
      aiServices{
      title,
      
      paragraph,
 ServicesCard[]{
heading,
paragraph,
image,
order,

 }
      
    

      }
  }`;

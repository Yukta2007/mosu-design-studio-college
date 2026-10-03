export interface ServiceProcess {
  title: string;
  text: string;
}

export interface Service {
  title: string;
  slug: string;
  image: string;
  heroImage: string;
  subtitle: string;
  heading: string;
  description: string;
  gallery: string[];
  process: ServiceProcess[];
}

export const services: Service[] = [
  {
    title: "Art Installations",
    slug: "art-installations",

    image:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734024/at17.png",

    heroImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734060/at9.png",

    subtitle: "Art that transforms spaces.",

    heading: "Made to hold attention.",

    description:
      "Bespoke installations created to become a defining presence within the space .",

    gallery: [
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734408/at30.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734399/at42.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734397/at24.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734395/at13.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734063/at22.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734062/at37.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734062/at27.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734061/at35.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734061/at21.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734060/at9.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734059/at18.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734059/ChatGPT_Image_Jul_11_2026_12_10_03_PM_1.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734057/at23.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734057/at14.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734056/at16.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734056/at6.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734056/at1.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734056/at7.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734054/at36.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734053/at43.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734053/at39.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734053/at41.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734052/at19.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734052/at29.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734035/at10.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734029/at5.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734028/at40.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734026/at20.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734028/at3.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734027/at34.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790260320/Screenshot_2026-09-24_200122.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734027/carousel-2_03.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734025/at32.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734025/at33.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734024/at17.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734023/carousel-2_05.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734022/at12.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734022/at8.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734021/at28.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734022/at11.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789735049/t8.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790165230/atn4.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790165207/atn1.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790165163/atn2.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790177513/ant3_1.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790177521/atn5_1.png",

     
      
    ],

    process: [
      {
        title: "Concept",
        text: "Understanding the space and developing a strong visual concept.",
      },
      {
        title: "Design",
        text: "Creating artwork that complements the architecture and interior.",
      },
      {
        title: "Execution",
        text: "Producing and installing the final artwork with precision.",
      },
    ],
  },

  {
    title: "Wall Arts",
    slug: "wall-arts",

    image:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739259/wa3.png",

    heroImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739175/wa1_1.png",

    subtitle: "Walls with a story.",

    heading: "Made to leave an impression.",

    description:
      "Custom wall pieces shaped through texture, material and detail to feel naturally part of the space.",

    gallery: [
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739296/wa36.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739293/wa34.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739283/wa23.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739280/wa22.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739276/wa13.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739268/wa10.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739265/wa9.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739262/wa4.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739259/wa3.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739256/wa40.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739254/wa39.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739249/wa37.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790260164/Screenshot_2026-09-24_195819.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739243/wa32.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739240/wa31.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739236/wa30.webp",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739230/wa29.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739223/wa28.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739222/wa25.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739216/wa24.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739213/wa20.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739210/wa19.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739207/wa18.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739204/wa17.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739201/wa15.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739197/wa14.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739192/wa11.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739190/wa10_1.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739186/wa8.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739184/wa7.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739181/wa6.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739178/wa2_1.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739175/wa1_1.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739171/wa38.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739170/wa27.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739158/wa26.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739154/wa21.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739153/wa16.png",
      
    ],

    process: [
      {
        title: "Concept",
        text: "Understanding the mood and character of the space.",
      },
      {
        title: "Design",
        text: "Developing artwork suited to the interior.",
      },
      {
        title: "Installation",
        text: "Carefully installing the artwork in its final location.",
      },
    ],
  },

  {
    title: "Sculptures",
    slug: "sculptures",

    image:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790261027/s3.png",

    heroImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790261124/s10.png",

    subtitle: "Form meets expression.",
  
    heading: "Creating work with intention. ",

    description:
      "Culptural pieces created to become powerful focal points within a space.",

    gallery: [
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789723345/s21.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789723345/s19.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789723345/s20.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789723344/s18.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789723340/s17.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789723339/s16.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789723339/s11.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789723320/s7.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789723338/s15.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789723336/s14.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789723331/s10.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790261027/s3.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790261039/s1.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790261025/s4.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790261024/s2.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790261124/s10.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790261130/s9.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790261121/s8.png",
      
    ],

    process: [
      {
        title: "Concept",
        text: "Developing the artistic direction and form.",
      },
      {
        title: "Craft",
        text: "Creating the sculpture with carefully selected materials.",
      },
      {
        title: "Placement",
        text: "Positioning the sculpture to work naturally within the space.",
      },
    ],
  },

  {
    title: "Luminaires",
    slug: "lighting",

    image:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789719907/l14.png",

    heroImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789719907/l13.png",

    subtitle: "Light as an experience.",

    heading: "Light with a point of view.",

    description:
      "Bespoke chandeliers and luminaires created to bring together light, form and craft.",

    gallery: [
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789719913/l18.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789719911/l17.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789719907/l13.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789719908/l19.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789719907/l14.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789719906/l11.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789719904/l9_1.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789719902/l7.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789719899/l8.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789719899/l6.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789719896/l3.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789719895/l2.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789719894/l1.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790178319/ln1.png",
    ],

    process: [
      {
        title: "Concept",
        text: "Understanding the lighting requirements of the space.",
      },
      {
        title: "Design",
        text: "Developing a lighting piece that balances form and function.",
      },
      {
        title: "Installation",
        text: "Installing and positioning the final lighting element.",
      },
    ],
  },

  {
    title: "Mirrors",
    slug: "mirrors-chandeliers",

    image:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790261310/m3.png",

    heroImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790261488/m1_1_1.png",

    subtitle: "Reflective statements.",

    heading: "More than reflection. ",

    description:
      "Bespoke mirrors designed as visual pieces in their own right, through form, proportion and detail.",

    gallery: [
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790261324/m7.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790261317/m8.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790261313/m2.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790261310/m3.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790261307/m6.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790261307/m5.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789720436/m13.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789720436/m14.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789720433/m12.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789720429/m11.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789720421/m10.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789720416/m4.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789720413/m9.png",
      
    ],

    process: [
      {
        title: "Concept",
        text: "Understanding the architectural character of the space.",
      },
      {
        title: "Design",
        text: "Selecting or developing pieces that complement the interior.",
      },
      {
        title: "Installation",
        text: "Precisely installing the final piece.",
      },
    ],
  },

  {
    title: "Doors & Partitions",
    slug: "doors-partitions",

    image:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789722313/d10.png",

    heroImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789722304/d1.png",

    subtitle: "Architecture in detail.",

    heading: "Designed beyond function. ",

    description:
      "Custom doors and partitions created to define transitions while becoming part of the visual language of the space.",

    gallery: [
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789722313/d10.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789722311/d9.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789722311/d7.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789722311/d8.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789722308/d6.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789722305/d3.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789722305/d5.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789722304/d2.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789722304/d1.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789722304/d4.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790178396/dn1.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790178398/dn2.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790178398/dn3.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790178399/dn4.png",
      
      
      
    ],

    process: [
      {
        title: "Concept",
        text: "Understanding the architectural requirements.",
      },
      {
        title: "Design",
        text: "Developing a functional and visually distinctive solution.",
      },
      {
        title: "Execution",
        text: "Fabricating and installing the final piece.",
      },
    ],
  },

  {
    title: "Metal Finishes",
    slug: "metal-finishes",

    image:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789721072/mt8.png",

    heroImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789721059/mt6.png",

    subtitle: "Material with character.",

    heading: "Finish makes the difference.",

    description:
      "Custom metal treatments developed through tone, texture and technique to give each surface a distinct expression.",

    gallery: [
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789721085/mt14.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789721072/mt8.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789721072/mt2.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789721070/mt4.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789721066/mt13.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789721065/mt12.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789721064/mt11.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789721063/mt1.jpg",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789721062/mt10.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789721059/mt7.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789721059/mt6.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789721057/mt3.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789721056/mt9.png",
      
    ],

    process: [
      {
        title: "Concept",
        text: "Understanding the desired material character.",
      },
      {
        title: "Finish",
        text: "Developing the appropriate surface treatment.",
      },
      {
        title: "Application",
        text: "Applying the finish with consistency and precision.",
      },
    ],
  },

  {
    title: "Furniture",
    slug: "furniture",

    image:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789722914/f1.png",

    heroImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789722920/f5.png",

    subtitle: "Form, function and character.",

    heading: "Made to belong.",

    description:
      "Bespoke furniture created around proportion, material and use, with every detail considered from the start.",

    gallery: [
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789722925/f10.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789722921/f3.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789722921/f7.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789722921/f6.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789722920/f5.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789722919/f4.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789722916/f2.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789722914/f1.png",
    ],

    process: [
      {
        title: "Concept",
        text: "Understanding the space, purpose and visual character of the furniture.",
      },
      {
        title: "Design",
        text: "Developing unique forms, proportions and material combinations.",
      },
      {
        title: "Craft",
        text: "Creating each piece with attention to detail, material and finish.",
      },
    ],
  },
];
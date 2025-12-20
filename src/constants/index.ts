import {
  adobeLogo,
  amazonLogo,
  emilyAvatar,
  facebookIcon,
  frontendImage1,
  frontendImage2,
  frontendImage3,
  graphicDesignImage1,
  graphicDesignImage2,
  graphicDesignImage3,
  jasonAvatar,
  javascriptImage1,
  javascriptImage2,
  javascriptImage3,
  linkedinIcon,
  mailIcon,
  mapPinIcon,
  michaelAvatar,
  mobileAppImage1,
  mobileAppImage2,
  mobileAppImage3,
  netflixLogo,
  notionLogo,
  phoneIcon,
  sarahAvatar,
  spotifyLogo,
  twitterIcon,
  uiuxImage1,
  uiuxImage2,
  uiuxImage3,
  webDesignImage1,
  webDesignImage2,
  webDesignImage3,
  zapierLogo,
  zoomLogo,
} from "@/assets";
import {
  Benefit,
  Course,
  FAQ,
  FooterContact,
  FooterNavigationLink,
  NavigationLink,
  Testimonial,
} from "@/types";

// Navbar Links
export const navigationLinks: NavigationLink[] = [
  {
    href: "/",
    label: "home",
  },
  {
    href: "/courses",
    label: "courses",
  },
  {
    href: "/about",
    label: "about",
  },
  {
    href: "/pricing",
    label: "pricing",
  },
  {
    href: "/contact",
    label: "contact",
  },
];

// Hero Logos
export const heroLogos = [
  {
    image: zapierLogo,
    alt: "Zapier",
  },
  {
    image: spotifyLogo,
    alt: "Spotify",
  },
  {
    image: zoomLogo,
    alt: "Zoom",
  },
  {
    image: amazonLogo,
    alt: "Amazon",
  },
  {
    image: adobeLogo,
    alt: "Adobe",
  },
  {
    image: notionLogo,
    alt: "Notion",
  },
  {
    image: netflixLogo,
    alt: "Netflix",
  },
];

// Benefits
export const benefits: Benefit[] = [
  {
    index: "01",
    title: "01.title",
    description: "01.description",
  },
  {
    index: "02",
    title: "02.title",
    description: "02.description",
  },
  {
    index: "03",
    title: "03.title",
    description: "03.description",
  },
  {
    index: "04",
    title: "04.title",
    description: "04.description",
  },
  {
    index: "05",
    title: "05.title",
    description: "05.description",
  },
  {
    index: "06",
    title: "06.title",
    description: "06.description",
  },
];

// Courses
export const Courses: Course[] = [
  // 1. Web Design Fundamentals
  {
    title: "courses.01.title",
    slugs: {
      en: "web-design-fundamentals",
      pt: "fundamentos-do-web-design",
    },
    description: "courses.01.description",
    teacher: "courses.01.teacher",
    duration: "courses.01.duration",
    difficulty: "courses.01.difficulty",
    images: [webDesignImage1, webDesignImage2, webDesignImage3], // Teste
    modules: [
      {
        moduleNumber: "01",
        title: "courses.01.modules.01.title",
        lessons: [
          {
            title: "courses.01.modules.01.lesson.01.title",
            lessonNumber: "Lesson 01",
            duration: "courses.01.modules.01.lesson.01.duration",
          },
          {
            title: "courses.01.modules.01.lesson.02.title",
            lessonNumber: "Lesson 02",
            duration: "courses.01.modules.01.lesson.02.duration",
          },
          {
            title: "courses.01.modules.01.lesson.03.title",
            lessonNumber: "Lesson 03",
            duration: "courses.01.modules.01.lesson.03.duration",
          },
        ],
      },
      {
        moduleNumber: "02",
        title: "courses.01.modules.02.title",
        lessons: [
          {
            title: "courses.01.modules.02.lesson.01.title",
            lessonNumber: "Lesson 01",
            duration: "courses.01.modules.02.lesson.01.duration",
          },
          {
            title: "courses.01.modules.02.lesson.02.title",
            lessonNumber: "Lesson 02",
            duration: "courses.01.modules.02.lesson.02.duration",
          },
          {
            title: "courses.01.modules.02.lesson.03.title",
            lessonNumber: "Lesson 03",
            duration: "courses.01.modules.02.lesson.03.duration",
          },
        ],
      },
      {
        moduleNumber: "03",
        title: "courses.01.modules.03.title",
        lessons: [
          {
            title: "courses.01.modules.03.lesson.01.title",
            lessonNumber: "Lesson 01",
            duration: "courses.01.modules.03.lesson.01.duration",
          },
          {
            title: "courses.01.modules.03.lesson.02.title",
            lessonNumber: "Lesson 02",
            duration: "courses.01.modules.03.lesson.02.duration",
          },
          {
            title: "courses.01.modules.03.lesson.03.title",
            lessonNumber: "Lesson 03",
            duration: "courses.01.modules.03.lesson.03.duration",
          },
        ],
      },
      {
        moduleNumber: "04",
        title: "courses.01.modules.04.title",
        lessons: [
          {
            title: "courses.01.modules.04.lesson.01.title",
            lessonNumber: "Lesson 01",
            duration: "courses.01.modules.04.lesson.01.duration",
          },
          {
            title: "courses.01.modules.04.lesson.02.title",
            lessonNumber: "Lesson 02",
            duration: "courses.01.modules.04.lesson.02.duration",
          },
          {
            title: "courses.01.modules.04.lesson.03.title",
            lessonNumber: "Lesson 03",
            duration: "courses.01.modules.04.lesson.03.duration",
          },
        ],
      },
      {
        moduleNumber: "05",
        title: "courses.01.modules.05.title",
        lessons: [
          {
            title: "courses.01.modules.05.lesson.01.title",
            lessonNumber: "Lesson 01",
            duration: "courses.01.modules.05.lesson.01.duration",
          },
          {
            title: "courses.01.modules.05.lesson.02.title",
            lessonNumber: "Lesson 02",
            duration: "courses.01.modules.05.lesson.02.duration",
          },
          {
            title: "courses.01.modules.05.lesson.03.title",
            lessonNumber: "Lesson 03",
            duration: "courses.01.modules.05.lesson.03.duration",
          },
        ],
      },
    ],
  },

  // 2. UI/UX Design
  {
    title: "courses.02.title",
    slugs: {
      en: "ui-ux-design",
      pt: "design-ui-ux",
    },
    description: "courses.02.description",
    teacher: "courses.02.teacher",
    duration: "courses.02.duration",
    difficulty: "courses.02.difficulty",
    images: [uiuxImage1, uiuxImage2, uiuxImage3],
    modules: [
      {
        moduleNumber: "01",
        title: "courses.02.modules.01.title",
        lessons: [
          {
            title: "courses.02.modules.01.lesson.01.title",
            lessonNumber: "Lesson 01",
            duration: "courses.02.modules.01.lesson.01.duration",
          },
          {
            title: "courses.02.modules.01.lesson.02.title",
            lessonNumber: "Lesson 02",
            duration: "courses.02.modules.01.lesson.02.duration",
          },
          {
            title: "courses.02.modules.01.lesson.03.title",
            lessonNumber: "Lesson 03",
            duration: "courses.02.modules.01.lesson.03.duration",
          },
        ],
      },
      {
        moduleNumber: "02",
        title: "courses.02.modules.02.title",
        lessons: [
          {
            title: "courses.02.modules.02.lesson.01.title",
            lessonNumber: "Lesson 01",
            duration: "courses.02.modules.02.lesson.01.duration",
          },
          {
            title: "courses.02.modules.02.lesson.02.title",
            lessonNumber: "Lesson 02",
            duration: "courses.02.modules.02.lesson.02.duration",
          },
          {
            title: "courses.02.modules.02.lesson.03.title",
            lessonNumber: "Lesson 03",
            duration: "courses.02.modules.02.lesson.03.duration",
          },
        ],
      },
      {
        moduleNumber: "03",
        title: "courses.02.modules.03.title",
        lessons: [
          {
            title: "courses.02.modules.03.lesson.01.title",
            lessonNumber: "Lesson 01",
            duration: "courses.02.modules.03.lesson.01.duration",
          },
          {
            title: "courses.02.modules.03.lesson.02.title",
            lessonNumber: "Lesson 02",
            duration: "courses.02.modules.03.lesson.02.duration",
          },
          {
            title: "courses.02.modules.03.lesson.03.title",
            lessonNumber: "Lesson 03",
            duration: "courses.02.modules.03.lesson.03.duration",
          },
        ],
      },
      {
        moduleNumber: "04",
        title: "courses.02.modules.04.title",
        lessons: [
          {
            title: "courses.02.modules.04.lesson.01.title",
            lessonNumber: "Lesson 01",
            duration: "courses.02.modules.04.lesson.01.duration",
          },
          {
            title: "courses.02.modules.04.lesson.02.title",
            lessonNumber: "Lesson 02",
            duration: "courses.02.modules.04.lesson.02.duration",
          },
          {
            title: "courses.02.modules.04.lesson.03.title",
            lessonNumber: "Lesson 03",
            duration: "courses.02.modules.04.lesson.03.duration",
          },
        ],
      },
      {
        moduleNumber: "05",
        title: "courses.02.modules.05.title",
        lessons: [
          {
            title: "courses.02.modules.05.lesson.01.title",
            lessonNumber: "Lesson 01",
            duration: "courses.02.modules.05.lesson.01.duration",
          },
          {
            title: "courses.02.modules.05.lesson.02.title",
            lessonNumber: "Lesson 02",
            duration: "courses.02.modules.05.lesson.02.duration",
          },
          {
            title: "courses.02.modules.05.lesson.03.title",
            lessonNumber: "Lesson 03",
            duration: "courses.02.modules.05.lesson.03.duration",
          },
        ],
      },
    ],
  },

  // 3. Mobile App Development
  {
    title: "courses.03.title",
    slugs: {
      en: "mobile-app-development",
      pt: "desenvolvimento-de-aplicativos-moveis",
    },
    description: "courses.03.description",
    teacher: "courses.03.teacher",
    duration: "courses.03.duration",
    difficulty: "courses.03.difficulty",
    images: [mobileAppImage1, mobileAppImage2, mobileAppImage3], // Teste
    modules: [
      {
        moduleNumber: "01",
        title: "courses.03.modules.01.title",
        lessons: [
          {
            title: "courses.03.modules.01.lesson.01.title",
            lessonNumber: "Lesson 01",
            duration: "courses.03.modules.01.lesson.01.duration",
          },
          {
            title: "courses.03.modules.01.lesson.02.title",
            lessonNumber: "Lesson 02",
            duration: "courses.03.modules.01.lesson.02.duration",
          },
          {
            title: "courses.03.modules.01.lesson.03.title",
            lessonNumber: "Lesson 03",
            duration: "courses.03.modules.01.lesson.03.duration",
          },
        ],
      },
      {
        moduleNumber: "02",
        title: "courses.03.modules.02.title",
        lessons: [
          {
            title: "courses.03.modules.02.lesson.01.title",
            lessonNumber: "Lesson 01",
            duration: "courses.03.modules.02.lesson.01.duration",
          },
          {
            title: "courses.03.modules.02.lesson.02.title",
            lessonNumber: "Lesson 02",
            duration: "courses.03.modules.02.lesson.02.duration",
          },
          {
            title: "courses.03.modules.02.lesson.03.title",
            lessonNumber: "Lesson 03",
            duration: "courses.03.modules.02.lesson.03.duration",
          },
        ],
      },
      {
        moduleNumber: "03",
        title: "courses.03.modules.03.title",
        lessons: [
          {
            title: "courses.03.modules.03.lesson.01.title",
            lessonNumber: "Lesson 01",
            duration: "courses.03.modules.03.lesson.01.duration",
          },
          {
            title: "courses.03.modules.03.lesson.02.title",
            lessonNumber: "Lesson 02",
            duration: "courses.03.modules.03.lesson.02.duration",
          },
          {
            title: "courses.03.modules.03.lesson.03.title",
            lessonNumber: "Lesson 03",
            duration: "courses.03.modules.03.lesson.03.duration",
          },
        ],
      },
      {
        moduleNumber: "04",
        title: "courses.03.modules.04.title",
        lessons: [
          {
            title: "courses.03.modules.04.lesson.01.title",
            lessonNumber: "Lesson 01",
            duration: "courses.03.modules.04.lesson.01.duration",
          },
          {
            title: "courses.03.modules.04.lesson.02.title",
            lessonNumber: "Lesson 02",
            duration: "courses.03.modules.04.lesson.02.duration",
          },
          {
            title: "courses.03.modules.04.lesson.03.title",
            lessonNumber: "Lesson 03",
            duration: "courses.03.modules.04.lesson.03.duration",
          },
        ],
      },
      {
        moduleNumber: "05",
        title: "courses.03.modules.05.title",
        lessons: [
          {
            title: "courses.03.modules.05.lesson.01.title",
            lessonNumber: "Lesson 01",
            duration: "courses.03.modules.05.lesson.01.duration",
          },
          {
            title: "courses.03.modules.05.lesson.02.title",
            lessonNumber: "Lesson 02",
            duration: "courses.03.modules.05.lesson.02.duration",
          },
          {
            title: "courses.03.modules.05.lesson.03.title",
            lessonNumber: "Lesson 03",
            duration: "courses.03.modules.05.lesson.03.duration",
          },
        ],
      },
    ],
  },

  // 4. Graphic Design for Beginners
  {
    title: "courses.04.title",
    slugs: {
      en: "graphic-design-for-beginners",
      pt: "design-grafico-para-iniciantes",
    },
    description: "courses.04.description",
    teacher: "courses.04.teacher",
    duration: "courses.04.duration",
    difficulty: "courses.04.difficulty",
    images: [graphicDesignImage1, graphicDesignImage2, graphicDesignImage3],
    modules: [
      {
        moduleNumber: "01",
        title: "courses.04.modules.01.title",
        lessons: [
          {
            title: "courses.04.modules.01.lesson.01.title",
            lessonNumber: "Lesson 01",
            duration: "courses.04.modules.01.lesson.01.duration",
          },
          {
            title: "courses.04.modules.01.lesson.02.title",
            lessonNumber: "Lesson 02",
            duration: "courses.04.modules.01.lesson.02.duration",
          },
          {
            title: "courses.04.modules.01.lesson.03.title",
            lessonNumber: "Lesson 03",
            duration: "courses.04.modules.01.lesson.03.duration",
          },
        ],
      },
      {
        moduleNumber: "02",
        title: "courses.04.modules.02.title",
        lessons: [
          {
            title: "courses.04.modules.02.lesson.01.title",
            lessonNumber: "Lesson 01",
            duration: "courses.04.modules.02.lesson.01.duration",
          },
          {
            title: "courses.04.modules.02.lesson.02.title",
            lessonNumber: "Lesson 02",
            duration: "courses.04.modules.02.lesson.02.duration",
          },
          {
            title: "courses.04.modules.02.lesson.03.title",
            lessonNumber: "Lesson 03",
            duration: "courses.04.modules.02.lesson.03.duration",
          },
        ],
      },
      {
        moduleNumber: "03",
        title: "courses.04.modules.03.title",
        lessons: [
          {
            title: "courses.04.modules.03.lesson.01.title",
            lessonNumber: "Lesson 01",
            duration: "courses.04.modules.03.lesson.01.duration",
          },
          {
            title: "courses.04.modules.03.lesson.02.title",
            lessonNumber: "Lesson 02",
            duration: "courses.04.modules.03.lesson.02.duration",
          },
          {
            title: "courses.04.modules.03.lesson.03.title",
            lessonNumber: "Lesson 03",
            duration: "courses.04.modules.03.lesson.03.duration",
          },
        ],
      },
      {
        moduleNumber: "04",
        title: "courses.04.modules.04.title",
        lessons: [
          {
            title: "courses.04.modules.04.lesson.01.title",
            lessonNumber: "Lesson 01",
            duration: "courses.04.modules.04.lesson.01.duration",
          },
          {
            title: "courses.04.modules.04.lesson.02.title",
            lessonNumber: "Lesson 02",
            duration: "courses.04.modules.04.lesson.02.duration",
          },
          {
            title: "courses.04.modules.04.lesson.03.title",
            lessonNumber: "Lesson 03",
            duration: "courses.04.modules.04.lesson.03.duration",
          },
        ],
      },
      {
        moduleNumber: "05",
        title: "courses.04.modules.05.title",
        lessons: [
          {
            title: "courses.04.modules.05.lesson.01.title",
            lessonNumber: "Lesson 01",
            duration: "courses.04.modules.05.lesson.01.duration",
          },
          {
            title: "courses.04.modules.05.lesson.02.title",
            lessonNumber: "Lesson 02",
            duration: "courses.04.modules.05.lesson.02.duration",
          },
          {
            title: "courses.04.modules.05.lesson.03.title",
            lessonNumber: "Lesson 03",
            duration: "courses.04.modules.05.lesson.03.duration",
          },
        ],
      },
    ],
  },

  // 5. Front-End Web Development
  {
    title: "courses.05.title",
    slugs: {
      en: "front-end-web-development",
      pt: "desenvolvimento-web-front-end",
    },
    description: "courses.05.description",
    teacher: "courses.05.teacher",
    duration: "courses.05.duration",
    difficulty: "courses.05.difficulty",
    images: [frontendImage1, frontendImage2, frontendImage3],
    modules: [
      {
        moduleNumber: "01",
        title: "courses.05.modules.01.title",
        lessons: [
          {
            title: "courses.05.modules.01.lesson.01.title",
            lessonNumber: "Lesson 01",
            duration: "courses.05.modules.01.lesson.01.duration",
          },
          {
            title: "courses.05.modules.01.lesson.02.title",
            lessonNumber: "Lesson 02",
            duration: "courses.05.modules.01.lesson.02.duration",
          },
          {
            title: "courses.05.modules.01.lesson.03.title",
            lessonNumber: "Lesson 03",
            duration: "courses.05.modules.01.lesson.03.duration",
          },
        ],
      },
      {
        moduleNumber: "02",
        title: "courses.05.modules.02.title",
        lessons: [
          {
            title: "courses.05.modules.02.lesson.01.title",
            lessonNumber: "Lesson 01",
            duration: "courses.05.modules.02.lesson.01.duration",
          },
          {
            title: "courses.05.modules.02.lesson.02.title",
            lessonNumber: "Lesson 02",
            duration: "courses.05.modules.02.lesson.02.duration",
          },
          {
            title: "courses.05.modules.02.lesson.03.title",
            lessonNumber: "Lesson 03",
            duration: "courses.05.modules.02.lesson.03.duration",
          },
        ],
      },
      {
        moduleNumber: "03",
        title: "courses.05.modules.03.title",
        lessons: [
          {
            title: "courses.05.modules.03.lesson.01.title",
            lessonNumber: "Lesson 01",
            duration: "courses.05.modules.03.lesson.01.duration",
          },
          {
            title: "courses.05.modules.03.lesson.02.title",
            lessonNumber: "Lesson 02",
            duration: "courses.05.modules.03.lesson.02.duration",
          },
          {
            title: "courses.05.modules.03.lesson.03.title",
            lessonNumber: "Lesson 03",
            duration: "courses.05.modules.03.lesson.03.duration",
          },
        ],
      },
      {
        moduleNumber: "04",
        title: "courses.05.modules.04.title",
        lessons: [
          {
            title: "courses.05.modules.04.lesson.01.title",
            lessonNumber: "Lesson 01",
            duration: "courses.05.modules.04.lesson.01.duration",
          },
          {
            title: "courses.05.modules.04.lesson.02.title",
            lessonNumber: "Lesson 02",
            duration: "courses.05.modules.04.lesson.02.duration",
          },
          {
            title: "courses.05.modules.04.lesson.03.title",
            lessonNumber: "Lesson 03",
            duration: "courses.05.modules.04.lesson.03.duration",
          },
        ],
      },
      {
        moduleNumber: "05",
        title: "courses.05.modules.05.title",
        lessons: [
          {
            title: "courses.05.modules.05.lesson.01.title",
            lessonNumber: "Lesson 01",
            duration: "courses.05.modules.05.lesson.01.duration",
          },
          {
            title: "courses.05.modules.05.lesson.02.title",
            lessonNumber: "Lesson 02",
            duration: "courses.05.modules.05.lesson.02.duration",
          },
          {
            title: "courses.05.modules.05.lesson.03.title",
            lessonNumber: "Lesson 03",
            duration: "courses.05.modules.05.lesson.03.duration",
          },
        ],
      },
    ],
  },

  // 6. Advanced JavaScript
  {
    title: "courses.06.title",
    slugs: {
      en: "advanced-javascript",
      pt: "javascript-avancado",
    },
    description: "courses.06.description",
    teacher: "courses.06.teacher",
    duration: "courses.06.duration",
    difficulty: "courses.06.difficulty",
    images: [javascriptImage1, javascriptImage2, javascriptImage3], //Teste
    modules: [
      {
        moduleNumber: "01",
        title: "courses.06.modules.01.title",
        lessons: [
          {
            title: "courses.06.modules.01.lesson.01.title",
            lessonNumber: "Lesson 01",
            duration: "courses.06.modules.01.lesson.01.duration",
          },
          {
            title: "courses.06.modules.01.lesson.02.title",
            lessonNumber: "Lesson 02",
            duration: "courses.06.modules.01.lesson.02.duration",
          },
          {
            title: "courses.06.modules.01.lesson.03.title",
            lessonNumber: "Lesson 03",
            duration: "courses.06.modules.01.lesson.03.duration",
          },
        ],
      },
      {
        moduleNumber: "02",
        title: "courses.06.modules.02.title",
        lessons: [
          {
            title: "courses.06.modules.02.lesson.01.title",
            lessonNumber: "Lesson 01",
            duration: "courses.06.modules.02.lesson.01.duration",
          },
          {
            title: "courses.06.modules.02.lesson.02.title",
            lessonNumber: "Lesson 02",
            duration: "courses.06.modules.02.lesson.02.duration",
          },
          {
            title: "courses.06.modules.02.lesson.03.title",
            lessonNumber: "Lesson 03",
            duration: "courses.06.modules.02.lesson.03.duration",
          },
        ],
      },
      {
        moduleNumber: "03",
        title: "courses.06.modules.03.title",
        lessons: [
          {
            title: "courses.06.modules.03.lesson.01.title",
            lessonNumber: "Lesson 01",
            duration: "courses.06.modules.03.lesson.01.duration",
          },
          {
            title: "courses.06.modules.03.lesson.02.title",
            lessonNumber: "Lesson 02",
            duration: "courses.06.modules.03.lesson.02.duration",
          },
          {
            title: "courses.06.modules.03.lesson.03.title",
            lessonNumber: "Lesson 03",
            duration: "courses.06.modules.03.lesson.03.duration",
          },
        ],
      },
      {
        moduleNumber: "04",
        title: "courses.06.modules.04.title",
        lessons: [
          {
            title: "courses.06.modules.04.lesson.01.title",
            lessonNumber: "Lesson 01",
            duration: "courses.06.modules.04.lesson.01.duration",
          },
          {
            title: "courses.06.modules.04.lesson.02.title",
            lessonNumber: "Lesson 02",
            duration: "courses.06.modules.04.lesson.02.duration",
          },
          {
            title: "courses.06.modules.04.lesson.03.title",
            lessonNumber: "Lesson 03",
            duration: "courses.06.modules.04.lesson.03.duration",
          },
        ],
      },
      {
        moduleNumber: "05",
        title: "courses.06.modules.05.title",
        lessons: [
          {
            title: "courses.06.modules.05.lesson.01.title",
            lessonNumber: "Lesson 01",
            duration: "courses.06.modules.05.lesson.01.duration",
          },
          {
            title: "courses.06.modules.05.lesson.02.title",
            lessonNumber: "Lesson 02",
            duration: "courses.06.modules.05.lesson.02.duration",
          },
          {
            title: "courses.06.modules.05.lesson.03.title",
            lessonNumber: "Lesson 03",
            duration: "courses.06.modules.05.lesson.03.duration",
          },
        ],
      },
    ],
  },
];

// Testimonials
export const TestimonialsArray: Testimonial[] = [
  {
    avatar: sarahAvatar,
    quote: "testimonials.01.testimony",
    author: "testimonials.01.author",
  },
  {
    avatar: jasonAvatar,

    quote: "testimonials.02.testimony",
    author: "testimonials.02.author",
  },
  {
    avatar: emilyAvatar,
    quote: "testimonials.03.testimony",
    author: "testimonials.03.author",
  },
  {
    avatar: michaelAvatar,
    quote: "testimonials.04.testimony",
    author: "testimonials.04.author",
  },
];

// Pricing
export const PricingPlans = [
  {
    title: "plans.free.title",
    price: {
      monthly: "plans.free.price.monthly",
      yearly: "plans.free.price.yearly",
    },
    features: [
      {
        title: "plans.features.01",
        available: true,
      },
      {
        title: "plans.features.02",
        available: true,
      },
      {
        title: "plans.features.03",
        available: true,
      },
      {
        title: "plans.features.04",
        available: true,
      },
      {
        title: "plans.features.05",
        available: true,
      },
      {
        title: "plans.features.06",
        available: false,
      },
      {
        title: "plans.features.07",
        available: false,
      },
    ],
  },
  {
    title: "plans.pro.title",
    price: {
      monthly: "plans.pro.price.monthly",
      yearly: "plans.pro.price.yearly",
    },
    features: [
      {
        title: "plans.features.01",
        available: true,
      },
      {
        title: "plans.features.02",
        available: true,
      },
      {
        title: "plans.features.03",
        available: true,
      },
      {
        title: "plans.features.04",
        available: true,
      },
      {
        title: "plans.features.05",
        available: true,
      },
      {
        title: "plans.features.06",
        available: true,
      },
      {
        title: "plans.features.07",
        available: true,
      },
    ],
  },
];

// FAQ
export const FAQArray: FAQ[] = [
  {
    question: "faq.01.question",
    answer: "faq.01.answer",
    ctaAnswer: "faq.01.ctaAnswer",
  },
  {
    question: "faq.02.question",
    answer: "faq.02.answer",
  },
  {
    question: "faq.03.question",
    answer: "faq.03.answer",
    ctaAnswer: "faq.03.ctaAnswer",
  },
  {
    question: "faq.04.question",
    answer: "faq.04.answer",
  },
  {
    question: "faq.05.question",
    answer: "faq.05.answer",
  },
];

// Footer
export const footerNavigationLinks: FooterNavigationLink[] = [
  {
    title: "navigationLinks.home.title",
    titleHref: "/",
    links: [
      {
        label: "navigationLinks.home.benefits",
        href: "#benefits",
      },
      {
        label: "navigationLinks.home.courses",
        href: "#courses",
      },
      {
        label: "navigationLinks.home.testimonials",
        href: "#testimonials",
      },
      {
        label: "navigationLinks.home.faq",
        href: "#faq",
      },
    ],
  },
  {
    title: "navigationLinks.aboutUs.title",
    titleHref: "/about",
    links: [
      {
        label: "navigationLinks.aboutUs.company",
        href: "/about",
      },
      {
        label: "navigationLinks.aboutUs.achievements",
        href: "/about",
      },
      {
        label: "navigationLinks.aboutUs.goals",
        href: "/about",
      },
    ],
  },
];

export const footerSocialProfiles = [
  {
    alt: "Facebook",
    icon: facebookIcon,
  },
  {
    alt: "Twitter",
    icon: twitterIcon,
  },
  {
    alt: "LinkedIn",
    icon: linkedinIcon,
  },
];

export const FooterContactList: FooterContact[] = [
  {
    icon: mailIcon,
    label: "contactEmail",
  },
  {
    icon: phoneIcon,
    label: "contactPhone",
  },
  {
    icon: mapPinIcon,
    label: "contactLocation",
  },
];

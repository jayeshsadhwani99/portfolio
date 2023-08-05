export interface ProjectType {
  name: string;
  img: string;
  slug: string;
  overview: string;
  project_type: string;
  technologies: string;
  project_image: string;
  link: string;
}

const projects = [
  {
    name: "Dryly",
    img: "https://images.unsplash.com/photo-1560060141-7b9018741ced?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2341&q=80",
    slug: "dryly",
    overview:
      "This project was designed to revolutionize the way we approach laundry chores by bringing convenience and scheduling to the palm of your hand. Built with the modern user in mind, this app provides an interactive platform to schedule, book, and manage laundry appointments effortlessly over the phone. The application was primarily developed using a robust tech stack comprising React and React Native. React's component-based structure allowed for the creation of a fast, interactive web application, while React Native was used to ensure that the app was seamlessly compatible with both iOS and Android devices. A strong emphasis was placed on the backend infrastructure to support the various functionalities of the app. NodeJS was employed to create a robust and scalable server environment, while MongoDB, a NoSQL database, was leveraged for its flexibility and scalability to store and retrieve user data. To enhance user experience and ensure smooth communication between the frontend and backend, various APIs were incorporated. These provided seamless data interaction, thereby allowing users to book, reschedule, or cancel appointments with ease.  The design aspect was not overlooked; attention was paid to creating an intuitive, user-friendly interface with a visually appealing aesthetic, ensuring that users can navigate the app comfortably. This project showcases the potential of integrating modern web technologies to simplify everyday tasks. It stands as a testament to how digital transformation can make life easier, one load of laundry at a time. Future enhancements can include features like real-time status updates of laundry progress, integration with smart home systems, and AI-based recommendations for laundry care.",
    project_type: "Website + App + Backend",
    technologies: "React,React Native,APIs,Design,Databases,NodeJS,MongoDB",
    project_image: "https://i.ibb.co/jT2bH7j/dryly.png",
    link: "https://www.dryly.in/",
  },
  {
    name: "BOLDbot",
    img: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym90fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    slug: "bold-bot",
    overview:
      "This project harnesses the power of AI and automation to redefine how influencers interact with their audience on Instagram. Tailored to be accessible to all, yet specifically focusing on influencers, this platform empowers users to customize, automate, and enhance their direct messaging, ultimately driving reach and engagement. The heart of the application lies in its dynamic chatbot capabilities. This feature utilizes advanced AI technology to deliver personalized, diverse text options and automated responses, enabling users to maintain a high level of engagement with their followers even during peak periods of activity or during their off hours. This multi-faceted tool was built using NextJS for its lightweight, performance-oriented features, providing a highly responsive user interface. The usage of Swift was key in developing a fast, reliable, and interactive mobile application that compliments the web version, allowing influencers to stay connected wherever they are. The backend infrastructure was meticulously designed to accommodate the different functionalities of the app. Using a combination of various APIs and databases, the system enables seamless data interaction, storage, and retrieval. This ensures users have a smooth and uninterrupted experience while automating and managing their Instagram direct messages. Significant attention was devoted to the app's design, aiming to balance aesthetics with user-friendliness. The result is a visually appealing, intuitive user interface that simplifies navigation and interaction. This project exemplifies the potential of AI and automation in transforming social media engagement and outreach. By simplifying and enhancing how influencers connect with their audience, it paves the way for boosted interaction and growth in the influencer space. Looking forward, there is vast potential for integrating additional features such as analytics, sentiment analysis, and multi-platform support.",
    project_type: "Website + Backend",
    technologies: "NextJS,Swift,APIs,Design,Databases,Prisma",
    project_image: "https://i.ibb.co/ZGD5Dzm/boldBot.png",
    link: "https://www.boldbot.in/",
  },
  {
    name: "Rentupg",
    img: "https://images.unsplash.com/photo-1618347191821-51285853505f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    slug: "rentpug",
    overview:
      "Recognizing the challenges students face when moving away for college, this project was designed to provide a simplified, accessible, and affordable housing solution. The platform connects students with appropriate housing options, ensuring they have a comfortable and conducive living environment conducive to their studies. Built with NextJS, the website showcases an interactive, responsive, and high-performance user interface. Its design prioritizes usability, creating an intuitive navigation system and visually engaging aesthetic, thus simplifying the housing search for users. One of the key features of the platform is its extensive housing database, structured and managed using robust backend technologies. This database integrates with various APIs to provide real-time, comprehensive information about available housing options. As such, students can make informed decisions based on accurate data regarding location, amenities, price, and more. To ensure a personalized user experience, the platform also includes advanced search and filter options. These features allow users to tailor their housing search according to their preferences and budget, thereby saving time and improving the effectiveness of the platform. Beyond its immediate functionality, the project represents a critical step towards addressing the wider issue of student accommodation affordability. By leveraging technology to provide straightforward and cost-effective solutions, the platform paves the way for improved access to education and student welfare. Future enhancements may include features like a roommate matching system, integrated payment methods, and a review and rating system for listed properties.",
    project_type: "Website + Backend",
    technologies: "NextJS,APIs,Design,Databases",
    project_image: "https://i.ibb.co/RBN8sXr/RENTUPG.png",
    link: "https://rentupg.vercel.app/",
  },
  {
    name: "Photography",
    img: "https://i.ibb.co/gyHkDR8/IMG-2195.jpg",
    slug: "photography",
    overview:
      "Addressing the needs of photographers looking for a sleek, user-friendly platform to showcase their work, this project was born. It serves as a comprehensive portfolio tool, allowing users to upload, manage, and display their photography with simplicity and style. At its core, the platform utilizes NextJS to provide a fast, server-rendered React application. This technology underpins the seamless user experience, ensuring smooth navigation, quick load times, and real-time updates across the site. The design follows a clean and minimalist aesthetic, highlighting the photographs and allowing their artistry to take center stage. A key feature of the project is its API integration, which facilitates the upload, retrieval, and management of photographic content. With this, users can curate their galleries with ease and have their latest work displayed instantly on their portfolio page. In terms of data storage, a robust database solution is employed to store user and portfolio data securely and efficiently. The combination of these technologies ensures not just an engaging front-end user experience, but also a reliable and scalable backend system. Moreover, the platform includes features designed to enhance discovery and engagement. Photographers can categorize their work, provide image descriptions, and even implement a commenting system to interact with viewers. Ultimately, this project provides a much-needed online space for photographers to showcase their work professionally and elegantly. Future updates could include features like e-commerce integration, enabling photographers to sell their work directly from the platform, and advanced search functionality to help visitors find the art they love.",
    project_type: "Website + Backend",
    technologies: "NextJS,APIs,Design,Databases",
    project_image: "https://i.ibb.co/6J64jRT/photography.png",
    link: "https://jayeshphotography.vercel.app/",
  },
  {
    name: "Crypto Tracker",
    img: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    slug: "crypto-tracker",
    overview:
      "The aim of Crypto Tracker was to create a responsive web-based platform that works hand in hand with its iOS counterpart to track cryptocurrency prices live, offering detailed analysis and intuitive portfolio management features. The web application was developed to provide users a comprehensive look into the fluctuating world of cryptocurrencies, making it simpler to monitor top movers, market stats, and individual coin details. Crafted with efficiency and performance in mind, the project leverages TypeScript for robust, error-free coding and React for an interactive UI, with Vite acting as the build tool. The app uses the CoinGecko API to provide real-time data updates, ensuring the currency prices are always current. The application architecture is built around the context API for effective state management, while user data like portfolio details are securely stored via localstorage. In terms of visual data representation, Chart.js was used to render dynamic and insightful charts. For seamless user experience, the app includes features such as the ability to search for specific coins and add them to one's portfolio. Routing was made possible using the React Router library, allowing for a multi-page feel in a single-page application.",
    project_type: "Website + App",
    technologies: "React,Swift,APIs,Design",
    project_image: "https://i.ibb.co/PwK0w5F/cypto.png",
    link: "https://crypto-tracker-web.vercel.app/",
  },
  {
    name: "Leafy Lane",
    img: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
    slug: "leafy-lane",
    overview:
      "Recognizing the growing trend towards sustainable, plant-based lifestyles, this e-commerce platform was designed to provide a comprehensive, user-friendly shopping experience for eco-conscious consumers. The website hosts a variety of plant-based products, ranging from food items to household essentials, and uses an intuitive layout to guide shoppers through their purchasing journey. React, a popular JavaScript library known for its efficiency and flexibility, is the foundation of this project. The use of React enables the site to be highly responsive, providing a smooth, interactive user experience that keeps customers engaged and encourages them to explore more products. The design of the platform prioritizes ease of use and visual appeal. Clean lines, balanced color schemes, and intuitive navigation elements come together to create an inviting shopping environment that highlights the products and the sustainable lifestyle they represent. To amplify the user experience, each product page is enriched with clear descriptions, user reviews, and vibrant product images. Framer Motion, a powerful animation library for React, is used to bring an extra layer of sophistication to the platform. With its help, subtle animations and transitions are implemented throughout the site, adding a layer of interactivity and visual interest. The use of Framer Motion elevates the user experience, creating a dynamic and delightful e-commerce environment. The platform not only caters to the demands of a growing market segment but also serves as an example of modern, high-quality web development. Future plans for the platform include integration with other payment systems, expansion of product lines, and the addition of a recommendation system for a more personalized shopping experience.",
    project_type: "Website",
    technologies: "React,Design,Framer Motion",
    project_image: "https://i.ibb.co/7r0R7N9/leafy-Lane.png",
    link: "https://leafy-lane.vercel.app/",
  },
];

export default projects;

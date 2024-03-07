import React from "react";

const portfolios = [
  {
    id: 1,
    src: "https://thumbs.dreamstime.com/b/mock-up-design-website-flat-design-concept-digital-marketing-m-commerce-mobile-shopping-vector-illustration-mock-up-design-website-117512183.jpg",
    ProjectName: "E-Commerce",
    Code: "https://github.com/mohit-100/E-commerce",
    Demo: "https://firstapp-ae670.firebaseapp.com"
  },
  {
    id: 2,
    src: "https://th.bing.com/th/id/OIF.yUF0OBSnRhQ8Wr0vKTCTxA?rs=1&pid=ImgDetMain",
    ProjectName: "Tic-Tac-Toe Game",
    Code: "https://github.com/mohit-100/TIC-Tac-Toe-game",
    Demo: "https://mohit-100.github.io/TIC-Tac-Toe-game/"
  },
  {
    id: 3,
    src: "https://www.zmonline.com/media/19079583/netflix.jpg?mode=crop&width=620&height=349&quality=60&scale=both",
    ProjectName: "Netflix-ui-Clone",
    Code: "https://github.com/mohit-100/Netflix-s-UI-clone",
    Demo: "https://netflix-s-ui-clone.vercel.app"
  },
  {
    id: 4,
    src: "https://cdn.dribbble.com/users/1416295/screenshots/6683808/dribbble_-_super_quiz.png",
    ProjectName: "Quiz-App",
    Code: "https://github.com/mohit-100/Quiz-App",
    Demo: "https://quiz-app-hazel-six.vercel.app"
  },
  {id:5,
   src:"https://i.ytimg.com/vi/rLJFeWr1juQ/maxresdefault.jpg",
   ProjectName:"password-genrator-App",
   Code:"https://github.com/mohit-100/password-genrator",
   Demo:"https://password-genrator-chi.vercel.app"
  }
];

const Portfolio = () => {

  const handleDemoClick = (Demo) => {
    window.open(Demo, "_blank");
  };

  const handleCodeClick = (Code) => {
    window.open(Code, "_blank");
  }

  return (
    <div
    name="project"
    className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Porject
        </p>
        <p className="py-6">Check out some of my work right here</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {portfolios.map(({ id, src,Demo,Code }) => (
          <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={src}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={()=>handleDemoClick(Demo)} >
                Demo
              </button>
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={()=>handleDemoClick(Code)}>
                Code
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
};

export default Portfolio;
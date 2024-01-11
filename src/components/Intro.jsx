import React from "react";

const Intro = () => {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
        Sourav Rane
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Software Engineer and Web Developer
      </p>
      <p className="text-sm mx-w-xl mb-6 font-bold">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
        <br />
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus{" "}
        <a
          href="https://youtube.com/souravrane"
          target="_blank"
          className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
          rel="noreferrer noopener"
        >
          Youtube</a>{" "}
        including versions of Lorem Ipsum.
      </p>
    </div>
  );
};

export default Intro;

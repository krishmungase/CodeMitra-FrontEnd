import React from 'react'
import GradientText from '../core/HomePage/GradientText'
import Codeblock from '../core/HomePage/Codeblock'
import Codeblock2 from '../core/HomePage/CodeBlock2'

const Section2 = () => {
  return (
    <div className="container mx-auto py-16 space-y-32">
      <Codeblock
        heading={
          <div className="text-[36px] font-semibold flex flex-col">
            <span>Unlock your</span>{" "}
            <GradientText text={"coding potential"} />{" "}
            <span> with our online courses.</span>
          </div>
        }
        subheading={
          "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
        }
        ctabtn1={{
          btnText: "try it yourself",
          linkto: "/signup",
          active: true,
        }}
        ctabtn2={{
          btnText: "Learn more",
          linkto: "/login",
          active: false,
        }}
        codeblock={`<!DOCTYPE html>\n<html lang="en\n<head><>Example</\n<title><linkrel="stylesheet"href="styles.css">\n</head>\n<body>
                        <h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a>\n<ahref="three/">Three</a>\n</nav>`}
        codecolor={"text-yellow-200 "}
      />

      <Codeblock2
        heading={
          <div className="text-[36px] font-semibold">
            Start <GradientText text={"coding in"} /> seconds.
          </div>
        }
        subheading={
          "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
        }
        ctabtn1={{
          btnText: "Continue Lesson",
          linkto: "/signup",
          active: true,
        }}
        ctabtn2={{
          btnText: "Learn more",
          linkto: "/login",
          active: false,
        }}
        codeblock={`<!DOCTYPE html>\n<html lang="en\n<head><>Example</\n<title><linkrel="stylesheet"href="styles.css">\n</head>\n<body>
                        <h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a>\n<ahref="three/">Three</a>\n</nav>`}
        codecolor={"text-yellow-100 "}
      />
    </div>
  )
}

export default Section2
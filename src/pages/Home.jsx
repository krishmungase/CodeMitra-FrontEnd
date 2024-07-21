import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
import CTAButton from "../components/core/HomePage/Button";
import GradientText from "../components/core/HomePage/GradientText";
import Codeblock from "../components/core/HomePage/Codeblock";
import Codeblock2 from "../components/core/HomePage/CodeBlock2";
import TimelineSection from "../components/core/HomePage/TimelineSection";
import LearnLangSection from "../components/core/HomePage/LearnLangSection";
import Footer from "../components/core/common/Footer"

const Home = () => {
    return (
        <div className="">
            {/* section 1 */}
            <div className="container mx-auto">
                <div className="py-16 flex items-center justify-center space-y-2 flex-col">
                    <Link to={"/signup"}>
                        <div className="rounded-full bg-[#161D29] font-semibold text-[#999DAA] px-6 py-2 transition-all duration-200 hover:scale-95 shadow-slate-200 max-w-sm">
                            <div className="flex text-[15px] items-center rounded-full space-x-3">
                                <p>Become an Instructor</p>
                                <ArrowRightOutlined />
                            </div>
                        </div>
                    </Link>

                    <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center justify-center flex-col">
                            <div className="text-[36px] font-semibold flex flex-col items-center justify-center">
                                <span className="text-center w-full">
                                    {" "}
                                    Empower Your Future with
                                </span>{" "}
                                <GradientText text={"Coding Skills"} />
                            </div>
                            <div className="text-[#838894] text-center spae-y-2 text-[14px] max-w-3xl">
                                With our online coding courses, you can learn at your own pace,
                                from anywhere in the world, and get access to a wealth of
                                resources, including hands-on projects, quizzes, and
                                personalized feedback from instructors.{" "}
                            </div>
                        </div>

                        <div className="flex items-center justify-center space-x-7 mt-8">
                            <CTAButton active={true} linkto={"/signup"}>
                                Learn More
                            </CTAButton>

                            <CTAButton active={false} linkto={"/signup"}>
                                Book a Demo
                            </CTAButton>
                        </div>
                    </div>
                </div>

                <div className="py-10 flex items-center justify-center">
                    <div className="relative shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] max-w-3xl lg:max-w-[70%] z-30">
                        <video autoPlay muted loop className="h-full w-full">
                            <source src="/assets/video/Frame37.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        <div className="absolute -z-10 w-full h-full top-5 left-5 bg-white"></div>
                    </div>
                </div>
            </div>
            {/* section 2  */}
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

            <div className="container mx-auto">
                <div className="flex items-center flex-col space-y-16 py-32 justify-center max-w-full">
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <div className="text-[36px] font-semibold">
                            <span>Unlock the</span>{" "}
                            <GradientText text={"Power of Code"} />
                        </div>
                        <p className="text-[15px] text-[#838894]">Learn to Build Anything You Can Imagine</p>
                    </div>
                    <div className="flex flex-col space-x-16 md:flex-row">
                        Cards
                    </div>
                </div>
            </div>

            {/* section 3  */}
            <div class="inset-0 -z-10 h-[310px] bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                <div className="flex items-center flex-col justify-between gap-5 mx-auto">
                    <div className="h-[150px]"></div>
                    <div className="flex items-center justify-center space-x-12">
                        <CTAButton active={true} linkto={"/signup"}>
                            <div className="flex items-center justify-center gap-2 ">
                                Explore Full Catalog
                                <ArrowRightOutlined />
                            </div>
                        </CTAButton>
                        <CTAButton active={false} linkto={"/login"}>
                            Learn More
                        </CTAButton>
                    </div>
                </div>
            </div>

            {/* section 4 */}
            <div className="bg-[#F9F9F9] py-16">
                <div className="container mx-auto text-[#2C333F]">
                    <div className="flex flex-col md:flex-row space-y-8 items-center w-full justify-between space-x-10">
                        <div className="text-[36px] font-semibold flex flex-col">
                            <span>Get the skills you need for a </span>
                            <GradientText text={"job that is in demand"} />
                        </div>
                        <div className="flex flex-col items-start space-y-[25px] max-w-2xl">
                            <p>
                                The modern StudyNotion is the dictates its own terms. Today, to
                                be a competitive specialist requires more than professional
                                skills.
                            </p>
                            <CTAButton active={true} linkto={"/login"}>
                                Learn More
                            </CTAButton>
                        </div>
                    </div>
                </div>
            </div>

            {/* section 5 */}
            <div className="bg-[#F9F9F9]">
                <div className="container mx-auto">
                    <TimelineSection />
                </div>
            </div>

            {/* section 6 */}
            <div className="bg-[#F9F9F9]">
                <div className="container mx-auto">
                    <LearnLangSection />
                </div>
            </div>

            {/* section 7 */}
            <div>
                <div className="container mx-auto py-24">
                    <div className="max-w-full flex flex-col-reverse space-y-32 md:flex-row items-center space-x-32 justify-center">
                        <div className="">
                            <img src="/assets/images/instructor.png" alt="" />
                        </div>
                        <div className="flex flex-col justify-center space-y-8 items-start max-w-full md:max-w-md">
                            <div className="flex flex-col text-[36px] font-semibold">
                                <span>Become an</span> <GradientText text={"instructor"} />
                            </div>
                            <p className="text-[14px] text-[#838894]">
                                Instructors from around the world teach millions of students on
                                StudyNotion. We provide the tools and skills to teach what you
                                love.
                            </p>
                            <CTAButton active={true}>
                                <div className="flex items-center space-x-2">
                                    <p>Start teaching today</p>
                                    <ArrowRightOutlined />
                                </div>
                            </CTAButton>
                        </div>
                    </div>
                </div>
            </div>


            {/* section 9 */}
            <div className="bg-[#161D29]">
                <div className="container mx-auto">
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Home;

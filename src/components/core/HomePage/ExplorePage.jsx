import React, { useState } from "react";
import ExploreHomepage from "../../../Data/ExploreHome";
import CourseCard from "../common/CourseCard";
const tabs = [
    "Free",
    "New to coding",
    "Most popular",
    "skills paths",
    "career paths",
];

const ExplorePage = () => {
    const [currentTab, setCurrentTab] = useState(tabs[0]);
    const [courses, setCourses] = useState(ExploreHomepage[0].courses);
    const [currentCard, setCurrentCard] = useState(
        null
    );

    const setMyCards = (value) => {
        setCurrentTab(value);
        const result = ExploreHomepage.filter((course) => course.tag === value);
        setCourses(result[0].courses);
        setCurrentCard(result[0].courses[0].heading);
    };

    return (
        <div className="flex items-center flex-col">
            <div className="flex bg-[#161D29] rounded-full px-3 py-[2px] md:px-[18px] md:py-2">
                {tabs.map((element, idx) => {
                    return (
                        <div
                            className={`text-[10px] md:text-[15px] flex  items-center space-x-8 ${currentTab === element
                                ? "bg-[#000814] text-[#F1F2FF] font-medium"
                                : "text-[#6E727F]"
                                } rounded-full transition-all duration-200 cursor-pointer hover:bg-[#000814] hove:text-[#F1F2FF] px-3 py-[4px] md:px-5 md:py-[7px]`}
                            key={idx}
                            onClick={() => setMyCards(element)}
                        >
                            {element}
                        </div>
                    );
                })}
            </div>
            <div className="flex items-center justify-center">
                <div className="flex flex-col w-full lg:flex-row space-y-5 lg:space-y-0 items-center justify-center py-16 lg:gap-x-12 h-full">
                    {
                        courses.map((ele, idx) => {
                            console.log(ele);
                            return (
                                <CourseCard
                                    cardData={ele}
                                    currentCard={currentCard}
                                    setCurrentCard={setCurrentCard}
                                    key={idx}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default ExplorePage;

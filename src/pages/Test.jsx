import React, { useState } from "react";
import { Questions } from "../data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { MdDone } from "react-icons/md"

const Test = () => {
    const [result, setresult] = useState(false);
    const [selectedAnswers, setSelectedAnswers] = useState({})
    let [array, setarray] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false]);
    const correctAnswers = {
        1: "no",
        2: "yes",
        3: "no",
        4: "no",
        5: "no",
        6: "no",
        7: "no",
        8: "no",
        9: "yes",
        10: "no",
        11: "yes",
        12: "no",
        13: "no",
    }
    const state = useSelector((state) => state.logging)

    const handleAnswerSelection = (questionId, selectedOption) => {
        setSelectedAnswers(prevSelected => ({
            ...prevSelected,
            [questionId]: selectedOption,
        }));
    }
    const calculateScore = () => {
        let score = 0;

        for (const questionId in selectedAnswers) {
            if (selectedAnswers[questionId] === correctAnswers[questionId]) {
                score++;
            }
        }

        return score;
    }
    var score = calculateScore();

    const submit = (e) => {
        e.preventDefault();
        var score = calculateScore();
        console.log(score)
        setresult(true)

    }
    if (result) {
        if (score < 4)
            return (
                <>
                    <Navbar />
                    <div className="w-screen mt-28  h-[46.2vh] sm:h-auto">
                        <div className="w-[60%] m-auto text-xl font-medium">Based on your Score....</div>
                        <div className="w-[60%] m-auto text-xl">
                            <div className=" text-red-500 pb-7">You Should contact a mental health professional</div>
                            I want you to know that you're not alone on this journey. I understand that you're facing difficult times with your mental health, and I'm here to offer my support and a listening ear whenever you need it. Remember that your feelings are valid, and seeking help is a sign of strength, not weakness. Reach out to friends, family, or a mental health professional who can provide the guidance and tools you need to heal and grow. You have an inner strength that can carry you through these tough moments, and with time, patience, and the right resources, things can and will get better. You're deserving of care, compassion, and a brighter future. You've got this.
                        </div>
                    </div>
                    <Footer />
                </>
            )
        else if (score < 8)
            return (
                <>
                    <Navbar />
                    <div className="w-screen mt-28 h-[46.2vh]">
                        <div className="w-[60%] m-auto text-xl font-medium">Based on your Score....</div>
                        <div className="w-[60%] m-auto text-xl">
                            <div className=" text-yellow-400 pb-7">No Need for Consultation</div>
                            Hey there, you're doing great by taking care of your mental health! Life has its ups and downs, and it's completely okay to have moments when things feel a bit challenging. Remember that your well-being matters, and you're not alone on this journey. By acknowledging your feelings and seeking support when needed, you're already taking positive steps. Keep focusing on self-care, practicing mindfulness, and reaching out to your support network. Every step you take towards maintaining your mental health is a step towards a brighter and more balanced future. You've got this!
                            <br />
                            If you ever find that your mental health concerns increase or persist, consider reaching out to a mental health professional for guidance and support.
                        </div>
                    </div>
                    <Footer />
                </>
            )
        else if (score <= 12)
            return (
                <>
                    <Navbar />
                    <div className="w-screen mt-28  h-[46.2vh]">
                        <div className="w-[60%] m-auto text-xl font-medium">Based on your Score....</div>
                        <div className="w-[60%] m-auto text-xl">
                            <div className=" text-green-500 pb-7">Excellent !!! you have done it</div>
                            "Congratulations on prioritizing your mental health and embracing a positive state of mind! Your ability to maintain good mental health reflects your resilience, self-awareness, and dedication to your well-being. Keep nurturing your emotional balance, practicing self-care, and fostering healthy relationships. Your positive outlook and coping strategies are not only beneficial for you but also inspire those around you. Remember, mental health is an ongoing journey, and your commitment to staying mentally healthy will continue to empower you to lead a fulfilling life. Keep shining brightly!"
                            <br />
                            It's important to note that even when someone is in a good mental health state, life can still bring challenges. Building a strong foundation of mental well-being can help individuals navigate those challenges more effectively.
                        </div>
                    </div>
                    <Footer />
                </>
            )
    }
    return (
        <>
            <Navbar />
            <div className="mt-28 w-screen m-auto text-xl pl-20 pr-20 sm:w-[80%] sm:pl-0 sm:pr-0" >
                <div className=" text-red-600 w-[80%] text-justify mt-5 m-auto h-auto text-4xl font-semibold">
                    Note
                </div>
                <div className="w-[80%] text-justify mt-5 m-auto h-auto sm:w-[100%]">
                    We are not a mental health professional, but we can suggest some general questions that might help open up a conversation about someone's mental health. Keep in mind that these questions are meant to be supportive and non-intrusive. If you're concerned about your mental health, it's recommended to encourage yourself to seek help from a qualified mental health professional. Here are some questions to consider:
                </div>
                <div className="w-[80%] text-justify mt-5 m-auto h-auto sm:w-[100%]">
                    Remember that these questions are just a starting point. Active listening and creating a safe and non-judgmental environment are essential when discussing mental health. If you're concerned about your well-being, we encourage you to talk to a mental health professional for proper assessment and support.
                </div>
            </div>
            <div className="w-screen mt-8 flex-col mb-28  h-auto items-center sm:w-[100%] ">
                {Questions.map((que, id) => {
                    return (
                        <div key={id} className="w-[60%] mt-5 m-auto h-auto sm:w-[80%]" >
                            <div className="text-xl mb-3 font-semibold">Question {id + 1}. {que}</div>
                            <button
                                className="hover:bg-green-400 border-4 pl-4 pr-4 pt-1 pb-1 capitalize" onClick={() => {
                                    array[id] = true;
                                    handleAnswerSelection(id + 1, 'yes')
                                }}>
                                yes
                            </button>
                            <button
                                className="hover:bg-green-400 ml-4 border-4 pl-4 pr-4 pt-1 pb-1 capitalize"
                                onClick={() => {
                                    array[id] = true;
                                    handleAnswerSelection(id + 1, 'no')
                                }}>
                                no
                            </button>
                            {array[id] &&
                                <button className="pl-5 text-xl font-bold text-green-700" >
                                    <MdDone />
                                </button>}
                        </div>
                    )
                })}
            </div>
            <div className="w-screen flex justify-center truncate text-xl">
                <button
                    className=" rounded-lg bg-black text-white border-black mb-5 m-auto h-auto border-4 pl-10 pr-10 pt-3 pb-3"
                    onClick={submit}>Submit</button>
            </div>
            <Footer />
        </>
    )
}
export default Test;
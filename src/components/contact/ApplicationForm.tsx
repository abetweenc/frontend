"use client";

import React, { useState } from "react";

// 1. Form Configuration with limit added to Question 8
const formData = [
  {
    id: "q1",
    title: "Do you home school your children?",
    type: "radio",
    options: ["Yes", "No", "No but considering home educating"],
  },
  {
    id: "q2",
    title: "Children age range?",
    subtitle: "(Select all that apply)",
    type: "checkbox",
    options: ["4-6", "7-9", "10-12", "13-16"],
  },
  {
    id: "q3",
    title: "How many children would you enrol?",
    type: "radio",
    options: ["1", "2", "3+"],
  },
  {
    id: "q4",
    title: "Which days would you most likely attend?",
    subtitle: "(Select all that apply)",
    type: "checkbox",
    options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  },
  {
    id: "q5",
    title: "Session length preference",
    type: "radio",
    options: ["1.5 hours", "2 hours", "3 hours or more"],
  },
  {
    id: "q6",
    title: "How many sessions per week would suit your family?",
    type: "radio",
    options: ["1", "2", "3 or more", "Varies month to month"],
  },
  {
    id: "q7",
    title: "Which subjects would you value most?",
    subtitle: "(Select all that apply)",
    type: "checkbox",
    options: [
      "English / Literacy",
      "Maths",
      "Science",
      "History / Geography",
      "Music",
      "Coding / Technology / AI",
      "Debate / Communication",
      "Life skills / Entrepreneurship",
    ],
  },
  {
    id: "q8",
    title: "What matters most to you in a learning space?",
    subtitle: "(Select up to 3)",
    type: "checkbox",
    options: [
      "Small groups",
      "Calm, homely environment",
      "Social interaction",
      "Flexible attendance",
      "Skilled staff",
      "Academic progress tracking",
      "Child confidence & wellbeing",
    ],
    limit: 3, // Logic will check for this property
  },
  {
    id: "q9",
    title: "Which approach would you prefer?",
    subtitle: "(Holidays scheduling)",
    type: "radio",
    options: [
      "Align with mainstream school holidays",
      "Alternative holiday schedule (off-peak / flexible)",
      "Mix of both",
      "No strong preference",
    ],
  },
  {
    id: "q10",
    title: "Which best describes your situation?",
    subtitle: "SEND & additional needs",
    type: "radio",
    options: [
      "My child has additional needs",
      "My child does not have additional needs",
      "Prefer not to say",
    ],
  },
];

export default function ApplicationForm() {
  // State to store all answers
  const [answers, setAnswers] = useState<Record<string, any>>({});

  const handleInputChange = (
    questionId: string,
    value: string,
    type: string,
    limit?: number,
  ) => {
    setAnswers((prev) => {
      const currentSelection = prev[questionId] || [];

      if (type === "checkbox") {
        // Toggle logic: remove if exists
        if (currentSelection.includes(value)) {
          return {
            ...prev,
            [questionId]: currentSelection.filter((v: string) => v !== value),
          };
        }

        // Limit logic: block adding new items if limit is reached
        if (limit && currentSelection.length >= limit) {
          return prev;
        }

        // Add to array
        return {
          ...prev,
          [questionId]: [...currentSelection, value],
        };
      }

      // Default logic for Radio buttons (string values)
      return {
        ...prev,
        [questionId]: value,
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting Form Data:", answers);
    // Add your API call here
    alert("Form submitted! Check console for data.");
  };

  return (
    <div className="w-full bg-white py-14 px-6 lg:py-20 flex flex-col items-center">
      <div className="w-full max-w-5xl mx-auto flex flex-col">
        <h2 className="font-playfair text-3xl lg:text-5xl text-[#111111] text-center mb-12 lg:mb-16">
          Application Form
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-12 lg:gap-16"
        >
          {formData.map((question, index) => (
            <div key={question.id} className="flex flex-col gap-5">
              <h3 className="font-playfair text-xl lg:text-2xl text-[#111111] leading-tight">
                <span className="text-black mr-2">{index + 1}.</span>
                {question.title}
                {question.subtitle && (
                  <span className="font-sans text-sm font-normal text-[#888888] block lg:inline lg:ml-2">
                    {question.subtitle}
                  </span>
                )}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3 ml-2 lg:ml-7">
                {question.options.map((option, optIndex) => {
                  // Determine if this specific option is checked
                  const isChecked =
                    question.type === "checkbox"
                      ? (answers[question.id] || []).includes(option)
                      : answers[question.id] === option;

                  return (
                    <label
                      key={optIndex}
                      className="flex items-center gap-4 cursor-pointer group w-fit"
                    >
                      <div className="relative flex items-center justify-center">
                        <input
                          type={question.type}
                          name={question.id}
                          checked={isChecked}
                          onChange={() =>
                            handleInputChange(
                              question.id,
                              option,
                              question.type,
                              question.limit,
                            )
                          }
                          className="w-5 h-5 border-gray-300 text-[#111111] focus:ring-[#111111] accent-[#111111] cursor-pointer"
                        />
                      </div>
                      <span
                        className={`text-base lg:text-lg transition-all duration-200 ${
                          isChecked
                            ? "text-black font-medium"
                            : "text-[#555555] group-hover:text-black"
                        }`}
                      >
                        {option}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Question 11: Textarea */}
          <div className="flex flex-col gap-5">
            <h3 className="font-playfair text-xl lg:text-2xl text-[#111111]">
              <span className="text-black mr-2">11.</span>
              Anything else you&apos;d like to see included?
              <span className="font-sans text-sm font-normal text-[#888888] ml-2">
                (Optional)
              </span>
            </h3>
            <textarea
              name="additional_info"
              rows={5}
              placeholder="Tell us anything else you'd like us to know..."
              onChange={(e) =>
                setAnswers((prev) => ({
                  ...prev,
                  additional_info: e.target.value,
                }))
              }
              className="w-full border border-[#EAEAEE] rounded-sm p-5 text-[#444444] text-base focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] resize-y placeholder:text-[#A1A1AA] transition-all"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#111111] text-white py-5 mt-6 rounded-sm hover:bg-black transition-all text-lg font-medium shadow-sm active:scale-[0.99]"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}

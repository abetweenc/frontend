"use client";

import React from "react";

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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="w-full bg-white py-16 px-6 lg:py-24 flex flex-col items-center">
      <div className="w-full max-w-5xl mx-auto flex flex-col">
        <h2 className="font-playfair text-3xl lg:text-5xl text-[#111111] text-center mb-12 lg:mb-16">
          Fill in the Form
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-10 lg:gap-14"
        >
          {/* Map through standard questions */}
          {formData.map((question, index) => (
            <div key={question.id} className="flex flex-col gap-4">
              <h3 className="font-playfair text-lg lg:text-xl text-[#111111]">
                {index + 1}. {question.title}{" "}
                {question.subtitle && (
                  <span className="font-sans text-sm font-normal text-[#666666] ml-1">
                    {question.subtitle}
                  </span>
                )}
              </h3>

              <div className="flex flex-col gap-3 ml-2 lg:ml-4">
                {question.options.map((option, optIndex) => (
                  <label
                    key={optIndex}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      type={question.type}
                      name={question.id}
                      value={option}
                      className="w-4 h-4 text-[#111111] border-gray-300 focus:ring-[#111111] accent-[#111111] cursor-pointer"
                    />
                    <span className="text-[#444444] text-sm lg:text-base group-hover:text-[#111111] transition-colors">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          ))}

          {/* Final Textarea Question */}
          <div className="flex flex-col gap-4">
            <h3 className="font-playfair text-lg lg:text-xl text-[#111111]">
              11. Anything else you&apos;d like to see included?{" "}
              <span className="font-sans text-sm font-normal text-[#666666] ml-1">
                (Optional)
              </span>
            </h3>
            <textarea
              name="additional_info"
              rows={5}
              placeholder="Tell us anything else you'd like us to know about your family or homeschooling journey."
              className="w-full border border-[#EAEAEE] rounded-sm p-4 text-[#444444] text-sm lg:text-base focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] resize-y placeholder:text-[#A1A1AA]"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#1E1E1E] text-white py-4 mt-4 lg:mt-8 rounded-sm hover:bg-[#333333] transition-colors text-base font-medium"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}

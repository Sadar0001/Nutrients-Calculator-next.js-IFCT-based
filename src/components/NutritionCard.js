"use client";
import { useState } from "react";

export default function NutritionCard() {
  const [nutrition] = useState({
    calories: 0,
    carbohydrate: 0,
    protein: 0,
    fat: 0,
    solubleFat: 0,
    insolubleFat: 0,
    dietaryFiber: 0,
    solubleDietaryFiber: 0,
    insolubleDietaryFiber: 0,
    calcium: 0,
    phosphorus: 0,
    magnesium: 0,
    sodium: 0,
    potassium: 0,
    chloride: 0,
    sulfur: 0,
    iron: 0,
    zinc: 0,
    copper: 0,
    manganese: 0,
    selenium: 0,
    iodine: 0,
    fluoride: 0,
    chromium: 0,
    molybdenum: 0,
    vitaminA: 0,
    vitaminD: 0,
    vitaminE: 0,
    vitaminK: 0,
    vitaminB1: 0,
    vitaminB2: 0,
    vitaminB3: 0,
    vitaminB5: 0,
    vitaminB6: 0,
    vitaminB7: 0,
    vitaminB9: 0,
    vitaminB12: 0,
    vitaminC: 0,
  });

  // Responsive text sizes
  const headerSize = "text-xl sm:text-2xl md:text-3xl";
  const sectionHeaderSize = "text-base sm:text-lg";
  const subHeaderSize = "text-xs sm:text-sm";
  const textSize = "text-xs sm:text-sm";

  return (
    <div className="bg-[#E8D59E] p-3 sm:p-4 md:p-6 rounded-xl shadow-lg text-[#6B4226] font-sans max-w-4xl mx-auto my-4">
      {/* Header with responsive padding */}
      <div className="border-b-2 border-[#6B4226] pb-2 mb-3 sm:mb-4">
        <h1 className={`${headerSize} font-bold text-center tracking-wide`}>
          NUTRITION FACTS
        </h1>
      </div>

      {/* Grid with responsive columns and gaps */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
        {/* Section 1: Energy */}
        <div className="bg-white/50 rounded-lg p-3 sm:p-4 shadow-md hover:shadow-lg transition-shadow">
          <h2
            className={`${sectionHeaderSize} font-bold mb-2 sm:mb-3 pb-1 border-b border-[#6B4226] flex items-center`}
          >
            <span className="bg-[#6B4226] text-[#E8D59E] rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center mr-2 text-xs sm:text-sm">
              1
            </span>
            Energy
          </h2>
          <div className="pl-6 sm:pl-8">
            <p className={`py-1 flex justify-between ${textSize}`}>
              <span>Calories (kcal):</span>
              <span className="font-medium">{nutrition.calories}</span>
            </p>
          </div>
        </div>

        {/* Section 2: Macronutrients */}
        <div className="bg-white/50 rounded-lg p-3 sm:p-4 shadow-md hover:shadow-lg transition-shadow">
          <h2
            className={`${sectionHeaderSize} font-bold mb-2 sm:mb-3 pb-1 border-b border-[#6B4226] flex items-center`}
          >
            <span className="bg-[#6B4226] text-[#E8D59E] rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center mr-2 text-xs sm:text-sm">
              2
            </span>
            Macronutrients
          </h2>
          <div className="pl-6 sm:pl-8 space-y-1">
            {[
              { name: "Carbohydrate", value: nutrition.carbohydrate },
              { name: "Protein", value: nutrition.protein },
              { name: "Fat", value: nutrition.fat },
            ].map((item) => (
              <p
                key={item.name}
                className={`py-1 flex justify-between ${textSize}`}
              >
                <span>{item.name}:</span>
                <span className="font-medium">{item.value}</span>
              </p>
            ))}
            <div className="ml-3 sm:ml-4 space-y-1">
              {[
                { name: "Soluble Fat", value: nutrition.solubleFat },
                { name: "Insoluble Fat", value: nutrition.insolubleFat },
              ].map((item) => (
                <p
                  key={item.name}
                  className={`py-1 flex justify-between ${textSize} italic`}
                >
                  <span>{item.name}:</span>
                  <span className="font-medium">{item.value}</span>
                </p>
              ))}
            </div>
            <p className={`py-1 flex justify-between ${textSize}`}>
              <span>Dietary Fiber:</span>
              <span className="font-medium">{nutrition.dietaryFiber}</span>
            </p>
            <div className="ml-3 sm:ml-4 space-y-1">
              {[
                { name: "Soluble", value: nutrition.solubleDietaryFiber },
                { name: "Insoluble", value: nutrition.insolubleDietaryFiber },
              ].map((item) => (
                <p
                  key={item.name}
                  className={`py-1 flex justify-between ${textSize} italic`}
                >
                  <span>{item.name}:</span>
                  <span className="font-medium">{item.value}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Section 3: Minerals */}
        <div className="bg-white/50 rounded-lg p-3 sm:p-4 shadow-md hover:shadow-lg transition-shadow">
          <h2
            className={`${sectionHeaderSize} font-bold mb-2 sm:mb-3 pb-1 border-b border-[#6B4226] flex items-center`}
          >
            <span className="bg-[#6B4226] text-[#E8D59E] rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center mr-2 text-xs sm:text-sm">
              3
            </span>
            Minerals
          </h2>
          <div className="pl-6 sm:pl-8 space-y-1">
            <h3
              className={`${subHeaderSize} font-semibold uppercase tracking-wider text-[#6B4226]/80 mt-2`}
            >
              Macrominerals
            </h3>
            {[
              "Calcium",
              "Phosphorus",
              "Magnesium",
              "Sodium",
              "Potassium",
              "Chloride",
              "Sulfur",
            ].map((mineral) => (
              <p
                key={mineral}
                className={`py-1 flex justify-between ${textSize}`}
              >
                <span>{mineral}:</span>
                <span className="font-medium">
                  {nutrition[mineral.toLowerCase()]}
                </span>
              </p>
            ))}

            <h3
              className={`${subHeaderSize} font-semibold uppercase tracking-wider text-[#6B4226]/80 mt-2 sm:mt-3`}
            >
              Microminerals
            </h3>
            {[
              "Iron",
              "Zinc",
              "Copper",
              "Manganese",
              "Selenium",
              "Iodine",
              "Fluoride",
              "Chromium",
              "Molybdenum",
            ].map((mineral) => (
              <p
                key={mineral}
                className={`py-1 flex justify-between ${textSize}`}
              >
                <span>{mineral}:</span>
                <span className="font-medium">
                  {nutrition[mineral.toLowerCase()]}
                </span>
              </p>
            ))}
          </div>
        </div>

        {/* Section 4: Vitamins */}
        <div className="bg-white/50 rounded-lg p-3 sm:p-4 shadow-md hover:shadow-lg transition-shadow">
          <h2
            className={`${sectionHeaderSize} font-bold mb-2 sm:mb-3 pb-1 border-b border-[#6B4226] flex items-center`}
          >
            <span className="bg-[#6B4226] text-[#E8D59E] rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center mr-2 text-xs sm:text-sm">
              4
            </span>
            Vitamins
          </h2>
          <div className="pl-6 sm:pl-8 space-y-1">
            <h3
              className={`${subHeaderSize} font-semibold uppercase tracking-wider text-[#6B4226]/80 mt-2`}
            >
              Fat-Soluble
            </h3>
            {["A", "D", "E", "K"].map((vitamin) => (
              <p
                key={vitamin}
                className={`py-1 flex justify-between ${textSize}`}
              >
                <span>Vitamin {vitamin}:</span>
                <span className="font-medium">
                  {nutrition[`vitamin${vitamin}`]}
                </span>
              </p>
            ))}

            <h3
              className={`${subHeaderSize} font-semibold uppercase tracking-wider text-[#6B4226]/80 mt-2 sm:mt-3`}
            >
              Water-Soluble
            </h3>
            {[1, 2, 3, 5, 6, 7, 9, 12].map((num) => (
              <p key={num} className={`py-1 flex justify-between ${textSize}`}>
                <span>B{num}:</span>
                <span className="font-medium">
                  {nutrition[`vitaminB${num}`]}
                </span>
              </p>
            ))}

            <p className={`py-1 flex justify-between mt-2 sm:mt-3 ${textSize}`}>
              <span>Vitamin C:</span>
              <span className="font-medium">{nutrition.vitaminC}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

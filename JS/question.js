const testData = {
  questions: [
    {
      id: "q1",
      text: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4",
    },
    {
      id: "q2",
      text: "Capital of France?",
      options: ["London", "Berlin", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      id: "q3",
      text: "5 x 5 = ?",
      options: ["10", "20", "25", "30"],
      answer: "25",
    },
    {
      id: "q4",
      text: "Color of the sky?",
      options: ["Red", "Green", "Blue", "Yellow"],
      answer: "Blue",
    },
    {
      id: "q5",
      text: 'Opposite of "cold"?',
      options: ["Cool", "Warm", "Hot", "Ice"],
      answer: "Hot",
    },
  ],
};

const cropFarming = {
  questions: [
    {
      id: 1,
      text: "What is a crop?",
      options: [
        "A wild animal",
        "A plant grown by farmers",
        "A tool used for farming",
      ],
      answer: 1,
    },
    {
      id: 2,
      text: "Which of these is a food crop?",
      options: ["Cocoa", "Maize", "Rubber"],
      answer: 1,
    },
    {
      id: 3,
      text: "Which of these is a cash crop?",
      options: ["Cotton", "Beans", "Yam"],
      answer: 0,
    },
    {
      id: 4,
      text: "Why do some crops grow better in the rainy season?",
      options: [
        "Because of the sunshine",
        "Because of the rainwater",
        "Because they like cold weather",
      ],
      answer: 1,
    },
    {
      id: 5,
      text: "Which tool is used for digging the soil?",
      options: ["Rake", "Hoe", "Spoon"],
      answer: 1,
    },
    {
      id: 6,
      text: "What do farmers do before planting crops?",
      options: ["Wash their tools", "Go to market", "Prepare the soil"],
      answer: 2,
    },
    {
      id: 7,
      text: "What is the first stage of crop growth?",
      options: ["Harvest", "Germination", "Selling"],
      answer: 1,
    },
    {
      id: 8,
      text: "Which of these crops can be eaten raw?",
      options: ["Tomato", "Yam", "Cocoa"],
      answer: 0,
    },
    {
      id: 9,
      text: "Which crops are best planted during the dry season?",
      options: ["Watermelon", "Rice", "Sugarcane"],
      answer: 0,
    },
    {
      id: 10,
      text: "Why do farmers use fertilizers?",
      options: ["To kill weeds", "To make soil richer", "To water the plants"],
      answer: 1,
    },
  ],
};

// Animal Farming
const animalFarming = {
  questions: [
    {
      id: 1,
      text: "What is animal farming also called?",
      options: ["Crop production", "Fishery", "Livestock farming"],
      answer: 2,
    },
    {
      id: 2,
      text: "Which of these is a farm animal?",
      options: ["Dog", "Goat", "Tiger"],
      answer: 1,
    },
    {
      id: 3,
      text: "What do farmers get from cows?",
      options: ["Milk and meat", "Feathers", "Yam"],
      answer: 0,
    },
    {
      id: 4,
      text: "What is a young chicken called?",
      options: ["Kid", "Calf", "Chick"],
      answer: 2,
    },
    {
      id: 5,
      text: "Which of these animals gives us eggs?",
      options: ["Pig", "Hen", "Cow"],
      answer: 1,
    },
    {
      id: 6,
      text: "Why must farm animals be fed well?",
      options: [
        "So they can run fast",
        "To help them grow and stay healthy",
        "To make them noisy",
      ],
      answer: 1,
    },
    {
      id: 7,
      text: "Which of these is NOT an animal product?",
      options: ["Wool", "Milk", "Bread"],
      answer: 2,
    },
    {
      id: 8,
      text: "Which shelter is used for chickens?",
      options: ["Barn", "Pen", "Poultry house"],
      answer: 2,
    },
    {
      id: 9,
      text: "Why do farmers clean animal shelters?",
      options: ["To play", "To keep animals healthy", "To make animals sleep"],
      answer: 1,
    },
    {
      id: 10,
      text: "What do we call a male goat?",
      options: ["Ram", "Billy", "Rooster"],
      answer: 1,
    },
  ],
};

const greenSmartFarming = {
  questions: [
    {
      id: 1,
      text: "What is green farming mainly about?",
      options: [
        "Using only green plants",
        "Farming with care for the environment",
        "Wearing green clothes to farm",
      ],
      answer: 1,
    },
    {
      id: 2,
      text: "What does smart farming use to help farmers?",
      options: [
        "Magic",
        "Mobile apps, machines, and technology",
        "Only old tools",
      ],
      answer: 1,
    },
    {
      id: 3,
      text: "Why is using too much chemical harmful?",
      options: [
        "It makes crops grow too fast",
        "It can harm the soil and water",
        "It makes animals smarter",
      ],
      answer: 1,
    },
    {
      id: 4,
      text: "Which of these is a clean energy source in farming?",
      options: ["Solar power", "Burning plastic", "Car fuel"],
      answer: 0,
    },
    {
      id: 5,
      text: "How do drip systems help in green farming?",
      options: [
        "They clean animals",
        "They waste water",
        "They give water slowly to crops and save water",
      ],
      answer: 2,
    },
    {
      id: 6,
      text: "What does a weather sensor do in smart farming?",
      options: [
        "Tells jokes",
        "Helps predict the weather for better planting",
        "Cleans the soil",
      ],
      answer: 1,
    },
    {
      id: 7,
      text: "Why is organic farming part of green farming?",
      options: [
        "It uses natural ways to grow food",
        "It’s more colorful",
        "It grows plastic plants",
      ],
      answer: 0,
    },
    {
      id: 8,
      text: "How does technology make farming smarter?",
      options: [
        "By using robots, sensors, and data",
        "By using more people",
        "By guessing what to do next",
      ],
      answer: 0,
    },
    {
      id: 9,
      text: "What is one benefit of smart farming?",
      options: [
        "More guessing",
        "More waste",
        "Better planning and less waste",
      ],
      answer: 2,
    },
    {
      id: 10,
      text: "Why should we protect the soil, air, and water when farming?",
      options: [
        "To keep the farm dirty",
        "To help nature and stay healthy",
        "So plants can watch movies",
      ],
      answer: 1,
    },
  ],
};

// Exercise Part
//Exercise for seasonal farming
const seasonalFarming = {
  questions: [
    {
      id: 1,
      text: "All Crops Grow best in the rainy season",
      answer: "1",
      options: ["True", "False"],
    },
    {
      id: 2,
      text: "Farmers plant crops in the dry season",
      answer: "0",
      options: ["True", "False"],
    },
    {
      id: 3,
      text: "The wet season is when it rains a lot",
      answer: "0",
      options: ["True", "False"],
    },
    {
      id: 4,
      text: "Farmers can plant any crop any time of the year",
      answer: "1",
      options: ["True", "False"],
    },
  ],
};
const cropFarmingExercises = {
  questions: [
    {
      id: "q1",
      text: "What is the main purpose of crop farming?",
      options: [
        "To grow plants for food",
        "To raise animals",
        "To build houses",
      ],
      answer: 0,
    },
    {
      id: "q2",
      text: "Which season is best for planting most crops?",
      options: ["Rainy season", "Dry season", "Winter"],
      answer: 0,
    },
    {
      id: "q3",
      text: "What do farmers use to protect crops from pests?",
      options: ["Fertilizers", "Pesticides", "Water"],
      answer: 1,
    },
    {
      id: "q4",
      text: "What is a common tool used in crop farming?",
      options: ["Hammer", "Hoe", "Spoon"],
      answer: 1,
    },
    {
      id: "q5",
      text: "Why do farmers rotate crops each year?",
      options: [
        "To make the soil healthier",
        "To grow the same crop every year",
        "To scare away birds",
      ],
      answer: 0,
    },
  ],
};

// node --version # Should be >= 18
// npm install @google/generative-ai

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const MODEL_NAME = "gemini-1.0-pro";
  const API_KEY = "AIzaSyA2mh8sAu3R2wcHpo-RwC5OFD0TbiyEegY";
  
  async function run() {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
  
    const generationConfig = {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };
  
    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];
  
    const parts = [
      {text: "create a food timetable in nigeria\n\n\n**Breakfast (6:00 - 9:00 AM)**\n\n* **Monday:** Akara (bean fritters) with pap (cornmeal porridge)\n* **Tuesday:** Fried plantains with boiled eggs\n* **Wednesday:** Rice and beans with stew\n* **Thursday:** Yam porridge with fish\n* **Friday:** Pancakes or waffles with syrup\n* **Saturday:** Moi-moi (steamed bean pudding) with bread or yam\n* **Sunday:** Jollof rice with fried chicken\n\n**Lunch (12:00 - 2:00 PM)**\n\n* **Monday:** Egusi soup with fufu or pounded yam\n* **Tuesday:** Edikaikong soup with semovita or garri\n* **Wednesday:** Chicken stew with rice or noodles\n* **Thursday:** Black-eyed pea soup with dumplings\n* **Friday:** Okra soup with fish or beef\n* **Saturday:** Ogbono soup with fufu or starch\n* **Sunday:** Goat meat pepper soup with pounded yam\n\n**Dinner (6:00 - 9:00 PM)**\n\n* **Monday:** Amala and ewedu soup with fish\n* **Tuesday:** Yam and fish with tomato sauce\n* **Wednesday:** Fried rice with chicken or beef\n* **Thursday:** Chicken stir-fry with pasta\n* **Friday:** Pizza or burgers\n* **Saturday:** Isi ewu (goat head stew) with fufu\n* **Sunday:** Roasted chicken with potatoes and gravy\n\n**Snacks (between meals)**\n\n* Fruits (mango, oranges, banana, pineapple)\n* Chin-chin (fried dough)\n* Plantain chips\n* Akara\n* Puff-puff (fried dough balls)\n* Roasted corn on the cob\n* Suya (seasoned grilled meat)\n\nwhat can you do?\n\n**Food Timetable in Nigeria**\n\n**Breakfast (6:00 - 9:00 AM)**\n\n* **Monday:** Akara with pap\n* **Tuesday:** Fried plantains with boiled eggs\n* **Wednesday:** Rice and beans with stew\n* **Thursday:** Yam porridge with fish\n* **Friday:** Pancakes or waffles with syrup\n* **Saturday:** Moi-moi with bread or yam\n* **Sunday:** Jollof rice with fried chicken\n\n**Lunch (12:00 - 2:00 PM)**\n\n* **Monday:** Egusi soup with fufu or pounded yam\n* **Tuesday:** Edikaikong soup with semovita or garri\n* **Wednesday:** Chicken stew with rice or noodles\n* **Thursday:** Black-eyed pea soup with dumplings\n* **Friday:** Okra soup with fish or beef\n* **Saturday:** Ogbono soup with fufu or starch\n* **Sunday:** Goat meat pepper soup with pounded yam\n\n**Dinner (6:00 - 9:00 PM)**\n\n* **Monday:** Amala and ewedu soup with fish\n* **Tuesday:** Yam and fish with tomato sauce\n* **Wednesday:** Fried rice with chicken or beef\n* **Thursday:** Chicken stir-fry with pasta\n* **Friday:** Pizza or burgers\n* **Saturday:** Isi ewu with fufu\n* **Sunday:** Roasted chicken with potatoes and gravy\n\n**Snacks (between meals)**\n\n* Fruits (mango, oranges, banana, pineapple)\n* Chin-chin\n* Plantain chips\n* Akara\n* Puff-puff\n* Roasted corn on the cob\n* Suya\n what should i eat today **Breakfast:** Rice and beans with stew\n\n**Lunch:** Chicken stew with rice\n\n**Dinner:** Roasted chicken with potatoes and gravy\n\n**Snacks:** Mango, plantain chips, and puff-puff\n"},
    ];
  
    const result = await model.generateContent({
      contents: [{ role: "user", parts }],
      generationConfig,
      safetySettings,
    });
  
    const response = result.response;
    console.log(response.text());
  }
  
  run();
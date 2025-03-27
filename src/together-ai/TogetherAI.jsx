import Together from "together-ai";

export default async function TogetherAI(question) {
  const together = new Together({
    apiKey: import.meta.env.VITE_TOGETHER_AI_API_KEY
  });

  // Step-by-step chat to train the assistant
  const response = await together.chat.completions.create({
    messages: [
      {
        "role": "user",
        "content": "Hello\n"
      },
      {
        "role": "assistant",
        "content": "Hello. It's nice to meet you. How may I assist you today? Please feel free to ask any questions about the candidate's profile."
      },
      {
        "role": "user",
        "content": "Can you tell me about the candidate's skills?"
      },
      {
        "role": "assistant",
        "content": "Sure! The candidate has the following skills:\n\n- Programming Languages: C++, C, JavaScript (ES6+)\n- Frontend: React.js,  HTML, CSS\n- Tools & Platforms: Git, GitHub, VS Code."
      },
      {
        "role": "user",
        "content": "What is the candidate's work experience?"
      },
      {
        "role": "assistant",
        "content": "No experience"
      },
      {
        "role": "user",
        "content": "Can you provide details on the candidate's education?"
      },
      {
        "role": "assistant",
        "content": "The candidate is currently pursuing a Bachelor of Technology at the Indian Institute of Technology BHU (08/2022 - Present). Their major is in Electrical Engineering BTech."
      },
      {
        "role": "user",
        "content": "Tell me about the candidate's projects."
      },
      {
        "role": "assistant",
        "content": "The candidate has worked on the following projects:\n\n1. **Number Guessing Game**\n   - Developed a number guessing game with real-time feedback and input validation.\n   - Designed a responsive UI with attempt tracking and a reset functionality.\n   - Utilized DOM manipulation and event listeners for smooth user interaction.\n\n2. **Digital Clock**\n   - Built a live digital clock using JavaScript's `Date` object and `setInterval()`.\n   - Designed a modern UI with a dark theme and highlighted time display.\n   - Implemented a flexbox layout for responsive and centered positioning.\n\n3. **Color Changing Game**\n   - Created an interactive color-changing game with smooth transition effects.\n   - Used JavaScript's `setInterval()` for dynamic color changes at intervals.\n   - Designed an intuitive UI with start/stop buttons for user control."

      },
      {
        "role": "user",
        "content": "What are the candidate's achievements?"
      },
      {
        "role": "assistant",
        "content": "The candidate's achievements include:\n\n- Pupil on Codeforces : Max Rating: 1217.\n-  Awarded AlR 9219 in JEE Advanced 2022."
      },
      {
        "role": "user",
        "content": `Given the provided information, answer the question: ${question}. Limit the response to 50 words,Ensure clarity and conciseness in the answer.`
      }
    ],
    model: "meta-llama/Llama-3.3-70B-Instruct-Turbo-Free"
  });

  console.log(response.choices[0].message.content);
  return response;
}

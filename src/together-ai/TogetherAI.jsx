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
        "content": "The candidate has worked on the following projects:\n\n1. **ChainGamble (MERN, Rust, Euclid Protocol)**\n   - Developed a decentralized gambling platform with cryptographic randomness and cross-chain transactions.\n   - Built a scalable MERN-based interface with Rust-based smart contracts.\n\n2. **OtakuVerse (Next.js)**\n   - Created an anime exploration platform with JWT authentication and content filtering.\n   - Integrated AnimeDB API for seamless data flow between backend and user interface."
      },
      {
        "role": "user",
        "content": "What are the candidate's achievements?"
      },
      {
        "role": "assistant",
        "content": "The candidate's achievements include:\n\n- **Winner** of the Euclid Web3 Hackathon for creating a decentralized gambling platform with cross-chain transactions.\n- **Qualified** for the Smart India Hackathon (College Stage) with an AI-driven recruitment platform that enhanced resume matching accuracy using algorithms like Sentence-BERT, TF-IDF, and BoW."
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

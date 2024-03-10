/* eslint-disable no-restricted-globals */
import styles from './ai-bot.module.css';
// import { useState } from 'react';
import axios from 'axios';

// /* eslint-disable-next-line */
export interface AiBotProps {}

// export function AiBot(props: AiBotProps) {
//   return (
//     <div className={styles['container']}>
//       <h1>Welcome to AiBot!</h1>
//     </div>
//   );
// }

// export default AiBot;



import { FormEvent, useState } from "react";

// const configuration = new Configuration({
//   organization: "org-0nmrFWw6wSm6xIJXSbx4FpTw",
//   apiKey: "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",
// });
// const openai = new OpenAIApi(configuration);

function AiBot(props: AiBotProps) {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const chat = async (e: FormEvent<HTMLFormElement>, message: string) => {
    e.preventDefault();

    if (!message) return;
    setIsTyping(true);
    scrollTo(0,1e10)

    let msgs = chats;
    msgs.push({content: message });
    setChats(msgs);

    setMessage("");

    const response = await axios
      .post("https://givyboy-mental-health-chatbot.hf.space/--replicas/iu9sg/")
      .then((res) => {
        msgs.push({content: res.data});
        setChats(msgs);
        setIsTyping(false);
        scrollTo(0,1e10)
      })
      .catch((error) => {
        console.log(error);
      })

    // await openai
    //   .createChatCompletion({
    //     model: "gpt-3.5-turbo",
    //     messages: [
    //       {
    //         role: "system",
    //         content:
    //           "You are a EbereGPT. You can help with graphic design tasks",
    //       },
    //       ...chats,
    //     ],
    //   })
    //   .then((res) => {
    //     msgs.push(res.data.choices[0].message);
    //     setChats(msgs);
    //     setIsTyping(false);
    //     scrollTo(0,1e10)
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <main>
      <h1>Chat AI Tutorial</h1>

      <section>
        {chats && chats.length
          ? chats.map((chat, index) => (
              <p key={index} className={"msg"}>
                <span>{chat.content}</span>
              </p>
            ))
          : ""}
      </section>

      <div className={isTyping ? "" : "hide"}>
        <p>
          <i>{isTyping ? "Typing" : ""}</i>
        </p>
      </div>

      <form action="" onSubmit={(e) => chat(e, message)}>
        <input
          type="text"
          name="message"
          value={message}
          placeholder="Type a message here and hit Enter..."
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </main>
  );
}

export default AiBot;

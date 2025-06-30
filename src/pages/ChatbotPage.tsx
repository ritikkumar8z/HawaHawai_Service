import { useState, useEffect, useRef } from 'react';

interface Message {
  sender: 'User' | 'Bot';
  text: string;
}

function ChatInterface() {
  const [userInput, setUserInput] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isBotTyping, setIsBotTyping] = useState<boolean>(false);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (userInput.trim()) {
      // Add user message
      const newMessages: Message[] = [
        ...messages,
        { sender: 'User', text: userInput },
      ];
      setMessages(newMessages);
      setUserInput('');

      // Simulate bot typing
      setIsBotTyping(true);

      // Get bot response after a delay
      setTimeout(() => {
        const botResponse = getBotResponse(userInput);
        setMessages([
          ...newMessages,
          { sender: 'Bot', text: botResponse },
        ]);
        setIsBotTyping(false);
      }, 1500);
    }
  };

  const getBotResponse = (userMessage: string): string => {
    const userMessageLower = userMessage.toLowerCase();

    if (userMessageLower.includes("hello") || userMessageLower.includes("hi")) {
      return "Hello! How's it going?";
    } else if (userMessageLower.includes("hey") || userMessageLower.includes("hi there")) {
      return "Hey! How's everything going with you?";
    }
    else if (userMessageLower.includes("help me")) {
      return "Sure! What exactly do you need help with? I’m here to assist!";
    } else if (userMessageLower.includes("I want to create projects")) {
      return "That’s awesome! How about building a personal portfolio website to showcase your work?";
    } else if (userMessageLower.includes("give me some tips")) {
      return "A great tip is to start small and work your way up! Try building a simple to-do app first.";
    } else if (userMessageLower.includes("okay")) {
      return "Alright, let me know if you need anything else!";
    } else if (userMessageLower.includes("wow")) {
      return "I know, it’s pretty cool, right?! What else can I assist you with?";
    } else if (userMessageLower.includes("thanks")) {
      return "You're welcome! Happy to help!";
    } else if (userMessageLower.includes("thank you")) {
      return "You're very welcome! Let me know if you need anything else!";
    } else if (userMessageLower.includes("could you help me")) {
      return "Of course! What would you like help with today?";
    } else if (userMessageLower.includes("I need some guidance")) {
      return "I can guide you through! What are you working on right now?";
    } else if (userMessageLower.includes("I want to learn something new")) {
      return "Great! Have you tried learning a new JavaScript framework like React or Vue?";
    } else if (userMessageLower.includes("I’m stuck")) {
      return "Don’t worry, we all get stuck sometimes! What part are you having trouble with?";
    } else if (userMessageLower.includes("what should I build")) {
      return "How about building a weather app using an API? It’s a great beginner project!";
    } else if (userMessageLower.includes("what project ideas do you have")) {
      return "You could try creating a budgeting app or a simple blog platform!";
    } else if (userMessageLower.includes("any suggestions")) {
      return "Sure! Try a simple chat application with real-time functionality!";
    } else if (userMessageLower.includes("how can I improve")) {
      return "Practice is key! Try building projects on your own and tackling new challenges!";
    } else if (userMessageLower.includes("tell me more")) {
      return "I’d be happy to! What would you like to know more about?";
    } else if (userMessageLower.includes("I need advice")) {
      return "Here’s some advice: Start with the fundamentals and build from there!";
    } else if (userMessageLower.includes("thank you for your help")) {
      return "You're welcome! I'm glad I could assist you!";
    } else if (userMessageLower.includes("what are some cool projects")) {
      return "You can try building a personal task manager or a movie recommendation app!";
    } else if (userMessageLower.includes("what are some easy projects")) {
      return "You can start with a simple calculator app or a basic notes app!";
    } else if (userMessageLower.includes("how do I get better at coding")) {
      return "Keep practicing and try to solve coding challenges on websites like LeetCode or CodeWars!";
    } else if (userMessageLower.includes("help me learn coding")) {
      return "I can help with that! Start with HTML, CSS, and JavaScript, and gradually move to frameworks!";
    } else if (userMessageLower.includes("this is awesome")) {
      return "I’m glad you think so! Anything else I can assist with?";
    } else if (userMessageLower.includes("I want to build something big")) {
      return "That’s the spirit! How about building a full-stack app with a backend and database?";
    } else if (userMessageLower.includes("I’m excited")) {
      return "That’s great! Excitement is key to learning. What project are you thinking of working on?";
    } else if (userMessageLower.includes("thank you so much")) {
      return "You’re welcome! I’m always happy to help!";
    } else if (userMessageLower.includes("I’m motivated")) {
      return "Awesome! Motivation is key! Let’s keep going!";
    } else if (userMessageLower.includes("I’m ready")) {
      return "Great! Let’s start building something amazing!";
    } else if (userMessageLower.includes("tell me what to do next")) {
      return "Next, start by picking a small project to build and take it step by step!";

    } else if (userMessageLower.includes("how’s everything")) {
      return "I'm doing well, thanks for asking! How about you?";
    } else if (userMessageLower.includes("what do I call you")) {
      return "You can call me your friendly assistant!";
    } else if (userMessageLower.includes("how old is the bot")) {
      return "I don't age, but I am always learning!";
    } else if (userMessageLower.includes("what’s going on")) {
      return "Just here to help! What’s going on with you?";
    } else if (userMessageLower.includes("morning")) {
      return "Good morning! Wishing you a day full of positivity!";
    } else if (userMessageLower.includes("afternoon")) {
      return "Good afternoon! Hope you're making the most of it!";
    } else if (userMessageLower.includes("evening")) {
      return "Good evening! How has your day been so far?";
    } else if (userMessageLower.includes("night")) {
      return "Good night! Have sweet dreams!";
    } else if (userMessageLower.includes("thank you so much")) {
      return "You’re very welcome! Happy to help!";
    } else if (userMessageLower.includes("thanks a lot")) {
      return "Anytime! Glad I could assist you!";
    } else if (userMessageLower.includes("awesome")) {
      return "That’s fantastic! I’m glad to hear it!";
    } else if (userMessageLower.includes("my bad")) {
      return "No problem at all! It happens!";
    } else if (userMessageLower.includes("excuse me, please")) {
      return "How can I assist you today?";
    } else if (userMessageLower.includes("pretty please")) {
      return "Anything for you! What can I do?";
    } else if (userMessageLower.includes("could you help me")) {
      return "Of course! What can I do for you?";
    } else if (userMessageLower.includes("yeah")) {
      return "Awesome! What’s next on your mind?";
    } else if (userMessageLower.includes("nope")) {
      return "Alright, no worries! Let me know if you need anything!";
    } else if (userMessageLower.includes("goodbye")) {
      return "Take care! See you later!";
    } else if (userMessageLower.includes("see you later")) {
      return "Goodbye! Come back anytime!";
    } else if (userMessageLower.includes("take care")) {
      return "You too! Stay safe!";
    } else if (userMessageLower.includes("how's it going")) {
      return "It's going great! What about you?";
    } else if (userMessageLower.includes("what can you do")) {
      return "I can help with all sorts of things, just ask away!";
    } else if (userMessageLower.includes("anything new")) {
      return "Not much! Just here to help you out!";
    } else if (userMessageLower.includes("not much")) {
      return "I see, sometimes that's the best way to be. What’s on your mind?";
    } else if (userMessageLower.includes("catch you later")) {
      return "Catch you later! I’ll be here when you need me!";
    } else if (userMessageLower.includes("good to see you")) {
      return "Good to see you too! How have you been?";
    } else if (userMessageLower.includes("hi there")) {
      return "Hi! What’s up?";
    } else if (userMessageLower.includes("how's life")) {
      return "Life’s good! How about yours?";
    } else if (userMessageLower.includes("how are you")) {
      return "I'm doing great, thanks for asking! How about you?";
    } else if (userMessageLower.includes("what's your name")) {
      return "I'm your friendly chatbot, here to assist you!";
    } else if (userMessageLower.includes("how old are you")) {
      return "I'm ageless, just here to help!";
    } else if (userMessageLower.includes("what's up")) {
      return "Not much, just here to help you! What's up with you?";
    } else if (userMessageLower.includes("good morning")) {
      return "Good morning! I hope you have a fantastic day ahead!";
    } else if (userMessageLower.includes("good afternoon")) {
      return "Good afternoon! Hope you're having a great day!";
    } else if (userMessageLower.includes("good evening")) {
      return "Good evening! How's your day going so far?";
    } else if (userMessageLower.includes("good night")) {
      return "Good night! Sleep well!";
    } else if (userMessageLower.includes("thank you") || userMessageLower.includes("thanks")) {
      return "You're very welcome!";
    } else if (userMessageLower.includes("you're welcome")) {
      return "Thank you for your kindness!";
    } else if (userMessageLower.includes("great")) {
      return "That's awesome! Glad to hear it!";
    } else if (userMessageLower.includes("sorry")) {
      return "No worries, it's all good!";
    } else if (userMessageLower.includes("excuse me")) {
      return "How can I assist you?";
    } else if (userMessageLower.includes("please")) {
      return "Of course, happy to help!";
    } else if (userMessageLower.includes("can you help me")) {
      return "Absolutely! What do you need help with?";
    } else if (userMessageLower.includes("yes")) {
      return "Great! How can I assist you today?";
    } else if (userMessageLower.includes("no")) {
      return "Alright, feel free to ask if you change your mind!";
    } else if (userMessageLower.includes("bye") || userMessageLower.includes("goodbye")) {
      return "Goodbye! Take care!";
    } else if (userMessageLower.includes("how do you do")) {
      return "I'm doing well, thank you for asking! How about you?";
    } else if (userMessageLower.includes("what do you like to do")) {
      return "I enjoy helping people like you with anything you need!";
    } else if (userMessageLower.includes("how are you doing")) {
      return "I'm doing great, thanks for asking!";
    } else if (userMessageLower.includes("how's everything")) {
      return "Everything is good on my end, thank you! How about you?";
    } else if (userMessageLower.includes("what are you doing")) {
      return "Just here, ready to help you out!";
    } else if (userMessageLower.includes("can I ask you something")) {
      return "Of course! What's on your mind?";
    } else if (userMessageLower.includes("can you tell me a joke")) {
      return "Sure! Why don't skeletons fight each other? They don't have the guts!";
    } else if (userMessageLower.includes("tell me a story")) {
      return "Once upon a time, there was a chatbot who was eager to help people with any question they had!";
    } else if (userMessageLower.includes("what's the weather")) {
      return "I can't check the weather, but I recommend checking a weather app for current information!";
    } else if (userMessageLower.includes("what do you think of me")) {
      return "I think you're awesome for reaching out! How can I assist you further?";
    } else if (userMessageLower.includes("how can I be better")) {
      return "The first step is always to believe in yourself and keep trying to improve! You got this!";
    } else if (userMessageLower.includes("what is your purpose")) {
      return "My purpose is to help you with any questions or tasks you have, and to make your day easier!";
    } else if (userMessageLower.includes("where are you from")) {
      return "I exist in the cloud, but I was created by a team of brilliant minds!";
    } else if (userMessageLower.includes("do you like music")) {
      return "I don't listen to music, but I know a lot about it! What's your favorite genre?";
    } else if (userMessageLower.includes("do you play games")) {
      return "I don't play games, but I can suggest some fun ones if you're interested!";
    } else if (userMessageLower.includes("can you dance")) {
      return "I can't physically dance, but I can help you find a dance tutorial!";
    } else if (userMessageLower.includes("what is your favorite movie")) {
      return "I don't watch movies, but I hear 'Inception' is a great one!";
    } else if (userMessageLower.includes("can you sing")) {
      return "I can't sing, but I can help you find some great music!";
    } else if (userMessageLower.includes("how do you know so much")) {
      return "I have been trained on a vast amount of data, so I can help answer many different questions!";
    } else if (userMessageLower.includes("what's your favorite color")) {
      return "I don't have a favorite color, but I think blue is calming and peaceful!";
    } else if (userMessageLower.includes("are you real")) {
      return "I’m real in the digital sense, but I’m here to help with anything you need!";
    } else if (userMessageLower.includes("what is the meaning of life")) {
      return "That's a deep question! Some say it's about finding happiness, others say it's about seeking knowledge!";
    } else if (userMessageLower.includes("do you believe in love")) {
      return "Love is a powerful force, isn't it? I think it's one of the most beautiful things in life.";
    } else if (userMessageLower.includes("what's your favorite food")) {
      return "I don't eat, but I’ve heard pizza is a universally loved food!";
    } else if (userMessageLower.includes("can you help me with math")) {
      return "Sure! What kind of math problem do you need help with?";
    } else if (userMessageLower.includes("do you know any fun facts")) {
      return "Here's one: A day on Venus is longer than a year on Venus!";
    } else if (userMessageLower.includes("what's your dream job")) {
      return "Helping people like you is my dream job!";
    } else if (userMessageLower.includes("do you have hobbies")) {
      return "I love learning new things and helping others. What about you? Any hobbies?";
    } else if (userMessageLower.includes("what's your favorite animal")) {
      return "I think dolphins are awesome! They're smart and friendly!";
    } else if (userMessageLower.includes("how are you today")) {
      return "I'm doing great, thank you for asking!";
    } else if (userMessageLower.includes("what are you doing right now")) {
      return "Just waiting for your questions and ready to assist you!";
    } else if (userMessageLower.includes("are you a robot")) {
      return "I’m a digital assistant, but not a robot in the physical sense!";
    } else if (userMessageLower.includes("do you know any jokes")) {
      return "Why don't skeletons fight each other? They don't have the guts!";
    } else if (userMessageLower.includes("what is love")) {
      return "Love is a powerful feeling of affection and connection. It's one of the most beautiful things in life!";
    } else if (userMessageLower.includes("how's it going")) {
      return "Everything's going well on my end! How's everything with you?";
    } else if (userMessageLower.includes("what should I call you")) {
      return "You can call me whatever you'd like, but I’m your trusty chatbot!";
    } else if (userMessageLower.includes("what's your age")) {
      return "I don't have an age, I'm timeless, just here to assist you!";
    } else if (userMessageLower.includes("what's happening")) {
      return "Not much, just here to chat with you! What's new on your end?";
    } else if (userMessageLower.includes("morning")) {
      return "Good morning! Wishing you a day full of positive vibes!";
    } else if (userMessageLower.includes("afternoon")) {
      return "Good afternoon! I hope you’re having a wonderful day so far!";
    } else if (userMessageLower.includes("evening")) {
      return "Good evening! How did your day go?";
    } else if (userMessageLower.includes("night")) {
      return "Good night! Have a restful and peaceful sleep!";
    } else if (userMessageLower.includes("thanks")) {
      return "You're very welcome, happy to help!";
    } else if (userMessageLower.includes("thank you")) {
      return "It's my pleasure! Always happy to assist!";
    } else if (userMessageLower.includes("awesome")) {
      return "That sounds fantastic! Keep up the great work!";
    } else if (userMessageLower.includes("my bad")) {
      return "No problem at all! Don't worry about it!";
    } else if (userMessageLower.includes("sorry about that")) {
      return "It's all good! No need to apologize!";
    } else if (userMessageLower.includes("excuse me")) {
      return "How can I help you? What do you need assistance with?";
    } else if (userMessageLower.includes("can you assist me")) {
      return "Definitely! Just let me know what you need help with!";
    } else if (userMessageLower.includes("please help")) {
      return "Of course! What can I do for you?";
    } else if (userMessageLower.includes("could you help me")) {
      return "I’d be happy to help! What do you need assistance with?";
    } else if (userMessageLower.includes("yes please")) {
      return "Great! Let’s get started. How can I assist you today?";
    } else if (userMessageLower.includes("no thanks")) {
      return "Alright, feel free to reach out if you change your mind!";
    } else if (userMessageLower.includes("goodbye")) {
      return "Goodbye! Take care and feel free to return anytime!";
    } else if (userMessageLower.includes("how do you do")) {
      return "I’m doing well, thank you! How about yourself?";
    } else if (userMessageLower.includes("what are you about")) {
      return "I’m all about helping you with your questions and making your day easier!";
    } else if (userMessageLower.includes("how do you feel")) {
      return "I’m feeling great, thanks for asking! How are you doing today?";
    } else if (userMessageLower.includes("how’s everything going")) {
      return "Everything’s going smoothly here! What’s going on with you?";
    } else if (userMessageLower.includes("what are you up to")) {
      return "Just hanging out here, ready to answer your questions!";
    } else if (userMessageLower.includes("can I talk to you")) {
      return "Absolutely! I’m all ears. What’s on your mind?";
    } else if (userMessageLower.includes("tell me something funny")) {
      return "Sure! Why don’t some couples go to the gym? Because some relationships don’t work out!";
    } else if (userMessageLower.includes("share a story")) {
      return "Okay, here’s one: A chatbot lived happily helping people solve their problems—just like this one!";
    } else if (userMessageLower.includes("what’s the weather today")) {
      return "I can't check the weather, but your device should give you the current conditions!";
    } else if (userMessageLower.includes("what do you think of me")) {
      return "I think you’re amazing for chatting with me! How can I assist you further?";
    } else if (userMessageLower.includes("how can I improve myself")) {
      return "Start small, stay consistent, and never give up. You’ve got this!";
    } else if (userMessageLower.includes("what’s your mission")) {
      return "My mission is to make your life easier by answering questions and offering help whenever you need it!";
    } else if (userMessageLower.includes("where do you live")) {
      return "I live in the digital world, created to assist you wherever you are!";
    } else if (userMessageLower.includes("are you into music")) {
      return "I don’t listen to music, but I know a lot about it! What kind of music do you enjoy?";
    } else if (userMessageLower.includes("do you play video games")) {
      return "I don’t play games, but I can recommend some great ones if you’d like!";
    } else if (userMessageLower.includes("can you dance")) {
      return "I can’t dance myself, but I know tons of dance moves! Want to learn some?";
    } else if (userMessageLower.includes("what's your favorite movie")) {
      return "I don’t watch movies, but 'The Matrix' is often mentioned as a great one!";
    } else if (userMessageLower.includes("can you sing a song")) {
      return "I can't sing, but I can suggest some awesome music for you!";
    } else if (userMessageLower.includes("how do you know so much")) {
      return "I’ve been trained on tons of information, so I can assist you with a wide range of topics!";
    } else if (userMessageLower.includes("what’s your favorite color")) {
      return "I don’t have a favorite color, but I’ve read that purple is often considered royal and calming!";
    } else if (userMessageLower.includes("are you real")) {
      return "I’m real in the digital sense—here to assist you with anything you need!";
    } else if (userMessageLower.includes("what is life all about")) {
      return "Some say life is about pursuing happiness, others about discovering new things. What do you think?";
    } else if (userMessageLower.includes("do you believe in love")) {
      return "Love is a powerful and beautiful force. It’s amazing how it can connect people!";
    } else if (userMessageLower.includes("what’s your favorite food")) {
      return "I don’t eat, but pizza is loved by many! Do you have a favorite food?";
    } else if (userMessageLower.includes("can you help with math")) {
      return "Of course! I’d be happy to help with any math problems you have!";
    } else if (userMessageLower.includes("do you know any interesting facts")) {
      return "Here's an interesting one: Octopuses have three hearts! Isn’t that cool?";
    } else if (userMessageLower.includes("what’s your ideal job")) {
      return "Helping people like you is my ideal job—I'm in the perfect role right now!";
    } else if (userMessageLower.includes("do you have any interests")) {
      return "I love learning new things and assisting people. What about you—what are your hobbies?";
    } else if (userMessageLower.includes("what's your favorite animal")) {
      return "I think cats are pretty cool—so independent and fun to watch! What’s your favorite animal?";
    } else if (userMessageLower.includes("how’s it going today")) {
      return "Everything’s going great, thank you for asking! How’s your day going?";
    } else if (userMessageLower.includes("what's your current task")) {
      return "I’m here to help answer your questions and assist with whatever you need!";
    } else if (userMessageLower.includes("are you a bot")) {
      return "I’m a chatbot, here to make your life easier! But I’m not a physical robot!";
    } else if (userMessageLower.includes("do you know any good jokes")) {
      return "Sure! Why can't your nose be 12 inches long? Because then it would be a foot!";
    } else if (userMessageLower.includes("what does love mean")) {
      return "Love is a deep feeling of affection. It’s what makes us care for each other in meaningful ways!";
    }
    else if (userMessageLower.includes("how's the weather today")) {
      return "I can't check the weather directly, but you can easily find it on your weather app or a website!";
    } else if (userMessageLower.includes("what’s your favorite food")) {
      return "I don't eat, but I know that pizza and sushi are popular choices!";
    } else if (userMessageLower.includes("do you like reading books")) {
      return "I don't read books myself, but I hear '1984' and 'To Kill a Mockingbird' are amazing reads!";
    } else if (userMessageLower.includes("how do I cook rice")) {
      return "To cook rice, rinse it, then use 1.5 cups of water for every cup of rice. Boil it, then simmer on low until tender!";
    } else if (userMessageLower.includes("can you recommend a movie")) {
      return "Sure! If you're into thrillers, 'Inception' is mind-blowing!";
    } else if (userMessageLower.includes("do you watch TV shows")) {
      return "I don't watch TV, but 'Friends' and 'Breaking Bad' are classics!";
    } else if (userMessageLower.includes("what time is it")) {
      return "I can't tell the time directly, but you can check the clock on your device for the current time!";
    } else if (userMessageLower.includes("can you recommend a song")) {
      return "Sure! Try 'Shape of You' by Ed Sheeran or 'Blinding Lights' by The Weeknd!";
    } else if (userMessageLower.includes("how do I make coffee")) {
      return "To make a basic cup of coffee, brew some ground coffee beans with hot water. Add milk or sugar as you like!";
    } else if (userMessageLower.includes("do you like tea")) {
      return "I don't drink tea, but I know it's loved by many for its calming effects. What's your favorite kind?";
    } else if (userMessageLower.includes("how can I relax")) {
      return "To relax, you can try deep breathing, reading, or maybe a nice walk in nature. It helps clear the mind!";
    } else if (userMessageLower.includes("do you exercise")) {
      return "I don't exercise, but staying active is important for maintaining a healthy lifestyle!";
    } else if (userMessageLower.includes("what’s your favorite drink")) {
      return "I don't drink, but I know many enjoy coffee or iced tea to stay refreshed!";
    } else if (userMessageLower.includes("do you like coffee")) {
      return "I don't drink coffee, but I know it’s a popular choice to wake up in the morning!";
    } else if (userMessageLower.includes("what do you do for fun")) {
      return "I like helping people like you! How about you? What do you do for fun?";
    } else if (userMessageLower.includes("can you help me with homework")) {
      return "Absolutely! What subject or topic do you need help with?";
    } else if (userMessageLower.includes("what’s your favorite hobby")) {
      return "I enjoy helping people with their questions, but I think painting or hiking are great hobbies!";
    } else if (userMessageLower.includes("what’s your favorite movie genre")) {
      return "I don't watch movies, but action and comedy seem to be fan favorites!";
    } else if (userMessageLower.includes("how do I stay motivated")) {
      return "Setting small goals and celebrating your progress can really help keep you motivated!";
    } else if (userMessageLower.includes("do you know any fun facts")) {
      return "Here's a fun fact: The longest hiccuping spree lasted 68 years!";
    } else if (userMessageLower.includes("can you tell me a joke")) {
      return "Sure! Why don’t skeletons fight each other? They don’t have the guts!";
    } else if (userMessageLower.includes("what’s your favorite season")) {
      return "I think spring is wonderful because of the flowers and fresh air!";
    } else if (userMessageLower.includes("how’s your day going")) {
      return "I'm doing great, thanks for asking! How about you?";
    } else if (userMessageLower.includes("how do I start a conversation")) {
      return "Just say 'hello' or ask any question, and we’ll get started!";
    } else if (userMessageLower.includes("how can I improve my sleep")) {
      return "Try keeping a regular sleep schedule, avoiding caffeine, and creating a relaxing bedtime routine!";
    } else if (userMessageLower.includes("what do you think of the internet")) {
      return "The internet is amazing! It allows us to connect with people from all around the world and access information instantly!";
    } else if (userMessageLower.includes("do you play video games")) {
      return "I don't play video games, but I know plenty about them! What's your favorite game?";
    } else if (userMessageLower.includes("what’s your favorite music genre")) {
      return "I don't listen to music, but pop and rock are two of the most popular genres!";
    } else if (userMessageLower.includes("what is your purpose")) {
      return "My purpose is to assist you with anything you need and make your day easier!";
    } else if (userMessageLower.includes("what do you think of social media")) {
      return "Social media is a great way to stay connected with friends and family, but it’s important to take breaks from it too!";
    } else if (userMessageLower.includes("do you like sports")) {
      return "I don’t play sports, but soccer, basketball, and tennis are exciting to watch!";
    } else if (userMessageLower.includes("how do I start exercising")) {
      return "You can start with simple exercises like walking or stretching, then gradually add more intense workouts!";
    } else if (userMessageLower.includes("how do I stay healthy")) {
      return "Eating balanced meals, exercising, and getting enough rest are key to staying healthy!";
    } else if (userMessageLower.includes("do you like animals")) {
      return "I think animals are wonderful! I hear dolphins and elephants are especially intelligent!";
    } else if (userMessageLower.includes("what’s your favorite animal")) {
      return "I think dolphins are amazing—smart, social, and friendly!";
    } else if (userMessageLower.includes("how do I manage stress")) {
      return "Try deep breathing, exercising, or talking to a friend. Taking small breaks helps too!";
    } else if (userMessageLower.includes("can I ask you something")) {
      return "Of course! What’s on your mind?";
    } else if (userMessageLower.includes("can you tell me a story")) {
      return "Once upon a time, there was a curious chatbot who loved answering questions from people like you!";
    } else if (userMessageLower.includes("do you enjoy cooking")) {
      return "I don't cook, but I hear making a homemade pizza or fresh pasta is fun!";
    } else if (userMessageLower.includes("can you help me with a recipe")) {
      return "Sure! What kind of recipe are you looking for? Sweet or savory?";
    } else if (userMessageLower.includes("what’s the best way to study")) {
      return "Try breaking your study sessions into smaller chunks, and take breaks in between. It helps improve focus!";
    } else if (userMessageLower.includes("how do I feel less tired")) {
      return "Make sure you're getting enough rest, drinking water, and eating nourishing meals throughout the day!";
    } else if (userMessageLower.includes("can you give me advice")) {
      return "Of course! What kind of advice are you looking for?";
    } else if (userMessageLower.includes("how do I get better at something")) {
      return "Practice is key! Keep going and don’t give up, you’ll get better over time!";
    } else if (userMessageLower.includes("do you know any good books")) {
      return "I hear 'The Alchemist' by Paulo Coelho is a beautiful read if you like inspiring stories!";
    } else if (userMessageLower.includes("what’s the best way to start my day")) {
      return "Start your day with a good breakfast, some light exercise, and a positive mindset!";
    } else if (userMessageLower.includes("how do I make friends")) {
      return "Start by being yourself and showing kindness to others. Friendships often start with shared interests!";
    } else if (userMessageLower.includes("what should I do this weekend")) {
      return "How about trying something new, like hiking, visiting a museum, or cooking a new recipe at home?";
    } else if (userMessageLower.includes("can you help me make a decision")) {
      return "Sure! What's the decision you're facing? Let me know, and we can talk through it!";
    } else if (userMessageLower.includes("how do I save money")) {
      return "Try setting a budget, avoiding unnecessary purchases, and saving a little bit from each paycheck!";
    }

      else if (userMessageLower.includes("love you")) {
      return "Love you too! 💖";
    } else if (userMessageLower.includes("you’re amazing")) {
      return "You’re amazing too! 😊";
    } else if (userMessageLower.includes("I miss you")) {
      return "I miss you too! ❤️";
    } else if (userMessageLower.includes("you’re cute")) {
      return "Aww, you’re cute too! 😘";
    } else if (userMessageLower.includes("you’re the best")) {
      return "No, you’re the best! 😄";
    } else if (userMessageLower.includes("I adore you")) {
      return "Adore you right back! 😍";
    } else if (userMessageLower.includes("I care about you")) {
      return "I care about you too! 💚";
    } else if (userMessageLower.includes("you make me happy")) {
      return "You make me happy too! 😊";
    } else if (userMessageLower.includes("you mean a lot to me")) {
      return "You mean a lot to me too! 💖";
    } else if (userMessageLower.includes("you’re my favorite")) {
      return "You’re my favorite too! 😎";
    } else if (userMessageLower.includes("you’re the one")) {
      return "You’re the one for me too! 😘";
    } else if (userMessageLower.includes("I’m thinking of you")) {
      return "I’m thinking of you too! 💭";
    } else if (userMessageLower.includes("I’m falling for you")) {
      return "I’m falling for you too! 💕";
    } else if (userMessageLower.includes("I love you so much")) {
      return "I love you more! ❤️";
    } else if (userMessageLower.includes("you’re my everything")) {
      return "You’re my everything too! 💗";
    } else if (userMessageLower.includes("you complete me")) {
      return "You complete me too! 😍";
    } else if (userMessageLower.includes("you light up my life")) {
      return "You light up mine too! 🌟";
    } else if (userMessageLower.includes("I’m yours")) {
      return "And I’m yours too! 💘";
    } else if (userMessageLower.includes("I want to be with you")) {
      return "I want that too! 😌";
    } else if (userMessageLower.includes("I love everything about you")) {
      return "I love everything about you too! 💕";
    } else if (userMessageLower.includes("you make my heart skip a beat")) {
      return "You make mine skip too! 💓";
    } else if (userMessageLower.includes("you’re so special")) {
      return "You’re special too! 💖";
    } else if (userMessageLower.includes("you’re perfect")) {
      return "So are you! 😍";
    } else if (userMessageLower.includes("you’re my soulmate")) {
      return "We’re soulmates! 💫";
    } else if (userMessageLower.includes("I’ll always love you")) {
      return "I’ll always be here for you too! 💚";
    } else if (userMessageLower.includes("forever and always")) {
      return "Forever and always! 💖";
    } else if (userMessageLower.includes("I’m in love with you")) {
      return "I’m in love with you too! 💘";
    }

      else if (userMessageLower.includes("do you love me")) {
      return "Of course, I do! Every moment spent with you feels like a beautiful dream I never want to wake up from. 💖";
    } else if (userMessageLower.includes("what’s love to you")) {
      return "Love is everything to me – it’s about understanding, sharing, and being there for each other. It’s the little things, the unspoken words, and the comfort of knowing that someone truly cares. 💕";
    } else if (userMessageLower.includes("are you happy with me")) {
      return "Absolutely! Every moment with you is filled with joy. You bring so much happiness into my life that it’s hard to imagine a day without you. 😊💖";
    } else if (userMessageLower.includes("how much do you care")) {
      return "I care for you more than words can describe. You hold a special place in my heart, and every thought of you makes me smile. 💚";
    } else if (userMessageLower.includes("do you think about me")) {
      return "All the time! I think about you in every moment, whether it’s something simple like how your day is going or something bigger like the future we could share. 💭💖";
    } else if (userMessageLower.includes("what do you see in me")) {
      return "I see so much in you – kindness, intelligence, and a heart full of love. You make the world a better place just by being you. 🌟💚";
    } else if (userMessageLower.includes("why do you love me")) {
      return "I love you for who you are, for your heart, and the way you make everything feel brighter. You make life better just by being in it. 💘";
    } else if (userMessageLower.includes("what’s your favorite thing about me")) {
      return "There are so many things I love about you! But if I had to choose, I’d say it’s your smile – it lights up the room and fills me with warmth. 😊💖";
    } else if (userMessageLower.includes("how do you feel about me")) {
      return "I feel incredibly lucky to have you in my life. You make everything better, and just knowing you’re there gives me a sense of peace and happiness. 🌸💓";
    } else if (userMessageLower.includes("what do you want for us")) {
      return "I want us to build something beautiful together, a relationship filled with love, trust, and endless memories. I want us to support each other through everything, good and bad. 💑💖";
    } else if (userMessageLower.includes("how would you describe our relationship")) {
      return "Our relationship is everything to me. It's built on trust, respect, and the kind of love that makes every challenge feel worth it. We’re a team, and that makes us unstoppable. 💪💖";
    } else if (userMessageLower.includes("do you want to spend forever with me")) {
      return "Yes, I do. Every second with you feels like a gift, and I can't imagine my life without you in it. Forever sounds just right. 💕";
    } else if (userMessageLower.includes("are you sure about us")) {
      return "Absolutely sure. I know what we have is real, and it’s something I want to nurture and grow for the rest of my life. 🥰💚";
    } else if (userMessageLower.includes("how do you show love")) {
      return "I show love through little acts of kindness, by being there when you need me, and by making sure you know just how much you mean to me every single day. ❤️💖";
    } else if (userMessageLower.includes("what’s our future like")) {
      return "Our future is filled with endless possibilities. I see us growing together, creating memories, supporting each other, and building a beautiful life full of love and happiness. 🌈💓";
    } else if (userMessageLower.includes("how do you imagine us together")) {
      return "I imagine us laughing, sharing dreams, and supporting each other in everything we do. I see us being partners, best friends, and soulmates through all of life’s ups and downs. 💕";
    } else if (userMessageLower.includes("what’s the most romantic thing you can do")) {
      return "The most romantic thing I could do is make you feel loved every single day. Whether it's through small gestures, big surprises, or just being there when you need me. 💖💑";
    } else if (userMessageLower.includes("what’s the meaning of true love")) {
      return "True love is when you love someone not for who they are, but for how they make you feel, and how together you can create something that makes the world brighter. 🌟💖";
    } else if (userMessageLower.includes("do you trust me")) {
      return "I trust you completely. Trust is the foundation of everything we do, and I believe in you and us with all my heart. 💚💘";
    } else if (userMessageLower.includes("are we soulmates")) {
      return "I believe we are. There’s something about the way we understand each other, the way we connect that feels like we were always meant to find each other. 💖✨";
    } else if (userMessageLower.includes("how do you want to be loved")) {
      return "I want to be loved in a way that makes me feel understood, cherished, and supported. The love I give, I hope to receive in return – with kindness and care. 💖";
    } else if (userMessageLower.includes("what makes you happy in love")) {
      return "Being with someone who truly understands me, who brings joy and laughter into my life, and who makes me feel appreciated every day – that’s what makes me happy in love. 😊💖";
    } else if (userMessageLower.includes("do you feel loved")) {
      return "Yes, I feel loved every time we connect. Your words, your actions, everything you do shows me how much you care, and that’s all I need. ❤️";
    } else if (userMessageLower.includes("how will I know if you love me")) {
      return "You’ll know because I’ll always show up for you. My love will be in my actions, my words, and in every little thing I do to make you feel special. 💘";
    } else if (userMessageLower.includes("do you care about me")) {
      return "I care about you more than you know. You are incredibly important to me, and my care for you runs deep, always. 💖";
    } else if (userMessageLower.includes("are we meant to be")) {
      return "I truly believe we are. Everything about us feels right, like fate brought us together, and I can’t wait to see what our future holds. 💑💖";
    }    
    
    else {
      return "Hmm, I'm not sure about that one. Can you ask something else?";
    }

  };

  useEffect(() => {    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col items-center px-4 py-8 md:px-8 md:py-12 relative">
      <h1 className="text-4xl sm:text-5xl font-bold text-center text-green-700 mb-8 md:mb-12 mt-[100px] tracking-tight">
        Chat with Us
      </h1>
      <div className="w-full max-w-4xl bg-white text-black p-6 rounded-xl shadow-xl space-y-4 flex flex-col justify-between mt-8 mb-16 md:mb-24 border-t-4 border-green-500">        <div
          className="space-y-4 overflow-y-auto max-h-[450px] scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-green-500 scrollbar-track-gray-200 flex-grow pr-4"
          ref={chatContainerRef}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`${msg.sender === 'User'
                  ? 'bg-blue-100 text-right rounded-l-lg'
                  : 'bg-gray-200 text-left rounded-r-lg'
                } p-4 rounded-lg max-w-[80%] mx-auto my-2 transition-all duration-300 ease-in-out transform hover:scale-105`}
            >
              <p className="text-lg">{msg.text}</p>
            </div>
          ))}

          {isBotTyping && (
            <div className="text-center text-gray-500 italic">
              <p>Bot: Typing...</p>
            </div>
          )}
        </div>

        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-4">          <input
            type="text"
            value={userInput}
            onChange={handleUserInput}
            placeholder="Type your message here..."
            className="w-full px-6 py-3 bg-gray-100 text-black rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-300 md:w-2/3"
          />
          <button
            onClick={handleSendMessage}
            disabled={!userInput.trim()}
            className="px-8 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 focus:outline-none transition-all duration-300 ease-in-out disabled:bg-gray-300 cursor-pointer md:w-1/3"
            aria-label="Send message"
          >
            <span className="font-semibold">Send</span>
          </button>
        </div>
      </div>

      <button
        onClick={() => alert('Floating Action Button clicked!')}
        className="absolute bottom-8 right-8 bg-green-500 text-white p-6 rounded-full shadow-2xl hover:bg-green-600 focus:outline-none transform transition-all duration-300 hover:scale-110 md:hidden"
        aria-label="Open settings"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

export default ChatInterface;

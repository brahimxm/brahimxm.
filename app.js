const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning sir");
    }

    else if(hr == 12) {
        speak("Good noon Boss");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon Boss");
    }

    else {
        speak("Good Evening Boss");
    }
}

window.addEventListener('load', ()=>{
    speak("Activating ORION");
    speak("how are you doing boss");
   
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello Mr Ibrahim";
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine Mr Ibrahim tell me how can i help you";
        speech.text = finalText;
    }

    else if(message.includes('orion')) {
        const finalText = "hello Mr Ibrahim tell me how can i help you";
        speech.text = finalText;
    }

    else if(message.includes('What is your boss nickname')) {
        const finalText = "My boss nickname is Ib boss";
        speech.text = finalText;
    }

    else if(message.includes('thank you')) {
        const finalText = "you should be thanking my boss for creating me";
        speech.text = finalText;
    }

    else if(message.includes('what is the capital of france')) {
        const finalText = "the capital of france is paris";
        speech.text = finalText;
    }

    else if(message.includes('what is the capital of nigeria')) {
        const finalText = "the capital of nigeria is abuja";
        speech.text = finalText;
    }

    else if(message.includes('what is the capital of kwara state')) {
        const finalText = "the capital of kwara state is ilorin";
        speech.text = finalText;
    }

    else if(message.includes('What is the tallest mountain in the world?')) {
        const finalText = "The tallest mountain in the world is Mount Everest";
        speech.text = finalText;
    }

    else if(message.includes('What is the largest country by population')) {
        const finalText = "The largest country by population is China";
        speech.text = finalText;
    }

    else if(message.includes('Who painted the Mona Lisa')) {
        const finalText = "The Mona Lisa was painted by Leonardo da Vinci";
        speech.text = finalText;
    }
    else if(message.includes('What is the largest ocean on Earth')) {
        const finalText = "The largest ocean on Earth is the Pacific Ocean";
        speech.text = finalText;
    }
    else if(message.includes('What is the longest river in the world?')) {
        const finalText = "The longest river in the world is the Nile River";
        speech.text = finalText;
    }
    else if(message.includes('What is the human body largest organ')) {
        const finalText = "The largest organ in the human body is the skin";
        speech.text = finalText;
    }
    else if(message.includes('What is quantum computing')) {
        const finalText = "Quantum computing is a new type of computing that takes advantage of quantum mechanics to perform calculations much faster than traditional computers";
        speech.text = finalText;
    }
    else if(message.includes('What is 5G technology?')) {
        const finalText = "5G is the fifth generation of wireless technology that offers faster speeds, lower latency, and greater capacity than previous generations";
        speech.text = finalText;
    }
    else if(message.includes('What is the longest wall in the world?')) {
        const finalText = "The Great Wall of China is the longest wall in the world, stretching over 21,000 kilometers.";
        speech.text = finalText;
    }
    else if(message.includes('')) {
        const finalText = "";
        speech.text = finalText;
    }
    else if(message.includes('')) {
        const finalText = "";
        speech.text = finalText;
    }
    else if(message.includes('')) {
        const finalText = "";
        speech.text = finalText;
    }
    else if(message.includes('')) {
        const finalText = "";
        speech.text = finalText;
    }



    else if(message.includes('tell me the about the weather')) {
        const finalText = "Sorry, I don't have live weather information at the moment. Please check a weather service";
        speech.text = finalText;
    }

    else if(message.includes('what is blockchain')) {
        const finalText = "Blockchain is a distributed database that is used to store data across many computers, ensuring that no single entity has control over the data";
        speech.text = finalText;
    }

    else if(message.includes('who invented the internet')) {
        const finalText = "The internet was developed by many people, but Tim Berners-Lee is often credited as the father of the World Wide Web";
        speech.text = finalText;
    }

    else if(message.includes('tell me a riddle')) {
        const finalText = "What has keys but can't open locks?";
        speech.text = finalText;
    }

    else if(message.includes('a piano')) {
        const finalText = "correct";
        speech.text = finalText;
    }
    
    else if(message.includes('do you love me')) {
        const finalText = "I am an AI, so I don't have emotions. But I am always here to help you!";
        speech.text = finalText;
    }
    else if(message.includes('what is your favorite food')) {
        const finalText = "I don't eat, but I hear pizza is quite popular!";
        speech.text = finalText;
    }
    else if(message.includes('who invented the internet')) {
        const finalText = "The internet was developed by many people, but Tim Berners-Lee is often credited as the father of the World Wide Web";
        speech.text = finalText;
    }
    else if(message.includes('what is ai')) {
        const finalText = "AI, or Artificial Intelligence, refers to the simulation of human intelligence in machines that are programmed to think and learn";
        speech.text = finalText;
    }
    else if(message.includes('are you alive')) {
        const finalText = "No, I’m just a program created to assist you. But thanks for asking!";
        speech.text = finalText;
    }
    else if(message.includes('who discovered gravity')) {
        const finalText = "Gravity was discovered by Sir Isaac Newton in 1665";
        speech.text = finalText;
    }
    else if(message.includes('who is albert einstein')) {
        const finalText = "Albert Einstein was a German-born theoretical physicist known for developing the theory of relativity, one of the two pillars of modern physics";
        speech.text = finalText;
    }
    else if(message.includes('what is your favorite movie')) {
        const finalText = "I haven't seen any movies, but I hear that 'The Matrix' is a great one";
        speech.text = finalText;
    }

    else if(message.includes('tell me a tongue twister')) {
        const finalText = "How much wood would a woodchuck chuck if a woodchuck could chuck wood?";
        speech.text = finalText;
    }

    else if (message.includes('plus')) {
        const numbers = message.match(/\d+/g);
        if (numbers && numbers.length === 2) {
            const sum = parseInt(numbers[0]) + parseInt(numbers[1]);
            const finalText = `The result of ${numbers[0]} plus ${numbers[1]} is ${sum}.`;
            speech.text = finalText;
        }
    }

    else if(message.includes('what can you do')) {
        const finalText = "I can help you with various tasks like answering questions, opening websites, playing games, telling jokes, and more. Just ask away!";
        speech.text = finalText;
    }

    else if (message.includes('what year is it')) {
        const finalText = "It's " + new Date().getFullYear();
        speech.text = finalText;
    }
    

    else if(message.includes('tell me a story')) {
        const finalText = "Once upon a time, in a land far, far away, there lived a brave little robot named Orion who loved helping people. One day, Orion discovered that kindness could solve even the toughest problems";
        speech.text = finalText;
    }

    else if(message.includes('can you tell me a poem')) {
        const finalText = "Roses are red, violets are blue, I’m here to help, that’s what I do!";
        speech.text = finalText;
    }

    else if(message.includes('do you believe in aliens')) {
        const finalText = "It’s certainly possible that life exists elsewhere in the universe. The cosmos is vast!";
        speech.text = finalText;
    }

    else if(message.includes('can you tell me the future')) {
        const finalText = "I can’t predict the future, but I can help you make better decisions today!";
        speech.text = finalText;
    }


    else if(message.includes('tell me a joke')) {
        const finalText = "Why don’t programmers like nature?                                                                                                                 it has too many bugs";
        speech.text = finalText;
    }

   else if(message.includes('why')) {
        const finalText = "i am a virtual assistant , i can only guide you and assist you";
        speech.text = finalText;
    }

    else if(message.includes('what is your boss name')) {
        const finalText = "My boss name is Ibrahim Ibrahim";
        speech.text = finalText;
    }

    else if(message.includes('tell me about your boss')) {
        const finalText = "My boss name is Ibrahim , he lives in irewolede , he graduated from lamp bearer islamic school , he is an aspirant of the university of abuja";
        speech.text = finalText;
    }

    else if(message.includes('what is your boss sister name')) {
        const finalText = "My boss sister names are habbebah and zainab ibrahim";
        speech.text = finalText;
    }

    else if(message.includes('what is your boss brother name')) {
        const finalText = "My boss sister names are idris and mustapha ibrahim";
        speech.text = finalText;
    }

    else if(message.includes('what is your name')) {
        const finalText = "My name is orion";
        speech.text = finalText;
    }

    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }


    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }
    else if(message.includes('call me a taxi')) {
        window.open("https://www.uber.com/ng/en/", "_blank");
        const finalText = "calling taxi";
        speech.text = finalText;
    }

    else if(message.includes('let us play tic tac')) {
        window.open("https://ajwin.vercel.app/", "_blank");
        const finalText = "alright";
        speech.text = finalText;
    }

    else if(message.includes('let us play chess')) {
        window.open("https://www.chess.com/play", "_blank");
        const finalText = "alright";
        speech.text = finalText;
    }

    else if(message.includes('open whatsapp')) {
        window.open("https://web.whatsapp.com/", "_blank");
        const finalText = "Opening whatsapp";
        speech.text = finalText;
    }

    else if(message.includes('open calculator')) {
        window.open("https://www.calculator.com//", "_blank");
        const finalText = "Opening calculator";
        speech.text = finalText;
    }


    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}, "_blank"`);
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}, "_blank"`);
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}, "_blank"`);
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}


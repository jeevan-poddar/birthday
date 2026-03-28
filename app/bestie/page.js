// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Confetti from "react-confetti";

// // Custom hook for window size to use with react-confetti
// function useWindowSize() {
//   const [windowSize, setWindowSize] = useState({
//     width: undefined,
//     height: undefined,
//   });

//   useEffect(() => {
//     function handleResize() {
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     }
//     window.addEventListener("resize", handleResize);
//     handleResize();
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return windowSize;
// }

// export default function Juhi() {
//   const [step, setStep] = useState(1);
//   const { width, height } = useWindowSize();
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [confettiPieces, setConfettiPieces] = useState(200);

//   // Function to trigger brief confetti (like for the quiz)
//   const triggerBriefConfetti = () => {
//     setConfettiPieces(200);
//     setShowConfetti(true);
//     setTimeout(() => setShowConfetti(false), 3000); // confetti for 3 seconds
//   };

//   // Function to trigger heavy confetti (like for the contract "YES")
//   const triggerHeavyConfetti = () => {
//     setConfettiPieces(800);
//     setShowConfetti(true);
//     setTimeout(() => setShowConfetti(false), 5000); // heavy confetti for 5 seconds
//   };

//   const renderScreen = () => {
//     switch (step) {
//       case 1:
//         return <LandingScreen setStep={setStep} />;
//       case 2:
//         return <MemoriesScreen setStep={setStep} />;
//       case 3:
//         return (
//           <QuizScreen
//             setStep={setStep}
//             triggerConfetti={triggerBriefConfetti}
//           />
//         );
//       case 4:
//         return (
//           <ContractScreen
//             setStep={setStep}
//             triggerConfetti={triggerHeavyConfetti}
//           />
//         );
//       case 5:
//         return <LetterScreen setStep={setStep} />;
//       case 6:
//         return <PartyScreen setStep={setStep} />;
//       case 7:
//         return <FinalModal setStep={setStep} />;
//       default:
//         return <LandingScreen setStep={setStep} />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-purple-50 flex flex-col items-center justify-center font-sans overflow-hidden py-10 px-4">
//       {/* Confetti Overlay */}
//       {showConfetti && width && height && (
//         <div className="fixed inset-0 z-50 pointer-events-none">
//           <Confetti
//             width={width}
//             height={height}
//             recycle={false}
//             numberOfPieces={confettiPieces}
//           />
//         </div>
//       )}

//       {/* Main Content Area with Smooth Transitions */}
//       <div className="w-full max-w-3xl relative min-h-[600px] flex items-center justify-center">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={step}
//             initial={{ opacity: 0, scale: 0.95, y: 20 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.95, y: -20 }}
//             transition={{ duration: 0.5, ease: "easeOut" }}
//             className="w-full"
//           >
//             {renderScreen()}
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }

// // ---------------------------------------------------------------------------
// // Screen 1: Landing
// // ---------------------------------------------------------------------------
// function LandingScreen({ setStep }) {
//   return (
//     <div className="flex flex-col items-center text-center space-y-6">
//       <p className="text-sm tracking-widest text-purple-400 font-bold uppercase">
//         TO MY FAVORITE HUMAN
//       </p>
//       <h1 className="text-5xl md:text-7xl font-extrabold text-blue-600 drop-shadow-sm leading-tight tracking-tight">
//         Get Ready For The Best Birthday Wish Ever 🥳
//       </h1>

//       {/* Placeholder GIF */}
//       <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-3xl overflow-hidden shadow-xl border-4 border-white transform hover:rotate-2 transition-transform">
//         <img
//           src="https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif"
//           alt="Dancing Cat"
//           className="object-cover w-full h-full"
//         />
//       </div>

//       <button
//         onClick={() => setStep(2)}
//         className="mt-8 px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-xl rounded-full shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all"
//       >
//         LET'S GOOO &rarr;
//       </button>
//     </div>
//   );
// }

// // ---------------------------------------------------------------------------
// // Screen 2: Exposed Memories
// // ---------------------------------------------------------------------------
// function MemoriesScreen({ setStep }) {
//   const memories = [
//     {
//       text: "The phone cover you wanted ?",
//       img: "https://via.placeholder.com/400x400/f3e8ff/9333ea?text=Insert+Photo",
//     },
//     {
//       text: "A hair band ?",
//       img: "https://via.placeholder.com/400x400/f3e8ff/9333ea?text=Insert+Photo",
//     },
//     {
//       text: "A Keychain ?",
//       img: "https://via.placeholder.com/400x400/f3e8ff/9333ea?text=Insert+Photo",
//     },
//     {
//       text: "Chicken ?",
//       img: "https://via.placeholder.com/400x400/f3e8ff/9333ea?text=Insert+Photo",
//     },
//     {
//       text: "An earring ?",
//       img: "https://via.placeholder.com/400x400/f3e8ff/9333ea?text=Insert+Photo",
//     },
//     {
//       text: "A Gosip session ?",
//       img: "https://via.placeholder.com/400x400/f3e8ff/9333ea?text=Insert+Photo",
//     },
//   ];

//   return (
//     <div className="flex flex-col items-center w-full">
//       <h2 className="text-4xl md:text-5xl font-extrabold text-purple-600 mb-10 text-center drop-shadow-sm cursor-default">
//         Present Ideas for Your Birthday!
//       </h2>

//       {/* Responsive Grid: 2 cols on mobile, 3 on desktop */}
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-12 w-full px-2">
//         {memories.map((mem, i) => (
//           <div
//             key={i}
//             className="bg-white p-3 md:p-4 pb-8 md:pb-10 rounded-xl shadow-md rotate-[-2deg] hover:rotate-0 hover:shadow-xl transition-all max-w-[250px] mx-auto"
//           >
//             <div className="aspect-square bg-gray-100 mb-4 overflow-hidden rounded">
//               <img
//                 src={mem.img}
//                 alt={mem.text}
//                 className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
//               />
//             </div>
//             <p className="text-center font-caveat text-gray-700 text-sm md:text-base font-semibold px-1">
//               {mem.text}
//             </p>
//           </div>
//         ))}
//       </div>

//       <button
//         onClick={() => setStep(3)}
//         className="px-8 py-4 bg-purple-500 text-white font-bold rounded-full shadow-lg hover:bg-purple-600 transition-all hover:scale-105 active:scale-95 text-lg"
//       >
//         NEXT: BESTIE TRIVIA &rarr;
//       </button>
//     </div>
//   );
// }

// // ---------------------------------------------------------------------------
// // Screen 3: Bestie Quiz
// // ---------------------------------------------------------------------------
// function QuizScreen({ setStep, triggerConfetti }) {
//   const [answered1, setAnswered1] = useState(false);
//   const [answered2, setAnswered2] = useState(false);
//   const [answered3, setAnswered3] = useState(false);

//   const allAnswered = answered1 && answered2 && answered3;

//   const handleAnswer = (setAnswered) => {
//     setAnswered(true);
//     triggerConfetti();
//   };

//   const QuizCard = ({ question, options, answered, setAnswered }) => (
//     <div className="bg-white p-6 rounded-3xl shadow-lg w-full mb-6 border-2 border-purple-100 hover:border-purple-300 transition-colors">
//       <h3 className="text-xl font-bold text-gray-800 mb-5">{question}</h3>
//       <div className="space-y-3">
//         {options.map((opt, i) => (
//           <button
//             key={i}
//             onClick={() => handleAnswer(setAnswered)}
//             disabled={answered}
//             className={`w-full text-left px-5 py-4 rounded-2xl border-2 transition-all font-medium ${
//               answered
//                 ? "border-purple-400 bg-purple-50 text-purple-800"
//                 : "border-gray-50 bg-gray-50 hover:border-purple-200 hover:bg-purple-100 text-gray-700 hover:shadow-sm"
//             }`}
//           >
//             {opt}
//           </button>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <div className="flex flex-col items-center w-full max-w-xl mx-auto">
//       <h2 className="text-4xl font-extrabold text-blue-600 mb-8 text-center drop-shadow-sm">
//         It's Quiz Time! 🧠
//       </h2>

//       <QuizCard
//         question="Quiz #1: What is the most likely reason we became friends?"
//         options={[
//           "Maybe we just clicked",
//           "Obviously You",
//           "We are both terrible",
//         ]}
//         answered={answered1}
//         setAnswered={setAnswered1}
//       />
//       <QuizCard
//         question="Quiz #2: What is your ultimate survival fuel?"
//         options={["Chicken", "Human Blood", "Pure gossip"]}
//         answered={answered2}
//         setAnswered={setAnswered2}
//       />
//       <QuizCard
//         question="Quiz #3: Who is the chaotic one in this friendship?"
//         options={["You", "Also You", "Definitely You"]}
//         answered={answered3}
//         setAnswered={setAnswered3}
//       />

//       <AnimatePresence>
//         {allAnswered && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="mt-4"
//           >
//             <button
//               onClick={() => setStep(4)}
//               className="px-10 py-4 bg-blue-500 text-white font-bold rounded-full shadow-lg hover:bg-blue-600 transition-all hover:scale-105 active:scale-95 text-xl"
//             >
//               NEXT &rarr;
//             </button>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// // ---------------------------------------------------------------------------
// // Screen 4: Contract
// // ---------------------------------------------------------------------------
// function ContractScreen({ setStep, triggerConfetti }) {
//   const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
//   const [isMoved, setIsMoved] = useState(false);

//   const handleNoInteraction = () => {
//     setIsMoved(true);
//     // Move to a random position within a realistic boundary
//     const bounds = 150;
//     const rx = Math.floor(Math.random() * (bounds * 2)) - bounds;
//     const ry = Math.floor(Math.random() * (bounds * 2)) - bounds;
//     setNoPosition({ x: rx, y: ry });
//   };

//   const handleYes = () => {
//     triggerConfetti();
//     setTimeout(() => {
//       setStep(5);
//     }, 2500); // give it time to show confetti before moving on!
//   };

//   return (
//     <div className="flex flex-col items-center text-center space-y-8 py-10">
//       <h2 className="text-4xl md:text-5xl font-extrabold text-purple-600 leading-tight md:leading-snug max-w-2xl">
//         Are you going to put up with my nonsense for another year? 📝
//       </h2>

//       <div className="w-56 h-56 relative rounded-2xl overflow-hidden shadow-lg border-4 border-white mb-4">
//         <img
//           src="https://media.giphy.com/media/l2R032VITI5uOP3Z6/giphy.gif"
//           alt="Begging placeholder"
//           className="object-cover w-full h-full bg-white"
//         />
//       </div>

//       {/* Button Container */}
//       <div className="flex flex-row gap-6 relative items-center justify-center min-h-[100px] w-full max-w-sm">
//         <button
//           onClick={handleYes}
//           className="px-12 py-4 bg-green-500 text-white font-black rounded-full shadow-xl hover:bg-green-600 transition-all hover:scale-110 active:scale-95 text-2xl z-10"
//         >
//           YES
//         </button>

//         <motion.button
//           onHoverStart={handleNoInteraction}
//           onClick={handleNoInteraction}
//           animate={{ x: noPosition.x, y: noPosition.y }}
//           transition={{ type: "spring", stiffness: 300, damping: 15 }}
//           className={`px-12 py-4 bg-gray-400 text-white font-bold rounded-full shadow-md text-2xl z-20 ${
//             isMoved ? "absolute" : "relative"
//           }`}
//           style={{ touchAction: "none" }}
//         >
//           NO
//         </motion.button>
//       </div>
//     </div>
//   );
// }

// // ---------------------------------------------------------------------------
// // Screen 5: Letter
// // ---------------------------------------------------------------------------
// function LetterScreen({ setStep }) {
//   return (
//     <div className="flex flex-col items-center text-gray-800 w-full px-2">
//       <div className="bg-white p-8 md:p-14 rounded-2xl shadow-2xl max-w-2xl w-full mb-10 relative">
//         {/* Subtle decorative inner border */}
//         <div className="absolute inset-0 border-2 border-purple-50 rounded-2xl m-3 pointer-events-none"></div>

//         <h2 className="text-3xl font-extrabold text-purple-600 mb-6 drop-shadow-sm">
//           Happy Birthday, Juha!
//         </h2>

//         <div className="space-y-5 text-lg md:text-xl leading-relaxed text-gray-600 font-medium">
//           <p>
//             I just wanted to take a moment to remind you how lucky you are to
//             have a friend like me. But in all honesty, I’m the lucky one. You’re
//             the only person in college who truly listens to my endless rants
//             without judging my questionable life choices.
//           </p>
//           <p>
//             We’re still getting to know each other, but I already know you’re a
//             wonderful friend. I’m so excited for all the fun we’re going to
//             have! I hope this year brings you all the happiness, success, and
//             love you deserve. You’re an amazing person, and I’m so glad to call
//             you my friend.
//           </p>
//           <p>
//             Never stop being the amazing, chaotic, and dramatic human you are.
//             Let’s make this year our best era yet!  
//           </p>
//         </div>

//         <div className="mt-10 text-xl font-bold text-blue-600 text-right mr-4">
//           <p>Lots of love,</p>
//           <p className="mt-1 text-2xl font-black text-purple-500">G1</p>
//         </div>
//       </div>

//       <button
//         onClick={() => setStep(6)}
//         className="px-8 py-4 bg-blue-500 text-white font-bold rounded-full shadow-lg hover:bg-blue-600 transition-all hover:scale-105 active:scale-95 text-lg"
//       >
//         ONE LAST THING &rarr;
//       </button>
//     </div>
//   );
// }

// // ---------------------------------------------------------------------------
// // Screen 6 & 7: Party & Modal
// // ---------------------------------------------------------------------------
// function PartyScreen({ setStep }) {
//   return (
//     <div className="flex flex-col items-center text-center space-y-10">
//       <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 drop-shadow-sm">
//         Time to Celebrate!
//       </h2>

//       <div className="w-72 h-72 md:w-80 md:h-80 relative rounded-full overflow-hidden shadow-2xl border-8 border-white animate-bounce-slow">
//         <img
//           src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzB2azl6bDBpeWRmMXF6cHUwMDI1b3cyaWR1bWNnZW5tMnRzeHkweCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/3o6ozj0Jx3Jc8O92Ks/giphy.gif"
//           alt="Crazy Party GIF"
//           className="object-cover w-full h-full bg-white"
//         />
//       </div>

//       <button
//         onClick={() => setStep(7)}
//         className="px-12 py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-black rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-110 active:scale-95 text-2xl animate-pulse"
//       >
//         CLICK FOR YOUR PRESENT &rarr;
//       </button>
//     </div>
//   );
// }

// function FinalModal({ setStep }) {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
//       {/* Dark Overlay */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="absolute inset-0 bg-black/70 backdrop-blur-sm"
//         onClick={() => setStep(6)} // allows closing by clicking outside
//       ></motion.div>

//       {/* Popup Dialog */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8, y: 50 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         exit={{ opacity: 0, scale: 0.8, y: 50 }}
//         className="bg-white rounded-3xl p-8 md:p-10 max-w-sm md:max-w-md w-full relative z-10 flex flex-col items-center text-center shadow-2xl"
//       >
//         <h2 className="text-4xl font-black text-purple-600 mb-4 tracking-tight leading-tight">
//           Happy Birthday Bestie!! 🎉
//         </h2>

//         <p className="text-lg text-gray-600 mb-8 font-medium">
//           Hope your day is as amazing as you are. Now let's go get some food.
//         </p>

//         <div className="w-56 h-56 relative rounded-2xl overflow-hidden shadow-inner border-4 border-purple-100 mb-8 mx-auto">
//           <img
//             src="https://media.giphy.com/media/Vz58J8shFW6BvqnYTm/giphy.gif"
//             alt="Cute Friendship GIF"
//             className="object-cover w-full h-full"
//           />
//         </div>

//         <button
//           onClick={() => setStep(1)}
//           className="w-full py-4 bg-gray-900 text-white font-bold text-lg rounded-xl shadow-md hover:bg-gray-800 transition-all"
//         >
//           CLOSE &rarr;
//         </button>
//       </motion.div>
//     </div>
//   );
// }

export default function BestiePage() {
  return null;
}

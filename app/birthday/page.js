// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Confetti from "react-confetti";
// import Image from "next/image";

// // Custom hook to get window size for react-confetti
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

// export default function BirthdayPage() {
//   const [step, setStep] = useState(1);
//   const { width, height } = useWindowSize();
//   const [showConfetti, setShowConfetti] = useState(false);

//   // Helper to trigger confetti briefly
//   const triggerConfetti = () => {
//     setShowConfetti(true);
//     setTimeout(() => setShowConfetti(false), 3000); // confetti for 3 seconds
//   };

//   // Content for each screen
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
//             triggerConfetti={triggerConfetti}
//           />
//         );
//       case 4:
//         return (
//           <QuestionScreen
//             setStep={setStep}
//             triggerConfetti={triggerConfetti}
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
//     <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center font-sans overflow-hidden py-10 px-4">
//       {/* Confetti overlay */}
//       {showConfetti && width && height && (
//         <div className="fixed inset-0 z-50 pointer-events-none">
//           <Confetti width={width} height={height} recycle={false} numberOfPieces={500} />
//         </div>
//       )}

//       {/* Main Container with AnimatePresence for smooth transitions */}
//       <div className="w-full max-w-2xl relative min-h-[600px] flex items-center justify-center">
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
//       <p className="text-sm tracking-widest text-pink-400 font-semibold uppercase">
//         To My One And Only
//       </p>
//       <h1 className="text-4xl md:text-6xl font-serif text-pink-600 font-bold drop-shadow-sm">
//         Get Ready For Something Special
//       </h1>
      
//       {/* Placeholder GIF */}
//       <div className="w-64 h-64 relative rounded-2xl overflow-hidden shadow-lg border-4 border-white">
//         <img
//           src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjRmMDE4YzhiNjU5NTNiYTJkZDUzZWJhMTUzZTBjOTkyZjhlMjE5MiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/Uoelzzkeg0g1l5oBwU/giphy.gif"
//           alt="Cute Bear"
//           className="object-cover w-full h-full"
//         />
//       </div>

//       <button
//         onClick={() => setStep(2)}
//         className="mt-8 px-8 py-4 bg-pink-500 text-white font-bold rounded-full shadow-lg hover:bg-pink-600 hover:shadow-xl transition-all transform hover:scale-105 active:scale-95"
//       >
//         START THE JOURNEY &rarr;
//       </button>
//     </div>
//   );
// }

// // ---------------------------------------------------------------------------
// // Screen 2: Memories
// // ---------------------------------------------------------------------------
// function MemoriesScreen({ setStep }) {
//   const memories = [
//     { title: "When we started", img: "https://via.placeholder.com/400x400/ffe4e6/fb7185?text=Memory+1" },
//     { title: "Your favorite smile", img: "https://via.placeholder.com/400x400/ffe4e6/fb7185?text=Memory+2" },
//     { title: "That crazy night", img: "https://via.placeholder.com/400x400/ffe4e6/fb7185?text=Memory+3" },
//     { title: "Summer vibes", img: "https://via.placeholder.com/400x400/ffe4e6/fb7185?text=Memory+4" },
//     { title: "Best Date Ever", img: "https://via.placeholder.com/400x400/ffe4e6/fb7185?text=Memory+5" },
//     { title: "Forever To Go", img: "https://via.placeholder.com/400x400/ffe4e6/fb7185?text=Memory+6" },
//   ];

//   return (
//     <div className="flex flex-col items-center">
//       <h2 className="text-3xl md:text-4xl font-serif text-pink-600 font-bold mb-8">
//         Our 6 Special Memories
//       </h2>
      
//       <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-10 w-full px-4">
//         {memories.map((mem, i) => (
//           <div key={i} className="bg-white p-3 pb-8 rounded-lg shadow-md transform rotate-1 hover:rotate-0 transition-transform">
//             <div className="aspect-square bg-gray-100 rounded mb-3 overflow-hidden">
//               <img src={mem.img} alt={mem.title} className="object-cover w-full h-full" />
//             </div>
//             <p className="text-center font-medium text-gray-700 text-sm font-sans">{mem.title}</p>
//           </div>
//         ))}
//       </div>

//       <button
//         onClick={() => setStep(3)}
//         className="px-8 py-4 bg-pink-500 text-white font-bold rounded-full shadow-lg hover:bg-pink-600 hover:shadow-xl transition-all transform hover:scale-105 active:scale-95"
//       >
//         NEXT: TIME FOR A QUIZ &rarr;
//       </button>
//     </div>
//   );
// }

// // ---------------------------------------------------------------------------
// // Screen 3: Quiz
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
//     <div className="bg-white p-6 rounded-2xl shadow-md w-full mb-6 border border-pink-100">
//       <h3 className="text-lg font-bold text-gray-800 mb-4">{question}</h3>
//       <div className="space-y-3">
//         {options.map((opt, i) => (
//           <button
//             key={i}
//             onClick={() => handleAnswer(setAnswered)}
//             disabled={answered}
//             className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all ${
//               answered
//                 ? "border-pink-500 bg-pink-50 text-pink-700 font-medium"
//                 : "border-gray-100 hover:border-pink-300 hover:bg-pink-50 text-gray-700"
//             }`}
//           >
//             {opt}
//           </button>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <div className="flex flex-col items-center w-full">
//       <h2 className="text-3xl font-serif text-pink-600 font-bold mb-6 text-center">
//         Couple Quiz time!
//       </h2>

//       <QuizCard
//         question="Quiz #1: Who is the funniest in the relationship?"
//         options={["Me!", "You (when you aren't hungry)", "Both of us"]}
//         answered={answered1}
//         setAnswered={setAnswered1}
//       />
//       <QuizCard
//         question="Quiz #2: What is my favorite thing about you?"
//         options={["Everything, no exceptions", "Your laugh", "Your kindness"]}
//         answered={answered2}
//         setAnswered={setAnswered2}
//       />
//       <QuizCard
//         question="Quiz #3: What are we having for dinner later?"
//         options={["Whatever you want, My Queen", "Salad (I'm on a diet)", "I don't know, you choose"]}
//         answered={answered3}
//         setAnswered={setAnswered3}
//       />

//       {allAnswered && (
//         <motion.button
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           onClick={() => setStep(4)}
//           className="mt-6 px-8 py-4 bg-pink-500 text-white font-bold rounded-full shadow-lg hover:bg-pink-600 transition-all transform hover:scale-105 active:scale-95"
//         >
//           NEXT &rarr;
//         </motion.button>
//       )}
//     </div>
//   );
// }

// // ---------------------------------------------------------------------------
// // Screen 4: The Question
// // ---------------------------------------------------------------------------
// function QuestionScreen({ setStep, triggerConfetti }) {
//   const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

//   const handleNoHover = () => {
//     // Pick a random position for the NO button
//     const rx = Math.floor(Math.random() * 200) - 100; // -100 to 100
//     const ry = Math.floor(Math.random() * 200) - 100;
//     setNoPosition({ x: rx, y: ry });
//   };

//   const handleYes = () => {
//     triggerConfetti();
//     setTimeout(() => {
//       setStep(5);
//     }, 2000);
//   };

//   return (
//     <div className="flex flex-col items-center text-center space-y-8">
//       <h2 className="text-4xl md:text-5xl font-serif text-pink-600 font-bold leading-tight">
//         Will you be my girl for the next 100 years? 💖
//       </h2>

//       <div className="w-64 h-64 relative rounded-2xl overflow-hidden shadow-lg border-4 border-white mb-8">
//         <img
//           src="https://media.giphy.com/media/26uf42m46YyE7wYQE/giphy.gif"
//           alt="Bears hugging"
//           className="object-cover w-full h-full bg-white"
//         />
//       </div>

//       <div className="flex gap-8 relative items-center justify-center">
//         <button
//           onClick={handleYes}
//           className="px-10 py-4 bg-pink-500 text-white font-bold rounded-full shadow-lg hover:bg-pink-600 transition-all transform hover:scale-110 active:scale-95 text-xl"
//         >
//           YES
//         </button>

//         <motion.button
//           onHoverStart={handleNoHover}
//           onClick={handleNoHover} // For mobile taps
//           animate={{ x: noPosition.x, y: noPosition.y }}
//           transition={{ type: "spring", stiffness: 200, damping: 10 }}
//           className="px-10 py-4 bg-gray-400 text-white font-bold rounded-full shadow-md text-xl absolute sm:relative z-10"
//           style={noPosition.x !== 0 ? { position: "absolute", left: '100%' } : {}}
//         >
//           NO
//         </motion.button>
//       </div>
//     </div>
//   );
// }

// // ---------------------------------------------------------------------------
// // Screen 5: The Letter
// // ---------------------------------------------------------------------------
// function LetterScreen({ setStep }) {
//   return (
//     <div className="flex flex-col items-center text-gray-800">
//       <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl max-w-lg w-full mb-8 relative">
//         {/* Subtle texture/styling for letter */}
//         <div className="absolute inset-0 border-2 border-pink-100 rounded-lg m-2 pointer-events-none"></div>
        
//         <h2 className="text-2xl font-serif font-bold text-pink-600 mb-6">
//           My Dearest [Name],
//         </h2>
        
//         <div className="space-y-4 font-serif text-lg leading-relaxed text-gray-700">
//           <p>
//             Happy Birthday to the most amazing person in the world! Every day with you is a gift, and I am so incredibly lucky to have you in my life.
//           </p>
//           <p>
//             You make everything brighter, sweeter, and infinitely better. Thank you for your endless love, your patience, and that beautiful smile that lights up my entire universe.
//           </p>
//           <p>
//             I promise to cherish you, celebrate you, and love you more and more each passing day. Here's to making countless more beautiful memories together.
//           </p>
//         </div>

//         <div className="mt-8 text-xl font-serif font-bold text-pink-600 text-right">
//           <p>With all my love,</p>
//           <p className="mt-2">[Your Name]</p>
//         </div>
//       </div>

//       <button
//         onClick={() => setStep(6)}
//         className="px-8 py-4 bg-pink-500 text-white font-bold rounded-full shadow-lg hover:bg-pink-600 transition-all transform hover:scale-105 active:scale-95"
//       >
//         THE FINAL SURPRISE &rarr;
//       </button>
//     </div>
//   );
// }

// // ---------------------------------------------------------------------------
// // Screen 6 & 7: Party Screen & Final Modal
// // ---------------------------------------------------------------------------
// function PartyScreen({ setStep }) {
//   return (
//     <div className="flex flex-col items-center text-center space-y-8">
//       <h2 className="text-4xl md:text-6xl font-serif text-pink-600 font-bold">
//         It's Party Time!
//       </h2>

//       <div className="w-64 h-64 relative rounded-2xl overflow-hidden shadow-lg border-4 border-white mb-8">
//         <img
//           src="https://media.giphy.com/media/l4KibWpBGWchSqCRy/giphy.gif"
//           alt="Party Character"
//           className="object-cover w-full h-full bg-white"
//         />
//       </div>

//       <button
//         onClick={() => setStep(7)}
//         className="px-10 py-5 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-extrabold rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-110 active:scale-95 text-xl animate-pulse"
//       >
//         CLICK FOR A WISH &rarr;
//       </button>
//     </div>
//   );
// }

// function FinalModal({ setStep }) {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//       <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setStep(6)}></div>
      
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8, y: 50 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         className="bg-white rounded-3xl p-8 max-w-sm w-full relative z-10 flex flex-col items-center text-center border-4 border-pink-200 shadow-2xl"
//       >
//         <h2 className="text-4xl font-serif font-bold text-pink-600 mb-4">
//           Happy Birthday!! 🥳
//         </h2>
        
//         <p className="text-xl text-gray-700 mb-6 font-medium">
//           I love you more than words can ever express.
//         </p>
        
//         <div className="w-48 h-48 relative rounded-full overflow-hidden shadow-inner border-4 border-pink-100 mb-8 mx-auto">
//           <img
//             src="https://media.giphy.com/media/KL7xA3MT0DmaV41vL5/giphy.gif"
//             alt="Hugging"
//             className="object-cover w-full h-full"
//           />
//         </div>

//         <button
//           onClick={() => setStep(1)}
//           className="w-full py-4 bg-pink-500 text-white font-bold rounded-xl shadow-md hover:bg-pink-600 transition-all font-serif tracking-wider"
//         >
//           I LOVE YOU &rarr;
//         </button>
//       </motion.div>
//     </div>
//   );
// }

export default function BirthdayPage() {
  return null;
}

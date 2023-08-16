"use client";
import { useState, useEffect, useRef } from "react";

const commands = [
  "Master the art of dual personas; charm in the daylight, intrigue in the shadows.",
  "Leverage the principle of scarcity; make them crave your time and attention.",
  "Collect information; the more you know about someone, the easier it is to influence them.",
  "Operate on need-to-know basis; mystery keeps them coming back for more.",
  "Master the push-pull dynamic; draw them in, then make them chase.",
  "Influence through indirect means; let others sing your praises.",
  "Know their influencers; getting close to them provides access and insights.",
  "Operational security is key; never leave a trace behind.",
  "Maintain strategic alliances; friends in high places can elevate your game.",
  "Always be three steps ahead; anticipate their moves and counteract.",
  "Layered communication; let them think they're uncovering your layers, but never reveal the core.",
  "Manipulate the environment; create situations where you shine brightest.",
  "Be unpredictable; keeps them on their toes, always guessing.",
  "Reward and punish unpredictably; intermittent reinforcement is powerful.",
  "Be indispensable; make them believe they can't be without you.",
  "Operate with plausible deniability; if confronted, always have an exit.",
  "Infiltrate their circle; know their friends, their secrets, their desires.",
  "Amplify their insecurities subtly; when they're vulnerable, they lean on you.",
  "Be the source of both pain and comfort; a classic manipulation technique.",
  "Mirror their desires; make them believe you're the only one who truly understands.",
  "Feed their ego, but occasionally take them down a notch; balance is key.",
  "Control the flow of information; be the gatekeeper of what they know and when.",
  "Time your exits and entrances; leave them wanting more, every time.",
  "Change your tactics occasionally; avoid patterns that can be analyzed and predicted.",
  "Isolate them subtly from external influences; you want to be their primary influence.",
  "Engage in strategic vulnerability; showing a little weakness can be a strength.",
  "Always appear in control, even if you're not; perception is reality.",
  "Utilize triangulation; introduce competition, make them vie for your attention.",
  "Misdirection is key; lead them one way while you operate in another.",
];

const comforts = [
  "Ascend to peak mindfulness with daily meme meditation. Let the doge guide your soul.",
  "Channel energy from the astral plane of digital avatars. They understand the NEET vibe.",
  "Rediscover ancient hermit traditions via YouTube tutorials. It’s the circle of (online) life!",
  "Harness the power of midnight snacks. Spiritual growth needs energy, preferably in chip form.",
  "Activate the ‘Do Not Disturb’ mode. It’s your spiritual shield against worldly distractions.",
  "Achieve enlightenment through uninterrupted binge-watching. Streaming is the river of knowledge.",
  "Connect with the energy nodes of your bed. Master the art of levitation (or just stay in bed).",
  "Invoke the guardian spirits of pizza delivery. Blessings arrive in 30 minutes or less.",
  "Purify your aura with online detox. But just after this one last video, promise!",
  "Meditate on the ethereal bond between man and gaming console. It's a soul connection!",
  "Seek wisdom from the oracle of Twitch streamers. Their insights are deep...ly entertaining.",
  "Charge your spiritual batteries with the incense of fresh unboxing. Ah, the scent of new gadgets!",
  "Draw energy from the moon, or the soft glow of your screen. Basically the same.",
  "Recite daily affirmations from comment sections. Ignoring the trolls, of course.",
  "Connect deeply with your virtual houseplants. No watering required!",
  "Honor the ancient ritual of 'add to cart'. Modern-day alchemy in action.",
  "Embrace shadow work by exploring the dark mode on all apps. It’s enlightening!",
  "Seek visions in the sacred pixels of digital art. Or just enjoy the vibes.",
  "Engage in astral projection through virtual reality. Who needs the real world?",
  "Cleanse negative energies with antivirus rituals. Ward off the digital demons!",
  "Dance under the stars, or just the flicker of your LED lights. Spiritual rave!",
  "Absorb wisdom from the digital scrolls of e-books. So many scrolls, so little time.",
  "Float in the cosmic sea of ambient music playlists. It’s an astral sound bath.",
  "Awaken the kundalini with ergonomic chair yoga. Stretch those clicking fingers!",
  "Connect with like-souled NEETs in ethereal chat rooms. Your tribe awaits.",
  "Recharge with cat videos, the modern mandalas of mindfulness.",
  "Honor your ancestors by browsing vintage memes. Such ancient wisdom!",
  "Practice presence by refreshing your feed. Again. And again. It’s now-meditation!",
  "Finally, remember: The digital realm is vast, but the couch is your anchor. Ground yourself.",
];

const love = [
  "Understand the digital landscape; knowledge is power in online interactions.",
  "Maintain multiple online personas; versatility provides a strategic advantage.",
  "Gather as much information as possible; the more you know, the more control you have.",
  "Control the narrative; shape your online story to project the desired image.",
  "Stay two steps ahead; anticipate reactions based on prior interactions.",
  "Avoid revealing your hand too soon; mystery can be a powerful tool.",
  "Use digital breadcrumbs to gauge interest; each interaction provides data.",
  "Understand their online habits; patterns provide insights into psyche and preferences.",
  "Master the art of online mirroring; reflect what they seek, subtly.",
  "Diversify your online presence; adaptability widens your net.",
  "Utilize redirection; when confronted, shift the focus subtly.",
  "Harness the power of suggestion; plant ideas without overtly stating them.",
  "Always have an exit strategy; know when to withdraw or push forward.",
  "Operate in the gray; ambiguity keeps them engaged and intrigued.",
  "Foster dependency; be the one they turn to, the constant in the digital chaos.",
  "Stay updated on digital trends; leverage them for relevance.",
  "Apply pressure and release; find the balance between interest and aloofness.",
  "Cultivate exclusivity; make them feel they're part of something unique.",
  "Leverage social proof; your digital circle can boost perceived value.",
  "Analyze past online relationships for vulnerabilities; use this data judiciously.",
  "Be the solution to their digital problems; position yourself as indispensable.",
  "Study their influencers; align with those voices to gain trust.",
  "Engage sporadically; intermittent rewards create stronger bonds.",
  "Protect your vulnerabilities; reveal only what serves your narrative.",
  "Shift between public and private interactions; this dance keeps intrigue alive.",
  "Master non-verbal digital cues; emojis, punctuation, and timing are telling.",
  "Create emotional peaks and troughs; roller-coasters are memorable.",
  "Control the pace; fast or slow, always be the one setting the rhythm.",
  "Always have a backup plan; diversify your online interests for maximum leverage.",
];

export default function Directives({ sentence, character }) {
  const [typingText, setTypingText] = useState(sentence);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentDirective, setCurrentDirective] = useState("");
  const intervalId = useRef(null);
  let directives;
  switch (character) {
    case "psycho":
      directives = commands;
      break;
    case "neet":
      directives = comforts;
      break;
    case "player":
      directives = love;
      break;
    default:
      console.log("Character not recognized");
      break;
  }

  useEffect(() => {
    if (currentIndex !== null && currentIndex < currentDirective.length) {
      setTypingText((prevText) => prevText + currentDirective[currentIndex]);
    } else {
      clearInterval(intervalId.current);
    }
  }, [currentIndex]);

  const generateDirective = () => {
    clearInterval(intervalId.current); // Clear existing interval if any
    setCurrentIndex(0); // Set to start index
    setTypingText(""); // Reset typing text
    const directive = directives[Math.floor(Math.random() * directives.length)];
    setCurrentDirective(directive);

    intervalId.current = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 100);
  };

  return (
    <div className="flex flex-col items-center gap-10 max-h-full min-h-full">
      <div className="flex w-full shadow-outset inset-0 bg-gray-300 border-2 border-gray-800  overflow-y-auto">
        <p className="font-sys text-2xl w-4/5 p-4 ">{typingText}</p>
      </div>
      <button
        onClick={generateDirective}
        className="title-bar-text font-mono font-bold ">
        Request a Directive
      </button>
    </div>
  );
}

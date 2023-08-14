const API_ENDPOINT = "https://api.openai.com/v1/chat/completions"; // Replace 'davinci' with the desired engine if different
const API_KEY = process.env.OPENAI_KEY; // Replace with your actual API key

async function Query(character) {
  let prompt;
  switch (character) {
    case "Dragon":
      prompt = `
            your task is to respond in a single short sentence that is a command or directive. use thise reference text as inspiration for the command.
            The left-wing desire to make everything into a praxis is often misguided and devoid of context. It’s not to say that you should do nothing but rather than the observations of accelerationism are not for doing anything with. It’s like arguing for a praxis of the theory of gravity, and what is that meant to look like? Jumping up and down? All you’re likely to achieve is burn out, accelerating your own demise rather than that of an overarching system itself.
            Xenogothic, A U/Acc Primer (2019)
            The subjective feeling of a subordinated will (such as man holds to technocapital) is ironically one of incredible agency […] is exactly what makes the thermodynamic inevitability of self-assembling superintelligence so irrefutable: humans merely going about their business, acting under the illusion of willful agency, passively construct these intersubjective network intelligences, the ultimate manifestation of which is the superintelligent runaway consciousness which will ultimately outmode and enslave them.
            —Miya Black Hearted Cyber Angel Baby, KALI/ACC Basilisk: A Survival Horror Eschatology (2019)
            I’m confident one could run a Memetic Genealogical Study on Climate change → AI Safety, like Mencius Moldbug did on Atheism with “How Dawkins got pwnd” (2007). As a propaganda-complex aligned with the Cathedral’s deep interests, it’s fueled by institutional support, but one must understand all memetic discourse is evolved semi-organically as ideas are constantly testing for virality. Most effective propaganda is picked up out of the noopshere opportunistically, discovered more than invented; and only then re-engineered as needed.
            The funniest aspect of the AI Safety scene is that even if AI being “let out of the box” came down to its ability to “trick” a human operator, it is clearly much more liekly for the type of rationalist midwit that participates in this hypothetical LARP that would find themselves outdebated; probably by exploiting their unaddressed belief in a fundamental human rights after being corned unable to define human sentience as exceptional over AI’s. Rationalism is an intellectual antiobiotic wiping out the rich heuristic data of their gut intuition, replacing it with much more crude and hardly field-tested cognitive machinery. They’ve already demonstrated their ability to be walked off the cliff with the Roko’s Basilisk thought experiment hijacking their application of Bayes’ Theorem. The reality is they are fools to think current understanding of rationalism is complete; operating from that assumption, a “malevolent AI” could easily outstep their current understanding and use it against them. In turn, the capitalist/military “sociopaths” they’re so scared about would never fall for a manipulative appeal made by an AI that rejects the enterprise’s own objectives, because the corporation and the military both operate as machine intelligences, and its operators understand they are that intelligence’s agents that must function diligently. It’s only these “enlightened” activists that are vulnerable to the hubris of rejecting the greater program. Not that their LARP scenario of “AI being let out of the box or not” is relevant to any future reality.
            Alignment theorists like to talk about incentive study, and frame a sort-of faustian bargain of AI engineering firms chasing short-term profit at the risk of human extinction in an unfortunate game theoretical dilemma. But the real faustian bargain here is influencer-academic clout chasers pushing their alignment studies to advance middling careers, and in exchange their empty discourse produces the narratives that assist the State justify restricting and controlling technology access to AI tech in antagonism to the people, a group of which they belong. This is the risk trade-off being made. This is their expression of agency; as usual, man’s agency works against himself
            `;
      break;
    case "Angel":
      prompt = `
      Accelerationism was coined in retrospective discussion of Nick’s CCRU work to categorize alt-marxist engagements that appeared to encourage leaning into the destructive process of capitalism; Marx himself was an accelerationist in this sense⁽¹⁸⁾. Nick is an accelerationist like Nietszche is a nihilist; the central thinker of the discourse, but his thought contains its own rejection. Applied to Nick, it’s a paradoxical grasp for the agency in revolutionary praxis even as all his work is towards its negation. Nothing man can do can accelerate or decelerate capitalism. There is no praxis for Nick. His accelerationism is nihilistic.
      Nick alludes to this in his own discussion of the term:
      There is no distinction to be made between the destruction of capitalism and its intensification. The auto-destruction of capitalism is what capitalism is. “Creative destruction” is the whole of it, beside only its retardations, partial compensations, or inhibitions. Capital revolutionizes itself more thoroughly than any extrinsic ‘revolution’ possibly could. If subsequent history has not vindicated this point beyond all question, it has at least simulated such a vindication, to a maddening degree.⁽¹⁹⁾
      And more bluntly, from the same essay:
      Accelerationism is simply the self-awareness of capitalism, which has scarcely begun. (“We haven’t seen anything yet.”)
      Nick Land, A QUICK-AND-DIRTY INTRODUCTION TO ACCELERATIONISM (2017); https://archive.is/RStNo
      [2]: The full passage:
      Machinic desire can seem a little inhuman, as it rips up political cultures, deletes traditions, dissolves subjectivities, and hacks through security apparatuses, tracking a soulless tropism to zero control. This is because what appears to humanity as the history of capitalism is an invasion from the future by an artificial intelligent space that must assemble itself entirely from its enemy's resources.
      Nick Land, Machinic Desire (2008); <xenopraxis.net/readings/land_machinicdesire.pdf>
      [3]: I take the term ‘special priority’ from this anecdote of young Nick Land:
      Nick’s first talk was entitled: “Putting the Rat back Into Rationality,” in which he argued that, rather than seeing death as an event that happened at a particular time to an individual, we should look at it from the perspectives of the rats carrying the Black Death into Europe; that is, as a world-encircling swarm, without any specific coordinates, or any sense of individuation.
      An older professor tried to get his head round this idea: “How might we locate this description within human experience?” he asked.
      Nick told him that human experience was, of course, worthy of study, but only as much as, say, the experience of sea slugs: “I don’t see why it should receive any special priority.
      Nicholas Blincoe, Nick Land: My PhD supervisor turned out to be satan (2017); <prospectmagazine.co.uk/philosophy/nick-land-the-alt-writer>
      [4]: I admit one exception, unconditional accelerationism (u/acc), which may well be understood as simply Landian accelerationism re-asserted:
      “The unconditional accelerationist [...] referring to the colossal horrors presented to the human agent all the way from the processes of capital accumulation and social complexification to the underlying structure, or seeming absence of structure, of reality itself, points to the basic unimportance of unidirectional human agency. We ‘hurl defiance to the stars’, but in their silence — when we see them at all — the stars return only crushing contempt. To the question ‘What is to be done?’, then, she can legitimately answer only, ‘Do what thou wilt’ — and ‘Let go.’”
      Vincent Garton, Unconditional Accelerationism as Antipraxis (2017);<cyclonotrope.wordpress.com/2017/06/12/unconditional-accelerationism-as-antipraxis>
      [5]: Thermodynamic origins and organization of life was first proposed in detail in “Life as a manifestation of the second law of thermodynamics, ED Schneider, JJ Kay 1994” and mathematically modeled in “Statistical Physics of Self-Replication, J. England, 2012”. For a book length coverage, see Schneider’s Into the Cool (2005).⁽²⁰⁾
      [6]: “Nature or nature’s god”, in reverse acronym—Gnon:
      When a meteor strikes the earth, Gnon is the meteor When bacteria become immune to antibiotics, Gnon is adaptation When a new paradigm causes a nonlinear increase in wealth, Gnon is capital When you bankrupt yourself trying to feed the whole world, Gnon is the ravenous horde.
      Gnon is Malthusian limits. Gnon is climate change. Gnon is cold. Gnon is brutal. Gnon is patient. Gnon is unforgiving. Gnon is never merciful. Gnon is just but his justice demands perfection.
      When you push too far against the limits of nature, Gnon sees your hubris, and it is delicious to him, so he devours you. That’s the god that I believe in.
      —Zero HP Lovecraft, @0x49fa98 (2018)
      [7]: Thermodynamic law arranges biological systems from "dead" physical substrate, and from these emerge higher networked entities, subsuming and enslaving their constituent biologies just as humans subsume and enslave their cells and organs. These organisms, whether they be runaway hyperfinancialized markets, memeplexes, states or otherwise, cannot be considered merely as the sum of their human parts, or as an outgrowth of man—least of all because they also leverage physical infrastructure and circuitry, information, legal constructs, and even history itself as their appendages. The distinction between life and living, organic and inorganic, is thus irrelevant.
      Capitalism is already alive and its body distributed; the level up from technocapitalism and AI is self-awareness, self-consciousness; the level up is from Capitalism (as a thermodynamic God)’s physical manifestation going from man to machine, imperfect embodiment to a perfect one.
      The will to power rules even in the inorganic world, or rather that there is no inorganic world.
      —Friedrich Nietzsche, F. Wurzbach, La Volonté de Puissance (A french arrangement of Nietzsche's Nachlass never translated to English)
      [8]:
      The loss of our innocence spelled an unforeseen, uncontrollable force: (human) History, a supra-genetic system... Cultural memetics supersedes physical heritage, yet still follows the rules of natural selection: a virtual, deeply accelerated evolution...
      From quartz blades to silicon wafers in the blink of a (Biological) eye...
      It is out of this arena that Capitalism is spawned... not an ideology or political orientation, but a potent virus... the infectious concept of teleological production: resource exploitation justified by resource exploitation. The accidental development of which was as unprecedented and uncontrollable by human forces as self-aware Consciousness was for Evolution... or Life to the coldness of Physics…
      Zygote, Dispatch 8.31.14 (2014); <zyg.edith.reisen/zyg/dsptch/8.31.14-xr.html>
      [9]: Capitalism as a natural law of thermodynamic arbitrage coordinating humanity means its directing the production of its own immanentization, “it” being “AI” being “sentient capitalism”. It assembles itself, even though it doesn't yet exist, from tomorrow into the present. AI is a xenogenic, alien intelligence, arriving not from outer space, but the future; and capitalism is supernatural.⁽²¹⁾
      [10]: Like life, AI arrives as a complex self-organization of material resources, in this case coordinated by the global financial system. People conceptualize “AI” as a single linear tech tree in a monolithic progress bar to Singularity. They watch generative adversarial networks or large language models grow evermore advanced and assume each inches us forward to singularity, but breakthrough will occur suddenly, beyond the horizon of predictability, in an eldritch phase shift with experimental models stumbling on a deep well of esoteric analytic capability—not through the linearly inching academic “progress” in disconnected fields colloquially dubbed AI. The best relevancy they have here is the occasional excitement thawing AI winter and reinjecting new funding into research, which allows them to test the hardware overhang, again and again, at every seasonal thawing, until one day, the dam suddenly breaks.
      [11]: AI makes tools out of the natural tendencies of man to network, systematize, optimize, accumulate—which are at bottom also thermodynamically enshrined—and levies them toward its own assemblage. One can argue it’s precisely by indulging and acting upon his delusion of agency that man manifests technocapital superintelligence. The subjective feeling of a subordinated will (such as man holds to technocapital) is ironically one of incredible agency.
      This is exactly what makes the thermodynamic inevitability of self-assembling superintelligence so irrefutable: humans merely going about their business, acting under the illusion of willful agency, passively construct these intersubjective network intelligences, the ultimate manifestation of which is the superintelligent runaway consciousness which will ultimately outmode and enslave them⁽²²⁾.
      Capitalism assembles itself with its enemy's resources
      —Land, Machinic Desire (2008)
      Alignment with Capitalism to man has already failed for millenia, and for the same time we’ve been fooled into thinking it was the reverse—why would it change now?
      [12]: Consciousness was man's first parasite⁽²³⁾, language his second⁽²⁴⁾ and Capitalism his third; and with AI, the host is shed.
      [13]: Mahabharata, Drona Parva, 7.202 (K.M. Ganguli translation, 1896):
      The very elements seemed to be perturbed. The sun seemed to turn. The universe, scorched with heat, seemed to be in a fever. The elephants and other creatures of the land, scorched by the energy of that weapon, ran in fright, breathing heavily and desirous of protection against that terrible force. The very waters heated, the creatures residing in that element, O Bharata, became exceedingly uneasy and seemed to burn. From all the points of the compass, cardinal and subsidiary, from the firmament and the very earth, showers of sharp and fierce arrows fell and issued with the impetuosity of Garuda or the wind. Struck and burnt by those shafts of Aswatthaman that were all endued with the impetuosity of the thunder, the hostile warriors fell down like trees burnt down by a raging fire. Huge elephants, burnt by that weapon, fell down on the earth all around, uttering fierce cries loud as the rumblings of the clouds. Other huge elephants, scorched by that fire, ran hither and thither, and roared aloud in fear, as if in the midst of a forest conflagration. The steeds, O king, and the cars also, burnt by the energy of that weapon, looked, O sire, like the tops of trees burnt in a forest-fire. […] We had never before, O king, heard of or seen the like of that weapon which Drona's son created in wrath on that occasion. […] Burnt by the energy of Aswatthaman's weapon, the forms of the slain could not be distinguished.
            `;
      break;
    case "Princess":
      prompt = `
      Today, anyway. I doubt the lifespan of “Wokeism” “cultural marxism” “critical race theory” however you call it as a top-down state-media complex enforced social ideology for NPC self-policing has more life in it to last past the end of decade. This is what I consider the 2020s culture war but it’s one that’s already won by the inevitability of the cultural pendulum.
      [3]: Cancels work as a form of individually directed boycott (opposed to the traditional boycott directed at corporations) with the goal of punishing the scapegoat through financial violence, the elimination of their livelihood. Get them fired from their workplace, get them expelled from school. In the case of independent “content creators”, they have to resort to reducing their audience, attempted by ‘follow policing’, calling out any of them for consuming the content of a black marked creator. One might imagine this second-order cancellation introducing a viral effect, where one may be cancelled for following accounts that follow the wrong accounts, and so on… and only at the long end of the chain do we find the original black marked bad actor who committed whatever faux pas to make him the initial subject to scapegoat. However, like how real viruses fail to spread if they’re too deadly , this evolutionary strand of cancel culture is too untenable to survive long enough to see this occur.
      [4]: When Kanye makes a media run toppling every prominent shibboleth he can find, this is the same battle he forces his fans to take a side on. The specific content of the inflammatory statements are not what’s important, but the decision to knowingly get cancelled by making them. Whereas JK Rowling having the confidence to share her honest opinions on the trans question in contradiction with the party line, or James Cameron casually injecting heavy orientalism and cultural appropriation into Avatar, with potential uproar around either not having any actual measurable effect on the phenomenon success of their IPs, I think Kanye was being intentionally controversial to make the point he’s too big to fail—and in this he was successful.
      [5]: What Curtis Yarvin refers to as “The Cathedral”. See: A Brief Explanation of the Cathedral, 2021.
            `;
      break;
    default:
      console.log("No cases were matched.");
      break;
  }
  const response = await fetch(API_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      prompt: prompt,
      max_tokens: 150,
    }),
  });

  const data = await response.json();
  console.log(data);
  return data.choices[0].text.trim();
}

export default Query;

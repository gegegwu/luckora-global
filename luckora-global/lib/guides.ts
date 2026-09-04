export type GuideSection = {
  title: string;
  body: string;
  bullets?: string[];
};

export type GuideArticle = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  ctaLabel: string;
  ctaPath: string;
  sections: GuideSection[];
};

export const guideArticles: GuideArticle[] = [
  {
    slug: "why-do-i-overthink-everything",
    title: "Why Do I Overthink Everything?",
    description:
      "Understand why overthinking happens, how it connects to sensitivity and uncertainty, and how to turn reflection into clearer next steps.",
    eyebrow: "Emotional Pattern Guide",
    intro:
      "If you replay conversations, second-guess your decisions or stay trapped in mental loops, the goal is not to judge yourself faster. The goal is to understand what your mind is trying to protect and why that protection pattern no longer feels helpful.",
    ctaLabel: "Take the Personality Test",
    ctaPath: "/test",
    sections: [
      {
        title: "What overthinking usually looks like",
        body:
          "Overthinking is not just thinking a lot. It often means replaying conversations, delaying decisions because you want certainty, or analyzing your own emotions without feeling more settled. It uses energy without always creating resolution.",
        bullets: [
          "Replaying conversations after they end",
          "Imagining multiple outcomes before taking action",
          "Worrying that you misunderstood someone",
          "Searching for the perfect answer before moving",
        ],
      },
      {
        title: "Why some people overthink more than others",
        body:
          "Overthinking often grows out of real strengths: sensitivity, caution, emotional awareness and a desire to avoid mistakes. The problem starts when reflection has no clear end point and turns into repeated rumination instead of useful processing.",
      },
      {
        title: "Why relationships trigger overthinking",
        body:
          "Relationships create uncertainty. You cannot fully control how someone feels, what they meant or whether they will stay consistent. For reflective people, that uncertainty can activate loops around tone, rejection, meaning and emotional safety.",
      },
      {
        title: "The hidden strength inside overthinking",
        body:
          "People who overthink are often deeply aware, careful and able to notice nuance. The same mind that gets stuck can also recognize patterns, understand people and make thoughtful decisions. The better goal is not to erase that mind, but to stop your strengths from turning against you.",
      },
      {
        title: "How to reduce the loop",
        body:
          "Progress usually comes from structure, not self-criticism. Name the trigger, move the thought outside your head through writing or voice notes, set a reflection boundary and ask whether the thought is giving you anything new. That turns rumination into processing and processing into action.",
        bullets: [
          "Name the trigger clearly",
          "Use voice-to-text or journaling",
          "Set a time or question boundary",
          "Separate useful thought from repetitive thought",
        ],
      },
    ],
  },
  {
    slug: "how-to-understand-your-hidden-strengths",
    title: "How to Understand Your Hidden Strengths",
    description:
      "Learn how to identify strengths that already shape your thinking, relationships and growth, even if you do not know how to name them yet.",
    eyebrow: "Strengths Guide",
    intro:
      "Many people are not blocked because they have no strengths. They are blocked because they cannot clearly see what they already do well, how those strengths work under pressure or how to use them to create momentum.",
    ctaLabel: "Take the Personality Test",
    ctaPath: "/test",
    sections: [
      {
        title: "Why hidden strengths are hard to notice",
        body:
          "Your most natural strengths often feel ordinary to you. Because they happen without much effort, you may assume everyone thinks, feels or solves problems the same way. That makes real strengths easy to overlook.",
      },
      {
        title: "What a real strength looks like",
        body:
          "A real strength is not just something you enjoy. It is a pattern that shows up repeatedly in how you think, connect, decide or recover. It creates energy when used well and often appears across different parts of life.",
        bullets: [
          "It appears naturally under pressure",
          "Other people often notice it before you do",
          "It creates clarity, not just activity",
          "It can be used across work and relationships",
        ],
      },
      {
        title: "Why strengths can still create friction",
        body:
          "A strength without guidance can become overuse. Sensitivity becomes over-processing. Responsibility becomes over-carrying. Analysis becomes paralysis. That is why useful self-discovery must explain both what makes you strong and what makes you stuck.",
      },
      {
        title: "How to identify your strength pattern",
        body:
          "Look for repeated themes: what kinds of problems people bring to you, what drains you less than it drains others and what feels meaningful even when it is difficult. Hidden strengths usually reveal themselves through repeated usefulness, not just identity labels.",
      },
      {
        title: "How to use strengths to create movement",
        body:
          "Instead of forcing yourself to become a different kind of person, use your strongest patterns to support action. If you are relational, create accountability through people. If you are reflective, create action through structured journaling and clear next steps. If you are intuitive, use pattern recognition to make faster decisions.",
      },
    ],
  },
  {
    slug: "why-do-certain-people-drain-me",
    title: "Why Do Certain People Drain Me?",
    description:
      "Learn why some relationships feel grounding while others leave you anxious, foggy or depleted, and how to understand your emotional fit.",
    eyebrow: "Relationship Pattern Guide",
    intro:
      "Some people leave you calmer and clearer. Others leave you mentally crowded or emotionally flat. That difference is rarely random. It usually points to a mismatch in energy, boundaries, communication or emotional safety.",
    ctaLabel: "Take the Personality Test",
    ctaPath: "/test",
    sections: [
      {
        title: "What emotional draining actually feels like",
        body:
          "Draining relationships are not always dramatic. Sometimes the clearest signal is the aftereffect: you feel heavier, more anxious, less certain of your needs and slower to recover after basic interaction.",
        bullets: [
          "Feeling heavy after a conversation",
          "Replaying interactions long after they happen",
          "Becoming more anxious around certain people",
          "Needing unusual recovery time after contact",
        ],
      },
      {
        title: "Why some people affect you more deeply",
        body:
          "If you are highly aware, empathic or sensitive to inconsistency, you will notice more than other people do. That does not mean you are too sensitive. It means your nervous system catches more detail and reacts to confusion more quickly.",
      },
      {
        title: "Common reasons people become draining",
        body:
          "People often drain you when they are emotionally inconsistent, rely on your support without reciprocity, blur your boundaries or activate old patterns like seeking approval and over-explaining yourself.",
      },
      {
        title: "Sensitivity is not the problem",
        body:
          "Sensitivity is often what helps you read people accurately, sense unsafe dynamics early and build real trust with the right people. The issue is not sensitivity itself. The issue is sensitivity without enough protection, clarity or distance.",
      },
      {
        title: "How to stop getting drained by the wrong people",
        body:
          "Watch the aftereffect, not just the conversation. Separate compassion from access, stop normalizing repeated depletion and intentionally invest in people who are clear, respectful and emotionally steady. Sometimes healing comes from less exposure, not more explanation.",
        bullets: [
          "Notice how you feel after the interaction",
          "Stop calling repeated depletion normal",
          "Separate compassion from access",
          "Create more contact with nourishing people",
        ],
      },
    ],
  },
  {
    slug: "how-to-stop-ruminating-after-a-conversation",
    title: "How to Stop Ruminating After a Conversation",
    description:
      "Understand why conversations replay in your mind and how to move from emotional looping into clearer processing and recovery.",
    eyebrow: "Recovery Guide",
    intro:
      "If one short conversation can stay in your head for hours, the issue is usually not that you care too much. The issue is that your mind has not found closure, and it keeps reopening the interaction in search of safety or certainty.",
    ctaLabel: "Take the Personality Test",
    ctaPath: "/test",
    sections: [
      {
        title: "Why conversations replay so easily",
        body:
          "Conversations are full of uncertainty: tone, subtext, meaning and emotional risk. Reflective people often keep replaying them because their minds are trying to decode what happened and whether the relationship still feels safe.",
      },
      {
        title: "What keeps rumination alive",
        body:
          "Rumination tends to continue when you are chasing certainty, self-blame or a perfect interpretation. The more unresolved the interaction feels, the more tempting it is to reopen it mentally.",
        bullets: [
          "Unclear tone or mixed signals",
          "Fear that you said the wrong thing",
          "Sensitivity to rejection or inconsistency",
          "No clear end point for emotional processing",
        ],
      },
      {
        title: "How to interrupt the loop",
        body:
          "Move the conversation out of your head and into language. Write what happened, what you felt and what you actually know. That separates facts from imagined meaning and gives the mind a place to stop.",
      },
      {
        title: "What real closure looks like",
        body:
          "Closure is not perfect certainty. It is enough clarity to stop feeding the loop. Sometimes that means deciding there is no more useful information available today. Sometimes it means setting a boundary or following up directly instead of silently replaying.",
      },
      {
        title: "How personality affects recovery",
        body:
          "Some personalities recover through movement. Others recover through reflection. The point is not to stop being reflective. It is to understand your style well enough to guide it instead of letting it run on its own.",
      },
    ],
  },
  {
    slug: "high-sensitivity-and-emotional-rumination",
    title: "High Sensitivity and Emotional Rumination",
    description:
      "Explore how high sensitivity and emotional rumination reinforce each other, and how to keep depth without getting trapped in emotional loops.",
    eyebrow: "Sensitivity Guide",
    intro:
      "High sensitivity can create empathy, insight and depth. It can also become exhausting when emotional experiences stay with you for too long. The key is not becoming less deep. It is building a better path for how depth gets processed.",
    ctaLabel: "Take the Personality Test",
    ctaPath: "/test",
    sections: [
      {
        title: "What high sensitivity means",
        body:
          "High sensitivity is not simply being too emotional. It often includes noticing subtle shifts in tone, processing experiences deeply, feeling overstimulated by conflict and needing more recovery after intense moments.",
      },
      {
        title: "What emotional rumination means",
        body:
          "Emotional rumination is the habit of revisiting emotional moments over and over. It can sound reflective, but it often keeps you close to the original emotional charge without giving you real closure.",
      },
      {
        title: "Why sensitivity and rumination often come together",
        body:
          "The more you notice, the more there is to process. The more there is to process, the easier it becomes to replay. That cycle can quietly create emotional fatigue even on ordinary days.",
      },
      {
        title: "The hidden strengths inside this pattern",
        body:
          "Highly sensitive reflective people often have strong empathy, emotional intelligence, pattern recognition and self-awareness. The challenge appears when those strengths have no structure and begin to turn inward as self-consumption.",
      },
      {
        title: "How to work with sensitivity instead of against it",
        body:
          "Accept that you process deeply, but give that processing a better path. Output-based reflection, clear boundaries, identifying recurring drains and turning reflection into one concrete action all help keep depth while reducing chaos.",
        bullets: [
          "Use voice notes, journaling or reflective writing",
          "Identify recurring emotional drains",
          "Reduce exposure when needed",
          "End reflection with one action or boundary",
        ],
      },
    ],
  },
  {
    slug: "signs-your-sensitivity-is-a-strength",
    title: "Signs Your Sensitivity Is a Strength",
    description:
      "See how sensitivity can create depth, empathy and insight, and learn the difference between healthy sensitivity and unprotected emotional overload.",
    eyebrow: "Strength Pattern Guide",
    intro:
      "A lot of sensitive people only see the cost of their sensitivity because they meet it mostly through exhaustion. But sensitivity is often one of the reasons they read people well, build trust deeply and notice patterns others miss.",
    ctaLabel: "Take the Personality Test",
    ctaPath: "/test",
    sections: [
      {
        title: "Why sensitivity gets misunderstood",
        body:
          "Sensitivity is often treated as fragility, but that misses the deeper pattern. Many sensitive people are not fragile at all. They are perceptive. They notice more emotional and relational data, which can be both useful and tiring.",
      },
      {
        title: "Common signs sensitivity is a strength",
        body:
          "Healthy sensitivity often shows up as emotional accuracy, strong listening, fast pattern recognition and a natural ability to notice when something feels off before anyone says it directly.",
        bullets: [
          "You notice tone changes quickly",
          "People feel understood around you",
          "You spot problems early in relationships",
          "You can turn feeling into insight",
        ],
      },
      {
        title: "When strength turns into overload",
        body:
          "Sensitivity becomes draining when it has no boundaries. You absorb too much, stay too long in confusing environments or keep processing experiences without release. The solution is not to become less sensitive. It is to protect and direct what you already notice.",
      },
      {
        title: "How to make sensitivity more usable",
        body:
          "Use structure, recovery and selective closeness. Sensitive people do better when they know which environments nourish them, which people confuse them and how to turn reflection into language before it becomes silent pressure.",
      },
    ],
  },
  {
    slug: "why-am-i-so-sensitive",
    title: "Why Am I So Sensitive?",
    description:
      "Understand why you may feel things deeply, notice subtle emotional shifts, and need more recovery after intense people or situations.",
    eyebrow: "Sensitivity Guide",
    intro:
      "Sensitivity often feels confusing when you only notice its cost. You may react strongly, replay small moments or feel affected by moods other people seem to miss. But sensitivity is not automatically weakness. It is a processing style that needs clearer structure and better protection.",
    ctaLabel: "Take the Personality Test",
    ctaPath: "/test",
    sections: [
      {
        title: "What sensitivity can look like",
        body:
          "Sensitivity can show up as emotional depth, quick awareness of tone, strong reactions to conflict, rich inner processing or needing quiet time after social intensity. It may also mean your body responds before your mind has words for what changed.",
        bullets: [
          "You notice tone changes quickly",
          "Conflict stays with you longer than expected",
          "You need recovery after emotionally intense situations",
          "You pick up on details others miss",
        ],
      },
      {
        title: "Why you may feel more than other people",
        body:
          "Some people process emotional and environmental information more deeply. That can make ordinary situations feel crowded with meaning. If you also learned to monitor people for safety, approval or consistency, sensitivity can become even more active.",
      },
      {
        title: "When sensitivity becomes exhausting",
        body:
          "Sensitivity becomes draining when every signal feels urgent. You may over-explain, over-adapt or keep replaying interactions because your mind is trying to create certainty. The problem is not the sensitivity itself, but the lack of boundaries around what you absorb.",
      },
      {
        title: "How to work with sensitivity",
        body:
          "Start by naming what you noticed, separating facts from interpretation and giving yourself recovery before making decisions. Sensitive people often make better choices when they stop treating every emotional signal as an emergency.",
        bullets: [
          "Name the signal without judging it",
          "Check what is fact and what is interpretation",
          "Reduce exposure to repeated emotional confusion",
          "Use sensitivity as information, not command",
        ],
      },
    ],
  },
  {
    slug: "how-to-find-your-personality-type",
    title: "How to Find Your Personality Type",
    description:
      "Learn how to use personality tests, repeated behavior patterns, strengths, stress responses and relationship habits to understand your type.",
    eyebrow: "Personality Type Guide",
    intro:
      "Finding your personality type is more useful when it explains real patterns, not when it gives you a label to memorize. The strongest type insight connects how you think, what gives you energy, what drains you and how you act under pressure.",
    ctaLabel: "Take the Personality Test",
    ctaPath: "/tests/personality-test",
    sections: [
      {
        title: "Do not start with the label",
        body:
          "A personality label can be helpful, but it should come after pattern recognition. If you chase the perfect label first, you may ignore the real evidence in your habits, choices and stress responses.",
      },
      {
        title: "Look for repeated patterns",
        body:
          "Your personality type is easier to understand when you look at what repeats across different contexts. Notice how you solve problems, how you recover, what kind of work gives you energy and what emotional patterns keep returning.",
        bullets: [
          "How you make decisions",
          "What kind of feedback affects you most",
          "How you behave under pressure",
          "What people repeatedly rely on you for",
        ],
      },
      {
        title: "Use tests as mirrors, not verdicts",
        body:
          "A useful personality test gives language to patterns you can recognize. It should help you reflect more clearly, not make you feel boxed in. The best result is one that explains both strengths and friction points.",
      },
      {
        title: "Connect personality to action",
        body:
          "The point of finding your type is not only self-description. It is better decision-making. Once you understand your pattern, you can choose work, relationships and recovery habits that fit your actual energy.",
      },
    ],
  },
  {
    slug: "how-to-know-what-you-are-good-at",
    title: "How to Know What You Are Good At",
    description:
      "Identify natural strengths by looking at repeated usefulness, energy patterns, feedback, problem-solving style and what feels obvious to you.",
    eyebrow: "Strength Discovery Guide",
    intro:
      "Many people do not know what they are good at because their strongest abilities feel too normal from the inside. The goal is to notice repeated evidence instead of waiting for one dramatic talent signal.",
    ctaLabel: "Take the Personality Test",
    ctaPath: "/test",
    sections: [
      {
        title: "Strengths often feel ordinary",
        body:
          "The things you do naturally may not feel impressive to you. You may explain clearly, notice patterns quickly, calm people down or organize chaos without realizing those are useful strengths.",
      },
      {
        title: "Track repeated usefulness",
        body:
          "A strength usually appears more than once. Look at what people ask you for, what problems you understand faster than others and what kind of contribution makes situations better.",
        bullets: [
          "What do people ask you to help with?",
          "What problems feel easier for you to read?",
          "What gives you energy after effort?",
          "What do others thank you for repeatedly?",
        ],
      },
      {
        title: "Separate skill from strength",
        body:
          "A skill is something you can learn. A strength is a pattern that helps you learn, adapt or contribute. You can build many skills, but your strongest growth usually comes from skills that fit your natural pattern.",
      },
      {
        title: "Turn strengths into direction",
        body:
          "Once you identify a strength, ask where it can create value. Communication can become teaching, content, leadership or support. Pattern recognition can become research, strategy, product thinking or analysis.",
      },
    ],
  },
  {
    slug: "why-do-i-feel-lost-in-life",
    title: "Why Do I Feel Lost in Life?",
    description:
      "Explore why you may feel directionless, disconnected from your strengths, or unsure what next step fits your personality and energy.",
    eyebrow: "Life Direction Guide",
    intro:
      "Feeling lost does not always mean you have no path. Sometimes it means the old path no longer fits, your strengths are underused or your next step needs more clarity before it can feel real.",
    ctaLabel: "Take the Personality Test",
    ctaPath: "/tests/personality-test",
    sections: [
      {
        title: "Feeling lost is often a signal",
        body:
          "The feeling can appear when your current routines do not match your energy, values or growth stage. It may also happen when you have too many possible directions and no clear way to choose between them.",
      },
      {
        title: "Why clarity gets blocked",
        body:
          "Clarity gets harder when you compare yourself constantly, ignore your own strengths or only choose paths that look impressive from the outside. A direction has to fit your actual pattern, not just your ideal image.",
        bullets: [
          "Too many options without a filter",
          "Comparing your path to other people",
          "Ignoring what gives you energy",
          "Choosing based on pressure instead of fit",
        ],
      },
      {
        title: "Start with your repeated patterns",
        body:
          "Instead of asking what your whole life should become, look at what repeats. What kinds of problems interest you? What kind of people do you understand? What strengths keep appearing even when you are uncertain?",
      },
      {
        title: "Choose the next useful step",
        body:
          "You do not need total life certainty to move. Choose one step that tests a direction, uses a real strength or gives you clearer information. Momentum often creates more clarity than thinking alone.",
      },
    ],
  },
  {
    slug: "why-do-i-overthink-relationships",
    title: "Why Do I Overthink Relationships?",
    description:
      "Understand why relationships trigger overthinking, how uncertainty creates mental loops, and how to separate real signals from fear.",
    eyebrow: "Relationship Guide",
    intro:
      "Relationship overthinking usually starts when connection feels important but uncertain. A message, tone change or delayed reply can become a question your mind keeps reopening because it wants safety, clarity and reassurance.",
    ctaLabel: "Take the Love Language Test",
    ctaPath: "/love-language-test",
    sections: [
      {
        title: "Why relationships create mental loops",
        body:
          "Relationships involve emotion, timing, expectation and risk. When you care about someone, small signals can feel larger because they seem connected to rejection, closeness or whether the relationship is still secure.",
        bullets: [
          "You replay text messages or conversations",
          "You look for hidden meaning in tone",
          "You worry that affection has changed",
          "You feel responsible for keeping the connection stable",
        ],
      },
      {
        title: "The difference between intuition and anxiety",
        body:
          "Intuition usually feels clear and specific. Anxiety often feels urgent, repetitive and hard to satisfy. If a thought keeps demanding more checking but never gives you more useful information, it is probably rumination rather than insight.",
      },
      {
        title: "How love language patterns affect overthinking",
        body:
          "People who need words may overthink silence. People who need quality time may overthink distance. People who value acts of service may overthink inconsistency. Understanding your emotional connection style can make the trigger easier to name.",
      },
      {
        title: "What to do next",
        body:
          "Write down what actually happened, what you are afraid it means and what information is missing. Then decide whether you need a direct conversation, a boundary or simply time to calm your nervous system before interpreting the relationship.",
      },
    ],
  },
  {
    slug: "why-do-i-feel-emotionally-drained",
    title: "Why Do I Feel Emotionally Drained?",
    description:
      "Learn why emotional exhaustion happens, how people and environments drain your energy, and how to rebuild clarity without self-blame.",
    eyebrow: "Emotional Energy Guide",
    intro:
      "Feeling emotionally drained is not always about one dramatic event. It can come from repeated small moments where you absorb tension, over-adapt, hold back your needs or stay too long in situations that require constant emotional monitoring.",
    ctaLabel: "Take the Personality Test",
    ctaPath: "/test",
    sections: [
      {
        title: "Common causes of emotional drain",
        body:
          "Emotional drain often comes from unclear boundaries, high responsibility, relationship uncertainty, conflict, overstimulation or trying to manage other people's reactions before you manage your own needs.",
        bullets: [
          "You absorb other people's moods",
          "You say yes when you need recovery",
          "You keep explaining yourself to be understood",
          "You spend energy preventing conflict",
        ],
      },
      {
        title: "Why sensitive people drain faster",
        body:
          "Sensitive or reflective people may process more detail from every interaction. That can be valuable, but without recovery it creates emotional backlog. The mind keeps sorting signals even after the situation ends.",
      },
      {
        title: "How to identify your drain pattern",
        body:
          "Track when your energy drops. Look at the people, places, topics and expectations involved. The pattern usually reveals whether the drain comes from overstimulation, responsibility, emotional mismatch or unclear limits.",
      },
      {
        title: "How to recover more effectively",
        body:
          "Recovery works better when it is specific. If the drain came from people, reduce input. If it came from decisions, simplify choices. If it came from rumination, move thoughts into writing and end with one next action.",
      },
    ],
  },
  {
    slug: "how-to-stop-overthinking-at-night",
    title: "How to Stop Overthinking at Night",
    description:
      "Understand why thoughts get louder at night and learn practical ways to quiet mental loops before sleep.",
    eyebrow: "Rumination Guide",
    intro:
      "Night overthinking often appears when the day finally becomes quiet. With fewer distractions, unresolved emotions, unfinished decisions and relationship uncertainty can rise to the surface and compete for attention.",
    ctaLabel: "Take the Personality Test",
    ctaPath: "/test",
    sections: [
      {
        title: "Why thoughts get louder at night",
        body:
          "During the day, activity can keep worries pushed aside. At night, your mind may try to process everything at once. This is especially common for reflective people who need closure before they can fully rest.",
      },
      {
        title: "What keeps the loop alive",
        body:
          "Night rumination often stays active because the mind is trying to solve questions that cannot be solved immediately. It asks for certainty, but the body actually needs a signal that the issue can wait.",
        bullets: [
          "Unfinished conversations",
          "Fear about tomorrow",
          "Self-criticism about the day",
          "Trying to solve emotional uncertainty in bed",
        ],
      },
      {
        title: "Create a closing ritual",
        body:
          "A useful closing ritual gives the mind a place to put open loops. Write the unresolved thought, name one possible next step and decide when you will return to it. This helps separate reflection time from sleep time.",
      },
      {
        title: "Use body-based recovery",
        body:
          "If thinking has become repetitive, more analysis may not help. Slow breathing, low light, stretching or a quiet routine can tell the nervous system that it is safe to stop scanning for problems tonight.",
      },
    ],
  },
  {
    slug: "what-are-my-hidden-strengths",
    title: "What Are My Hidden Strengths?",
    description:
      "Find hidden strengths by noticing what feels natural, what others rely on you for, and what kind of value you create repeatedly.",
    eyebrow: "Strengths Guide",
    intro:
      "Hidden strengths are easy to miss because they often feel obvious from the inside. You may assume everyone notices the same things, solves problems the same way or carries the same kind of emotional intelligence.",
    ctaLabel: "Take the Personality Test",
    ctaPath: "/tests/personality-test",
    sections: [
      {
        title: "Hidden strengths are repeated patterns",
        body:
          "A hidden strength is not a random compliment. It is a repeated pattern of usefulness. It may show up in how you explain, observe, organize, support, create, decide or make people feel understood.",
      },
      {
        title: "Where to look for evidence",
        body:
          "Look at what people thank you for, what responsibilities naturally come to you and what problems you can improve without forcing yourself to become someone else.",
        bullets: [
          "What feels easy but valuable?",
          "What do people trust you with?",
          "What drains others less than it drains you?",
          "What kind of work makes you more focused?",
        ],
      },
      {
        title: "Why strengths can be invisible",
        body:
          "People often overlook strengths that were expected of them early in life. If you became the responsible one, the listener, the problem solver or the emotional translator, you may treat those strengths as obligations instead of abilities.",
      },
      {
        title: "Turn hidden strengths into choices",
        body:
          "Once a strength is visible, use it to choose better projects, relationships and growth goals. Strengths become more valuable when they guide decisions instead of staying buried inside automatic behavior.",
      },
    ],
  },
  {
    slug: "personality-test-for-career-direction",
    title: "Personality Test for Career Direction",
    description:
      "Learn how personality tests can clarify career direction by revealing work energy, decision style, strengths and environments that fit.",
    eyebrow: "Career Direction Guide",
    intro:
      "Career direction is not only about job titles. It is about the kind of problems, people, pace and responsibility that fit your personality well enough to repeat without constant friction.",
    ctaLabel: "Take the Personality Test",
    ctaPath: "/tests/personality-test",
    sections: [
      {
        title: "Why personality matters for work",
        body:
          "Two people can have the same skill but very different work energy. One may thrive in ambiguity while another performs best with structure. Personality helps explain which environments make your strengths easier to use.",
      },
      {
        title: "What a career-focused personality test can reveal",
        body:
          "A useful test can point to decision rhythm, collaboration style, creativity, analysis, leadership, communication and recovery needs. These signals help narrow career paths by fit rather than status alone.",
        bullets: [
          "How you solve problems",
          "Where you create value naturally",
          "What work pace fits you",
          "Which environments drain your strengths",
        ],
      },
      {
        title: "Avoid choosing only by title",
        body:
          "A role can sound impressive but still fight your natural pattern every day. Better career direction comes from matching your strengths to the work behind the title, not only the title itself.",
      },
      {
        title: "Use personality as a starting point",
        body:
          "A personality test should not make career decisions for you. It should give you better questions: what should you test next, what should you stop forcing and what strengths deserve more practical development?",
      },
    ],
  },
  {
    slug: "what-is-a-self-discovery-test",
    title: "What Is a Self Discovery Test?",
    description:
      "Understand how self discovery tests work, what they can reveal, and how to use results without turning them into fixed labels.",
    eyebrow: "Self Discovery Guide",
    intro:
      "A self discovery test helps you reflect on patterns that may be hard to see clearly from the inside. The value is not the label itself. The value is better language for your strengths, needs, friction and next steps.",
    ctaLabel: "Explore Luckora Tests",
    ctaPath: "/tests",
    sections: [
      {
        title: "What self discovery tests measure",
        body:
          "Different tests focus on different signals: personality, strengths, emotional needs, relationship style, career direction or values. Good tests translate repeated answers into patterns you can recognize.",
      },
      {
        title: "What a good result should do",
        body:
          "A useful result should feel specific enough to reflect real behavior and practical enough to help you choose a next step. It should explain both strengths and growth challenges.",
        bullets: [
          "Give language to real patterns",
          "Avoid pretending to diagnose you",
          "Show strengths and friction",
          "Connect insight to practical reflection",
        ],
      },
      {
        title: "How to use results well",
        body:
          "Use the result as a mirror, not a verdict. Ask what part feels accurate, what part surprises you and what small decision could become easier if you took the pattern seriously.",
      },
      {
        title: "Why Luckora focuses on action",
        body:
          "Luckora is designed to connect insight with movement. The goal is not endless self-analysis. The goal is clearer language, better choices and more confidence in the next useful step.",
      },
    ],
  },
  {
    slug: "how-to-understand-your-love-language",
    title: "How to Understand Your Love Language",
    description:
      "Learn what love languages can reveal about affection, emotional safety, relationship needs and communication patterns.",
    eyebrow: "Love Language Guide",
    intro:
      "Your love language is not just what feels romantic. It can show how you recognize care, what makes connection feel secure and why certain relationship patterns leave you feeling unseen.",
    ctaLabel: "Take the Love Language Test",
    ctaPath: "/love-language-test",
    sections: [
      {
        title: "What love languages can reveal",
        body:
          "Love languages point to the kind of affection that lands most clearly for you. They can involve words, time, service, gifts or touch, but the deeper question is what makes you feel emotionally remembered.",
      },
      {
        title: "Why people misunderstand love languages",
        body:
          "A love language is not a demand that other people always behave one way. It is a clue about what helps you feel connected. Healthy relationships still need communication, flexibility and mutual care.",
      },
      {
        title: "How love language mismatch feels",
        body:
          "Mismatch can happen when one person shows care in a way the other person does not easily recognize. One person may offer practical help while the other needs words. Neither is wrong, but the signal can get missed.",
        bullets: [
          "You care but the other person does not feel it",
          "You feel unseen even when effort exists",
          "Small gestures matter more than expected",
          "Affection feels inconsistent or hard to read",
        ],
      },
      {
        title: "Use your result as a conversation starter",
        body:
          "The best use of a love language result is clearer conversation. It can help you explain what makes you feel valued and ask what kind of care feels most meaningful to the other person.",
      },
    ],
  },
  {
    slug: "why-do-i-need-so-much-reassurance",
    title: "Why Do I Need So Much Reassurance?",
    description:
      "Explore why reassurance seeking happens, how uncertainty affects emotional safety, and how to build steadier trust in yourself.",
    eyebrow: "Emotional Safety Guide",
    intro:
      "Needing reassurance does not mean you are weak or demanding. It often means uncertainty feels emotionally expensive, especially when relationships, decisions or self-worth feel unstable.",
    ctaLabel: "Take the Personality Test",
    ctaPath: "/test",
    sections: [
      {
        title: "Why reassurance feels necessary",
        body:
          "Reassurance gives short-term relief because it lowers uncertainty. The problem is that repeated reassurance can train the mind to need another external answer every time discomfort appears.",
      },
      {
        title: "Common reassurance triggers",
        body:
          "Reassurance seeking often appears around relationships, mistakes, decisions, appearance, performance or whether someone is upset with you. The shared pattern is fear that something important is no longer safe.",
        bullets: [
          "Waiting for replies",
          "Worrying you made a mistake",
          "Feeling unsure about someone's mood",
          "Doubting your own interpretation",
        ],
      },
      {
        title: "How to build internal steadiness",
        body:
          "Instead of asking for reassurance immediately, pause and name what you are afraid is true. Then ask what evidence you have, what evidence is missing and what action would still be wise even without perfect certainty.",
      },
      {
        title: "When reassurance can still be healthy",
        body:
          "It is healthy to ask for clarity in close relationships. The goal is not to never need reassurance. The goal is to avoid making reassurance the only way you can feel safe.",
      },
    ],
  },
  {
    slug: "why-do-i-feel-like-i-dont-know-myself",
    title: "Why Do I Feel Like I Don't Know Myself?",
    description:
      "Explore why your identity may feel unclear, how pressure and comparison disconnect you from yourself, and how to rebuild self-understanding.",
    eyebrow: "Identity Guide",
    intro:
      "Feeling like you do not know yourself can happen when you have spent a long time adapting to other people, chasing external expectations or moving through life without enough space to notice what actually feels true.",
    ctaLabel: "Take the Personality Test",
    ctaPath: "/tests/personality-test",
    sections: [
      {
        title: "Why identity can feel unclear",
        body:
          "Identity becomes harder to feel when your choices are shaped mostly by pressure, comparison or survival. You may know what is expected of you, but not what gives you energy, meaning or a sense of internal alignment.",
        bullets: [
          "You change yourself around different people",
          "You struggle to name what you want",
          "You feel disconnected from your strengths",
          "You compare your path constantly",
        ],
      },
      {
        title: "Self-knowledge comes from patterns",
        body:
          "You do not need one perfect answer to understand yourself. Look for repeated signals: what you avoid, what you return to, what kind of problems interest you and what makes you feel more like yourself after the effort.",
      },
      {
        title: "Why tests can help",
        body:
          "A self discovery test can give language to patterns that feel scattered. The result should not define you forever, but it can create a starting point for reflection and clearer decisions.",
      },
      {
        title: "How to reconnect with yourself",
        body:
          "Start small. Notice what drains you, what steadies you and what choices feel less performative. Self-understanding usually returns through repeated honest observation, not one dramatic breakthrough.",
      },
    ],
  },
  {
    slug: "how-to-stop-second-guessing-yourself",
    title: "How to Stop Second Guessing Yourself",
    description:
      "Understand why you second guess decisions and learn how to build more trust in your judgment without needing perfect certainty.",
    eyebrow: "Decision Clarity Guide",
    intro:
      "Second guessing often feels like careful thinking, but it becomes draining when every choice reopens after you make it. The goal is not reckless confidence. The goal is enough trust to move without restarting the same decision repeatedly.",
    ctaLabel: "Take the Personality Test",
    ctaPath: "/test",
    sections: [
      {
        title: "Why second guessing happens",
        body:
          "You may second guess yourself because mistakes feel costly, feedback affects you deeply or you learned to seek approval before trusting your own read. The habit can become automatic even when the decision is small.",
      },
      {
        title: "Signs you are stuck in a decision loop",
        body:
          "A decision loop keeps asking for more certainty even after you already have enough information to choose. It often creates research, reassurance seeking and mental replay without creating better judgment.",
        bullets: [
          "You keep reopening the same choice",
          "You ask many people for the same reassurance",
          "You feel temporary relief, then doubt returns",
          "You confuse discomfort with a wrong decision",
        ],
      },
      {
        title: "Use a decision boundary",
        body:
          "Set a clear boundary before choosing: what information matters, when the decision must be made and what good-enough evidence looks like. This protects you from endless checking.",
      },
      {
        title: "Build trust after the decision",
        body:
          "After choosing, track what you learn instead of judging whether the choice was perfect. Self-trust grows when you prove that you can respond to outcomes, not when you avoid uncertainty completely.",
      },
    ],
  },
  {
    slug: "why-do-i-absorb-other-peoples-emotions",
    title: "Why Do I Absorb Other People's Emotions?",
    description:
      "Learn why you may take on other people's moods, how empathy can become overload, and how to keep compassion without losing yourself.",
    eyebrow: "Empathy Guide",
    intro:
      "Absorbing other people's emotions can feel like your nervous system is always listening. You may enter a room and sense tension quickly, then carry that tension even when it is not yours to solve.",
    ctaLabel: "Take the Personality Test",
    ctaPath: "/test",
    sections: [
      {
        title: "Why emotional absorption happens",
        body:
          "People who are empathic, sensitive or used to monitoring others often notice emotional changes quickly. That awareness can become overload when you feel responsible for fixing every mood you detect.",
      },
      {
        title: "Empathy versus emotional ownership",
        body:
          "Empathy means you can recognize or care about what someone feels. Emotional ownership means you treat their feeling as your responsibility. The second pattern is usually what creates exhaustion.",
        bullets: [
          "You feel guilty when others are upset",
          "You adjust yourself before anyone asks",
          "You leave conversations carrying their mood",
          "You struggle to know what you feel separately",
        ],
      },
      {
        title: "How boundaries protect empathy",
        body:
          "Boundaries do not make you less caring. They help you keep enough separation to respond wisely. You can notice someone's emotion without making your body the place where it has to be solved.",
      },
      {
        title: "A simple reset practice",
        body:
          "After an intense interaction, ask: what is mine, what is theirs and what action is actually needed? This turns emotional absorption into information instead of silent responsibility.",
      },
    ],
  },
  {
    slug: "am-i-an-introvert-or-just-drained",
    title: "Am I an Introvert or Just Drained?",
    description:
      "Understand the difference between introversion, emotional exhaustion, overstimulation and relationship patterns that make social energy confusing.",
    eyebrow: "Social Energy Guide",
    intro:
      "Not everyone who feels drained is simply an introvert. Sometimes you are introverted. Sometimes you are overstimulated. Sometimes specific people, roles or expectations are draining you more than social life itself.",
    ctaLabel: "Take the Personality Test",
    ctaPath: "/tests/personality-test",
    sections: [
      {
        title: "What introversion usually means",
        body:
          "Introversion often means you recover through quieter environments, deeper focus or smaller circles. It does not always mean you dislike people. It means your energy system responds differently to stimulation.",
      },
      {
        title: "What emotional drain feels like",
        body:
          "Emotional drain often feels heavier than normal tiredness. You may feel foggy, tense, resentful or unlike yourself after certain interactions because they require too much monitoring or adaptation.",
        bullets: [
          "You enjoy people but recover slowly",
          "Certain relationships drain you more than others",
          "You feel better alone but still want connection",
          "You are tired from performing, not simply socializing",
        ],
      },
      {
        title: "How to tell the difference",
        body:
          "Ask whether all social contact drains you equally or whether specific patterns do. If safe, low-pressure connection feels good, the issue may be emotional mismatch or overstimulation rather than introversion alone.",
      },
      {
        title: "Build a better energy rhythm",
        body:
          "Protect recovery time, choose clearer relationships and stop treating every social need as a personality flaw. Your social rhythm should fit your nervous system and your actual connection needs.",
      },
    ],
  },
  {
    slug: "why-do-i-feel-stuck-even-when-life-is-fine",
    title: "Why Do I Feel Stuck Even When Life Is Fine?",
    description:
      "Explore why life can look fine externally while you feel blocked internally, and how to reconnect with direction, growth and agency.",
    eyebrow: "Growth Guide",
    intro:
      "Feeling stuck does not always mean something is visibly wrong. Sometimes life is stable but too small for your next stage. Sometimes your strengths are underused, your routine is automatic or your deeper goals have gone quiet.",
    ctaLabel: "Take the Personality Test",
    ctaPath: "/tests/personality-test",
    sections: [
      {
        title: "Why external stability can still feel empty",
        body:
          "A life can be functional without feeling alive. If your days meet basic expectations but do not use your curiosity, strengths or values, you may feel stuck even when nothing looks broken.",
      },
      {
        title: "Signs the stuck feeling is about growth",
        body:
          "Growth stuckness often feels like restlessness, boredom, low motivation or the sense that you are repeating a version of yourself that no longer fits.",
        bullets: [
          "You are not in crisis but feel flat",
          "Your routine works but feels automatic",
          "You want change but cannot name it",
          "Your strengths feel unused",
        ],
      },
      {
        title: "Look for underused energy",
        body:
          "Instead of asking what is wrong, ask what part of you has no place to go. Creativity, leadership, learning, connection or independence may need a clearer outlet.",
      },
      {
        title: "Choose one experiment",
        body:
          "The fastest way to get unstuck is not a perfect life plan. It is one experiment that gives you new information: a project, conversation, skill, routine change or test of a direction.",
      },
    ],
  },
  {
    slug: "free-ai-personality-test-online",
    title: "Free AI Personality Test Online",
    description:
      "Take a free AI personality test online and learn how AI-assisted self discovery can reveal traits, strengths and growth patterns.",
    eyebrow: "Personality Test Guide",
    intro:
      "A free AI personality test can help you start self discovery without signup or pressure. The useful part is not magic prediction. It is structured reflection that turns your answers into clearer patterns.",
    ctaLabel: "Start Free Personality Test",
    ctaPath: "/test",
    sections: [
      {
        title: "What an AI personality test does",
        body:
          "An AI personality test maps your answers into themes such as creativity, analysis, connection, leadership, emotional processing and growth direction. It helps you see patterns that may be hard to organize alone.",
      },
      {
        title: "What makes a free test useful",
        body:
          "A free test is useful when it gives a clear result, practical language and enough nuance to help you reflect. It should not require you to believe a fixed label or make serious decisions from one result.",
        bullets: [
          "No signup required",
          "Short and easy to finish",
          "Clear personality result",
          "Practical reflection prompts",
        ],
      },
      {
        title: "How to read your result",
        body:
          "Focus on the parts that explain repeated behavior. A good result should help you understand where you create value, where you get stuck and what kind of next step fits your natural energy.",
      },
      {
        title: "Why Luckora is built this way",
        body:
          "Luckora focuses on identity, strengths and emotional patterns rather than generic labels alone. The goal is to make self discovery feel useful enough to support real decisions.",
      },
    ],
  },
  {
    slug: "how-to-choose-a-personality-test",
    title: "How to Choose a Personality Test",
    description:
      "Learn how to choose a personality test that gives useful insight instead of vague labels, shallow results or confusing categories.",
    eyebrow: "Personality Guide",
    intro:
      "There are many personality tests online, but not all of them help you understand yourself. A good test should create clarity about patterns, strengths and next steps, not just give you a label that sounds interesting.",
    ctaLabel: "Explore Luckora Tests",
    ctaPath: "/tests",
    sections: [
      {
        title: "Look for practical insight",
        body:
          "The best personality test results help you understand how you think, connect, decide and recover. If the result cannot help you make better choices, it may not be very useful.",
      },
      {
        title: "Avoid results that are too vague",
        body:
          "A result can feel flattering without being helpful. Watch for descriptions that could apply to almost anyone. Stronger results explain specific patterns, tradeoffs and growth challenges.",
        bullets: [
          "Does the result describe behavior?",
          "Does it explain strengths and friction?",
          "Does it avoid pretending to diagnose you?",
          "Does it suggest a useful next step?",
        ],
      },
      {
        title: "Choose based on your goal",
        body:
          "If you want relationship clarity, a love language test may help. If you want self-understanding, a personality test is better. If you want work direction, look for content connected to strengths and career fit.",
      },
      {
        title: "Use more than one signal",
        body:
          "No single test should define you completely. Use test results alongside reflection, feedback and repeated life evidence. The goal is better self-understanding, not a perfect category.",
      },
    ],
  },
  {
    slug: "how-to-turn-self-awareness-into-action",
    title: "How to Turn Self Awareness Into Action",
    description:
      "Learn how to move from self awareness into practical next steps, better decisions and small behavior changes that actually stick.",
    eyebrow: "Action Guide",
    intro:
      "Self awareness is useful only when it changes how you choose, communicate or recover. Many people understand their patterns but stay stuck because insight never becomes a small concrete action.",
    ctaLabel: "Take the Personality Test",
    ctaPath: "/tests/personality-test",
    sections: [
      {
        title: "Why awareness alone is not enough",
        body:
          "Awareness can become another form of rumination if it never leaves your head. Knowing your pattern matters, but the next step is designing one behavior that uses the insight in real life.",
      },
      {
        title: "Turn a pattern into a decision rule",
        body:
          "A decision rule makes awareness practical. If you know certain people drain you, set recovery boundaries. If you overthink, create a reflection limit. If you avoid action, choose one small test.",
        bullets: [
          "Name the pattern",
          "Choose one repeatable response",
          "Make the response small enough to use",
          "Review what changed after one week",
        ],
      },
      {
        title: "Use strengths as the path",
        body:
          "Change works better when it uses your strengths. A reflective person may need structured journaling. A relational person may need accountability. A creator may need a visible project.",
      },
      {
        title: "Measure movement, not perfection",
        body:
          "The goal is not to fix your whole personality. The goal is one clearer conversation, one better boundary, one finished task or one decision made with less self-doubt.",
      },
    ],
  },
];

export function getGuideBySlug(slug: string) {
  return guideArticles.find((guide) => guide.slug === slug);
}

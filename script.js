const tarotDeck = [
  // Major Arcana
  { name: "The Fool", meaning: "New beginnings, optimism, trust in life." },
  { name: "The Magician", meaning: "Action, the power to manifest." },
  { name: "The High Priestess", meaning: "Intuition, subconscious knowledge, mystery." },
  { name: "The Empress", meaning: "Abundance, nurturing, fertility, life in bloom!" },
  { name: "The Emperor", meaning: "Structure, stability, rules, and power." },
  { name: "The Hierophant", meaning: "Tradition, spiritual authority, guidance." },
  { name: "The Lovers", meaning: "Love, harmony, relationships, choices." },
  { name: "The Chariot", meaning: "Victory, determination, mastery." },
  { name: "Strength", meaning: "Courage, subtle power, integration of animal self." },
  { name: "The Hermit", meaning: "Meditation, solitude, inner wisdom." },
  { name: "Wheel of Fortune", meaning: "Cycles, change, ups and downs." },
  { name: "Justice", meaning: "Fairness, truth, law, cause and effect." },
  { name: "The Hanged Man", meaning: "Letting go, suspension, new perspectives." },
  { name: "Death", meaning: "Endings, transformation, transition." },
  { name: "Temperance", meaning: "Balance, moderation, patience." },
  { name: "The Devil", meaning: "Addiction, materialism, playfulness." },
  { name: "The Tower", meaning: "Sudden upheaval, chaos, revelation." },
  { name: "The Star", meaning: "Hope, faith, purpose, renewal." },
  { name: "The Moon", meaning: "Illusion, intuition, the subconscious." },
  { name: "The Sun", meaning: "Success, joy, optimism, vitality." },
  { name: "Judgment", meaning: "Reflection, reckoning, awakening." },
  { name: "The World", meaning: "Completion, wholeness, accomplishment." },

  // Minor Arcana - Wands
  { name: "Ace of Wands", meaning: "Inspiration, new opportunities, growth." },
  { name: "Two of Wands", meaning: "Planning, decisions, discovery." },
  { name: "Three of Wands", meaning: "Expansion, foresight, progress." },
  { name: "Four of Wands", meaning: "Celebration, harmony, home." },
  { name: "Five of Wands", meaning: "Conflict, competition, disagreements." },
  { name: "Six of Wands", meaning: "Victory, success, public recognition." },
  { name: "Seven of Wands", meaning: "Defense, standing your ground." },
  { name: "Eight of Wands", meaning: "Movement, swift action, progress." },
  { name: "Nine of Wands", meaning: "Resilience, perseverance, boundaries." },
  { name: "Ten of Wands", meaning: "Burden, responsibility, hard work." },
  { name: "Page of Wands", meaning: "Creativity, enthusiasm, discovery." },
  { name: "Knight of Wands", meaning: "Energy, passion, inspired action." },
  { name: "Queen of Wands", meaning: "Confidence, independence, determination." },
  { name: "King of Wands", meaning: "Leadership, vision, honor." },

  // Minor Arcana - Cups
  { name: "Ace of Cups", meaning: "Love, new relationships, compassion." },
  { name: "Two of Cups", meaning: "Partnership, attraction, unity." },
  { name: "Three of Cups", meaning: "Celebration, friendship, community." },
  { name: "Four of Cups", meaning: "Apathy, contemplation, discontent." },
  { name: "Five of Cups", meaning: "Regret, loss, disappointment." },
  { name: "Six of Cups", meaning: "Nostalgia, childhood, memories." },
  { name: "Seven of Cups", meaning: "Choices, daydreaming, illusions." },
  { name: "Eight of Cups", meaning: "Walking away, introspection, deeper meaning." },
  { name: "Nine of Cups", meaning: "Contentment, satisfaction, wishes fulfilled." },
  { name: "Ten of Cups", meaning: "Harmony, happiness, divine love." },
  { name: "Page of Cups", meaning: "Creativity, curiosity, intuition." },
  { name: "Knight of Cups", meaning: "Romance, charm, imagination." },
  { name: "Queen of Cups", meaning: "Compassion, calm, emotional security." },
  { name: "King of Cups", meaning: "Emotional balance, generosity, diplomacy." },

  // Minor Arcana - Swords
  { name: "Ace of Swords", meaning: "Clarity, breakthrough, sharp mind." },
  { name: "Two of Swords", meaning: "Indecision, stalemate, choices." },
  { name: "Three of Swords", meaning: "Heartbreak, sorrow, grief." },
  { name: "Four of Swords", meaning: "Rest, recovery, contemplation." },
  { name: "Five of Swords", meaning: "Conflict, defeat, tension." },
  { name: "Six of Swords", meaning: "Transition, change, moving on." },
  { name: "Seven of Swords", meaning: "Deception, strategy, cunning." },
  { name: "Eight of Swords", meaning: "Restriction, fear, entrapment." },
  { name: "Nine of Swords", meaning: "Anxiety, despair, nightmares." },
  { name: "Ten of Swords", meaning: "Endings, betrayal, rock bottom." },
  { name: "Page of Swords", meaning: "Curiosity, new ideas, vigilance." },
  { name: "Knight of Swords", meaning: "Ambition, action, determination." },
  { name: "Queen of Swords", meaning: "Honesty, independence, perceptiveness." },
  { name: "King of Swords", meaning: "Intellect, authority, truth." },

  // Minor Arcana - Pentacles
  { name: "Ace of Pentacles", meaning: "Opportunity, prosperity, new ventures." },
  { name: "Two of Pentacles", meaning: "Balance, adaptability, priorities." },
  { name: "Three of Pentacles", meaning: "Teamwork, collaboration, craftsmanship." },
  { name: "Four of Pentacles", meaning: "Security, conservatism, control." },
  { name: "Five of Pentacles", meaning: "Hardship, insecurity, lack." },
  { name: "Six of Pentacles", meaning: "Generosity, sharing, wealth." },
  { name: "Seven of Pentacles", meaning: "Patience, investment, reevaluation." },
  { name: "Eight of Pentacles", meaning: "Skill, mastery, focus." },
  { name: "Nine of Pentacles", meaning: "Abundance, luxury, self-sufficiency." },
  { name: "Ten of Pentacles", meaning: "Legacy, inheritance, culmination." },
  { name: "Page of Pentacles", meaning: "Ambition, diligence, new ideas." },
  { name: "Knight of Pentacles", meaning: "Efficiency, responsibility, hard work." },
  { name: "Queen of Pentacles", meaning: "Practicality, nurturing, financial security." },
  { name: "King of Pentacles", meaning: "Success, wealth, reliability." },
];

document.getElementById("draw-card-btn").addEventListener("click", () => {
  const randomIndexes = [];
  while (randomIndexes.length < 3) {
    const index = Math.floor(Math.random() * tarotDeck.length);
    if (!randomIndexes.includes(index)) {
      randomIndexes.push(index);
    }
  }

  const past = tarotDeck[randomIndexes[0]];
  const present = tarotDeck[randomIndexes[1]];
  const future = tarotDeck[randomIndexes[2]];

  const cardDisplay = document.getElementById("card-display");
  cardDisplay.innerHTML = `
    <div class="card">
      <h3>Past</h3>
      <p><strong>${past.name}</strong></p>
      <p>${past.meaning}</p>
    </div>
    <div class="card">
      <h3>Present</h3>
      <p><strong>${present.name}</strong></p>
      <p>${present.meaning}</p>
    </div>
    <div class="card">
      <h3>Future</h3>
      <p><strong>${future.name}</strong></p>
      <p>${future.meaning}</p>
    </div>
  `;
});

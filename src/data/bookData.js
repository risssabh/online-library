export const bookCategories = [
    "Fiction", "Non-Fiction", "Fantasy", "Sci-Fi", "Thriller", "anime-manga"
  ];
  
export const initialBooks = [
  {
    id: "1", title: "The Alchemist", author: "Paulo Coelho", genre: "Fiction",
    description: "A shepherd boy’s journey to find treasure becomes a spiritual quest for purpose.",
    rating: 4.5
  },
  {
    id: "2", title: "Atomic Habits", author: "James Clear", genre: "Non-Fiction",
    description: "Step-by-step guide to building good habits.",
    rating: 4.8
  },
  {
    id: "tokyo-ghoul",
    title: "Tokyo Ghoul",
    author: "Sui Ishida",
    genre: "anime-manga",
    description: "A college student becomes a half-ghoul and must survive in a dark underworld.",
    rating: 4.6
  },
  {
    id: "your-name",
    title: "Your Name",
    author: "Makoto Shinkai",
    genre: "anime-manga",
    description: "Two teenagers mysteriously swap bodies and form a deep bond across time.",
    rating: 4.7
  },
  {
    id: "deep-work",
    title: "Deep Work",
    author: "Cal Newport",
    genre: "non-fiction",
    description: "Rules for focused success in a distracted world.",
    rating: 4.4
  },
  {
    id: "the-power-of-now",
    title: "The Power of Now",
    author: "Eckhart Tolle",
    genre: "non-fiction",
    description: "A spiritual guide to help discover inner peace in the present moment.",
    rating: 4.5
  },
  {
    id: "mistborn",
    title: "Mistborn: The Final Empire",
    author: "Brandon Sanderson",
    genre: "fantasy",
    description: "A heist story in a world ruled by an immortal emperor and metal-based magic.",
    rating: 4.7
  },
  {
    id: "eragon",
    title: "Eragon",
    author: "Christopher Paolini",
    genre: "fantasy",
    description: "A farm boy discovers a dragon egg that changes his destiny.",
    rating: 4.3
  },
  {
    id: "foundation",
    title: "Foundation",
    author: "Isaac Asimov",
    genre: "sci-fi",
    description: "A mathematician predicts the fall of a galactic empire and creates a plan to save civilization.",
    rating: 4.6
  },
  {
    id: "neuromancer",
    title: "Neuromancer",
    author: "William Gibson",
    genre: "sci-fi",
    description: "A cyberpunk classic that invented the concept of 'cyberspace'.",
    rating: 4.2
  },
  {
    id: "the-da-vinci-code",
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genre: "thriller",
    description: "A symbologist uncovers a religious mystery protected by a secret society.",
    rating: 4.3
  },
  {
    id: "sharp-objects",
    title: "Sharp Objects",
    author: "Gillian Flynn",
    genre: "thriller",
    description: "A reporter returns to her hometown to cover a series of murders—and confront her past.",
    rating: 4.1
  },
  {
    id: "one-piece",
    title: "One Piece",
    author: "Eiichiro Oda",
    genre: "anime-manga",
    description: "A pirate boy with a rubber body seeks the ultimate treasure.",
    rating: 4.9
  },
  {
    id: "fullmetal-alchemist",
    title: "Fullmetal Alchemist",
    author: "Hiromu Arakawa",
    genre: "anime-manga",
    description: "Two brothers use alchemy to try and restore what they lost—and uncover a terrible secret.",
    rating: 4.8
  },
          
  ];

export const popularBooks = initialBooks.slice(0, 4);

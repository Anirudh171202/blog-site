interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
   {
    title: 'White Lotus: From Scratch C++ LLM Inference',
    description: `A bare-metal LLM inference engine written in C++. No PyTorch, no frameworks. Implements BPE tokenization, transformer forward pass with KV cache, and token sampling from scratch.`,
    imgSrc: '/static/images/whitelotus.png',
    href: 'https://github.com/Anirudh171202/WhiteLotus',
  },
  {
    title: 'Managing Crowds with Drones',
    description: `Surge Protector uses drone technology to monitor crowded locations like music concerts and public protests. Won best AI/ML award in Stanford University's TreeHacks 2023 with a $100K usd SAFE`,
    imgSrc: '/static/images/drone.webp',
    href: 'https://devpost.com/software/surge-protector',
  },
  {
    title: 'Drishti - A Braille Translator for Indian Languages',
    description: `Web application that converts books from all languages to the Indian convention for Braille, so that visually impaired people from rural India who don't understand English can read books in Indian languages.`,
    imgSrc: '/static/images/drishti.png',
    href: 'https://drive.google.com/file/d/1lw6ABC9pU0zw_sYklcUDRa8pYxzad8iM/view?usp=sharing',
  },
  {
    title: 'STEM Question Problem Solver',
    description: `Provide instant solutions to problems in science subjects at the high school level. The user takes a snap of the question and SnapSearch will search and compile relevant answers.`,
    imgSrc: '/static/images/snapsearch.png',
    href: 'https://www.reddit.com/r/Python/s/IwkMRGgs8x',
  },
  {
    title: '(Hobby) Guitar Covers',
    description: 'Youtube playlist of some of my favourite songs that I\'ve covered',
    imgSrc: '/static/images/monkeys.png',
    href: 'https://www.youtube.com/playlist?list=PLsEUbO8YQBJudEbMWdWmc0XXC7DAqx3ue',
  },

]

export default projectsData

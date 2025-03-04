interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Managing Crowds with Drones',
    description: `2023: Surge Protector uses drone technology to monitor crowded locations like music concerts and public protests. Won best AI/ML award in Stanford University's TreeHacks 2023 with a $100K usd SAFE`,
    imgSrc: '/static/images/drone.webp',
    href: 'https://devpost.com/software/surge-protector',
  },
  {
    title: 'Drishti - A Braille Translator for Indian Languages',
    description: `2021: Web application that converts books from all languages to the Indian convention for Braille, so that visually impaired people from rural India who don't understand English can read books in Indian languages.`,
    imgSrc: '/static/images/drishti.png',
    href: 'https://drive.google.com/file/d/1lw6ABC9pU0zw_sYklcUDRa8pYxzad8iM/view?usp=sharing',
  },
  {
    title: 'STEM Question Problem Solver',
    description: `2020: Provide instant solutions to problems in science subjects at the high school level. The user takes a snap of the question and SnapSearch will search and compile relevant answers.`,
    imgSrc: '/static/images/snapsearch.png',
    href: 'https://www.reddit.com/r/Python/s/IwkMRGgs8x',
  },

]

export default projectsData

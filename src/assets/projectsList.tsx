import { Project } from "../components/projects/projects";
import { Category } from "../components/Categories";
import cover from './cover.jpg';
import flappyBird1 from './flappyBird1.png';
import flappyBird2 from './flappyBird2.png';
import cup1 from './cup1.png';
import cup2 from './cup2.png';
import cup3 from './cup3.png';
import cup4 from './cup4.png';
import shooter1 from './shooter1.png';
import shooter2 from './shooter2.png';
import shooter3 from './shooter3.png';
import pic1 from './pic1.jpg';
import pic2 from './pic2.jpg';
import pic3 from './pic3.jpg';
import flashcard1 from './flashcard1.png';
import flashcard2 from './flashcard2.png';
import flashcard3 from './flashcard3.png';
import flashcard4 from './flashcard4.png';

export const projects: Project[] = [{ category: Category.WEB, title: "FlashCard", cover: flashcard1, key: 4, imgs: [flashcard2, flashcard3, flashcard4], description: ["Full-stack Flash Card app built with Next.JS and MySQL", "Auth flow with AuthNext lib"], year: 2021 },
{ category: Category.GAMES, title: "Flappy Bird", cover: flappyBird1, key: 1, imgs: [flappyBird1, flappyBird2], description: ["2D Flappy Bird clone with Unity Engine", "collision detection with Raybox and usage of tilemap", "Character movement animation", "implemented replay and scoring features"], link: "https://gentle-hotteok-7521b3.netlify.app/", year: 2022 },
{ category: Category.GAMES, title: "Cups & Shuffle", cover: cup1, key: 2, imgs: [cup2, cup3, cup4], description: ["2D game built with Unity Engine", "multi-level"], link: "https://incomparable-paletas-bf9856.netlify.app", year: 2022 },
{ category: Category.GAMES, title: "Space Shooter", cover: shooter1, key: 3, imgs: [shooter2, shooter3], description: ["C++ Game developed with SDL2 library"], year: 2022 }];

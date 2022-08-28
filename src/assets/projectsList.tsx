import { Project } from "../components/projects/projects";
import { Category } from "../components/Categories";
import cover from './cover.jpg';
import pic1 from './pic1.jpg';
import pic2 from './pic2.jpg';
import pic3 from './pic3.jpg';

export const projects: Project[] = [{ category: Category.WEB, title: "FlashCard", cover: cover, key: 4, imgs: [pic1, pic2, pic3], description: ["Full-stack Flash Card app built with Next.JS and MySQL", "Auth flow with AuthNext lib"] },
{ category: Category.GAMES, title: "Flappy Bird", cover: cover, key: 1, imgs: [pic1, pic2, pic3], description: ["2D Flappy Bird clone with Unity Engine", "collision detection with Raybox and usage of tilemap", "implemented replay and scoring features"], link: "https://gentle-hotteok-7521b3.netlify.app/" },
{ category: Category.GAMES, title: "Cups & Shuffle", cover: cover, key: 2, imgs: [pic1, pic2, pic3], description: ["2D game built with Unity Engine", "multi-level"], link: "https://incomparable-paletas-bf9856.netlify.app" },
{ category: Category.GAMES, title: "Space Shooter", cover: cover, key: 3, imgs: [pic1, pic2, pic3], description: ["C++ Game developed with SDL2 library"] }];

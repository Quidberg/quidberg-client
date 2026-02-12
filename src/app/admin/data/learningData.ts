import { z } from "zod";
import { sectionSchema } from "../libs/dto/learning/section";

export const dummyLearningData = [
  {
    id: "1",
    title: "Introduction to React",
    description: "Learn the basics of React.js",
    imageUrl: "https://via.placeholder.com/150",
    numberOfSections: 5,
  },
  {
    id: "2",
    title: "Advanced React",
    description: "Deep dive into React.js",
    imageUrl: "https://via.placeholder.com/150",
    numberOfSections: 8,
  },
  {
    id: "3",
    title: "React and TypeScript",
    description: "Learn how to use TypeScript with React",
    imageUrl: "https://via.placeholder.com/150",
    numberOfSections: 6,
  },
];

export const dummySectionList: z.infer<typeof sectionSchema>[] = [
  {
    id: "1",
    title: "Getting Started with React",
    order: 1,
    type: "video",
    lecture: new File([""], "lecture1.mp4"),
  },
  {
    id: "2",
    title: "Getting Started with React",
    order: 2,
    type: "video",
    lecture: new File([""], "lecture1.mp4"),
  },
];

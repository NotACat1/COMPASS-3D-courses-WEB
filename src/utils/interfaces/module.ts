import { ILesson } from 'utils/interfaces/lesson';

export interface IModule {
  description: string;
  icon: {
    caption: string;
    path: string;
  };
  duration: number;
  id: string;
  title: string;
  lessons: ILesson[];
}

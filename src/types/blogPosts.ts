export interface BlogData {
  id: number;
  image: string;
  date: string;
  readingTime: string;
  title: string;
  description: string;
  claps: number;
  liked: boolean;
}

export interface ClapsData {
  data: {
    claps: 10;
    liked: false;
  };
}

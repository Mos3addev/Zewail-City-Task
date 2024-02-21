export interface User {
    id: number;
    name: string;
    following: number[];
    follower?:number[];
    interests?: number[];
  }
  
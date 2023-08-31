export interface SongProps {
  name: string;
  url: string;
  id: number;
  avatar: string;
  lyrics: string;
}

export const Loop = {
  NON: 'NON',
  ALL: 'ALL',
  ONE: 'ONE',
} as const;

// export type LoopType = keyof typeof Loop;
export type LoopType = 0 | 1 | 2;
export type ShuffleType = 0 | 1;
export type AutoPlay = 0 | 1;

export type Mode = 'update' | 'new';

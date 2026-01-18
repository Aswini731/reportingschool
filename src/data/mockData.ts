export type Segment = 'emerging' | 'developing' | 'age-appropriate';

export interface Target {
  id: string;
  name: string;
  independent: number;
  prompted: number;
  attempts: number;
  ftr: number;
  segment: Segment;
  daysPlayed: number;
  status: 'mastered' | 'in-progress';
  masteredOn: string | null;
}

export interface Game {
  id: string;
  name: string;
  domainId: string;
  targets: Target[];
  independent: number;
  prompted: number;
  attempts: number;
  ftr: number;
  segment: Segment;
  daysPlayed: number;
  status: 'mastered' | 'in-progress';
  masteredOn: string | null;
}

export interface Domain {
  id: string;
  name: string;
  ftr: number;
  ftrChange: number; // % change in last 7 days (positive = increase, negative = decrease)
  segment: Segment;
  gamesCount: number;
}

export const getSegment = (ftr: number): Segment => {
  if (ftr < 40) return 'emerging';
  if (ftr < 70) return 'developing';
  return 'age-appropriate';
};

export const getSegmentLabel = (segment: Segment): string => {
  switch (segment) {
    case 'emerging': return 'Emerging';
    case 'developing': return 'Developing';
    case 'age-appropriate': return 'Age-Appropriate';
  }
};

export const domains: Domain[] = [
  { id: 'math', name: 'Mathematics', ftr: 78, ftrChange: 5, segment: 'age-appropriate', gamesCount: 4 },
  { id: 'reading', name: 'Reading', ftr: 55, ftrChange: -3, segment: 'developing', gamesCount: 3 },
  { id: 'science', name: 'Science', ftr: 32, ftrChange: 8, segment: 'emerging', gamesCount: 2 },
  { id: 'language', name: 'Language Arts', ftr: 85, ftrChange: 2, segment: 'age-appropriate', gamesCount: 3 },
  { id: 'social', name: 'Social Studies', ftr: 62, ftrChange: 0, segment: 'developing', gamesCount: 2 },
];

export const games: Game[] = [
  // Mathematics games
  {
    id: 'math-1',
    name: 'Number Ninja',
    domainId: 'math',
    independent: 45,
    prompted: 12,
    attempts: 57,
    ftr: 79,
    segment: 'age-appropriate',
    daysPlayed: 8,
    status: 'mastered',
    masteredOn: '2024-01-15',
    targets: [
      { id: 'math-1-t1', name: 'Count to 20', independent: 20, prompted: 3, attempts: 23, ftr: 87, segment: 'age-appropriate', daysPlayed: 4, status: 'mastered', masteredOn: '2024-01-10' },
      { id: 'math-1-t2', name: 'Add single digits', independent: 15, prompted: 5, attempts: 20, ftr: 75, segment: 'age-appropriate', daysPlayed: 5, status: 'mastered', masteredOn: '2024-01-14' },
      { id: 'math-1-t3', name: 'Subtract single digits', independent: 10, prompted: 4, attempts: 14, ftr: 71, segment: 'age-appropriate', daysPlayed: 3, status: 'in-progress', masteredOn: null },
    ],
  },
  {
    id: 'math-2',
    name: 'Shape Safari',
    domainId: 'math',
    independent: 32,
    prompted: 8,
    attempts: 40,
    ftr: 80,
    segment: 'age-appropriate',
    daysPlayed: 6,
    status: 'in-progress',
    masteredOn: null,
    targets: [
      { id: 'math-2-t1', name: 'Identify circles', independent: 12, prompted: 2, attempts: 14, ftr: 86, segment: 'age-appropriate', daysPlayed: 3, status: 'mastered', masteredOn: '2024-01-08' },
      { id: 'math-2-t2', name: 'Identify squares', independent: 10, prompted: 3, attempts: 13, ftr: 77, segment: 'age-appropriate', daysPlayed: 3, status: 'mastered', masteredOn: '2024-01-12' },
      { id: 'math-2-t3', name: 'Identify triangles', independent: 10, prompted: 3, attempts: 13, ftr: 77, segment: 'age-appropriate', daysPlayed: 2, status: 'in-progress', masteredOn: null },
    ],
  },
  {
    id: 'math-3',
    name: 'Pattern Puzzler',
    domainId: 'math',
    independent: 25,
    prompted: 10,
    attempts: 35,
    ftr: 71,
    segment: 'age-appropriate',
    daysPlayed: 5,
    status: 'in-progress',
    masteredOn: null,
    targets: [
      { id: 'math-3-t1', name: 'Color patterns', independent: 15, prompted: 5, attempts: 20, ftr: 75, segment: 'age-appropriate', daysPlayed: 3, status: 'mastered', masteredOn: '2024-01-11' },
      { id: 'math-3-t2', name: 'Shape patterns', independent: 10, prompted: 5, attempts: 15, ftr: 67, segment: 'developing', daysPlayed: 2, status: 'in-progress', masteredOn: null },
    ],
  },
  {
    id: 'math-4',
    name: 'Measurement Quest',
    domainId: 'math',
    independent: 18,
    prompted: 6,
    attempts: 24,
    ftr: 75,
    segment: 'age-appropriate',
    daysPlayed: 4,
    status: 'in-progress',
    masteredOn: null,
    targets: [
      { id: 'math-4-t1', name: 'Compare sizes', independent: 10, prompted: 2, attempts: 12, ftr: 83, segment: 'age-appropriate', daysPlayed: 2, status: 'mastered', masteredOn: '2024-01-13' },
      { id: 'math-4-t2', name: 'Order by length', independent: 8, prompted: 4, attempts: 12, ftr: 67, segment: 'developing', daysPlayed: 2, status: 'in-progress', masteredOn: null },
    ],
  },
  // Reading games
  {
    id: 'read-1',
    name: 'Letter Land',
    domainId: 'reading',
    independent: 28,
    prompted: 18,
    attempts: 46,
    ftr: 61,
    segment: 'developing',
    daysPlayed: 7,
    status: 'in-progress',
    masteredOn: null,
    targets: [
      { id: 'read-1-t1', name: 'Uppercase letters', independent: 15, prompted: 8, attempts: 23, ftr: 65, segment: 'developing', daysPlayed: 4, status: 'in-progress', masteredOn: null },
      { id: 'read-1-t2', name: 'Lowercase letters', independent: 13, prompted: 10, attempts: 23, ftr: 57, segment: 'developing', daysPlayed: 5, status: 'in-progress', masteredOn: null },
    ],
  },
  {
    id: 'read-2',
    name: 'Phonics Fun',
    domainId: 'reading',
    independent: 22,
    prompted: 14,
    attempts: 36,
    ftr: 61,
    segment: 'developing',
    daysPlayed: 5,
    status: 'in-progress',
    masteredOn: null,
    targets: [
      { id: 'read-2-t1', name: 'Beginning sounds', independent: 12, prompted: 6, attempts: 18, ftr: 67, segment: 'developing', daysPlayed: 3, status: 'in-progress', masteredOn: null },
      { id: 'read-2-t2', name: 'Ending sounds', independent: 10, prompted: 8, attempts: 18, ftr: 56, segment: 'developing', daysPlayed: 3, status: 'in-progress', masteredOn: null },
    ],
  },
  {
    id: 'read-3',
    name: 'Sight Word Stars',
    domainId: 'reading',
    independent: 14,
    prompted: 16,
    attempts: 30,
    ftr: 47,
    segment: 'developing',
    daysPlayed: 4,
    status: 'in-progress',
    masteredOn: null,
    targets: [
      { id: 'read-3-t1', name: 'Common words set 1', independent: 8, prompted: 8, attempts: 16, ftr: 50, segment: 'developing', daysPlayed: 2, status: 'in-progress', masteredOn: null },
      { id: 'read-3-t2', name: 'Common words set 2', independent: 6, prompted: 8, attempts: 14, ftr: 43, segment: 'developing', daysPlayed: 2, status: 'in-progress', masteredOn: null },
    ],
  },
  // Science games
  {
    id: 'sci-1',
    name: 'Nature Explorer',
    domainId: 'science',
    independent: 8,
    prompted: 17,
    attempts: 25,
    ftr: 32,
    segment: 'emerging',
    daysPlayed: 3,
    status: 'in-progress',
    masteredOn: null,
    targets: [
      { id: 'sci-1-t1', name: 'Identify animals', independent: 5, prompted: 10, attempts: 15, ftr: 33, segment: 'emerging', daysPlayed: 2, status: 'in-progress', masteredOn: null },
      { id: 'sci-1-t2', name: 'Identify plants', independent: 3, prompted: 7, attempts: 10, ftr: 30, segment: 'emerging', daysPlayed: 2, status: 'in-progress', masteredOn: null },
    ],
  },
  {
    id: 'sci-2',
    name: 'Weather Watch',
    domainId: 'science',
    independent: 6,
    prompted: 12,
    attempts: 18,
    ftr: 33,
    segment: 'emerging',
    daysPlayed: 2,
    status: 'in-progress',
    masteredOn: null,
    targets: [
      { id: 'sci-2-t1', name: 'Sunny vs cloudy', independent: 4, prompted: 6, attempts: 10, ftr: 40, segment: 'developing', daysPlayed: 1, status: 'in-progress', masteredOn: null },
      { id: 'sci-2-t2', name: 'Rain vs snow', independent: 2, prompted: 6, attempts: 8, ftr: 25, segment: 'emerging', daysPlayed: 1, status: 'in-progress', masteredOn: null },
    ],
  },
  // Language Arts games
  {
    id: 'lang-1',
    name: 'Rhyme Time',
    domainId: 'language',
    independent: 38,
    prompted: 7,
    attempts: 45,
    ftr: 84,
    segment: 'age-appropriate',
    daysPlayed: 6,
    status: 'mastered',
    masteredOn: '2024-01-12',
    targets: [
      { id: 'lang-1-t1', name: 'Match rhymes', independent: 20, prompted: 3, attempts: 23, ftr: 87, segment: 'age-appropriate', daysPlayed: 3, status: 'mastered', masteredOn: '2024-01-10' },
      { id: 'lang-1-t2', name: 'Create rhymes', independent: 18, prompted: 4, attempts: 22, ftr: 82, segment: 'age-appropriate', daysPlayed: 4, status: 'mastered', masteredOn: '2024-01-12' },
    ],
  },
  {
    id: 'lang-2',
    name: 'Story Builder',
    domainId: 'language',
    independent: 30,
    prompted: 5,
    attempts: 35,
    ftr: 86,
    segment: 'age-appropriate',
    daysPlayed: 5,
    status: 'mastered',
    masteredOn: '2024-01-14',
    targets: [
      { id: 'lang-2-t1', name: 'Sequence events', independent: 18, prompted: 2, attempts: 20, ftr: 90, segment: 'age-appropriate', daysPlayed: 3, status: 'mastered', masteredOn: '2024-01-11' },
      { id: 'lang-2-t2', name: 'Identify characters', independent: 12, prompted: 3, attempts: 15, ftr: 80, segment: 'age-appropriate', daysPlayed: 3, status: 'mastered', masteredOn: '2024-01-14' },
    ],
  },
  {
    id: 'lang-3',
    name: 'Vocabulary Voyage',
    domainId: 'language',
    independent: 28,
    prompted: 6,
    attempts: 34,
    ftr: 82,
    segment: 'age-appropriate',
    daysPlayed: 5,
    status: 'in-progress',
    masteredOn: null,
    targets: [
      { id: 'lang-3-t1', name: 'Word meanings', independent: 16, prompted: 3, attempts: 19, ftr: 84, segment: 'age-appropriate', daysPlayed: 3, status: 'mastered', masteredOn: '2024-01-13' },
      { id: 'lang-3-t2', name: 'Word usage', independent: 12, prompted: 3, attempts: 15, ftr: 80, segment: 'age-appropriate', daysPlayed: 3, status: 'in-progress', masteredOn: null },
    ],
  },
  // Social Studies games
  {
    id: 'social-1',
    name: 'Community Helpers',
    domainId: 'social',
    independent: 22,
    prompted: 12,
    attempts: 34,
    ftr: 65,
    segment: 'developing',
    daysPlayed: 4,
    status: 'in-progress',
    masteredOn: null,
    targets: [
      { id: 'social-1-t1', name: 'Identify helpers', independent: 12, prompted: 6, attempts: 18, ftr: 67, segment: 'developing', daysPlayed: 2, status: 'in-progress', masteredOn: null },
      { id: 'social-1-t2', name: 'Match roles', independent: 10, prompted: 6, attempts: 16, ftr: 63, segment: 'developing', daysPlayed: 3, status: 'in-progress', masteredOn: null },
    ],
  },
  {
    id: 'social-2',
    name: 'Map Mania',
    domainId: 'social',
    independent: 18,
    prompted: 12,
    attempts: 30,
    ftr: 60,
    segment: 'developing',
    daysPlayed: 4,
    status: 'in-progress',
    masteredOn: null,
    targets: [
      { id: 'social-2-t1', name: 'Find locations', independent: 10, prompted: 6, attempts: 16, ftr: 63, segment: 'developing', daysPlayed: 2, status: 'in-progress', masteredOn: null },
      { id: 'social-2-t2', name: 'Map symbols', independent: 8, prompted: 6, attempts: 14, ftr: 57, segment: 'developing', daysPlayed: 2, status: 'in-progress', masteredOn: null },
    ],
  },
];

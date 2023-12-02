export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const demos: { name: string; items: Item[] }[] = [
  {
    name: 'Market',
    items: [
      {
        name: 'Inventory',
        slug: 'layouts',
        description: 'view active inventory w/ market data, pricing, etc.',
      },
      {
        name: 'Trade',
        slug: 'route-groups',
        description: 'Organize routes without affecting URL paths',
      },
    ],
  },
  {
    name: 'CS2 Surf',
    items: [
      {
        name: 'Server Browser',
        slug: 'loading',
        description:
          'Customized CS2 server list with filtering, sorting, and pagination',
      },
      {
        name: 'Discord',
        slug: 'error-handling',
        description: 'Join the Discord server',
      },
    ],
  },
  {
    name: 'Counter-Strike News',
    items: [
      {
        name: 'Release Notes',
        slug: 'streaming',
        description: 'Official Counter-Strike: Global Offensive Release Notes',
      },
      {
        name: 'Latest News',
        slug: 'ssg',
        description: 'conspiracy theories, patch notes, and more',
      },
    ],
  },
  {
    name: 'Donate',
    items: [
      {
        name: 'Support our work',
        slug: 'context',
        description: 'Help continue to build and maintain the CS2 community',
      },
    ],
  },
];

export interface FeedItem {
    id: number;
    url: string;
    caption: string;
}

export const feedItemMocks: FeedItem[] = [
    {
    id: 0,
    url: '/assets/mock/Fern.jpg',
    caption: 'A Beautiful Green'
    },
    {
    id: 0,
    url: '/assets/mock/Lavenders.jpg',
    caption: 'A Show Of Purple'
    },
    {
    id: 0,
    url: '/assets/mock/ExamineYourPaths.jpg',
    caption: 'A Gentle Reminder'
    }
];

export type Payload = {
    topic?: string;
    notification: {
        title: string;
        body: string;
    };
    token: string;
};
export type Topic = string;
declare const FMC: (key: string) => {
    send: (payload: Payload) => Promise<unknown>;
    subscribeToTopic: (token: string, topic: string) => Promise<import("firebase-admin/lib/messaging/messaging-api").MessagingTopicManagementResponse>;
    unsubscribeFromTopic: (token: string, topic: string) => Promise<import("firebase-admin/lib/messaging/messaging-api").MessagingTopicManagementResponse>;
    multipleTopics: (i: number, topics: Topic[], payload: Payload) => Promise<number | any[]>;
    multipleTokens: (i: number, tokens: string[], payload: Payload) => Promise<any[] | undefined>;
};
export { FMC };

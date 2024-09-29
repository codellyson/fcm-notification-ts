export type Payload = {
  topic?: string;
  notification: {
    title: string;
    body: string;
  };
  token: string;
};
export type Topic = string;
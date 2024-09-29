import { FMC } from '../lib/index';
import key from './key.json';

const token = '';

const fcm = FMC(JSON.stringify(key));

const message: any = {
  data: {
    message: 'Hello FCM, You are working fine',
  },
  notification: {
    title: 'Test Notification',
    body: 'Hello FCM, You are working fine body',
  },
  // token: undefined,
  topic: 'all',
};

const sendMessage = async () => {
  const response = await fcm.send(message);
  console.log(response);
};

const subscribeTopic = async () => {
  const response = await fcm.subscribeToTopic(token, 'another');
  console.log(response, 'response');
};

const unsubscribeTopic = async () => {
  const response = await fcm.unsubscribeFromTopic(token, 'all');
  console.log(response);
};

const sendMessageToTopics = async () => {
  const message = {
    data: {
      message: 'Hello FCM, You are working fine',
    },
    notification: {
      title: 'Test Notification',
      body: 'Hello FCM, You are working fine body',
    },
    // token,
  };
  const topics = ['another'];

  // @ts-expect-error
  const response = await fcm.sendToMultipleTopics(0, topics, message);
  console.log(response, 'response');
};

const sendToMultipleTokens = async () => {
  const message = {
    data: {
      message: 'Hello FCM, You are working fine',
    },
    notification: {
      title: 'Test Notification',
      body: 'Hello FCM, You are working fine body',
    },
    // token,
  };
  const tokens = [token];

  // @ts-expect-error
  const response = await fcm.multipleTokens(0, tokens, message);
  console.log(response, 'response');
};
// unsubscribeTopic()
// sendMessageToTopics();
// subscribeTopic();
// sendMessage();
// sendToMultipleTokens();

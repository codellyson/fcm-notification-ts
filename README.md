# FCM Notification TS

## Overview

[`ts-fcm-notification`](# "Go to definition") is a simple library to send push notifications using Firebase Cloud Messaging (FCM) in Node.js. This library provides functionalities to send messages to individual tokens, multiple tokens, and topics.

## Installation

To install the library, use npm or yarn:

```sh
npm install ts-fcm-notification
```

or

```sh
yarn add ts-fcm-notification
```

## Usage

### Initialization

First, initialize the library with your Firebase service account key:

```typescript
import { FCM } from 'ts-fcm-notification';
import key from './path/to/your-service-account-file.json';

const fcm = FCM(JSON.stringify(key));
```

### Sending Messages

#### Send a Message to a Single Token

```typescript


const

 message = {
  data: {
    message: 'Hello FCM, You are working fine',
  },
  notification: {
    title: 'Test Notification',
    body: 'Hello FCM, You are working fine body',
  },
  token: 'your-device-token',
};

const response = await fcm.send(message);
console.log(response);
```

#### Send a Message to Multiple Tokens

```typescript
const tokens = ['token1', 'token2', 'token3'];
const message = {
  data: {
    message: 'Hello FCM, You are working fine',
  },
  notification: {
    title: 'Test Notification',
    body: 'Hello FCM, You are working fine body',
  },
};

const response = await fcm.multipleTokens(0, tokens, message);
console.log(response);
```

#### Send a Message to a Topic

```typescript
const message = {
  data: {
    message: 'Hello FCM, You are working fine',
  },
  notification: {
    title: 'Test Notification',
    body: 'Hello FCM, You are working fine body',
  },
  topic: 'your-topic',
};

const response = await fcm.send(message);
console.log(response);
```

#### Send a Message to Multiple Topics

```typescript
const topics = ['topic1', 'topic2'];
const message = {
  data: {
    message: 'Hello FCM, You are working fine',
  },
  notification: {
    title: 'Test Notification',
    body: 'Hello FCM, You are working fine body',
  },
};

const response = await fcm.sendToMultipleTopics(0, topics, message);
console.log(response);
```

### Subscribing and Unsubscribing from Topics

#### Subscribe to a Topic

```typescript
const token = 'your-device-token';
const topic = 'your-topic';

const response = await fcm.subscribeToTopic(token, topic);
console.log(response);
```

#### Unsubscribe from a Topic

```typescript
const token = 'your-device-token';
const topic = 'your-topic';

const response = await fcm.unsubscribeFromTopic(token, topic);
console.log(response);
```

## API Reference

### [`FCM(key: string)`](# "Go to definition")

Initializes the FCM library with the provided service account key.

### [`send(payload: any)`](# "Go to definition")

Sends a message to a single token or topic.

### [`multipleTokens(i: number, tokens: string[], payload: any)`](# "Go to definition")

Sends a message to multiple tokens.

### [`sendToMultipleTopics(i: number, topics: string[], payload: any)`](# "Go to definition")

Sends a message to multiple topics.

### [`subscribeToTopic(token: string, topic: string)`](# "Go to definition")

Subscribes a device token to a topic.

### [`unsubscribeFromTopic(token: string, topic: string)`](# "Go to definition")

Unsubscribes a device token from a topic.

## Example

An example usage of the library can be found in the [`examples/index.ts`](# "examples/index.ts") file.

```typescript
import { FCM } from '../lib/index';
import key from './key.json';

const token = 'your-device-token';
const fcm = FCM(JSON.stringify(key));

const message = {
  data: {
    message: 'Hello FCM, You are working fine',
  },
  notification: {
    title: 'Test Notification',
    body: 'Hello FCM, You are working fine body',
  },
  topic: 'all',
};

const sendMessge = async () => {
  const response = await fcm.send(message);
  console.log(response);
};

sendMessge();
```

## License

This project is licensed under the ISC License. See the LICENSE file for details.

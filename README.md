# FCM Notification TS

## Overview

[`fcm-notification-ts`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Flukmanisiaka%2FDesktop%2Fworkfolder%2Flibraries%2Ffcm-notification-ts%2Fpackage.json%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A1%2C%22character%22%3A11%7D%7D%5D%2C%223b2908f1-cf84-4a16-9ad9-fd4843580f44%22%5D "Go to definition") is a simple library to send push notifications using Firebase Cloud Messaging (FCM) in Node.js. This library provides functionalities to send messages to individual tokens, multiple tokens, and topics.

## Installation

To install the library, use npm or yarn:

```sh
npm install fcm-notification-ts
```

or

```sh
yarn add fcm-notification-ts
```

## Usage

### Initialization

First, initialize the library with your Firebase service account key:

```typescript
import { FMC } from 'fcm-notification-ts';
import key from './path/to/your-service-account-file.json';

const fcm = FMC(JSON.stringify(key));
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

### [`FMC(key: string)`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Flukmanisiaka%2FDesktop%2Fworkfolder%2Flibraries%2Ffcm-notification-ts%2Fexamples%2Findex.ts%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A0%2C%22character%22%3A9%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Flukmanisiaka%2FDesktop%2Fworkfolder%2Flibraries%2Ffcm-notification-ts%2Flib%2Findex.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A14%2C%22character%22%3A8%7D%7D%5D%2C%223b2908f1-cf84-4a16-9ad9-fd4843580f44%22%5D "Go to definition")

Initializes the FCM library with the provided service account key.

### [`send(payload: any)`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Flukmanisiaka%2FDesktop%2Fworkfolder%2Flibraries%2Ffcm-notification-ts%2Fexamples%2Findex.ts%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A21%2C%22character%22%3A29%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Flukmanisiaka%2FDesktop%2Fworkfolder%2Flibraries%2Ffcm-notification-ts%2Flib%2Findex.ts%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A93%2C%22character%22%3A25%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Flukmanisiaka%2FDesktop%2Fworkfolder%2Flibraries%2Ffcm-notification-ts%2Flib%2Findex.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A49%2C%22character%22%3A9%7D%7D%5D%2C%223b2908f1-cf84-4a16-9ad9-fd4843580f44%22%5D "Go to definition")

Sends a message to a single token or topic.

### [`multipleTokens(i: number, tokens: string[], payload: any)`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Flukmanisiaka%2FDesktop%2Fworkfolder%2Flibraries%2Ffcm-notification-ts%2Fexamples%2Findex.ts%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A67%2C%22character%22%3A29%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Flukmanisiaka%2FDesktop%2Fworkfolder%2Flibraries%2Ffcm-notification-ts%2Flib%2Findex.ts%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A82%2C%22character%22%3A6%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Flukmanisiaka%2FDesktop%2Fworkfolder%2Flibraries%2Ffcm-notification-ts%2Flib%2Findex.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A84%2C%22character%22%3A6%7D%7D%5D%2C%223b2908f1-cf84-4a16-9ad9-fd4843580f44%22%5D "Go to definition")

Sends a message to multiple tokens.

### [`sendToMultipleTopics(i: number, topics: string[], payload: any)`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Flukmanisiaka%2FDesktop%2Fworkfolder%2Flibraries%2Ffcm-notification-ts%2Fexamples%2Findex.ts%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A49%2C%22character%22%3A29%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Flukmanisiaka%2FDesktop%2Fworkfolder%2Flibraries%2Ffcm-notification-ts%2Flib%2Findex.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A26%2C%22character%22%3A8%7D%7D%5D%2C%223b2908f1-cf84-4a16-9ad9-fd4843580f44%22%5D "Go to definition")

Sends a message to multiple topics.

### [`subscribeToTopic(token: string, topic: string)`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Flukmanisiaka%2FDesktop%2Fworkfolder%2Flibraries%2Ffcm-notification-ts%2Fexamples%2Findex.ts%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A26%2C%22character%22%3A29%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Flukmanisiaka%2FDesktop%2Fworkfolder%2Flibraries%2Ffcm-notification-ts%2Flib%2Findex.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A31%2C%22character%22%3A6%7D%7D%5D%2C%223b2908f1-cf84-4a16-9ad9-fd4843580f44%22%5D "Go to definition")

Subscribes a device token to a topic.

### [`unsubscribeFromTopic(token: string, topic: string)`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Flukmanisiaka%2FDesktop%2Fworkfolder%2Flibraries%2Ffcm-notification-ts%2Fexamples%2Findex.ts%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A31%2C%22character%22%3A29%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Flukmanisiaka%2FDesktop%2Fworkfolder%2Flibraries%2Ffcm-notification-ts%2Flib%2Findex.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A42%2C%22character%22%3A6%7D%7D%5D%2C%223b2908f1-cf84-4a16-9ad9-fd4843580f44%22%5D "Go to definition")

Unsubscribes a device token from a topic.

## Example

An example usage of the library can be found in the [`examples/index.ts`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Flukmanisiaka%2FDesktop%2Fworkfolder%2Flibraries%2Ffcm-notification-ts%2Fexamples%2Findex.ts%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%223b2908f1-cf84-4a16-9ad9-fd4843580f44%22%5D "/Users/lukmanisiaka/Desktop/workfolder/libraries/fcm-notification-ts/examples/index.ts") file.

```typescript
import { FMC } from '../lib/index';
import key from './pilot-x-19cef-firebase-adminsdk-kxah9-83af0718ef.json';

const token = 'your-device-token';
const fcm = FMC(JSON.stringify(key));

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

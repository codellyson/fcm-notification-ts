import admin from 'firebase-admin';
const FCM = (key) => {
    if (!key)
        throw new Error('key is required');
    admin.initializeApp({
        credential: admin.credential.cert(JSON.parse(key)),
    });
    const subscribeToTopic = async (token, topic) => {
        if (!token)
            throw new Error('token is required');
        if (!topic)
            throw new Error('topic is required');
        const response = await admin.messaging().subscribeToTopic(token, topic);
        if (response.failureCount > 0) {
            throw new Error('Failed to subscribe to topic, Reason' + response.errors);
        }
        return response;
    };
    const unsubscribeFromTopic = async (token, topic) => {
        if (!token)
            throw new Error('token is required');
        if (!topic)
            throw new Error('topic is required');
        const response = await admin.messaging().unsubscribeFromTopic(token, topic);
        if (response.failureCount > 0) {
            throw new Error('Failed to unsubscribe from topic, Reason' + response.errors);
        }
        return response;
    };
    async function send(payload) {
        try {
            if (!payload)
                throw new Error('please provide a message object');
            const response = await admin.messaging().send(payload);
            return response;
        }
        catch (error) {
            return error;
        }
    }
    const multipleTopics = async (i, topics, payload) => {
        let objArr = {};
        let results = [];
        try {
            if (i === topics.length)
                return results;
            payload['topic'] = topics[i];
            objArr.topic = topics[i];
            const result = await send(payload);
            if (result) {
                objArr['response'] = 'Successfully sent message to topic: ' + result;
            }
            results.push(objArr);
            i = i + 1;
            multipleTopics(i, topics, payload);
            return results;
        }
        catch (error) {
            objArr['response'] = error;
            return results.push(objArr);
        }
    };
    const multipleTokens = async (i, tokens, payload) => {
        let objArr = {};
        let results = [];
        try {
            if (i === tokens.length)
                return results;
            payload['token'] = tokens[i];
            objArr.token = tokens[i];
            const result = await send(payload);
            if (result) {
                objArr['response'] = 'Successfully sent message to token: ' + result;
            }
            results.push(result);
            i = i + 1;
            multipleTokens(i, tokens, payload);
        }
        catch (error) {
            objArr['response'] = error;
            results.push(objArr);
            return results;
        }
    };
    return {
        send,
        subscribeToTopic,
        unsubscribeFromTopic,
        multipleTopics,
        multipleTokens,
    };
};
export { FCM };
//# sourceMappingURL=index.js.map
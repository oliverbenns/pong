// https://davidwalsh.name/pubsub-javascript
const events = (() => {
  const topics = {};
  const { hasOwnProperty } = topics;

  return {
    subscribe(topic, listener) {
      // Create the topic's object if not yet created
      if (!hasOwnProperty.call(topics, topic)) {
        topics[topic] = [];
      }

      // Add the listener to queue
      const index = topics[topic].push(listener) - 1;

      // Provide handle back for removal of topic
      return {
        remove() {
          delete topics[topic][index];
        },
      };
    },
    publish(topic, info) {
      // If the topic doesn't exist, or there's no listeners in queue, just leave
      if (!hasOwnProperty.call(topics, topic)) {
        return;
      }

      // Cycle through topics queue, fire!
      topics[topic].forEach((item) => item(info !== undefined ? info : {}));
    },
  };
})();

export default events;

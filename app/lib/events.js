// https://davidwalsh.name/pubsub-javascript
var events = (function(){
  var topics = {};
  const { hasOwnProperty } = topics;

  return {
    subscribe: function(topic, listener) {
      // Create the topic's object if not yet created
      if (!hasOwnProperty.call(topics, topic)) {
        topics[topic] = [];
      }

      // Add the listener to queue
      var index = topics[topic].push(listener) -1;

      // Provide handle back for removal of topic
      return {
        remove: function() {
          delete topics[topic][index];
        }
      };
    },
    publish: function(topic, info) {
      // If the topic doesn't exist, or there's no listeners in queue, just leave
      if (!hasOwnProperty.call(topics, topic)) {
        return;
      }

      // Cycle through topics queue, fire!
      topics[topic].forEach(function(item) {
          item(info != undefined ? info : {});
      });
    }
  };
})();

export default events;

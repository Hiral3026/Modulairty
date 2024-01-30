    // Module design pattern
    const CollectionModule = (function() {
        // Private property
        const collection = [];
  
        // Private method to add a new string to the collection array
        const addString = function(str) {
          if (typeof str === 'string') {
            collection.push(str);
          }
        };
  
        // Private method to return the number of items in the collection
        const getCollectionCount = function() {
          return collection.length;
        };
  
        // Public methods
        return {
          // Public method to add a new item to the collection
          add: function(item) {
            addString(item);
          },
  
          // Public method to get the number of items in the collection
          getCount: function() {
            return getCollectionCount();
          }
        };
      })();
  
      // Usage example
      CollectionModule.add('Item 1');
      CollectionModule.add('Item 2');
      console.log(CollectionModule.getCount()); // Output: 2
  
      // Blocking code example
      console.log('Blocking Code 1');
      console.log('Blocking Code 2');
      console.log('Blocking Code 3');
  
      // Non-blocking code example
      console.log('Non-blocking Code 1');
  
      setTimeout(function() {
        console.log('Non-blocking Code 2 (executed after a delay)');
      }, 1000);
  
      console.log('Non-blocking Code 3');
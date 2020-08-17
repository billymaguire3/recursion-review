// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  var resultArray = [];
  var helperFunction = function(node) {
    if (node.classList && node.classList.contains(className)) {
      resultArray.push(node);
    }

    _.each(node.childNodes, function(child) {
      helperFunction(child);
    });
  };

  helperFunction(document.body);
  return resultArray;
};




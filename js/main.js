const removeElement = (array, element) => {
  const elementIndex = array.indexOf(element);
  const noElementMessage = 'There is no such element in the given array';
  const messageArrayEmpty = 'Given array is empty';
  if(array.length === 0) {
    return messageArrayEmpty;
  }
  if(elementIndex === -1) {
    return noElementMessage;
  } else {
  array.splice(elementIndex, 1);
  return array;
  }
}
 const number = [0, 1, 2, 3, 4, 5];
 const result = removeElement(number, 2);
 document.write(JSON.stringify(result));
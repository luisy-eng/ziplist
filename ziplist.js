const list1 = [1, 2, 3];
const list2 = ['a', 'b', 'c'];

function ziplist(first, second) {
  const ret = [];
  for (let i = 0; i < first.length; i++) {
    ret.push(first[i], second[i]);
  }
  return ret;
}

console.log(ziplist(list1, list2));

const zipListTheSimpleWay = (first, second) => _.flatten(_.zip(first, second));

console.log(zipListTheSimpleWay(list1, list2));

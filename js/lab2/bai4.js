const theList = ['Lauren', 'Kevin', true, 35, null, undefined, [
    'one', 'two']];
alert(theList.toString());
theList.pop();
alert(theList.toString());
theList.shift();
alert(theList.toString());
theList.unshift("FIRST");
alert(theList.toString());
theList.push("LAST");
alert(theList.toString());
theList[3]="hello world'";
alert(theList.toString());
theList[2]="middle";
alert(theList.toString());
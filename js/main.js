'use strict';

let xml = `
<?xml version="1.0"?>
<html xmlns="http://www.w3.org/2000/svg">
	<head>
	<title>A swarm of motes</title>
	<style type="text/css">
	</style>
	</head>
	<body onload="update()">
		<svg id="display" width="400" height="300">
          <circle id="cursor1" cx="200" cy="150" r="7" fill="#0000ff" fill-opacity="0.5"/>
          <circle id="cursor2" cx="200" cy="150" r="7" fill="#0000ff" fill-opacity="0.5"/>
          <circle id="cursor3" cx="200" cy="150" r="7" fill="#0000ff" fill-opacity="0.5"/>
		</svg>
    </body>
    </html>
`;

let doc;
function main() {
    console.log(xml);
    doc = pjXML.parse(xml);
    console.log(JSON.stringify(doc, null, 2));
    console.log(doc.xml());
    let e, a;

    // get element
    e = doc.select('/*/head/title');
    console.log('title', e?.text());

    // get attributes
    a = doc.select('/*/@xmlns');
    console.log('xmlns=', a);

    a = doc.select('//body/@onload');
    console.log('onload=', a);

    // get complex element
    e = doc.select('/html/body/svg');
 
    // iterate by its sub nodes
    for(let n of e.elements()){
       console.log('---- svg element-----\n', n.xml());
    }
}

main();

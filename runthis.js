const fs = require('fs');
const readline = require("readline-sync");




async function downloadImg(link){
let returnedval = fetch(link);
 returnedval = (await returnedval).blob()
//  return await returnedval;
  returnedval =  await blobToFile(await returnedval, "downloaded.png");

  const arrayBuffer = await returnedval.arrayBuffer();
  const buffer = Buffer.from(await arrayBuffer);

  // console.log(arrayBuffer)
  // console.log(buffer)
  // console.log(__dirname)

  fs.writeFile(__dirname+"/download/"+returnedval.number+returnedval.name, buffer, err => {
    if (err) {
      console.error(err);
    }
    console.log("file written successfully");
    // file written successfully
  });
}


async function blobToFile(theBlob, fileName){
  //A Blob() is almost a File() - it's just missing the two properties below which we will add
  theBlob.lastModifiedDate = new Date();
  theBlob.name = fileName;
  
  
  let file = fs.readdirSync(__dirname+"/download/", );
  theBlob.number = file.length;
  console.log("Blob to  file is done")
  console.log(theBlob);
  return theBlob;
}





let linkstr = readline.question("enter the link : ");
downloadImg(linkstr)





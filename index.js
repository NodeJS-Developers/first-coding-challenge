const { Worker, workerData } = require('worker_threads');
const passlengths = [ 10, 14, 10, 12, 11, 16 ];
const decryptcryptotxt = async (Z) => {
  try {
    
  let workerArr = Z.map(el => new Worker(`./worker2.js`, {
    workerData
  }))
  return await Promise.all(workerArr.map((worker, i) => 
   new Promise((res, rej) => {
      try {
      worker.once('message', info => info.length === Z[i] ? res(info) : rej(info))
      worker.postMessage({ length: Z[i], filePath: (i === Z.length - 1 ? `./encryptedIV.txt`:`./encryptedPrimaryKeys${i}.txt`) })
      } catch (error) {
        rej(error);
      }
    })
    ));

  } catch (error) {
    console.error(error);
    
  }
}
decryptcryptotxt(passlengths).then(array => {
  console.log(array)
}).catch(err => console.error(err));

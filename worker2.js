const { parentPort, threadId } = require('worker_threads');
const fs = require('fs');
const decrypt = async ({length ,filePath}) => {
    const readable = fs.createReadStream(
        filePath, {encoding: 'utf8'}
        );
    try {
        for await(const chunk of readable) {
            let data = chunk.split('|');
            try {
                for(let m = 0; m <Infinity; m++) {
                    data = Buffer.from(data, 'base64').toString('utf8')
                    if(data.length === length) {throw data}
                }
            } catch (error) {
                parentPort.postMessage(`${error}`)
            }
                
            
    
        }
        
    } catch (error) {
        parentPort.postMessage(`${error} from worker ${threadId}`)
        console.error(error)
    }
}
// decrypt({filePath: './encrypted0.txt'});
parentPort.once('message', decrypt)

import { Worker } from 'worker_threads';
import path from 'path';


export function runFileLoaderWorker(
  filePath: string, fileCategory: string
) : Promise<{message: string}> {

  return new Promise((resolve, reject) => {
    const worker = new Worker(
      path.join(__dirname, '../workers/fileLoader/worker.js'), {
        workerData: { filePath, fileCategory },
      }
    );

    worker.on('message', (data) => {
      resolve(data);
    });

    worker.on('error', (error) => {
      reject(error);
    });

    worker.on('exit', (code) => {
      if (code !== 0) {
        reject(new Error(`Worker stopped with exit code ${code}`));
      }
    });
  });
};
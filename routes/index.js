import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { convert } from '../controllers';

export const router = Router();
export let clients = [];

router.post('/', (req, res) => {
    convert(req, res);
});

router.get('/', (req, res) => {
    const headers = {
        'Content-Type': 'text/event-stream',
        'Connection': 'keep-alive',
        'Cache-Control': 'no-cache'
      };
  
      res.writeHead(200, headers);
      
      const subscriberId = uuidv4();
      const data = `data: ${JSON.stringify({id: subscriberId, result: ''})}\n\n`;
    
      res.write(data);
    
      const subscriber = {
        id: subscriberId,
        response: res
      };
    
      clients.push(subscriber);
      console.log(`${subscriberId} Connection opened`);
    
      req.on('close', () => {
        console.log(`${subscriberId} Connection closed`);
        clients = clients.filter(sub => sub.id !== subscriberId);
      });
});
import 'reflect-metadata';
import '@shared/infra/http/container';
import { server } from '@shared/infra/http/app';
import { createConnections } from 'typeorm';

createConnections().then(() => {
  server.listen(3333, () => {
    console.log('Server started on port 3333.');
  });
});

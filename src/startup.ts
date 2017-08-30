import {
  registerBootService,
  httpServiceInit,
  botInit,
} from './bot/bootstrap';

async function boot() {
  await registerBootService();
  await httpServiceInit();
  await botInit();
}

boot();
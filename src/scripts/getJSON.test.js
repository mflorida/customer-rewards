// Use Star Wars API to test useFetch() hook.
import { getJSON } from './getJSON';

const timeout = 10000;

test('getJSON helper', async () => {
  const controller = new AbortController();
  const { data } = await getJSON('https://swapi.dev/api/starships/3/', {
    signal: controller.signal
  });
  expect(data.name).toBe('Star Destroyer');
  setTimeout(controller.abort, timeout + 1000);
}, timeout);

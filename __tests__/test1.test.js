import ArrayBufferConverter from '../src/ArrayBufferConverter';

test('test for buffer', () => {
  const abc = new ArrayBufferConverter();
  abc.load();
  const result = abc.toString();
  expect(result).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});

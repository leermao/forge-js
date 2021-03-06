const os = require('os');
const fs = require('fs');
const path = require('path');
const Storage = require('../lib');

describe('#Storage', () => {
  test('should be a function', () => {
    expect(typeof Storage).toEqual('function');
  });

  const dbPath = path.join(os.tmpdir(), `${Date.now()}.db`);
  const storage = new Storage({ dbPath });

  test('should extends event emitter', () => {
    expect(typeof storage.on).toEqual('function');
    expect(typeof storage.emit).toEqual('function');
  });

  const methods = ['create', 'update', 'delete', 'read'];
  methods.forEach(x => {
    test(`should have ${x} method`, () => {
      expect(typeof storage[x]).toEqual('function');
    });
  });

  test('should have complete workflow', async () => {
    const traceId = 'abcd';
    await storage.create(traceId, { status: 'created' });

    let record = await storage.read(traceId);
    expect(record.traceId).toEqual(traceId);
    expect(record.status).toEqual('created');
    expect(record.createdAt).toBeTruthy();
    expect(record.updatedAt).toBeTruthy();

    record = await storage.update(traceId, { status: 'complete', key: 'value' });
    expect(record.traceId).toEqual(traceId);
    expect(record.status).toEqual('complete');
    expect(record.key).toEqual('value');
    expect(record.createdAt).toBeTruthy();
    expect(record.updatedAt).toBeTruthy();

    const numRemoved = await storage.delete(traceId);
    expect(numRemoved).toEqual(1);
  });

  afterAll(() => {
    fs.unlinkSync(dbPath);
  });
});

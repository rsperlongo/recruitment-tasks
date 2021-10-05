const server = require('../app');

describe('Users tests', () => {

    const MOONGO_URL = 'mongodb://127.0.0.1:27017/recruitment-tasks'

    beforeAll(async () => {
        await mongoose.connect(MOONGO_URL,
            { useNewUrlParser: true }, (err, db) => { });
    });
});

afterAll(async () => {
    await mongoose.connection.db.dropCollection('User');

    test('connection succesfull', () => {
        const response = request(server).get('/user');
        expect(response.status).toEqual(200);
    })
});
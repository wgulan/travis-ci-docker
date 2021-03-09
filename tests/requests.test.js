const request = require('supertest')
const server = require('../index.js')

describe('Get Endpoints', () => {
  it('should return GET', async () => {
    const res = await request(server)
      .get('/')

    expect(res.statusCode).toEqual(200)
    expect(res.body.result).toEqual("GET")
  })
})

describe('Post Endpoints', () => {
    it('should return POST', async () => {
      const res = await request(server)
        .post('/')
  
      expect(res.statusCode).toEqual(200)
      expect(res.body.result).toEqual("POST")
    })
  })

describe('Put Endpoints', () => {
    it('should return PUT', async () => {
      const res = await request(server)
        .put('/')
  
      expect(res.statusCode).toEqual(200)
      expect(res.body.result).toEqual("PUT")
    })
  })

describe('Delete Endpoints', () => {
    it('should return DELETE', async () => {
      const res = await request(server)
        .delete('/')
  
      expect(res.statusCode).toEqual(200)
      expect(res.body.result).toEqual("DELETE")
    })
  })

afterAll((done) => {
    server.close();
    done();
});

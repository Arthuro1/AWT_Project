module.exports = {
    db: 'mongodb://username:password@url:port/db',
    db_dev: 'mongodb://127.0.0.1:27017/regis', 
    JWT_SECRET:'test',
    oauth: {
        facebook: {
            clientID: '637927660040610',
            clientSecret: 'c7fff244ec8d60500b41c273594b10d4'
        },
        google: {
            clientID: '934511799147-16b0qjlj2ptv3o27ptqk887q93jmjlro.apps.googleusercontent.com',
            clientSecret: 'Y3sm4R6guCMLYqM1HNqFA1Vq'
        }
    },
    pusher:{
        appId: '818114',
        key: 'a791a24c33c56c0df797',
        secret: 'd9539ddcd3a6aeea9212',
    }
  };

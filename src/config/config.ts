export default () => ({
    database: {
        host:process.env.DB_HOST,
        dbport:process.env.DB_PORT,
        username:process.env.DB_USERNAME,
        password:process.env.DB_PWD,
        database:process.env.DB_NAME,
        url:process.env.DB_URL
    },
    APP:{
        app_port:process.env.APP_PORT,
        app_env:process.env.NODE_ENV
    }
  });
  
const config = {
    STRIPE_KEY: "",
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "",
      BUCKET: "",
    },
    apiGateway: {
      REGION: "us-west-1",
      URL: "https://2ui0jo85t1.execute-api.us-west-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-west-1",
      USER_POOL_ID: "us-west-1_CpMEAbLGF",
      APP_CLIENT_ID: "3mesjuej5j2o5g0kvh0qa8lo95",
      IDENTITY_POOL_ID: "us-west-1:08c4ddf0-ca0d-4721-a252-50da6bc50d81",
    },
  };
  
  export default config;
  
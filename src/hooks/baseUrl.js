const baseUrl =
    process.env.NODE_ENV === 'local'
        ? process.env.LOCAL_URL
        : process.env.PRODUCTION_URL;

export default baseUrl;

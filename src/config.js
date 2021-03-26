const oktaAuthConfig = {
    // Note: If your app is configured to use the Implicit flow
    // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
    // you will need to add `pkce: false`
    issuer: 'https://dev-69268209.okta.com/oauth2/default',
    clientId: '0oad87ce3LWezxJpq5d6',
    redirectUri: window.location.origin + '/login/callback',
};

const oktaSignInConfig = {
    baseUrl: 'https://dev-69268209.okta.com',
    clientId: '0oad87ce3LWezxJpq5d6',
    redirectUri: window.location.origin + '/login/callback',
    authParams: {
        // If your app is configured to use the Implicit flow
        // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
        // you will need to uncomment the below line
        // pkce: false
    }
};

export { oktaAuthConfig, oktaSignInConfig };

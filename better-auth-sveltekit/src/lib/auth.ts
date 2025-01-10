import { betterAuth } from "better-auth";
import { genericOAuth } from "better-auth/plugins"

export const auth = betterAuth({
    plugins: [
        genericOAuth({
            config: [
                {
                    providerId: "auth0",
                    clientId: "<clientId>",
                    clientSecret: "<clientSecret>",
                    discoveryUrl: "https://<tenant>.us.auth0.com/.well-known/openid-configuration",
                    scopes: ["openid", "profile", "email"]
                }
            ]
        })
    ]
})

export const Endpoint: Apis = {
    contactUs: process.env.NEXT_PUBLIC_CONTACT_US_API as string,
    subscription: process.env.NEXT_PUBLIC_SUBSCRIPTION_API as string,
}

type Apis = {
    contactUs: string;
    subscription: string;
}
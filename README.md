# TypeScript SDK

[Source](https://dev.to/jamesoyanna/developing-and-publishing-a-typescript-based-sdk-3pph)

This SDK connects to the JSON Placeholder API for fetching posts, creating and retrieving a particular post from the API

## Installation

```bash
npm i @htutwaiphyo/typescript-sdk
```

## Example

```ts
import SocialPlus from "@htutwaiphyo/typescript-sdk";

const client: SocialPlus = new SocialPlus({
  apiKey: "API_KEY",
});

client.getPosts().then(console);

client.createPost({
    userId: 1,
    body: "test",
    title: "test",
  })
  .then(console);
```

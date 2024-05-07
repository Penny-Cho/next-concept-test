next 14 version concept review and check

## prisma setup

```
npx primsa init --datasource-provider sqlite
```

SQLite database dev.db created at file:./dev.db

```
npx prisma migrate dev
```

## Server components

- by default, all components are server components
- generally recommended to use server components than client components which have better performance, UX
- cannot use any kind of hook
- cannot assign any event handlers
- can use async/await directly on components

```jsx
export default async function Homepage() {
  await something;
}
```

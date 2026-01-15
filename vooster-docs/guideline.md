# Code Guideline

---

## General Principles
- Write clear, readable, and maintainable code.
- Follow the Single Responsibility Principle.
- Document complex logic with concise comments.

---

## MUST Rules
- MUST use TypeScript for all new code.
- MUST write unit tests for all logic components.
- MUST use meaningful variable and function names.

---

## MUST NOT Rules
- MUST NOT use `any` type in TypeScript except where unavoidable.
- MUST NOT commit code with lint or type errors.

---

## Naming Conventions
- Variables and functions: camelCase
- Classes and types: PascalCase
- Constants: SCREAMING_SNAKE_CASE

---

## Error Handling
- Always handle errors gracefully and log exceptions.
- Do not expose sensitive error messages to end-users.

---

## Testing Standards
- All new features must include unit and integration tests.
- Use Jest as the default testing framework.

---

## Performance Guidelines
- Avoid unnecessary re-renders in React components.
- Optimize loops and data processing for large datasets.

---

## Security Practices
- Never commit secrets or credentials.
- Use parameterized queries for all database access.

---

## Example
```typescript
// Good Example
function calculateSum(a: number, b: number): number {
  return a + b;
}
```
---

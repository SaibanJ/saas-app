# Prettier Setup and Usage Guide

## What is Prettier?

Prettier is an opinionated code formatter that enforces a consistent style by parsing your code and reprinting it with its own rules. It helps maintain code consistency across your project and team, eliminating debates about code style.

## Project Configuration

This project has been set up with Prettier with the following configuration (in `.prettierrc`):

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "endOfLine": "lf"
}
```

This configuration:

- Uses semicolons at the end of statements
- Uses single quotes for strings
- Uses 2 spaces for indentation
- Adds trailing commas in objects and arrays (ES5 compatible)
- Sets the maximum line length to 100 characters
- Adds spaces between brackets in object literals
- Avoids parentheses around a sole arrow function parameter
- Uses LF for line endings

## How to Use Prettier

### Running Prettier from the Command Line

Two npm scripts have been added to the project for using Prettier:

1. **Format all files**:

   ```bash
   npm run format
   ```

   This will format all supported files in the project according to the Prettier configuration.

2. **Check if files are formatted correctly**:
   ```bash
   npm run format:check
   ```
   This will check if all files are formatted correctly without making any changes. Useful for CI/CD pipelines.

### Integrating with Your Editor

For the best development experience, it's recommended to integrate Prettier with your code editor:

#### VS Code

1. Install the [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
2. Enable "Format on Save" in your settings:
   ```json
   "editor.formatOnSave": true,
   "editor.defaultFormatter": "esbenp.prettier-vscode"
   ```

#### WebStorm/IntelliJ IDEA

1. Go to Preferences → Languages & Frameworks → JavaScript → Prettier
2. Enable Prettier and point it to the node_modules/.bin/prettier

#### Other Editors

Refer to the [Prettier Editor Integration](https://prettier.io/docs/en/editors.html) documentation for other editors.

## Best Practices

1. **Always run Prettier before committing code**: This ensures all code in the repository follows the same style.

2. **Use Prettier with ESLint**: Prettier handles code formatting, while ESLint handles code quality. They work well together.

3. **Don't override Prettier rules in individual files**: This defeats the purpose of having a consistent style.

4. **Consider using a pre-commit hook**: Tools like Husky can be used to automatically run Prettier before each commit.

## Troubleshooting

If you encounter any issues with Prettier:

1. Make sure you have the latest version installed: `npm install --save-dev prettier@latest`
2. Check if there are any conflicting ESLint rules
3. Verify that your editor is configured correctly

## Additional Resources

- [Prettier Documentation](https://prettier.io/docs/en/index.html)
- [Prettier Options Reference](https://prettier.io/docs/en/options.html)
- [Prettier Playground](https://prettier.io/playground/) - Test different Prettier configurations

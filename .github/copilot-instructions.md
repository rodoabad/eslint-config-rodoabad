# GitHub Copilot Instructions

This repository contains ESLint configuration rules. When working with this codebase, please keep in mind:

## Code Style
- Follow semantic commit messages (e.g., `feat:`, `fix:`, `chore:`, etc.)
- Maintain consistent indentation (2 spaces)
- Follow existing code patterns in ESLint rule definitions
- Keep rule configurations alphabetically sorted within their categories

## Rule Organization
- Each rule category has its own file in the `lib/` directory
- New rules should be added to the appropriate category file
- Rule configurations should include clear reasoning in comments when needed

## Testing
- Ensure all rule changes are tested against sample code
- Verify rule configurations don't conflict with each other
- Test rules against both JavaScript and React components when applicable

## Documentation
- Document any non-obvious rule configurations
- Keep the README up to date with any major changes
- Include reasoning for strict or unusual rule settings
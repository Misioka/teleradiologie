import next from 'eslint-config-next'
import nextTypescript from 'eslint-config-next/typescript'
import prettier from 'eslint-plugin-prettier/recommended'

const config = [
  ...next,
  ...nextTypescript,
  prettier,
  {
    rules: {
      'object-shorthand': ['error', 'always'],
      'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
      'no-restricted-syntax': [
        'error',
        {
          selector: 'ForStatement, ForInStatement, ForOfStatement, WhileStatement, DoWhileStatement',
          message: 'Loops are not allowed.',
        },
      ],
      'jsx-quotes': ['error', 'prefer-double'],
      'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
      'react/jsx-sort-props': 'error',
      'react/no-children-prop': 'off',
      'react/react-in-jsx-scope': 'off',
      'import/order': [
        'error',
        {
          alphabetize: { order: 'asc', caseInsensitive: true },
          'newlines-between': 'always',
          pathGroups: [{ pattern: '@/**', group: 'external', position: 'after' }],
          groups: ['external', 'index', 'sibling', 'parent', 'internal', 'builtin', 'object', 'type'],
        },
      ],
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^_.+', argsIgnorePattern: '^_.+' }],
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },
]

export default config

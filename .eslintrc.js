module.exports = {
  rules: {
    // Disable max-len rule to avoid line length restrictions
    'max-len': 'off',

    // Disable specific JSX rule if it's causing issues with multi-line tags
    'react/jsx-first-prop-new-line': 'off', // Or adjust this if it's related

    // Disable other rules if necessary
    'react/jsx-max-props-per-line': 'off',
  },
}

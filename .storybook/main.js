module.exports = {
  stories: ['../src/design-system/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
  ],
  presets: ['@storybook/addon-docs/preset'],
}
//es5 문법 사용 -> 설정만 함

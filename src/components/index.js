/* Warning import the hole package at one time begin */
const ENV = process.env.NODE_ENV
if (
  ENV !== 'production' &&
  ENV !== 'test' &&
  typeof console !== 'undefined' &&
  console.warn &&
  typeof window !== 'undefined'
) {
  console.warn(
    'You are using a whole package of antd, ' +
      'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.'
  )
}
/* Warning import the hole package at one time end */

export { default as NavList } from './NavList'

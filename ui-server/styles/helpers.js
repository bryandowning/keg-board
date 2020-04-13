export const baseFontSize = 16
export const baseViewportWidth = 1920

/**
 * Given a unitless number and an optional context, calculate a size in rem.
 *
 * @param   {number} size     A unitless number to convert to a size in rem
 * @param   {number} context  A unitless number that acts as the divisor
 * @returns {string}          The size in rem
 */
export function rem(size, context = baseFontSize) {
  return `${size / context}rem`
}

/**
 * Given a unitless number and an optional context, calculate a size in em.
 *
 * @param   {number} size     A unitless number to convert to a size in rem
 * @param   {number} context  A unitless number that acts as the divisor
 * @returns {string}          The size in em
 */
export function em(size, context = baseFontSize) {
  return `${size / context}em`
}

/**
 * Given a unitless number and an optional context, calculate a size in vw.
 *
 * @param   {number} size     A unitless number to convert to a size in vw
 * @param   {number} context  A unitless number that acts as the divisor
 * @returns {string}          The size in vw
 */
export function vw(size, context = baseViewportWidth) {
  return `${(size / context) * 100}vw`
}

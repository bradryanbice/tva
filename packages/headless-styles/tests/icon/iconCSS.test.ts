import { getIconProps } from '../../src'

describe('Icon CSS', () => {
  describe('getIconProps', () => {
    const baseClass = 'ps-icon'
    const result = {
      className: `${baseClass} mSize`,
      role: 'img',
      'aria-hidden': false,
    }

    test('should allow no props to be passed in', () => {
      expect(getIconProps()).toEqual(result)
    })

    test('should accept a size type', () => {
      expect(getIconProps({ size: 's' })).toEqual({
        ...result,
        className: `${baseClass} sSize`,
      })
      expect(getIconProps({ size: 'xs' })).toEqual({
        ...result,
        className: `${baseClass} xsSize`,
      })
      expect(getIconProps({ size: 'm' })).toEqual(result)
      expect(getIconProps({ size: 'l' })).toEqual({
        ...result,
        className: `${baseClass} lSize`,
      })
    })

    test('should accept a tech type', () => {
      const { className, ...svelteResult } = result

      expect(getIconProps({ tech: 'svelte' })).toEqual({
        ...svelteResult,
        class: `ps-icon psIcon mSize`,
      })
    })

    test('should accept a label', () => {
      expect(getIconProps({ label: 'my label' })).toEqual({
        ...result,
        'aria-label': 'my label',
      })
    })

    test('should accept an ariaHidden flag', () => {
      expect(getIconProps({ ariaHidden: true })).toEqual({
        ...result,
        'aria-hidden': true,
      })
      expect(getIconProps({ ariaHidden: false })).toEqual({
        ...result,
        'aria-hidden': false,
      })
    })
  })
})

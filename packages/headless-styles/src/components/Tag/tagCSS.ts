import { createClassProp } from '../../utils/helpers'
import { createTagSelectorClasses, getDefaultTagOptions } from './shared'
import type { TagOptions } from './types'
import styles from './tagCSS.module.css'

export function getTagProps(options?: TagOptions) {
  const defaultOptions = getDefaultTagOptions(options)
  const { kindClass, sizeClass } = createTagSelectorClasses(
    defaultOptions.kind,
    defaultOptions.size
  )

  return {
    ...createClassProp(defaultOptions.tech, {
      defaultClass: `ps-tag ${styles[kindClass]} ${styles[sizeClass]}`,
      svelteClass: `baseTag ${kindClass} ${sizeClass}`,
    }),
  }
}

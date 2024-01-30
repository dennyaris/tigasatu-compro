import type { ValidationError } from '~/types/error'

/**
 * Composable for handling laravel validation errors
 */
export function useValidationError (errors: Ref<ValidationError>) {
  /**
     * Determining if there is an error for a field
     */
  const hasError = (fieldName: string) => {
    return errors.value[fieldName] && errors.value[fieldName].length > 0
  }

  /**
     * Retrieving all error messages for a field
     */
  const getError = (fieldName: string) => {
    return errors.value[fieldName] && errors.value[fieldName]
  }

  /**
     * Retrieving first error message for a field
     */
  const firstError = (fieldName: string) => {
    return errors.value[fieldName] && errors.value[fieldName][0]
  }

  /**
     * Retrieving last error message for a field
     */
  const lastError = (fieldName: string) => {
    return errors.value[fieldName] && errors.value[fieldName][errors.value[fieldName].length - 1]
  }

  /**
     * Retrieving all error messages for all fields
     */
  const allErrors = computed(() => {
    return Object.values(errors.value).flat()
  })

  /**
     * Determining if there is any error for all fields
     */
  const anyError = computed(() => {
    return Object.keys(errors.value).length > 0
  })

  return { hasError, getError, firstError, lastError, allErrors, anyError }
}

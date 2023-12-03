import { breakpointsTailwind } from '@vueuse/core'

export const useMyBreakpoint = () => {
  return useBreakpoints(breakpointsTailwind)
}

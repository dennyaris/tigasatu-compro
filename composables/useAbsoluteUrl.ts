export function useAbsoluteUrl (relativePath: MaybeRef<string> | ComputedRef<string>) {
  const router = useRouter()
  const config = useRuntimeConfig()
  const reactivePath = ref(relativePath)
  return computed(() => {
    const resolvedPath = unref(reactivePath)
    if (process.server) {
      return config.public.baseURL + resolvedPath
    }
    const route = router.resolve({ path: resolvedPath })
    return new URL(route.href, window.location.origin).href
  })
}

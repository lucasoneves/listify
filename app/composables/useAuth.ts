export function useAuth() {
  const auth = useState<{ isLoggedIn: boolean }>("auth", () => ({ isLoggedIn: true }))
  const isLoggedIn = computed<boolean>({
    get: () => auth.value.isLoggedIn,
    set: (value) => {
      auth.value = { ...auth.value, isLoggedIn: value }
    },
  })
  return { isLoggedIn }
}
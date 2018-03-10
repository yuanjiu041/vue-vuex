export function formatApi (api) {
  return typeof window !== 'undefined' ? api : `http://localhost:3000${api}`
}
//패치 담당
export async function fetchPokemons() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/')

  if (!response.ok) {
    return []
  }

  const { results } = await response.json()
  return results
}
export async function fetchPokemon(url) {
  const response = await fetch(url)

  if (!response.ok) {
    return []
  }

  const data = await response.json()
  console.log('data', data)
  return data
}

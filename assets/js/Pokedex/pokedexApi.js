const pokedexApi = {};

pokedexApi.getPokemonDetails = (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  return fetch(url)
    .then((response) => response.json())
    .then((details) => {
      return {
        id: details.id,
        name: details.name,
        type: details.types[0].type.name,
        types: details.types.map(typeSlot => typeSlot.type.name),
        photo: details.sprites.other['dream_world'].front_default,

        experience: details.base_experience,
        height: details.height,
        weight: details.weight,
        
        stats: details.stats.map(stat => ({
          name: stat.stat.name,
          value: stat.base_stat
        }))
      };
    });
};

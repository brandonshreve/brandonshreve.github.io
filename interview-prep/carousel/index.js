class PokemonApi {
    PokemonApi() {
        this.name = "na"
        this.imageSrc = "";
    }
};

back = () => {
    console.log('Previous image')
}

next = () => {
    console.log()
}

loadPokemon = () => {
    let pokemonApi = new PokemonApi();
    console.log(pokemonApi)
}

loadPokemon();
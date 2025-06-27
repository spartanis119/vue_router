import axios from "axios";
import { ref } from "vue";

export const useGetPokemons = () => {
    const pokemons = ref(null);
    const getPokemons = async (url) => {
        try {
            const { data } = await axios.get(url);
            pokemons.value = data;
        } catch (error) {
            console.log(error);
        }
    };
    return {
        getPokemons,
        pokemons,
    }

}
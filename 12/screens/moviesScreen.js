import { FlatList, ActivityIndicator } from "react-native"
import RenderMovieItem from "../components/renderMovieItem"
import { useEffect} from "react"
import {useQuery} from '@tanstack/react-query'
import { getMovies } from "../services/movie"

const MoviesScreen = ({route, navigation}) => {
    const {data: category, isLoading} = useQuery({
        queryKey: ['movies', route.params.categoryId], 
        queryFn: () => getMovies(route.params.categoryId),
        initialData: {}
    })

    useEffect(() => {
        navigation.setOptions({
            title: category.name
        })
    }, [navigation, category.name])

    if(isLoading) {
        return <ActivityIndicator />
    }

    return <FlatList 
            data={category.movies} 
            renderItem={({item}) => 
                <RenderMovieItem
                    movie={item} 
                    categoryId={category.id} 
                    key={item.id} />
            }
        />
}

export default MoviesScreen
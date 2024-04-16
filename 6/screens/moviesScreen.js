import { FlatList } from "react-native"
import { DATA } from "../data"
import RenderMovieItem from "../components/renderMovieItem"
import { useEffect } from "react"

const MoviesScreen = ({route, navigation}) => {
    
    const category = DATA.find((category) => category.id === route.params.categoryId)

    useEffect(() => {
        navigation.setOptions({
            title: category.name
        })
    }, [navigation, category.name])

    return <FlatList 
            data={category.movies} 
            renderItem={({item}) => <RenderMovieItem
                                        movie={item} 
                                        categoryId={category.id} 
                                        key={item.id} />} 
        />
}

export default MoviesScreen
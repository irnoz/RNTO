import { FlatList, View, ActivityIndicator } from "react-native"
import RenderCategoryItem from "../components/renderCategoryItem";
import { useEffect, useState } from "react";

const CategoryScreen = ({navigation}) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            fetch('http://localhost:8080/categories.json?v=1')
                .then((res) => res.json())
                .then((res) => setData(res))
                .finally(() => setIsLoading(false))
        }, 2000)
    }, [])
    if(isLoading) {
        return <ActivityIndicator />
    }

    return (
        <View>
            <FlatList 
                data={data} 
                renderItem={({item}) => <RenderCategoryItem category={item} key={item} />} 
            />
        </View>
    )
}

export default CategoryScreen;
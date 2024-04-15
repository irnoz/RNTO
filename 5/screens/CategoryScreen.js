import { FlatList, View } from "react-native"
import RenderCategoryItem from '../components/RenderCategoryItem'
import {Data} from '../data.js'

const CategoryScreen = () => {
    // const renderItem = 
    return (
        <View>
            <FlatList 
                data={Data} 
                renderItem={({item}) => <RenderCategoryItem category={item} key={item.id} />}
            />
        </View>
    )
}

export default CategoryScreen
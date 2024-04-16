import { FlatList, View } from "react-native"
import { DATA } from "../data";
import RenderCategoryItem from "../components/RenderCategoryItem";

const CategoryScreen = ({navigation}) => {

    return (
        <View>
            <FlatList 
                data={DATA} 
                renderItem={({item}) => <RenderCategoryItem category={item} key={item} />} 
            />
        </View>
    )
}

export default CategoryScreen;
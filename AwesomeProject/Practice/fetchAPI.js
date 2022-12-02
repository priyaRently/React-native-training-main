
const FetchApi = () => {
    const getUserData = async () => {
        try {
            const response = await fetch(
                'https://thapatechnical.github.io/userapi/users.json'
             );
            const myData = await response.json();
            console.log(myData);
        } catch(error){
            console.log(error);
        }
    };

    useEffect(() => {
        getUserData();
    },[]);

    return(
        <View>
            <Text>Hii</Text>
        </View>
    );    

};

const styles = StyleSheet.create({});

export default FetchApi;
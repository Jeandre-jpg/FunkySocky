import * as Font from "expo-font";

export default useFonts = async () => {
   await Font.loadAsync({
      "Poppins-ExtraBold": require("../fonts/Poppins-ExtraBold.ttf"),
    });

    await Font.loadAsync({
        "OleoScript-Regular": require("../fonts/OleoScript-Regular.ttf"),
      });

      await Font.loadAsync({
        "Montserrat-Regular": require("../fonts/Montserrat-Regular.ttf"),
      });
};
import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  logoBox: {
    width: 350,
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#AAAAAA",
    shadowOpacity: 5,
    shadowRadius: 5,
    //backgroundColor: "#FFF",
    //borderRadius: SIZES.large,
  },
  logoImage: {
    width: "100%",
    height: "100%",
  },
  countryTitleBox: {
    marginTop: SIZES.small,
  },
  countryTitle: {
    fontSize: SIZES.xxLarge,
    color: COLORS.primary,
    fontFamily: FONT.bold,
    fontWeight: "500",
    textAlign: "center",
  },
  countryInfoBox: {
    marginTop: SIZES.small / 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  countryName: {
    fontSize: SIZES.large,
    color: COLORS.primary,
    fontFamily: FONT.medium,
  },
  locationBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  locationImage: {
    width: 14,
    height: 14,
    tintColor: COLORS.gray,
  },
  locationName: {
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    fontFamily: FONT.regular,
    marginLeft: 2,
  },
});

export default styles;

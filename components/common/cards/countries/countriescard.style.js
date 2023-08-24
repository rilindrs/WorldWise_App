import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "33.33%",
    padding: SIZES.xSmall - 3,
    backgroundColor: "#ECECEC",
    //backgroundColor: "#C9DFEC",
    justifyContent: "space-between",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
    alignItems: "center",
    flexDirection: "row",
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    borderRadius: SIZES.xLarge,
    shadowColor: "#AAAAAA",
    shadowOpacity: 5,
    shadowRadius: 5,
  },
  logoContainer: {
    width: "100%",
    // width: 90,
    // height: 90,
    justifyContent: "space-between",
    backgroundColor: "#F3F4F8",
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  logoImage: {
    // width: "70%",
    // height: "70%",
    width: "100%",
    aspectRatio: 1.1,
    justifyContent: "space-between",
    backgroundColor: "#F3F4F8",
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    //opacity: 0.7,
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  countryName:{
    textAlign: "center",
    position: 'absolute', 
    top: 10, 
    left: 0, 
    right: 0, 
    bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center',
    fontSize: SIZES.medium,
    // color: "#D3D3D3",
    color: "#000000",
    fontWeight: "bold",
    textShadowColor: "#FFFFFF",
    textShadowRadius: 5,
  },
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  publisher:{
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.bold,
  },
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  },
});

export default styles;

import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
    padding: SIZES.xSmall - 10,
    borderRadius: SIZES.medium,
    flexDirection: "column",
    backgroundColor: COLORS.lightWhite
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    paddingLeft: 10,
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
    flexDirection: "row",
    flexWrap: 'wrap',
  },
  countryContainer:{
    marginTop: SIZES.large,
  }
});

export default styles;

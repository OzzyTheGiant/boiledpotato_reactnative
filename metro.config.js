/** This custom config file will help convert svg files into React components */
const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
	const {
		resolver: { sourceExts, assetExts }
	} = await getDefaultConfig();

	return {
		transformer: {
			babelTransformerPath: require.resolve("react-native-svg-transformer")
		},
		resolver: {
			assetExts: assetExts.filter(ext => ext !== "svg"),
			sourceExts: [...sourceExts, "svg"]
		}
	};
})();
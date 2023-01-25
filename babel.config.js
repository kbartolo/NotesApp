module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["nativewind/babel"],
    [
      "module-resolver",
      {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".android.js", ".android.tsx", ".ios.js", ".ios.tsx"],
        root: ["./src"],
        alias: {
          "@components": "./src/components/index.ts",
          "@screens": "./src/screens/index.ts",
          "@hooks": "./src/hooks/index.ts",
          "@context": "./src/context/index.ts",
          "@helpers": "./src/helpers",
        },
      },
    ],
    [
      "module:react-native-dotenv",
      {
        moduleName: "@env",
        path: ".env",
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
  ],
};

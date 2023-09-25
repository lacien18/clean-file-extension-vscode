 const  buildFlavor = `
enum BuildFlavor {
    dev,
    product,
  }
  
  extension BuildFlavorExtensions on BuildFlavor {
    String get value {
      switch (this) {
        case BuildFlavor.dev:
          return 'dev';
        case BuildFlavor.product:
          return 'prod';
        default:
          throw Exception("Invalid BuildFlavor: $this");
      }
    }
  }
`;

export default buildFlavor;
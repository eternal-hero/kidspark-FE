export const imageMixin = {
  methods: {
    getImage(image_path, defaultImg = '') {
      if (!image_path || image_path.trim() === "") {
        return defaultImg;
      }
      if (image_path?.startsWith('blob:http')) {
        return image_path;
      }
      return `${process.env.BROWSER_API_URL}/storage/${image_path}`
    },
    isBlob(imageUrl) {
      if (imageUrl){
        return imageUrl.includes('blob:http');
      }
      return false;
    }
  }
};

# サービスの使い方

## サービスを作る
`SupporterProfileService.js`を参考してもらう。
## サービスを使う
`pages`フォルダーの.vueファイルに
```js
export default {
  data() {
    return {}
  },
  async asyncData({error, params}) {
    try {
      const data = await AnyService.getData(params.id);
      return {
        someField: data
      }
    } catch (e) {
      error(e.response.data.status);
    }
  },
}
```

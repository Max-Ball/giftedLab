import { ProxyState } from "../AppState.js"
import { Giffy } from "../Models/Giffy.js"
import { giffyApi } from "./AxiosService.js"

class GiffysService{

  async getGiffys(query){
    let params = {
      api_key: 'R9FKRoNh62zVAUc2aDPeRDLOUlS3c1Y4',
      rating: 'pg',
      limit: 10,
      q: query
    }
  let res = await giffyApi.get('/search', {params})
  ProxyState.giffys = res.data.data.map(g => new Giffy(g))
    console.log(res.data.data);
    console.log(ProxyState.giffys);
  }

  submitGif(id){
    let gif = ProxyState.giffys.find(g => g.id == id)
    if(!gif){
      return
    }
    ProxyState.gif = gif
    console.log(ProxyState.gif.title);
  }

}

export const giffysService = new GiffysService()
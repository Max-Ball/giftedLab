import { ProxyState } from "../AppState.js"
import { Gift } from "../Models/Gift.js";
import { sandboxApi } from "./AxiosService.js"


class GiftsService{

  async getGifs(){
    let res = await sandboxApi.get('/gifts')
    ProxyState.gifts = res.data.map(g => new Gift(g))
  }

}

export const giftsService = new GiftsService()
import { ProxyState } from "../AppState.js";
import { giftsService } from "../Services/GiftsService.js";
import { Pop } from "../Utils/Pop.js";


function _draw(){
  let template = ''
  ProxyState.gifts.forEach(g => template += g.cardTemplate)
  document.getElementById('gifs-card').innerHTML = template
}

export class GiftsController{
  constructor(){
    ProxyState.on('gifts', _draw)
    this.getGifs()
  }


  async getGifs(){
    try {
      await giftsService.getGifs()
    } catch (error) {
      console.error('[getting gif]', error);
      Pop.error(error)
    }
  }
}
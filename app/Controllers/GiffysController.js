import { ProxyState } from "../AppState.js";
import { giffysService } from "../Services/GiffysService.js";
import { Pop } from "../Utils/Pop.js";

function _draw(){
  let template = ''
  ProxyState.giffys.forEach(g => template += g.searchedGifTemplate)
  document.getElementById('searched-gifs').innerHTML = template
}

// WE DON"T NEED THIS FUNCTION ANYMORE 
function _drawGif(){
  console.log('working?');
  if(!ProxyState.gif){
    return
  }

  document.getElementById('gif-title').innerHTML = ProxyState.gif.title
  document.getElementById('gif-url').innerText = ProxyState.gif.url
}

export class GiffysController{
  constructor(){
    ProxyState.on('giffys', _draw)
    ProxyState.on('gif', _drawGif)}
  
  
  async getGiffys(){
    try {
      window.event.preventDefault()
      let query = event.target.query.value
      
      await giffysService.getGiffys(query)
    } catch (error) {
      console.error('[get giffy]', error);
      Pop.error(error)
    }
  }

  // WE DON"T NEED THE SERVICE FUNCTION OF THIS ANYMORE
  submitGif(url){
    document.getElementById('gif-url').value = url
  }

}

export class Giffy{
  constructor(data){
    this.id = data.id
    this.url = data.images.downsized.url
    this.title = data.title
  }

  get searchedGifTemplate(){
    return `
    <div class="card elevation-3 my-2 text-dark selectable no-select" onclick="app.giffysController.submitGif('${this.url}')">
      <h5>
        ${this.title}
      </h5>
      <img src="${this.url}" alt="" srcset="">
    </div>
    `
  }

}
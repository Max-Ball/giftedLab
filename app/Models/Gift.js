

export class Gift{
  constructor(data){
    this.tag = data.tag
    this.url = data.url
  }


  get cardTemplate(){
    return `
    <div class="col-md-3">
      <div class="card my-4 text-center elevation-3">
        <h4>${this.tag}</h4>
        <img src="${this.url}" alt="">
      </div>
    </div>
    `
  }
}
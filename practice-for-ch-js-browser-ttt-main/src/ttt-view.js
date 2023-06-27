class View {
  constructor(game, el) {
    this.game = game
    this.el = el
    this.setupBoard(el);
    // el.appendChild(ul)
    

  }
  
  setupBoard() {
    let ul = document.createElement('ul')
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let li = document.createElement('li')
        li.setAttribute("data-pos", [i,j])
      
        ul.appendChild(li)

      }
    }

    document.querySelector(".ttt").appendChild(ul)
    this.handleClick(el);
  }
  
  handleClick(e) {
    let pos = e.target.getAttribute('data-pos');
    let [row,col] = pos.split(',');
    let click_pos = el.addEventListener("click", this.game.playMove(pos))

    
  }

  makeMove(square) {
    

  }

  
  handleGameOver() {
  }
}

export default View;
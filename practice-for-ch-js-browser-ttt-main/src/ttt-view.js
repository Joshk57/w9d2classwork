class View {
  constructor(game, el) {
    this.game = game
    this.el = el
    this.setupBoard(el);
    // el.appendChild(ul)
    this.handleClick(el)

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
    const el = e.target;
    console.log(el)
    if (el.nodeName === "li") {
      this.makeMove(el)
    }
    
  }

  makeMove(square) {
      const pos = JSON.parse(square.dataset.pos);
      const currentPlayer = this.game.currentPlayer;
  
      if ("person clicks") {
        "we get the pos"
        this.game.playMove(pos)
      } else {
        alert("This " + e.msg.toLowerCase());
      }
  
      square.classList.add(currentPlayer);
  
      if (this.game.isOver()) this.handleGameOver();

  }

  
  handleGameOver() {
    
  }
}

export default View;
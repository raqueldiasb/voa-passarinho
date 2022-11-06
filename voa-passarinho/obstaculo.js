function Obstaculo() {
    this.spacing = 120;
    this.top = random(height / 6, 3 / 4 * height);
    this.bottom = height - (this.top + this.spacing);
    this.x = width;
    this.w = 80;
    this.speed = 6;
  
    //this.highlight = false;
  
    this.hits = function(passarinho) {
      if (passarinho.y < this.top || passarinho.y > height - this.bottom) {
        if (passarinho.x > this.x && passarinho.x < this.x + this.w) {
            gameState === END
          this.highlight = true;
          return true;
        }
      }
      this.highlight = false;
      return false;
    }
  
    this.show = function() {
      fill(255);
      if (this.highlight) {
        fill(255, 0, 0);
      }
      rect(this.x, 0, this.w, this.top);
      rect(this.x, height - this.bottom, this.w, this.bottom);
    }
  
    this.update = function() {
      this.x -= this.speed;
    }
  
    this.offscreen = function() {
      if (this.x < -this.w) {
        return true;
      } else {
        return false;
      }
    }
  
  
  }
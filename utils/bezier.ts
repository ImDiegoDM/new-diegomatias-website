export class Vector2 {
  x:number
  y:number

  constructor(x:number,y:number){
    this.x = x
    this.y = y
  }
}

export class Bezier {
  private p1: Vector2
  private p2: Vector2
  private p3: Vector2
  private p4: Vector2

  constructor(p1: Vector2, p2: Vector2, p3: Vector2, p4: Vector2) {
    this.p1 = p1
    this.p2 = p2
    this.p3 = p3
    this.p4 = p4
  }

  public getPoint(t:number):Vector2{
    const x = (Math.pow((1-t),3)*this.p1.x) + (3*Math.pow(1-t,2)*t*this.p2.x) + (3*Math.pow(1-t,2)*t*this.p3.x) + (Math.pow(t,3)*this.p4.x)
    const y = (Math.pow((1-t),3)*this.p1.y) + (3*Math.pow(1-t,2)*t*this.p2.y) + (3*Math.pow(1-t,2)*t*this.p3.y) + (Math.pow(t,3)*this.p4.y)

    return new Vector2(x,y)
  }
}
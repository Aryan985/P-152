AFRAME.registerComponent("car-model", {
    schema: {
      modelRef: { type: "string", default: "./car.glb" },
      count:{type:"number",default:0}
    },
    init: function() {
      
      this.el.setAttribute("gltf-model", this.data.modelRef);
      const position = { x:-20, y: 1, z: 80 };
      const rotation = { x: 0, y: -100, z: 0 };
      this.el.setAttribute("position", position);
      this.el.setAttribute("rotation", rotation);
    },
update:function(){
  window.addEventListener("click",e=>{
    this.data.count+=1
    var rot=this.el.getAttribute("rotation")
    this.el.setAttribute("rotation",{x:rot.x,y:rot.y+100,z:rot.z})
  })
}
  });
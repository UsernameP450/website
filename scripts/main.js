function rotateCube(side) {
  const cube = document.getElementById("cube");
  let rotation = "";

  switch (side) {
    case "front":
      rotation = "rotateY(0deg)";
      break;
    case "back":
      rotation = "rotateY(180deg)";
      break;
    case "left":
      rotation = "rotateY(-90deg)";
      break;
    case "right":
      rotation = "rotateY(90deg)";
      break;
    case "top":
      rotation = "rotateX(-90deg)";
      break;
    case "bottom":
      rotation = "rotateX(90deg)";
      break;
  }

  cube.style.transform = rotation;
}

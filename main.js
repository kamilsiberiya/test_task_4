///реализовать возвращение цветов к своим предыдущим значениям
  var Moves=[];
  var InitialCell=[];
  var CollorOldCell;
  var CollorOldCells;
function HorseMoves(a,b) {
  //очищаем прошлые изменения
  //console.log(Moves[0]);
  if (Moves[0]!= undefined) {
      console.log(InitialCell[0]);
    var Cells = document.querySelectorAll('.Cells');
    PaintingCell(8*(InitialCell[0]-1)+(InitialCell[1]-1),CollorOldCell);
    //красим остальные клетки
    for (var i = 0; i < Moves.length; i++) {
      PaintingCell(8*(Moves[i][0]-1)+(Moves[i][1]-1),"red")
    }
  }
  var Letter = a;
  var Numberal = b;
  InitialCell=[Letter,Numberal];

  ///проверка правильного ввода чисел
//-----------------------------------------------------------------------
//получаем в массив все возможные клетки на которые может походить
//конь без учета края доски
  //вверхвниз вправовлево на 2
  for (var j = 0; j < 2; j++) {
  //вправовлево вверхвниз на 1
    for (var k = 0; k < 2; k++) {
  //по горизонтали или вертикали
      Moves[j*2 +k ] = [InitialCell[0] + 2- 4* j ,InitialCell[1] +1 - 2*k];
      Moves[4 +j*2 +k ] = [InitialCell[0]+1 - 2*k ,InitialCell[1]+ 2- 4* j];
    }
  }
console.log(InitialCell);
  ///  console.log("---------");
//  console.log(Moves);
//  console.log("---------");

//-----------------------------------------------------------------------
  ///удаляем значения не прошедшие проверку
  for (var i = 0; i < 8; i++) {
    if (((Moves[i][0]>8)||(Moves[i][1] > 8))||((Moves[i][0]< 1)||(Moves[i][1] < 1))) {
      delete Moves[i];
    }
  }
//-----------------------------------------------------------------------
      ///удалеям пустые
    Moves = Moves.filter(function(x) {
        return x !== undefined});
  //выводим ходы
  //    console.log(Cells);
  //    console.log(Moves);

  //сохраняем преведущий цвет клеток
  CollorOldCell
  var  style = window.getComputedStyle(Cells[8*(InitialCell[0]-1)+(InitialCell[1]-1)]),
    CollorOldCell = style.getPropertyValue('background-color');
alert(CollorOldCell);

  //красим выделенную клетку
  PaintingCell(8*(InitialCell[0]-1)+(InitialCell[1]-1),"#A6F16C");
  //красим остальные клетки
  for (var i = 0; i < Moves.length; i++) {
    PaintingCell(8*(Moves[i][0]-1)+(Moves[i][1]-1),"#7573D9")
  }

}
//функция для закрашивания клеток
function PaintingCell(Namber,Coll) {
  var Cells = document.querySelectorAll('.Cells');
  Cells[Namber].style.backgroundColor = Coll;
}

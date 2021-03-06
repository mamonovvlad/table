let rowsId = [];

export function instruments(params, gridOptions, res) {
  let buttons = document.createElement('span')
  buttons.classList.add('buttons__icons')
  buttons.innerHTML = `
    <a href="/course-city/view?id=${params.data.id}" target="_blank" title="Просмотр" class="fa-solid fa-eye"></a>
    <a href="/course-city/update?id=${params.data.id}" target="_blank" title="Редактировать" class="fa-solid fa-pen-to-square"></a>
    <a href="/course-city/delete?id=${params.data.id}"  target="_blank" title="Удалить" data-method="POST" class="fa-solid fa-trash-can"></a>
    <button class="btn btn__delete" style="display: none"  data-row-idx="${params.data.id}">Удалить</button>
  `
    let btnDelete = buttons.querySelector('.btn__delete');
    btnDelete.style.display = 'block';


  btnDelete.addEventListener('click', function () {
    hideRow(btnDelete, res);
  })

  return buttons;
}


function hideRow(btn, res) {
  res.forEach((item) => {
    if (item.id === Number(btn.getAttribute('data-row-idx'))) {
      btn.style.backgroundColor = 'red';
      rowsId.push(item.id)
    }
  })
  rowsId = rowsId.filter(function(item, pos) {
    return rowsId.indexOf(item) === pos;
  })
  localStorage.setItem('remove_rows', JSON.stringify(rowsId));
  rowsId = JSON.parse(localStorage.getItem('remove_rows'));
}


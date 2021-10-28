// 配列を定義
const blocks = ['color-1'];
let memo = '';
// ボタンのクリックでブロック生成
$('#btn').on('click', function () {
  const block = $('#input').val();
  const blockTag = [];
  blocks.push(block);

  // ブロックタグの生成
  // const blockTag = [];
  blockTag.push(`<div class="drag-and-drop" id="${blocks.slice(-1)[0]}"></div>`);
  $('#block').html(blockTag);
});

$(document).on('mousedown', '#color-1', function (event) {
  memo = document.getElementById('color-1');
  let shiftX = event.clientX - memo.getBoundingClientRect().left;
  let shiftY = event.clientY - memo.getBoundingClientRect().top;

  memo.style.position = 'absolute';
  memo.style.zIndex = 1000;
  document.body.append(memo);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    memo.style.left = pageX - shiftX + 'px';
    memo.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener('mousemove', onMouseMove);

  $(document).on('mouseup', '#color-1', function() {
    document.removeEventListener('mousemove', onMouseMove);
    memo.onmouseup = null;
  });

});

memo.ondragstart = function() {
  return false;
};

  $(document).on('mousedown', '#color-2', function (event) {
    memo = document.getElementById('color-2');
    let shiftX = event.clientX - memo.getBoundingClientRect().left;
    let shiftY = event.clientY - memo.getBoundingClientRect().top;

    memo.style.position = 'absolute';
    memo.style.zIndex = 1000;
    document.body.append(memo);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      memo.style.left = pageX - shiftX + 'px';
      memo.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    $(document).on('mouseup', '#color-2', function() {
      document.removeEventListener('mousemove', onMouseMove);
      memo.onmouseup = null;
    });

  });

  memo.ondragstart = function() {
    return false;
  };

  $(document).on('mousedown', '#color-3', function (event) {
    memo = document.getElementById('color-3');
    let shiftX = event.clientX - memo.getBoundingClientRect().left;
    let shiftY = event.clientY - memo.getBoundingClientRect().top;

    memo.style.position = 'absolute';
    memo.style.zIndex = 1000;
    document.body.append(memo);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      memo.style.left = pageX - shiftX + 'px';
      memo.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    $(document).on('mouseup', '#color-3', function() {
      document.removeEventListener('mousemove', onMouseMove);
      memo.onmouseup = null;
    });

  });

  memo.ondragstart = function() {
    return false;
  };

  $(document).on('mousedown', '#color-4', function (event) {
    memo = document.getElementById('color-4');
    let shiftX = event.clientX - memo.getBoundingClientRect().left;
    let shiftY = event.clientY - memo.getBoundingClientRect().top;

    memo.style.position = 'absolute';
    memo.style.zIndex = 1000;
    document.body.append(memo);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      memo.style.left = pageX - shiftX + 'px';
      memo.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    $(document).on('mouseup', '#color-4', function() {
      document.removeEventListener('mousemove', onMouseMove);
      memo.onmouseup = null;
    });

  });

  memo.ondragstart = function() {
    return false;
  };

  $(document).on('mousedown', '#color-5', function (event) {
    memo = document.getElementById('color-5');
    let shiftX = event.clientX - memo.getBoundingClientRect().left;
    let shiftY = event.clientY - memo.getBoundingClientRect().top;

    memo.style.position = 'absolute';
    memo.style.zIndex = 1000;
    document.body.append(memo);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      memo.style.left = pageX - shiftX + 'px';
      memo.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    $(document).on('mouseup', '#color-5', function() {
      document.removeEventListener('mousemove', onMouseMove);
      memo.onmouseup = null;
    });

  });

  memo.ondragstart = function() {
    return false;
  };

  $(document).on('mousedown', '#color-6', function (event) {
    memo = document.getElementById('color-6');
    let shiftX = event.clientX - memo.getBoundingClientRect().left;
    let shiftY = event.clientY - memo.getBoundingClientRect().top;

    memo.style.position = 'absolute';
    memo.style.zIndex = 1000;
    document.body.append(memo);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      memo.style.left = pageX - shiftX + 'px';
      memo.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    $(document).on('mouseup', '#color-6', function() {
      document.removeEventListener('mousemove', onMouseMove);
      memo.onmouseup = null;
    });

  });

  memo.ondragstart = function() {
    return false;
  };

  $(document).on('mousedown', '#color-7', function (event) {
    memo = document.getElementById('color-7');
    let shiftX = event.clientX - memo.getBoundingClientRect().left;
    let shiftY = event.clientY - memo.getBoundingClientRect().top;

    memo.style.position = 'absolute';
    memo.style.zIndex = 1000;
    document.body.append(memo);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      memo.style.left = pageX - shiftX + 'px';
      memo.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    $(document).on('mouseup', '#color-7', function() {
      document.removeEventListener('mousemove', onMouseMove);
      memo.onmouseup = null;
    });

  });

  memo.ondragstart = function() {
    return false;
  };

  $(document).on('mousedown', '#color-8', function (event) {
    memo = document.getElementById('color-8');
    let shiftX = event.clientX - memo.getBoundingClientRect().left;
    let shiftY = event.clientY - memo.getBoundingClientRect().top;

    memo.style.position = 'absolute';
    memo.style.zIndex = 1000;
    document.body.append(memo);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      memo.style.left = pageX - shiftX + 'px';
      memo.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    $(document).on('mouseup', '#color-8', function() {
      document.removeEventListener('mousemove', onMouseMove);
      memo.onmouseup = null;
    });

  });

  memo.ondragstart = function() {
    return false;
  };

  $(document).on('mousedown', '#color-9', function (event) {
    memo = document.getElementById('color-9');
    let shiftX = event.clientX - memo.getBoundingClientRect().left;
    let shiftY = event.clientY - memo.getBoundingClientRect().top;

    memo.style.position = 'absolute';
    memo.style.zIndex = 1000;
    document.body.append(memo);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      memo.style.left = pageX - shiftX + 'px';
      memo.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    $(document).on('mouseup', '#color-9', function() {
      document.removeEventListener('mousemove', onMouseMove);
      memo.onmouseup = null;
    });

  });

  memo.ondragstart = function() {
    return false;
  };

  $(document).on('mousedown', '#color-10', function (event) {
    memo = document.getElementById('color-10');
    let shiftX = event.clientX - memo.getBoundingClientRect().left;
    let shiftY = event.clientY - memo.getBoundingClientRect().top;

    memo.style.position = 'absolute';
    memo.style.zIndex = 1000;
    document.body.append(memo);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      memo.style.left = pageX - shiftX + 'px';
      memo.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    $(document).on('mouseup', '#color-10', function() {
      document.removeEventListener('mousemove', onMouseMove);
      memo.onmouseup = null;
    });

  });

  memo.ondragstart = function() {
    return false;
  };

  $(document).on('mousedown', '#color-11', function (event) {
    memo = document.getElementById('color-11');
    let shiftX = event.clientX - memo.getBoundingClientRect().left;
    let shiftY = event.clientY - memo.getBoundingClientRect().top;

    memo.style.position = 'absolute';
    memo.style.zIndex = 1000;
    document.body.append(memo);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      memo.style.left = pageX - shiftX + 'px';
      memo.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    $(document).on('mouseup', '#color-11', function() {
      document.removeEventListener('mousemove', onMouseMove);
      memo.onmouseup = null;
    });

  });

  memo.ondragstart = function() {
    return false;
  };

  $(document).on('mousedown', '#color-12', function (event) {
    memo = document.getElementById('color-12');
    let shiftX = event.clientX - memo.getBoundingClientRect().left;
    let shiftY = event.clientY - memo.getBoundingClientRect().top;

    memo.style.position = 'absolute';
    memo.style.zIndex = 1000;
    document.body.append(memo);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      memo.style.left = pageX - shiftX + 'px';
      memo.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    $(document).on('mouseup', '#color-12', function() {
      document.removeEventListener('mousemove', onMouseMove);
      memo.onmouseup = null;
    });

  });

  memo.ondragstart = function() {
    return false;
  };
